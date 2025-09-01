import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env from api/.env so GOOGLE_CLIENT_ID/SECRET are defined even if server hasn't loaded dotenv yet
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL || 'http://localhost:4000'}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        // Check if user exists with same email
        existingUser = await User.findOne({ email: profile.emails[0].value });

        if (existingUser) {
          // Link Google account to existing user
          existingUser.googleId = profile.id;
          existingUser.image = existingUser.image || profile.photos[0].value;

          // Normalize enums to prevent validation errors (legacy data may have capitalized values)
          const validGenders = ["male", "female", "other"];
          const validPrefs = ["male", "female", "both"];

          if (existingUser.gender) {
            const g = String(existingUser.gender).toLowerCase();
            existingUser.gender = validGenders.includes(g) ? g : "other";
          } else {
            existingUser.gender = "other";
          }

          if (existingUser.genderPreference) {
            const gp = String(existingUser.genderPreference).toLowerCase();
            existingUser.genderPreference = validPrefs.includes(gp) ? gp : "both";
          } else {
            existingUser.genderPreference = "both";
          }

          if (!existingUser.age || Number(existingUser.age) < 18) {
            existingUser.age = 18;
          }
          await existingUser.save();
          return done(null, existingUser);
        }

        // Create new user
        const newUser = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
          age: 18, // Default age, user can update later
          gender: 'other', // Default, user can update later
          genderPreference: 'both', // Default, user can update later
          isGoogleAuth: true,
        });

        done(null, newUser);
      } catch (error) {
        console.error('Error in Google OAuth strategy:', error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
