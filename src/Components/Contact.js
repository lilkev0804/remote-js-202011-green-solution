import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';
const userID = "user_fELVRdb1kJc5SzL1ge2Br";
const serviceID = 'default_service';

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   /*const emailTop = () => {
     let mail = document.getElementById('not-mail');
     let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


     if (email.match(regex)) {
       mail.style.display = 'none';
       return true;
     } else {
       mail.style.display = 'block';
       mail.style.animation= 'dongle is';
       setTimeout(() => {
         mail.style.animation = 'none';
       }, 1000);
       return false;
     }
    };*/
  
    const failMessage =() => {
      let formMess = document.querySelector ('.form-message');

      formMess.innerHTML = 'Les champs * sont mal remplis';
      formMess.style.opacity = '1';
      formMess.style.background = 'rgb(235,87,87)';
      formMess.style.color= "white";

      document.getElementById('name').classList.add('erreur');
      document.getElementById('company').classList.add('erreur');
      document.getElementById('message').classList.add('erreur');
      document.getElementById('email').classList.add('erreur');
    }

    const successMessage = () => {
      let formMess = document.querySelector('.form-message');

      formMess.innerHTML = 'Message envoyé';
      formMess.style.background = '#00c1ec';
      formMess.style.opacity = '1';

      document.getElementById('name').classList.remove('erreur');
      document.getElementById('company').classList.remove('erreur');
      document.getElementById('message').classList.remove('erreur');
      document.getElementById('email').classList.remove('erreur');
    }

  
  const handleSubmit = (ingrid) => {
    ingrid.preventDefault();

    if (name && email && message ) {
      console.log(name)
      console.log(company)
      console.log(email)
      console.log(message)
    sendFeedback("template_29en9tb", {
      name,
      company,
      email,
      message
    });
    
  } else { 
    failMessage ();
    }
  
  };

  const sendFeedback = (templateId, templateParams) => {
    console.log(serviceID)
    console.log(templateId)
    console.log(templateParams)
    console.log(userID)

    let res = emailjs
      .send(serviceID, templateId,templateParams, userID)
      .then((res) => {
        successMessage();
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
      })
      .catch(
        failMessage()
      )

      console.log(res);
  };
  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(ingrid) => setName(ingrid.target.value)}
          placeholder="Nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(ingrid) => setCompany(ingrid.target.value)}
          placeholder="Société"
          value={company}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(ingrid) => setEmail(ingrid.target.value)}
            placeholder="Email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(ingrid) => setMessage(ingrid.target.value)}
          placeholder="Message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={(ingrid) => handleSubmit(ingrid)}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default Contact;


