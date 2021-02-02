import React from "react";
import './MailForm.css';

function MailForm() {
    return (
        <div className="MailForm">
            <form id="form">
                <label for="firstName">Prénom :</label><br />
                <input type="text" id="firstName" name="firstName" /><br />
                <label for="name">Nom :</label><br />
                <input type="text" id="name" name="name" /><br />
                <label for="email">Email :</label><br />
                <input type="email" id="email" name="email" /><br />
                <label for="message">Message :</label><br />
                <textarea id="message" name="message"></textarea><br />
                <input type="submit" value="Submit" />
                
            </form>  

        </div> 
    


    


    )
}



export default MailForm;