import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/homepage/home.jsx";
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
