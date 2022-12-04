import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

  const misi = [
    {
      key: 1,
      desc:'Meningkatkan jiwa solidaritas dari masing-masing anggota kelompok'
    },
    {
      key: 2,
      desc:'Mewujudkan ide-ide kreatif yang dapat membangun kolaborasi kelompok'
    },
    {
      key: 3,
      desc:'Meningkatkan kemampuan berorganisasi dari masing-masing anggota kelompok'
    },
    {
      key: 4,
      desc:'Menyatukan semangat kerja sama dengan anggota kelompok dalam satu tahun ke depan'
    },

  ]
  return (
    <div className="aboutpage-container">
      <Navbar />
      <div className="aboutpage-text">
      <h1>About Us</h1>
      <img src={require('../Group 21.png')} />
      <p className="title">Kelompok 9 : Graphenix</p>
      <h3>Visi</h3>
      <p className="desc1">
        Menjadikan kelompok yang bermutu dalam upaya bekerja sama, inovatif,
        solid, dan berperan aktif dalam membangun semangat kerja sama tim dalam
        satu tahun ke depan.
      </p>
      <h3>Misi</h3>
      <ol className="desc2">
        {misi.map((i)=>{
          return(
            <li key={i.key}>{i.desc}</li>
          )
        })}
      </ol>
      </div>
      <Footer />
    </div>
  );
}

export default App;
