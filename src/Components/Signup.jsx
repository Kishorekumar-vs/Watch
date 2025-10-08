import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🎉 Function for cannon blasts from both sides
  const triggerSideCannons = () => {
    const duration = 2000; // 2 seconds
    const end = Date.now() + duration;

    (function frame() {
      // Left cannon
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      });
      // Right cannon
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    // Save user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
    );

    setMessage("✅ Signup successful! Redirecting to login...");

    // 🎉 Trigger side cannon animation
    triggerSideCannons();

    // Reset form
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 mt-small-5">
      <div
        className="card shadow-lg p-4"
        style={{ borderRadius: "15px", maxWidth: "900px", width: "100%",height:"460px" }}
      >
        <div className="row g-0">
          {/* Left: Signup Form */}
          <div className="col-md-6 p-4">
            <h2 className="text-center mb-4 fw-bold text-danger">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold">
                Sign Up
              </button>
            </form>

            {message && (
              <p className="mt-3 text-center fw-semibold">{message}</p>
            )}
          </div>

          {/* Right: Watch Image */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/_jcr_content/root/responsivegrid/container_1948817211/container_copy/container_1404634349_528550588/container/container_754550402/container/image.casiocoreimg.jpeg/1758721894955/gsteel-1200x1200.jpeg"
              alt="Watch"
              className="img-fluid rounded-end h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
