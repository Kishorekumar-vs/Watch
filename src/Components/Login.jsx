import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      loginData.username === storedUser.username &&
      loginData.password === storedUser.password
    ) {
      setMessage("✅ Login successful! Redirecting...");

      // Optionally store username in localStorage if Remember Me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedUser", loginData.username);
      } else {
        localStorage.removeItem("rememberedUser");
      }

      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 1500);
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login integration
    alert("Google login clicked!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-0"
        style={{ borderRadius: "15px", maxWidth: "900px", width: "100%" }}
      >
        <div className="row g-0">
          {/* Left: Watch Image */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/_jcr_content/root/responsivegrid/container_1948817211/container_copy/container_1404634349_1265496466/container/container_754550402/container/image_486387716.casiocoreimg.jpeg/1758721895410/masterofg-1200x1200.jpeg"
              alt="Watch"
              className="img-fluid rounded-start h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right: Login Form */}
          <div className="col-md-6 p-4">
            <h2 className="text-center mb-4 fw-bold text-danger">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={loginData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold mb-3">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="text-center my-3 text-muted">OR</div>

            {/* Google Login */}
            <button
              className="btn btn-outline-danger w-100 fw-bold d-flex align-items-center justify-content-center"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>

            {message && (
              <p className="mt-3 text-center fw-semibold">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
