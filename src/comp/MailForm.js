
import React from "react";
import './MailForm.css';

function MailForm() {
    const popup=() => {
        alert("Merci, notre équipe vous répondra au plus vite");
    }
    return (
        <div className="MailForm">
            <form id="form">
                <label for="firstName">Prénom :</label><br />
                <input className="inputAboutUs" type="text" id="firstName" name="firstName" /><br />
                <label for="name">Nom :</label><br />
                <input className="inputAboutUs" type="text" id="name" name="name" /><br />
                <label for="email">Email :</label><br />
                <input className="inputAboutUs" type="email" id="email" name="email" /><br />
                <label for="message">Message :</label><br />
                <textarea id="message" name="message"></textarea><br />
                <input className="inputAboutUs" type="submit" value="Envoyer" onClick={popup} />
            </form>  
        </div> 
    


    


    )
}



export default MailForm;