import React from "react";
import { useNavigate } from "react-router-dom";

const VersaceSection = () => {
  const navigate = useNavigate();

  const goToVersace = () => {
    navigate("/versace");  // navigate to Versace page
  };

  return (
    <div className="container-fluid my-5" style={{backgroundColor:" rgb(240, 188, 129)"}}>
      <div className="row align-items-center">
        
        {/* Left Side Text */}
        <div className="col-md-7 text-center text-md-start p-5 ">
          <p className="text-uppercase small">Timeless and Iconic</p>
          <h1 className="fw-bold">VERSACE</h1>
          <p className="lead">
            The Versace Watches collection features classic or sporty designs
            boasting sophisticated functionalities, rich details and flawless style.
          </p>
          <button className="btn btn-outline-dark mt-3" onClick={goToVersace}>
            Shop Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="col-md-5 p-0">
          <img
            src="https://i.pinimg.com/736x/b1/f1/0d/b1f10d36e626ab69c8a12111c608a728.jpg"
            alt="Versace Watch"
            className="img-fluid w-75" style={{height:"500px"}}
          />
        </div>

      </div>
    </div>
  );
};

export default VersaceSection;
