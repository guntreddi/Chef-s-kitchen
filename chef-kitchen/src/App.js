
import './App.css';
import Coock from './components/coock-with-us/Coock';
import Chefs from './components/experts-chef/Chefs';
import Experts from './components/experts/Experts';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/navbar/Navbar';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div>
    <Navbar/>
    <Experts/>
    <Features/>
    <Coock/>
    <Chefs/>
    <Gallery/>
    <Subscribe/>
    <Footer/>
    
    </div>
  );
}

export default App;
