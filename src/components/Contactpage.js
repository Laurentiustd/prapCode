import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="contactpage-container" style={{fontFamily:'Poppins'}}>
      <Navbar />

      <div className="contactpage-title" style={{ padding: "3em" }}>
        <h1>Lets Discuss <span>Our</span> Project</h1>
      </div>
      <div className="contactform-container">
        <div className="form-wrapper">
          <div className="form">
            <label for="email" className="name-label">
              Enter Your Name :
            </label>
            <br />
            <input type="text" className="name" id="name" placeholder=" " />
            <br />
            <label for="email" className="email-label">
              Enter Your Email :
            </label>
            <br />
            <input type="text" id="email" className="email" placeholder=" " />
            <br />
            <label for="email" className="number-label">
              Enter Your Number :
            </label>
            <br />
            <input type="text" id="number" className="number" placeholder=" " />
            <br />
            <label for="message" className="message-label">
              Enter Your Message :
            </label>
            <br />
            <textarea
              name="text1"
              id="text1"
              cols="50"
              rows="10"
              style={{ marginTop: "1em", backgroundColor:'#F5FBFF' }}
            ></textarea>
            <br />
            <button
              type="submit"
              id="sendButton"
              style={{ width: "8em", margin: "3em auto" }}
            >
              Send
            </button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.113929150008!2d106.8072655!3d-6.226967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1076df299376c45!2sThe%20Swillhouse!5e0!3m2!1sid!2sid!4v1669903165705!5m2!1sid!2sid"
          width="800"
          height="650"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
