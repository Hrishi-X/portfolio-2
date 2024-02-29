import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, seterror] = useState(null);
  const [Success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4q1kkv",
        "template_0huctqp",
        formRef.current,
        "k1wUTcC452As1hEMu"
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          seterror(true);
        }
      );
  };

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work Together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hrishikeshshinde008@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Mahalaxmi,Mumbai-400011</span>
        </div>
        <div className="item">
          <h2>whatsApp</h2>
          <span>+91 8888212895</span>
        </div>
      </div>
      <div className="formContainer">
        <form
          onSubmit={sendEmail}
          ref={formRef}
          action="
         "
        >
          <input type="text" required placeholder="name" name="name" />
          <input type="email" required placeholder="Email" name="email" />

          <textarea
            id=""
            placeholder="Message"
            rows={10}
            name="message"
          ></textarea>
          <button>Submit</button>
          {error && "Error"}
          {Success && "Success"}
        </form>
      </div>
    </div>
  );
};

export default Contact;
