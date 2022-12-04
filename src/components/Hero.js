import Particles from './Particles';
import '../App.css';
import { Link } from "react-router-dom";


function App() {


  return (
    <div className='hero-container'>

        <Particles />
        <div className='hero-headings'>
            <div className='title'>
                <p style={{fontSize:'2em'}}>Bina Nusantara Computer Club</p>
                <h1 style={{fontSize:'3.5em'}}>Kelompok 9 : Graphenix</h1>
                <p style={{fontSize:'1.5em'}}>As Solid As Graphene!</p>
            </div>

            <div className='button'>
                <p style={{fontSize:'2em'}}>Want to know more?</p>
                <button><Link to="/Aboutpage" style={{textDecoration:"none", color:"inherit"}}>About Us!</Link></button>
            </div>
        </div>
    </div>
  );
}

export default App;