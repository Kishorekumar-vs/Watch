import React, { useState } from 'react';
import confetti from 'canvas-confetti'; // install with: npm install canvas-confetti

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedback.trim() || !rating) {
      alert('Please provide both feedback and a rating.');
      return;
    }

    console.log('Feedback submitted:', { feedback, rating });

    setSubmitted(true);
    setFeedback('');
    setRating('');

    // ✨ Trigger star confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0 },
      shapes: ['star'], // ⭐ star-shaped particles
      colors: ['#FFD700', '#FF69B4', '#00CFFF', '#FF4500', '#7CFC00'], // gold, pink, cyan, orange, green
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="p-4"
            style={{
              border: '5px double #dc3545',
              borderRadius: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h2 className="text-center mb-4 text-danger fw-bold">
              Feedback Form
            </h2>

            {submitted && (
              <div className="alert alert-success text-center fw-semibold" role="alert">
                ⭐ Thank you for your feedback! ⭐
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label fw-semibold">
                  Your Feedback:
                </label>
                <textarea
                  id="feedback"
                  className="form-control"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter your comments..."
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="rating" className="form-label fw-semibold">
                  Rating:
                </label>
                <select
                  id="rating"
                  className="form-select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                >
                  <option value="">Select a rating</option>
                  <option value="5">★★★★★ - Excellent</option>
                  <option value="4">★★★★☆ - Good</option>
                  <option value="3">★★★☆☆ - Average</option>
                  <option value="2">★★☆☆☆ - Poor</option>
                  <option value="1">★☆☆☆☆ - Terrible</option>
                </select>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
