import '../App.css';
import OfferSection from "./Offersection";
import VersaceSection from './Versacesection';
const Home = () => {
  return (
    <div className='bg'>
    
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  boopathi">
            <img src="https://i.pinimg.com/1200x/8f/d4/18/8fd41817a12b3798004b84e68c457908.jpg"
              className="d-block w-100 boopathi-img" alt="..." />
          </div>
          <div className="carousel-item active boopathi">
            <img src="https://i.pinimg.com/736x/16/b4/bd/16b4bd2ceaad4e303dc0ffa139365b83.jpg"
              className="d-block w-100 boopathi-img" alt="..." />
          </div>
          <div className="carousel-item  boopathi">
            <img src="https://i.pinimg.com/1200x/78/5b/69/785b69981250d2e3ec1c5da87e0d08f7.jpg"
              className="d-block w-100 boopathi-img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

       <div class="container-fluid my-5">
    <div class="offer-section text-center">
      <img src="images\offer.webp" 
           alt="Offer" 
           class="img-fluid shadow"/>
    </div>
  </div>


      <div class="container-fluid my-5">
  <div class="row g-4">
    <div class="col-md-6 ">
      <div class="collection-card">
        <img src="images/Him.webp" alt="For Him" class='img-fluid' style={{width:"660px"}}/>
      </div>
    </div>
    <div class="col-md-6">
      <div class="collection-card">
        <img src="images/Her.webp" alt="For Her" class='img-fluid' style={{width:"660px"}}/>
      </div>
    </div>

  </div>
</div>

<div class="container-fluid mt-5">
  <div class="row align-items-center watch-section">
    <div class="col-md-6 text-center">
      <img src="images/img1.jpg" alt="Watch" class="watch-img" style={{width:"430px"}}/>
    </div>
    <div class="col-md-6">
      <h2 class="text-white">Luxury Golden Watch</h2>
      <p class="watch-text">
        Discover timeless elegance with our golden watch collection. 
        Designed for those who value sophistication and precision, 
        this masterpiece combines luxury and craftsmanship.
      </p>
      <button class="btn btn-dark mt-3">Shop Now</button>
    </div>
  </div>
</div>
<div class="container-fluid to">
  <div class="row align-items-center watch-section">
    <div class="col-md-6">
      <h2 class="text-white">Luxury Golden Watch</h2>
      <p class="watch-text">
        Discover timeless elegance with our golden watch collection. 
        Designed for those who value sophistication and precision, 
        this masterpiece combines luxury and craftsmanship.
      </p>
      <button class="btn btn-dark mt-3">Shop Now</button>
    </div>
     <div class="col-md-6 text-center">
      <img src="images/img1.jpg" alt="Watch" class="watch-img" style={{width:"430px"}}/>
    </div>
  </div>
</div>

      {/* product */}

      <div className="container-fluid">
        <div className="title-01 text-center">
          <p className="fs-2 py-1 fw-bold text-danger fs-3">COLLECTIONS</p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-1">
          <div className="card" style={{ width: "300px" }}>
            <img
              src="https://i.pinimg.com/736x/8e/68/39/8e6839a93c1e1f1befd5a6fed1684826.jpg"
              className="card-img-top"
              alt="Organic Vegetables"
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Men's Watch</h5>
              <a href="#" className="btn btn-danger ms-5 mt-1 fw-bold">Explore More</a>
            </div>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <img
              src="https://i.pinimg.com/736x/7e/90/f4/7e90f4a2a3612eaac0abab5993da5149.jpg"
              className="card-img-top"
              alt="Organic Vegetables"
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Men's Watches</h5>
              <a href="#" className="btn btn-danger ms-5 mt-1 fw-bold">Explore More</a>
            </div>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <img
              src="https://i.pinimg.com/1200x/9b/b8/58/9bb8583861f051a2e382fdbb600a0c3b.jpg"
              className="card-img-top"
              alt="Organic Vegetables"
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Women's Watches</h5>
              <a href="#" className="btn btn-danger ms-5 mt-1 fw-bold">Explore More</a>
            </div>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <img
              src="https://i.pinimg.com/1200x/ba/0b/14/ba0b1456ac8fa197ba069335f8d8b347.jpg"
              className="card-img-top"
              alt="Organic Vegetables"
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Women's Collection</h5>
              <a href="#" className="btn btn-danger ms-5 mt-1 fw-bold">Explore More</a>
            </div>
          </div>
        </div>
      </div>

    <div class="featured-section">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 content">
          <p class="text-uppercase small fw-bold">Editor's Picks</p>
          <span class="badge badge-feature">Shop Now</span>
          <h2 class="fw-bold mt-3">Watch Lugs: The Quiet Architects Of The Horological World</h2>
          <p class="lead mt-3">
            From angular lugs on military watches to hooded lugs to even cases with no visible lugs,
            watch horns, though often overlooked, play a vital role in both function and aesthetics.
          </p>
        </div>
      </div>
    </div>
  </div>

    {/* {Best} */}
      <div class="container-fluid my-5  ">
  <h4 class="mb-4 ms-5 fs-3 fw-bold text-danger text-center">BESTSELLER</h4>
  <div class="row g-1">
    <div class="col-md-4 col-lg-2 ms-5" style={{width:"310px"}}>
      <div class="card position-relative">
         <span class="badge bg-warning text-dark badge-custom">TRENDING</span>
        <img src="https://i.pinimg.com/736x/db/14/42/db14424586b426729019f1a2f551a290.jpg" class="card-img-top" alt="Watch"/>
        <div class="card-body text-center">
          <h6 class="mb-1">Titan | Men's Watch</h6>
          <p class="text-muted small mb-1">Titan Men’s Multifunction</p>
          <p class="mb-0">
            <span class="fw-bold">₹2,980</span>
            <span class="old-price">₹3,725</span>
            <span class="discount">20% off</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2" style={{width:"310px"}}>
      <div class="card position-relative">
        <span class="badge bg-warning text-dark badge-custom">TRENDING</span>
        <img src="https://i.pinimg.com/736x/80/49/9d/80499df26053d2d72affc2b77711a647.jpg" class="card-img-top" alt="Watch"/>
        <div class="card-body text-center">
          <h6 class="mb-1">Titan | Men's Watch</h6>
          <p class="text-muted small mb-1">Titan Minimalis Quartz</p>
          <p class="mb-0">
            <span class="fw-bold">₹3,395</span>
            <span class="old-price">₹4,245</span>
            <span class="discount">20% off</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2" style={{width:"310px"}}>
      <div class="card position-relative">
        <span class="badge bg-warning text-dark badge-custom">TRENDING</span>
        <img src="https://i.pinimg.com/736x/1e/13/42/1e134203c4351d30ac3eecd66688b060.jpg" class="card-img-top" alt="Watch"/>
        <div class="card-body text-center">
          <h6 class="mb-1">Titan | Men's Watch</h6>
          <p class="text-muted small mb-1">Titan Minimalis Quartz</p>
          <p class="mb-0">
            <span class="fw-bold">₹3,395</span>
            <span class="old-price">₹4,245</span>
            <span class="discount">20% off</span>
          </p>
        </div>
      </div>
    </div>

<div class="col-md-4 col-lg-2" style={{width:"310px"}}>
      <div class="card position-relative">
        <span class="badge bg-warning text-dark badge-custom">TRENDING</span>
        <img src="https://i.pinimg.com/736x/5d/e6/dd/5de6dd66ca1d3b3806ca20c896ff6082.jpg" class="card-img-top" alt="Watch"/>
        <div class="card-body text-center">
          <h6 class="mb-1">Titan | Men's Watch</h6>
          <p class="text-muted small mb-1">Titan Minimalis Quartz</p>
          <p class="mb-0">
            <span class="fw-bold">₹3,395</span>
            <span class="old-price">₹4,245</span>
            <span class="discount">20% off</span>
          </p>
        </div>
      </div>
    </div>
      </div>
</div>


<VersaceSection/>

<div class="container my-5">
  <h3 class="fw-bold mb-4">Trending Now</h3>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="position-relative trending-card">
        <img src="https://i.pinimg.com/736x/c9/5f/40/c95f40c5553ba1be2324bbbd700c0d0b.jpg" alt="Blue Dial" class="img-fluid" style={{height:"500px"}}/>
        <div class="caption">Blue Dial</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="position-relative trending-card">
        <img src="https://i.pinimg.com/1200x/0e/40/e6/0e40e6650c5ec1d5dc8981befa596698.jpg" alt="Green Dial" class="img-fluid" style={{height:"500px"}}/>
        <div class="caption">Green Dial</div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="position-relative trending-card">
        <img src="https://i.pinimg.com/736x/88/16/5a/88165aad3935e91f42760944389a4f7e.jpg" alt="Black Watches" class="img-fluid" style={{height:"500px"}}/>
        <div class="caption">Black Watches</div>
      </div>
    </div>

  </div>
</div>



      
<div class="container-fluid mt-2">
    <h2 class="text-center mb-1">TESTIMONIALS</h2>
    
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner ">

        <div class="carousel-item active">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                <p className='fw-bold'>
                  I am very happy for solved my problem, my problem is too much hard 
                  but your technician is very supportive and carefully solved it. 
                  Thanks a lot for good service. Happy Sunday… Have a good day.  
                  Thanks and regards, Mr. Rahul Das.
                </p>
                <p class="author">RAHUL</p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                 <p className='fw-bold'>
                  Dear Titan Team, I just wanted to take a moment to appreciate the 
                  excellent service/product you provide. The quality and dedication 
                  you put into your work truly stand out. I highly recommend your 
                  brand to others. Keep up the great work!
                </p>
                <p class="author">ANCHAL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                 <p className='fw-bold'>
                  Dear Titan Team, I just wanted to take a moment to appreciate the 
                  excellent service/product you provide. The quality and dedication 
                  you put into your work truly stand out. I highly recommend your 
                  brand to others. Keep up the great work!
                </p>
                <p class="author">ANCHAL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                <p className='fw-bold'>
                  Dear Titan Team, I just wanted to take a moment to appreciate the 
                  excellent service/product you provide. The quality and dedication 
                  you put into your work truly stand out. I highly recommend your 
                  brand to others. Keep up the great work!
                </p>
                <p class="author">ANCHAL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                <p className='fw-bold'>
                  Dear Titan Team, I just wanted to take a moment to appreciate the 
                  excellent service/product you provide. The quality and dedication 
                  you put into your work truly stand out. I highly recommend your 
                  brand to others. Keep up the great work!
                </p>
                <p class="author">ANCHAL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="testimonial-card">
                <p className='fw-bold'>
                  Dear Titan Team, I just wanted to take a moment to appreciate the 
                  excellent service/product you provide. The quality and dedication 
                  you put into your work truly stand out. I highly recommend your 
                  brand to others. Keep up the great work!
                </p>
                <p class="author">ANCHAL</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
    
    
    
  );
};

export default Home;
