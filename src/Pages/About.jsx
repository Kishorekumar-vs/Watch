// About.js
import React from "react";


const About = () => {
  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-danger">About Us</h1>
        <p className="text-dark fw-semibold">
          Learn more about our journey, vision, and mission.
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/_jcr_content/root/responsivegrid/container_1948817211/container/container_1404634349_1265496466/container/container_754550402/container/image.casiocoreimg.jpeg/1758721897302/babygwomen-1200x1200.jpeg"
            alt="About"
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="text-dark fs-5">
            We are a passionate team dedicated to delivering the best products
            and services to our customers. Our goal is to blend innovation,
            quality, and creativity in everything we do.
          </p>

          <h2 className="fw-bold mt-4">Our Mission</h2>
          <p className="text-dark fs-5">
            To provide unique experiences that inspire, connect, and improve the
            lifestyle of our users. We believe in excellence, trust, and
            customer satisfaction above all.
          </p>

          {/* Button */}
          <button className="btn btn-danger btn-lg shadow">
            Learn More
          </button>
        </div>
      </div>


      {/* About Content */}
      <div className="row align-items-center">
        {/* Right Content */}
        <div className="col-md-6">
          <h2 className="fw-bold">Our Design Philosophy</h2>
          <p className="text-dark fs-5">
            Every watch we create is a perfect blend of innovation and tradition. From
  sleek modern lines to classic vintage aesthetics, our designs are crafted
  to resonate with both contemporary trends and timeless elegance. 
  Attention to detail, premium materials, and superior craftsmanship define
  every timepiece.
          </p>

          <h2 className="fw-bold mt-4">Customer Trust & Commitment</h2>
          <p className="text-dark fs-5">
            To create luxurious, precise, and durable watches that inspire confidence
  and style. We aim to delight our customers with every tick, building
  lifelong relationships based on trust, quality, and innovation.
          </p>

          {/* Button */}
          <button className="btn btn-danger btn-lg shadow">
            Explore More
          </button>
        </div>
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/_jcr_content/root/responsivegrid/container_1948817211/container/container_1404634349_2127539202/container/container_754550402/container/image_865914838.casiocoreimg.jpeg/1758721896856/anadigi-1200x1200.jpeg"
            alt="About"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      <div className="row text-center mb-5 mt-5">
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="text-danger">Our Vision</h3>
            <p className="text-dark">
              To be a global leader recognized for creativity, innovation, and
              customer satisfaction. We envision a future where our products
              become an integral part of everyday life.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="text-danger">Our Core Values</h3>
            <ul className="list-unstyled text-dark">
              <li>✔️ Integrity & Transparency</li>
              <li>✔️ Customer-Centric Approach</li>
              <li>✔️ Innovation & Creativity</li>
              <li>✔️ Quality First</li>
              <li>✔️ Teamwork & Growth</li>
            </ul>
          </div>
        </div>
      </div>

      

      {/* Cards Section */}
      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h3 className="text-danger">10+</h3>
              <p className="fw-bold">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h3 className="text-danger">500+</h3>
              <p className="fw-bold">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h3 className="text-danger">50+</h3>
              <p className="fw-bold">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-5 bg-light rounded shadow mt-5">
        <h2 className="fw-bold mb-3">Want to Work With Us?</h2>
        <p className="text-muted fs-5">
          Join our journey of innovation and excellence. Let’s build something
          amazing together.
        </p>
        <button className="btn btn-outline-danger btn-lg">Contact Us</button>
      </div>
    </div>
    
    
  );
};

export default About;
