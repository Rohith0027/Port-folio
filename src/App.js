import About from "./components/About/About";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
