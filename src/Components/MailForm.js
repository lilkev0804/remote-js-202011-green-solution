
import React from "react";
import './MailForm.css';

function MailForm() {
    const popup=() => {
        alert("hello");
    }
    return (
        <div className="MailForm">
            <form id="form">
                <label for="firstName">Prénom :</label><br />
                <input type="text" id="firstName" name="firstName" /><br />
                <label for="name">Nom :</label><br />
                <input type="text" id="name" name="name" /><br />
                <label for="email">Email :</label><br />
                <input classtype="email" id="email" name="email" /><br />
                <label for="message">Message :</label><br />
                <textarea id="message" name="message"></textarea><br />
                <input className="envoyer" type="submit" value="Envoyer" onClick={popup} />
                
            </form>  

        </div> 
    


    


    )
}



export default MailForm;