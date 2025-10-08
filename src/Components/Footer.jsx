import React from "react";

const WatchFooter = () => {
  return (
    <footer className="mt-1">
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          {/* Brand Info */}
          <div className="col-6 col-md-3 mt-4 ps-5">
            <a href="./index.html" className="text-decoration-none">
              <h3 className="fw-bold text-danger">....♕WatchIT.... </h3>
            </a>
            <p className="pt-2">Ram nagar,Thalamai Seiyalagam opp.,Chennai-01.</p>
            <p className="mb-2">+01234 567 890</p>
            <p>WatchIT2025@gmail.com</p>
          </div>

          {/* Menu */}
          <div className="col mt-4 ps-5">
            <h4>Menu</h4>
            <ul className="list-unstyled pt-2 menu">
              <a href="./index.html" className="text-decoration-none text-white">
                <li className="py-1">Home</li>
              </a>
              <a href="./aboutus.html" className="text-decoration-none text-white">
                <li className="py-1">About</li>
              </a>
              <a href="./contactus.html" className="text-decoration-none text-white">
                <li className="py-1">Feedback</li>
              </a>
              <a href="./review.html" className="text-decoration-none text-white">
                <li className="py-1">Login/Signup</li>
              </a>
            </ul>
          </div>

          {/* Company */}
          <div className="col mt-4 ps-5">
            <h4>Collections</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1">Men's Collections</li>
              <li className="py-1">Women's Collection</li>
              <li className="py-1">kid's Collection</li>
            </ul>
          </div>

          {/* Locations */}
          <div className="col mt-4 ps-5">
            <h4>Locations</h4>
            <ul className="list-unstyled pt-2">
              <li className="py-1">Chennai</li>
              <li className="py-1">Mumbai</li>
              <li className="py-1">Hyderabad</li>
              <li className="py-1">London</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-6 col-lg-3 mt-4 ps-5">
            <h4>Keep In Touch</h4>
            <div className="social-media pt-2">
              <a href="#" className="text-light fs-4 me-3">
                <img src="https://i.pinimg.com/474x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg" alt="" style={{height:"40px"}} />
              </a>
              <a href="#" className="text-light fs-4 me-3">
                <img src="https://i.pinimg.com/originals/5c/ae/71/5cae71db70b9ec562c434d8ba79bcecb.jpg?nii=t" alt="" style={{height:"40px"}} />
              </a>
              <a href="#" className="text-light fs-4 me-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbshmQVCojba7Tdym1B3pFseVTcvBUpJDVw&s" alt="" style={{height:"40px"}} />
              </a>
              <a href="#" className="text-light fs-4">
                <img src="https://i.pinimg.com/564x/3c/81/7a/3c817a1285aecd16354408dc4b31d7c5.jpg" alt="" style={{height:"40px"}} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="d-sm-flex justify-content-between py-1 border-top mt-3">
          <p className="mb-0">&copy; WatchIT @ 2025. All Rights Reserved.</p>
          <p><img src="https://www.citypng.com/public/uploads/preview/hd-mastercard-payment-logo-transparent-background-701751694777780z7xaiuu0sh.png" alt="" style={{height:"25px"}} /> <img src="https://www.citypng.com/public/uploads/preview/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png" alt="" style={{height:"25px"}} /> <img src="https://icon2.cleanpng.com/20180713/yok/aawxq4x0d.webp" alt="" style={{height:"25px"}} /> <img src="data:image/png;base64,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" alt="" style={{height:"25px"}} /> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwjf1NKlfsjg1Ba36ZpwGyDEiIaq1iJ2bbw&s" alt="" style={{height:"25px"}} /></p>
          <p className="mb-0">Terms of use & Privacy policy.</p>
        </div>
      </div>
    </footer>
  );
};

export default WatchFooter;
