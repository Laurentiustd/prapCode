import "../App.css";
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const navRef = useRef();

  function handleClick(){
    navRef.current.classList.toggle("slide")
  }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h1 style={{ fontSize: "3em", fontWeight: "inherit" }}>Graphenix</h1>
      </div>

      <div className="nav-link">
        <ul ref={navRef}>
          <li>
          <Link to="/prap" style={{color:'inherit', textDecoration:'inherit'}}>Home</Link>
          </li>
          <li>
          <Link to="/Aboutpage" style={{color:'inherit', textDecoration:'inherit'}}>About Us</Link>
          </li>
          <li>
          <Link to="/Portofoliopage" style={{color:'inherit', textDecoration:'inherit'}}>Portofolio</Link>
          </li>
          <li>
          <Link to="/Contactpage" style={{color:'inherit', textDecoration:'inherit'}}>Contact</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faBars} className="fa-bars" onClick={()=>handleClick()}/>  
    </div>
  );
}

export default App;
