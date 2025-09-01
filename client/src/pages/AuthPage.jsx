// import { useState } from "react";
// import "./Auth.css";
// import LoginForm from "../components/LoginForm";
// import SignUpForm from "../components/SignUpForm";

// const AuthPage = () => {
// 	const [isLogin, setIsLogin] = useState(true);

// 	return (
// 		<div className="auth-container">
// 			<div className="auth-card">
// 				<h2 className="auth-title">
// 					{isLogin ? "Sign In to Cupidly" : "Create Your Swipe Account"}
// 				</h2>

// 				{/* Form Component */}
// 				{isLogin ? <LoginForm /> : <SignUpForm />}

// 				<div className="mt-4 text-center">
// 					<p className="text-sm text-gray-700">
// 						{isLogin ? "New to Cupidly ??" : "Already Have an Account ??"}
// 					</p>

// 					<button
// 						onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
// 						className="auth-toggle-btn"
// 					>
// 						{isLogin ? "Create Your New Account" : "Sign In to Your Account"}
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AuthPage;


import { useState } from "react";
import "./Auth.css";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      {/* Background overlay */}
      <div className="auth-overlay"></div>

      <div className="auth-card animate-fadeInUp">
        {/* Logo / Branding */}
        <div className="auth-header">
          <img
            src="/bg/love-message.gif"
            alt="Cupidly Logo"
            className="auth-logo"
          />
          <h1 className="auth-brand">Have a Great Journey in Cupidly 💖</h1>
          <p className="auth-tagline">😀 Love is Just a Swipe Away...</p>
        </div>

        {/* Title */}
        <h2 className="auth-title">
          {isLogin ? "Sign In to Cupidly" : "Create Your Swipe Account"}
        </h2>

        {/* Form Component */}
        {isLogin ? <LoginForm /> : <SignUpForm />}

        {/* Toggle Section */}
        <div className="auth-toggle">
          <p className="auth-toggle-text">
            {isLogin ? "New to Cupidly ??" : "Already Have an Account ??"}
          </p>
          <button
            onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
            className="auth-toggle-btn"
          >
            {isLogin ? "Create Your New Account" : "Sign In to Your Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
