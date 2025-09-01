// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";

// const LoginForm = () => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const { login, loading } = useAuthStore();

// 	return (
// 		<form
// 			className='space-y-6'
// 			onSubmit={(e) => {
// 				e.preventDefault();
// 				login({ email, password });
// 			}}
// 		>
// 			<div>
// 				<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
// 					Email Address
// 				</label>
// 				<div className='mt-1'>
// 					<input
// 						id='email'
// 						name='email'
// 						type='email'
// 						autoComplete='email'
// 						required
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
// 					/>
// 				</div>
// 			</div>

// 			<div>
// 				<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
// 					Password
// 				</label>
// 				<div className='mt-1'>
// 					<input
// 						id='password'
// 						name='password'
// 						type='password'
// 						autoComplete='current-password'
// 						required
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
// 					/>
// 				</div>
// 			</div>

// 			<button
// 				type='submit'
// 				className={`w-full flex justify-center py-2 px-4 border border-transparent 
// 					rounded-md shadow-sm text-sm font-medium text-white ${
// 						loading
// 							? "bg-pink-400 cursor-not-allowed"
// 							: "bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
// 					}`}
// 				disabled={loading}
// 			>
// 				{loading ? "Signing in..." : "Sign In"}
// 			</button>
// 		</form>
// 	);
// };
// export default LoginForm;




import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import "./LoginForm.css"; // custom css

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { login, loading } = useAuthStore();

  // Redirect to backend Google OAuth route
  const handleGoogleLogin = () => {
    const base = import.meta.env.VITE_API_URL; // e.g., http://localhost:4000/api
    const url = `${base}/auth/google`;
    window.location.href = url;
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
      }}
    >
      {/* Email Field */}
      <div className="input-group">
        <Mail className="input-icon" />
        <input
          id="email"
          type="email"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Password Field */}
      <div className="input-group">
        <Lock className="input-icon" />
        <input
          id="password"
          type={showPass ? "text" : "password"}
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="toggle-pass"
        >
          {showPass ? <EyeOff /> : <Eye />}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="forgot-pass">
        <a href="#">Forgot Password ?</a>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`submit-btn ${loading ? "loading" : ""}`}
        disabled={loading}
      >
        {loading ? <span className="spinner"></span> : "Sign In"}
      </button>

      {/* Divider */}
      <div className="divider">
        <hr />
        <span>or</span>
        <hr />
      </div>

      {/* Google Button */}
      <button type="button" className="google-btn" onClick={handleGoogleLogin}>
        <img src="/bg/google.png" alt="Google" />
        Continue with Google
      </button>
    </form>
  );
};

export default LoginForm;
