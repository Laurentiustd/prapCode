import "../App.css";

function App() {
  return (
    <div className="project-container">
      <div
        className="project-title"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <h1 className="project-title-h1">Our Works !</h1>
      </div>
      <div className="project-highlight">
        <div className="highlight 1">
          <img src={require("../Rectangle2.png")} />
          <div className="project-desc">
            <p>1. Event Besar</p>
            <p>
              Gtech Festival, Gtech Festival merupakan event besar pertama yang
              kami adakan. Gtech Festival akan dilaksanakan pada tanggal 8-10
              Agustus 2023 dengan 3 rangkaian acara yang berbeda. Rangkaian
              acara kami terdiri dari seminar pada hari pertama, training pada
              hari kedua, dan talkshow pada akhir acara. Kami mengundang
              pembicara dari Shopee dan tiket.com yang merupakan expert di
              bidangnya.
              <br />
              <a href="#">click to see more....</a>
            </p>
          </div>
        </div>
        <div className="highlight 2">
          <img src={require("../Rectangle.png")} />
          <div className="project-desc">
            <p>2. Event Kebersamaan</p>
            <p>
              Saat ini, banyak sekali generasi muda di Indonesia yang terlalu
              berfokus kepada masa depan dan lama-kelamaan mulai kehilangan
              perasaan mereka. Perasaan yang seharusnya menjadi salah satu
              pembeda antara manusia dengan makhluk lainnya malah kian lama kian
              hilang karena kebiasaan mereka dalam bekerja terlalu ekstrim. Oleh
              karena itu kami membuat acara ini untuk mempererat rasa
              persaudaraan di dalam organisasi ini.
              <br />
              <a href="#">click to see more....</a>
            </p>
          </div>
        </div>
        <div className="highlight 3">
          <img src={require("../Rectangle3.png")} />
          <div className="project-desc">
            <p>3. Lesson Plan & Video Learning</p>
            <p>
              Learning video and lesson plan adalah project yang kami kembangkan
              untuk memberi wawasan terhadap audiens untuk memahami tentang ilmu
              dari bahasa pemograman Kotlin, dengan besar harapan dari materi
              yang sudah dipelajari audiens dapat membuat sebuah mini project
              dengan menerapkan ilmu-ilmu yang sudah didapatkan
              <br />
              <a href="#">click to see more....</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
