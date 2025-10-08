import React, { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";

// 5 Watch Images
const watchImages = [
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw782a5c1a/images/Titan/Catalog/1733KL03_1.jpg?sw=200&sh=200",
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45d3dcf9/images/Titan/Catalog/1713BM02_1.jpg?sw=200&sh=200",
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3298f99b/images/Titan/Catalog/1830KL02_1.jpg?sw=200&sh=200",
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw22b1db84/images/Fastrack/Catalog/3255NL01_1.jpg?sw=200&sh=200",
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb830e1d4/images/Titan/Catalog/1805QM04_1.jpg?sw=200&sh=200",
];

const OfferSection = () => {
  const sectionRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  const fullText = "Exclusive Watch Offer";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // 100ms per letter
    return () => clearInterval(interval);
  }, []);

  const triggerPoppers = () => {
    if (!sectionRef.current) return;

    const myCanvas = document.createElement("canvas");
    myCanvas.style.position = "absolute";
    myCanvas.style.top = "0";
    myCanvas.style.left = "0";
    myCanvas.style.width = "100%";
    myCanvas.style.height = "100%";
    myCanvas.style.pointerEvents = "none";
    myCanvas.style.zIndex = "5";
    sectionRef.current.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, { resize: true, useWorker: true });

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      myConfetti({
        particleCount: 7,
        angle: Math.random() * 60 + 60,
        spread: 60,
        origin: { x: Math.random(), y: 1 },
        colors: ["#ff0a54", "#ff477e", "#ff85a1", "#fbb1bd", "#f9bec7", "#00bfff", "#39ff14"],
        shapes: ["circle", "square"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        sectionRef.current.removeChild(myCanvas);
      }
    })();
  };

  return (
    <div
      ref={sectionRef}
      className="offer-section position-relative text-center p-4"
      style={{
        color: "black",
        borderRadius: "15px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Typing Animation Heading */}
      <h2 className="fw-bold text-danger mb-4">{displayText}</h2>
      <p className="mb-4">
        Get up to <span className="fw-bold text-warning">50% OFF</span> on luxury watches!
      </p>

      {/* Watch Images */}
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        {watchImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Watch ${index + 1}`}
            style={{ width: "230px", borderRadius: "10px", border: "2px solid #fff" }}
          />
        ))}
      </div>

      <button className="btn btn-danger fw-bold" onClick={triggerPoppers}>
        Claim Offer 
      </button>
    </div>
  );
};

export default OfferSection;
