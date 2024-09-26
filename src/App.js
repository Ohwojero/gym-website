import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from '../src/Pages/Home'
import Hero from "./Components/Hero";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Footer from "./Components/Footer";
import Plans from "./Pages/Plans"
import Join from "./Pages/Join"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Features" element={<Features/>}></Route>
          <Route path="/plans" element={<Plans/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </div>
  );
}

export default App;
