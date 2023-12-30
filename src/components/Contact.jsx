// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import {
  UilFacebook,
  UilLinkedin,
  UilInstagram,
  UilGithub,
  UilEnvelope,
  UilArrowFromTop,
} from "@iconscout/react-unicons";
import { useState } from "react";
import Form from "./Form";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <footer className="contact_section" id="Footer">
      <div className="contact_container">
        <p className="contact_p">&lt; Contact &gt;</p>

        <h2>Find me on:</h2>

        <div className="contacts">
          <div className="contact">
            <a
              href="https://www.facebook.com/sandesh.pandey.77398"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link">
                <i>
                  <UilFacebook />
                </i>
                <h4>Siddhant Pandey</h4>
              </div>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/s-pandey-a7895b273/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="contact-link">
                <i>
                  <UilLinkedin />
                </i>
                <h4>Siddhant Pandey</h4>
              </div>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.facebook.com/sandesh.pandey.77398"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="contact-link">
                <i>
                  <UilInstagram />
                </i>
                <h4>Siddhant Pandey</h4>
              </div>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://github.com/MrTheory22"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="contact-link">
                <i>
                  <UilGithub />
                </i>
                <h4>Mr.Theory</h4>
              </div>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://mail.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="contact-link">
                <i>
                  <UilEnvelope />
                </i>
                <h4>pandeysiddhant0922@gmail.com</h4>
              </div>
            </a>
          </div>
        </div>
        <button className="contact_btn" onClick={toggleForm}>
          Get in Contact
        </button>
        {showForm && (
          <div className="contact_scroll">
            <p>Scroll down</p>
            <UilArrowFromTop className="arrow_down" />
          </div>
        )}
        {showForm && <Form />}
      </div>
    </footer>
  );
}
