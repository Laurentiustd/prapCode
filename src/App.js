import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboutpage from './components/Aboutpage'
import Portofoliopage from './components/Portofoliopage'
import Contactpage from './components/Contactpage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/prap" element={<Home />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
          <Route path="/Portofoliopage" element={<Portofoliopage />} />
          <Route path="/Contactpage" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
