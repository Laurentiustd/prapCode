import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const data = [
    {
      image: "images/Slide1.png",
      caption:
        'hat’s up, guys! 😊🙌🏻 Siapa nih yang biasa ngeluh tiap ada tugas PowerPoint? Nah, sekarang kami pengen ngasih tau kalian beberapa lifehacks yang dapat menghemat waktu kamu dan membuat presentasimu lebih menarik. Yuk, swipe ke kiri! ↩️↩️↩️',
      key: 1,
    },
    {
      image: "images/Slide2.png",
      caption:
        'Di lifehack pertama ini, kami bakal beri tahu cara untuk menghindari perbedaan font-mu dengan temanmu saat membuat PowerPoint, yaitu dengan mengaktifkan "Embed fonts in the file".',
      key: 2,
    },
    {
      image: "images/Slide3.png",
      caption:
        "Kamu ingin menjadikan presentasimu dalam bentuk video? Di lifehack kedua ini kami akan menjelaskan langkah agar presentasimu dapat menjadi sebuah video!",
      key: 3,
    },
    {
      image: "images/Slide4.png",
      caption:
        'Apakah kamu tahu? Microsoft PowerPoint juga memiliki sistem plugins seperti di FIgma, loh! Namanya adalah "add-in",  yang dapat membantu proses pembuatan presentasimu. ',
      key: 4,
    },
    {
      image: "images/Slide5.png",
      caption:
        ' Di dalam PowerPoint, ada transisi yang mungkin tidak kamu ketahui memiliki banyak sekali fungsi tersembunyi, yaitu Morph! Morph dapat mengatur animasi setiap shape yang dimiliki sehingga dapat mempersingkat waktu dalam pembuatan. Transisi ini dapat menghasilkan animasi gerakan yang smooth dari satu slide ke slide selanjutnya',
      key: 5,
    },
    {
      image: "images/Slide6.png",
      caption:
        'Bosan dengan transisi yang itu-itu saja? Kamu tahu tidak, ada transisi tersembunyi yang memiliki efek yang sangat keren, yaitu fitur Slide Zoom! ',
      key: 6,
    },
    {
      image: "images/Slide7.png",
      caption:
        "Kamu ada tips atau lifehack lainnya gak, nih?, kalo ada bagikan tips kamu di kolom komentar instagram kami ya!, dan jangan lupa juga untuk kunjungi semua sosial media kami dan lihat project kami lainya!",
      key: 7,
    },
  ];
  return (
    <div className="portofoliopage-container">
      <Navbar />
      <div className="judul">
        <h1>Portofolio</h1>
      </div>

      <div className="porto">
        <div className="article">
          <h3>Article 1</h3>
          <p>
            <h4>
              Terinspirasi dari Sword Art Online, Apakah Benar VR ini bisa
              Membunuh Penggunanya?
            </h4>
            Halo teman-teman semua, kalian semua pasti tidak asing dengan kata
            <i> virtual reality</i> (VR), kan? <i>Headset VR</i> sering kali digunakan oleh
            para pecinta <i>game</i> agar penggunanya bisa merasakan <i>game</i> yang
            dimainkan. Walaupun pengguna “mati” dalam <i>game</i>, pengguna tidak akan
            mati di dunia nyata. Namun, salah satu pendiri VR terkenal yaitu
            Palmer Luckey mampu membuat ide gilanya menjadi kenyataan, apakah
            itu?
            <br />
            <img
              src={require("../vr.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            <h4>Apa itu VR?</h4>
            VR merupakan keadaan nyata yang diciptakan oleh komputer sesuai
            dengan lingkungan di sekitar. VR banyak digunakan untuk keperluan
            bermain <i>game</i>, pendidikan, bahkan mampu digunakan untuk pengobatan
            penyakit mental. Salah satu orang yang mampu membuat dan merancang
            VR adalah Palmer Freeman Luckey. Ia membuat perusahaannya sendiri
            yaitu Oculus yang menjual perangkat VR bagi para pemain <i>game</i>.
            <h4>Pendiri Oculus</h4>
            <img
              src={require("../freeman.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Palmer Freeman Luckey lahir pada tanggal 19 September 1992. Ia
            merupakan pendiri Oculus VR dan desainer produk Oculus yaitu Oculus
            Rift. Palmer Luckey memulai karirnya pada awal tahun 2009. Di
            usianya yang masih 16 tahun, ia sudah mampu merancang <i>headset</i> VR-nya
            sendiri. Dari idenya membuat <i>headset</i> VR tersebut, ia mengenalkan
            Oculus Rift CV1 ke publik pada tahun 2012 dan berhasil meraih
            keuntungan sebesar 2,4 juta dollar Amerika. Saat ini, perusahaan
            Oculus sudah dibeli oleh Facebook pada tahun 2014 dan Palmer Luckey
            memulai proyeknya yang baru yaitu merancang <i>headset</i> VR yang mampu
            membunuh penggunanya.
            <h4>Terinspirasi dari Serial Animasi Sword Art Online</h4>
            <img
              src={require("../sao.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Mari membahas sekilas mengenai serial animasi Sword Art Online (SAO)
            yang menjadi inspirasi bagi Palmer Luckey untuk membuat VR yang
            mampu membunuh penggunanya. SAO merupakan serial animasi Jepang yang
            menceritakan tentang <i>game online</i> di masa depan, di mana para
            pemainnya harus menggunakan sebuah helm bernama NerveGear. Helm
            tersebut mampu menstimulasi otak penggunanya, sehingga mereka bisa
            masuk dan merasakan langsung dunia virtual dari <i>game</i> yang mereka
            mainkan. Namun suatu saat, sang <i>developer</i> mengumumkan bahwa mereka
            terjebak di dalam <i>game</i>, jika karakter pada <i>game</i> yang mereka mainkan
            mati, maka tubuh asli penggunanya juga akan mengalami kematian.
            Namun rupanya kejadian tersebut bisa saja terjadi di dunia nyata.
            <h4>Proyek Terbaru Palmer Freeman </h4>
            <img
              src={require("../projectvr.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Pendiri Oculus yaitu Palmer Freeman Luckey berhasil menciptakan
            <i>headset</i> VR yang mampu membunuh penggunanya. VR ini dipublikasikan
            pada 6 November 2022, hari yang sama dengan peluncuran serial
            animasi SAO ke publik. Walaupun berbeda dengan NerveGear, VR ini
            berhasil memasang tiga modul muatan eksplosif di atas layar <i>headset</i>
            yang nantinya bahan peledak tersebut mampu membuat kepala pecah
            terburai karena membidik langsung ke bagian depan otak. Palmer
            mengatakan bahwa perancangan VR tersebut hanya untuk mengenang
            serial animasi SAO. VR yang Palmer kembangkan tersebut belum
            terealisasi seutuhnya karena banyaknya tantangan untuk
            menyempurnakan rancangannya. Bahkan VR tersebut belum pernah
            diujicobakan oleh Palmer karena ia takut VR buatannya mengalami
            kesalahan teknis dan membunuh penggunanya pada waktu yang salah.
            <h4>Penggunaan VR di Indonesia</h4>
            <img
              src={require("../festival.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Selain inovasi yang diciptakan oleh Palmer, banyak sekali kegiatan
            yang mampu dilakukan melalui VR. Tidak hanya digunakan untuk bermain
            <i>game</i>, VR juga bisa digunakan untuk kepentingan kebudayaan. Di
            Indonesia sendiri, VR pernah digunakan untuk Festival Kebudayaan
            Yogyakarta ketika pandemi pada tahun 2020. Teknologi VR ini
            memberikan pengalaman unik bagi para pengunjung yang memungkinkan
            mereka menikmati berbagai lukisan, patung, instalasi, fotografi,
            audio visual, dan penampilan lainnya melalui <i>website</i>. Pengambilan
            gambar menggunakan kamera 360 derajat, sehingga pengunjung bisa
            merasa seolah hadir secara langsung. Dari perkembangan teknologi
            ini, kita perlahan-lahan mampu merasakan hal yang kita pikir
            hanyalah sebuah fiktif belaka menjadi sebuah kenyataan dan pastinya
            di masa depan, manusia dapat merancang teknologi lainnya yang
            mungkin berguna bagi lingkungan maupun pekerjaan manusia
            sehari-hari. Untuk teman-teman yang suka bermain <i>game</i> menggunakan
            VR, apakah kalian tertarik untuk menggunakan proyek VR terbarunya
            Palmer Luckey? Pastinya proyek VR ini akan sangat menarik, khususnya
            bagi teman-teman yang senang dengan serial animasi SAO. Jangan
            sampai lupa, bahwa VR ini diciptakan hanya untuk mengenang serial
            animasi SAO dan sangat berbahaya jika digunakan. Teman-teman juga
            bisa mengembangkan inovasi kalian seperti Palmer ini ya, buktikan
            bahwa hal fiksi yang hanya sebatas imajinasi bisa dijadikan
            kenyataan! Teman-teman juga bisa berkunjung ke website G untuk
            membaca artikel menarik lainnya!
          </p>
        </div>
        <div className="article">
          <h3>Article 2</h3>
          <p>
            <h4>Jagat Nusantara, Metaverse Buatan Indonesia</h4>
            Beberapa tahun ini masyarakat dunia digegerkan dengan proyek terbaru
            dari salah satu perusahaan teknologi terbesar di dunia, yaitu Meta
            dengan proyeknya yang bernama Metaverse. Metaverse dianggap banyak
            orang sebagai kemajuan teknologi karena mampu menjadikan dunia
            virtual seakan-akan menjadi dunia nyata. Namun, banyak sekali
            masyarakat yang tidak tahu apa itu metaverse. Mari simak
            pembahasannya!
            <h4>Apa itu Metaverse?</h4>
            <img
              src={require("../metaverse.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Metaverse adalah dunia yang diciptakan menggunakan konsep virtual di
            mana penggunanya memiliki akses ke avatar digital yang memungkinkan
            mereka melakukan kegiatan sehari-hari seperti beraktivitas dan
            berinteraksi satu sama lain selayaknya dalam kehidupan nyata.
            Metaverse memiliki mata uang kripto sebagai alat transaksi. Secara
            khusus, <i>cryptocurrency</i> dan non-fungible token (NFT) akan menjadi
            alat pembayaran orang-orang di masa depan. Artinya, tidak ada lagi
            orang membayar menggunakan uang konvensional yang berbeda
            antarnegara dan sering kali tidak stabil.
            <h4>Awal Mula Istilah Metaverse</h4>
            <img
              src={require("../snowcrash.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Istilah Metaverse pertama kali muncul pada salah satu novel karya
            Neal Stephenson yang berjudul Snow Crash. Di dalam novel tersebut,
            diceritakan tentang manusia sebagai avatar yang mampu berinteraksi
            dengan avatar lain di sebuah ruang virtual tiga dimensi. Seiring
            kemajuan teknologi, Metaverse yang digambarkan oleh Neal Stephenson
            mampu dikembangkan walaupun memiliki banyak perbedaan dengan makna
            aslinya.
            <h4>Awal Mula Proyek Metaverse</h4>
            <img
              src={require("../meta.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Mark Zuckerberg memperkenalkan proyek terbarunya yaitu Metaverse,
            hingga mengubah nama Facebook menjadi Meta pada 29 Oktober 2021
            lalu. Salah satu proyek terbesar Meta adalah mewujudkan “Metaverse”,
            yaitu mengembangkan <i>virtual reality</i>. Proyek Metaverse sendiri
            terkenal karena dikembangkan oleh salah satu perusahaan teknologi
            terbesar saat ini, yaitu Facebook. Namun tidak ada perkembangan
            lebih lanjut mengenai proyek Metaverse itu sendiri.
            <h4>Teknologi yang Digunakan Metaverse</h4>
            <img
              src={require("../teknologi.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Metaverse merupakan teknologi yang memberikan penggunanya pengalaman
            hidup di dalam dunia virtual dan dapat melakukan segala aktivitas
            secara virtual. Pengguna dapat berbelanja, bermain, bekerja, bahkan
            berinteraksi dengan orang lain melalui bantuan teknologi <i>augmented
            reality</i> (AR) dan <i>virtual reality</i> (VR). Dari teknologi VR dan AR
            tersebut, Metaverse mampu diciptakan. Contoh penggunaan VR adalah
            menggunakan <i>headset</i> VR untuk beraktivitas secara virtual, seperti
            bekerja, bersekolah, melihat pameran, dan lain-lain. Sementara itu,
            penggunaan AR dapat kita temui pada <i>game</i> Pokemon Go, di mana
            penggunanya harus memainkan <i>game</i> tersebut dengan mengunjungi lokasi
            tertentu. <i>Game</i> tersebut memanfaatkan keadaan dan lingkungan sekitar
            untuk bermain, sehingga pemain hanya perlu datang ke tempat yang
            dituju. Kedua teknologi tersebut diaplikasikan ke dalam Metaverse,
            di mana penggunanya mampu melihat keadaan sekitar secara virtual
            serta mengerjakan kegiatan sesuai dengan lingkungan nyata di
            sekitarnya.
            <h4>Metaverse Buatan Indonesia</h4>
            <img
              src={require("../metaverseindo.png")}
              alt="vr"
              style={{ width: "30em" }}
            />
            <br />
            Indonesia sudah meluncurkan platform digital yang bernama “Jagat
            Nusantara”. Jagat Nusantara sendiri telah diresmikan oleh Presiden
            Jokowi pada 28 Oktober 2022 di Djakarta Theater, Jakarta. Metaverse
            Jagat Nusantara diciptakan langsung oleh orang Indonesia, yaitu
            Wishnutama Kusubandio selaku <i>founder</i> dari PT Avatara Jagat Nusantara
            dan juga berkolaborasi dengan anak muda Indonesia lainnya. Jagat
            Nusantara merupakan gambaran dari Ibu Kota Negara (IKN) Nusantara
            yang masih dalam tahap pembangunan. Jagat Nusantara menyuguhkan
            sensasi Metaverse di mana penggunanya mampu merasakan pengalaman
            berada di IKN, tepatnya di pusat kota baru dan Istana Negara. Jagat
            Nusantara bisa diakses oleh siapa saja, termasuk teman-teman, hanya
            dengan mengunjungi <i>website</i>-nya. Jagat Nusantara diluncurkan ke
            publik dengan harapan masyarakat mendapatkan kesempatan dan peluang
            untuk berbagi ilmu serta bertemu orang-orang hebat dari segala
            penjuru Indonesia. Selain itu, Jagat Nusantara juga memberikan
            kesempatan kepada masyarakat untuk memperkenalkan produk-produk
            kebanggaan Indonesia secara global. Selain digunakan untuk
            memperkenalkan Ibu Kota Negara baru kepada masyarakat, Jagat
            Nusantara juga dapat digunakan untuk mengadakan rapat, pertemuan,
            nonton bareng, konser virtual, pertunjukan seni, serta interaksi
            lainnya yang hanya menggunakan telepon genggam dan <i>website</i>. Bahkan
            pengguna bisa membuat avatar sendiri dan masuk ke dalam dunia
            virtual untuk berinteraksi dengan pengguna lainnya. Dari materi yang
            baru saja dibaca, apakah teman-teman menjadi lebih tertarik dengan
            Metaverse? Selain mengajak masyarakat untuk saling berinteraksi di
            dalam dunia virtual, Jagat Nusantara juga mengajak teman-teman semua
            agar bisa berbagi ilmu dan memperkenalkan produk karya anak bangsa
            lainnya. Jadi teman-teman semua jangan lupa kunjungi <i>website</i> Jagat
            Nusantara! Untuk teman-teman yang tertarik dengan artikel seperti
            ini bisa mengunjungi <i>website</i> Graphenix untuk menemukan artikel
            serupa!
          </p>
        </div>

        <div className="microblog">
          <h3>Microblogging</h3>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper-container2"
            style={{ padding: "2em" }}
          >
            {data.map((i) => {
              return (
                <SwiperSlide key={i.id}>
                  <div className="microblog-container">
                    <div className="feeds">
                      <img src={i.image} />
                    </div>
                    <div className="caption">
                      <p>{i.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
