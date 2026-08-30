import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowLeft, LogIn } from "lucide-react";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* BACK TO HOME */}

        <Link to="/" className="login-back">
          <ArrowLeft size={18} />
          Back to Home
        </Link>


        {/* LOGIN CARD */}

        <div className="login-card">

          <div className="login-logo">
            <span>Stay</span>Ease
          </div>

          <div className="login-heading">

            <h1>Welcome back</h1>

            <p>
              Login to manage your hotel bookings.
            </p>

          </div>


          {/* FORM */}

          <form onSubmit={handleLogin}>

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
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>

            </div>


            {/* REMEMBER / FORGOT */}

            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot password?
              </button>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >
              <LogIn size={18} />
              Login
            </button>

          </form>


          {/* REGISTER */}

          <div className="register-link">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create an account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;