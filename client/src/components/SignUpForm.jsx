// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import "./SignUpForm.css"; // ✅ Import styles


// const SignUpForm = () => {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [gender, setGender] = useState("");
// 	const [age, setAge] = useState("");
// 	const [genderPreference, setGenderPreference] = useState("");

// 	const { signup, loading } = useAuthStore();

// 	return (
// 		<form
// 			className="signup-form"
// 			onSubmit={(e) => {
// 				e.preventDefault();
// 				signup({ name, email, password, gender, age, genderPreference });
// 			}}
// 		>
// 			{/* NAME */}
// 			<div>
// 				<label htmlFor="name">Name</label>
// 				<input
// 					id="name"
// 					name="name"
// 					type="text"
// 					required
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 				/>
// 			</div>

// 			{/* EMAIL */}
// 			<div>
// 				<label htmlFor="email">Email address</label>
// 				<input
// 					id="email"
// 					name="email"
// 					type="email"
// 					autoComplete="email"
// 					required
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 				/>
// 			</div>

// 			{/* PASSWORD */}
// 			<div>
// 				<label htmlFor="password">Password</label>
// 				<input
// 					id="password"
// 					name="password"
// 					type="password"
// 					autoComplete="new-password"
// 					required
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 				/>
// 			</div>

// 			{/* AGE */}
// 			<div>
// 				<label htmlFor="age">Age</label>
// 				<input
// 					id="age"
// 					name="age"
// 					type="number"
// 					required
// 					value={age}
// 					onChange={(e) => setAge(e.target.value)}
// 					min="18"
// 					max="100"
// 				/>
// 			</div>

// 			{/* GENDER */}
// 			<div className="gender-options">
// 				<label>Your Gender:</label>
// 				<label>
// 					<input
// 						type="radio"
// 						name="gender"
// 						value="male"
// 						checked={gender === "male"}
// 						onChange={(e) => setGender(e.target.value)}/>
// 					Male
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						name="gender"
// 						value="female"
// 						checked={gender === "female"}
// 						onChange={(e) => setGender(e.target.value)}
// 					/>
// 					Female
// 				</label>
// 			</div>

// 			{/* GENDER PREFERENCE */}
// 			<div className="gender-preference">
// 				<label>Prefer Me:</label>
// 				<label>
// 					<input
// 						type="radio"
// 						name="gender-preference"
// 						value="male"
// 						checked={genderPreference === "male"}
// 						onChange={(e) => setGenderPreference(e.target.value)}
// 					/>
// 					Male
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						name="gender-preference"
// 						value="female"
// 						checked={genderPreference === "female"}
// 						onChange={(e) => setGenderPreference(e.target.value)}
// 					/>
// 					Female
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						name="gender-preference"
// 						value="both"
// 						checked={genderPreference === "both"}
// 						onChange={(e) => setGenderPreference(e.target.value)}
// 					/>
// 					Both
// 				</label>
// 			</div>

// 			{/* SUBMIT BUTTON */}
// 			<button type="submit" className="submit-btn" disabled={loading}>
// 				{loading ? "Signing up..." : "Sign up"}
// 			</button>
// 		</form>
// 	);
// };

// export default SignUpForm;



import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [genderPreference, setGenderPreference] = useState("");

  const { signup, loading } = useAuthStore();

  return (
    <div className="signup-container">
      
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          signup({ name, email, password, gender, age, genderPreference });
        }}
      >
        {/* NAME */}
        <div className="form-group">
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="name">Full Name</label>
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="email">Email Address</label>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>

        {/* AGE */}
        <div className="form-group">
          <input
            id="age"
            type="number"
            min="18"
            max="100"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="age">Age</label>
        </div>

        {/* GENDER */}
        <div className="option-group">
          <p className="option-title">Your Gender</p>
          <div className="chips">
            <label className={`chip ${gender === "male" ? "active" : ""}`}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className={`chip ${gender === "female" ? "active" : ""}`}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        {/* GENDER PREFERENCE */}
        <div className="option-group">
          <p className="option-title">Looking For</p>
          <div className="chips">
            <label
              className={`chip ${
                genderPreference === "male" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="gender-preference"
                value="male"
                checked={genderPreference === "male"}
                onChange={(e) => setGenderPreference(e.target.value)}
              />
              Male
            </label>
            <label
              className={`chip ${
                genderPreference === "female" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="gender-preference"
                value="female"
                checked={genderPreference === "female"}
                onChange={(e) => setGenderPreference(e.target.value)}
              />
              Female
            </label>
            <label
              className={`chip ${genderPreference === "both" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="gender-preference"
                value="both"
                checked={genderPreference === "both"}
                onChange={(e) => setGenderPreference(e.target.value)}
              />
              Both
            </label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
