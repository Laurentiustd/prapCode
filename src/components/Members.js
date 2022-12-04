import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const data = [
    {
      id: "1",
      name: "Marvell Christian W",
      jabatan: "Mentor/Staff LnT",
      img: "images/marvel.jpg",
      ttl: "Jakarta, 16 Januari 2003",
      jurusan: "Computer Science",
    },
    {
      id: "2",
      name: "Gustavo Hoze Ercolesea",
      jabatan: "Ketua Kelompok",
      img: "images/vovo1.jpg",
      ttl: "Sukoharjo, 1 Agustus 2004",
      jurusan: "Computer Science",
    },
    {
      id: "3",
      name: "Bilal Prasetya Pinaring",
      jabatan: "Mentor/Staff File",
      img: "images/bilal.jpg",
      ttl: "Jakarta, 6 Januari 2003",
      jurusan: "Information System",
    },
    {
      id: "4",
      name: "Nixen Jenio",
      jabatan: "Microblogging",
      img: "images/nixen.jpeg",
      ttl: "Pemangkat, 2 Agustus 2004",
      jurusan: "Computer Science",
    },
    {
      id: "5",
      name: "Laurentius Taruna Djaja",
      jabatan: "Website",
      img: "images/laurent.jpg",
      ttl: "Jakarta, 23 Maret 2004",
      jurusan: "Information System",
    },
    {
      id: "6",
      name: "Tara Nirmala Kusuma",
      jabatan: "Article",
      img: "images/Kelompok 9.jpeg",
      ttl: "Jakarta, 26 September 2004",
      jurusan: "Computer Science",
    },
    {
      id: "7",
      name: "Clarice Arlin Wijaya",
      jabatan: "Laporan Penanggung Jawaban",
      img: "images/clarice.jpg",
      ttl: "Pekanbaru, 4 Agustus 2004",
      jurusan: "Computer Science",
    },
    {
      id: "8",
      name: "Reynaldo Henelson",
      jabatan: "Design Katalog",
      img: "images/rey.jpg",
      ttl: "Surabaya, 26 Agustus 2003",
      jurusan: "Cyber Security",
    },
    {
      id: "9",
      name: "Akira Chandra",
      jabatan: "Lesson Plan & Video Pembelajaran",
      img: "images/akira.jpg",
      ttl: "Jakarta, 14 december 2004",
      jurusan: "Information System",
    },
    {
      id: "10",
      name: "Vanness Ariya Damario",
      jabatan: "Logo, Visi, dan Misi Kelompok",
      img: "images/vanes.png",
      ttl: "Bekasi, 11 April 2004",
      jurusan: "Computer Science",
    },
  ];

  return (
    <div className="member-container">
      <h1>Members & Mentors Of Group</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          1000: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          },
          100: {
            slidesPerView: 1,
          },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-container"
        
      >
        {data.map((i) => {
          return (
            <SwiperSlide key={i.id}>
              <div className="card">
                <img src={i.img} style={{ width: "10em" }} alt="pp" className="img-pp"/>
                <div className="line"></div>
                <p className="nama">{i.name}</p>
                <p className="jabatan">{i.jabatan}</p>
                <p className="nama">{i.ttl}</p>
                <p className="nama">{i.jurusan}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <img src={require("../image.png")} />
    </div>

    );
}

export default App;
