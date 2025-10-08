import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner hii">
    <div class="carousel-item active" data-bs-interval="10000">
     <p className=' fw-bold text-danger text-center '>...❤️Welcome!!! Happy Customers❤️...</p>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <p className=' fw-bold text-danger text-center '>😇Get 50% Offer For the First Order😇</p>
    </div>
    <div class="carousel-item">
       <p className=' fw-bold text-danger text-center '>🥰Buy One Get One Free For Fixed Products🥰</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold ms-5 fs-3" to="/"> ♕𝕎𝕒𝕥𝕔𝕙𝕀𝕋</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2  fw-bold  mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">About</Link>
            </li>
          <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/product"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/product">
                      Men's Collections
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/women">
                      Women's Collections
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item fw-bold" to="/kids">
                      Premium Collections
                    </Link>
                  </li>
                </ul>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/signup">Login/Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
