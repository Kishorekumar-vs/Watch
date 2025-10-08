import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Pages/Home';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import PageNotFound from './Pages/PageNotFound';
import SignupPage from './Components/Signup';
import VersaceSection from "./Pages/Versacesection";
import Versace from "./Pages/Versace";
import Footer from './Components/Footer';
import FeedbackPage from './Pages/FeedbackPage';
import LoginPage from './Components/Login';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/women" element={<Women />} />
         <Route path="/kids" element={<Kids />} />
        <Route path='/feedback' element={<FeedbackPage />}/>
         <Route path="/versacesection" element={<VersaceSection />} />
        <Route path="/versace" element={<Versace />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
