import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowLeft, UserPlus } from "lucide-react";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* BACK TO HOME */}
        <Link to="/" className="login-back">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* REGISTER CARD */}
        <div className="login-card">

          <div className="login-logo">
            <span>Stay</span>Ease
          </div>

          <div className="login-heading">
            <h1>Create account</h1>
            <p>
              Create your account to start booking hotels.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister}>

            {/* FULL NAME */}
            <div className="login-form-group">
              <label htmlFor="fullName">
                Full Name
              </label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="login-form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="login-form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="login-form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </div>
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="login-submit"
            >
              <UserPlus size={18} />
              Create Account
            </button>

          </form>

          {/* LOGIN LINK */}
          <div className="register-link">
            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;