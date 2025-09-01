import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
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
          gender: 'Other', // Default, user can update later
          genderPreference: 'Both', // Default, user can update later
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
