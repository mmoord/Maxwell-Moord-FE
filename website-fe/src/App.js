import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/homepage/home.jsx";
import Navbar from './components/navbar/navbar';
import About from './components/aboutme/about.jsx';
import Contact from './components/contactpage/contact';
import Blog from './components/blogpage/blog';
import Portfolio from './components/portfoliopage/portfolio';
//import Clips from './components/clips/clips';
import Games from './components/games/games';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/games" element={<Games/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
