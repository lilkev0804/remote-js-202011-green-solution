import React from "react";
import "./MailForm.css";


class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
        alert("Message envoyé");
      }
    
  render() {
    return (
      <div className="MailForm-background">
        <div className="MailForm">
        
          <form onSubmit={this.submitForm}>
            <fieldset>
              <div>
                <h1>Contactez nous</h1>
              </div>
              <div className="form-data">
                <label htmlFor="name">
                  Nom<span> * </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  required
                  value={this.state.name}
                />
              </div>
              <hr />
              <div className="form-data">
                <label htmlFor="email">
                  Email<span> * </span>
                </label>
                <input className="input-mail"
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.onChange}
                  required
                  value={this.state.society}
                />
              </div>
              <hr />
              <div className="form-data">
                <label htmlFor="message">
                  Message<span> * </span>
                </label>
                <textarea className="form-textarea"
                  id="message"
                  name="message"
                  onChange={this.onChange}
                  required
                  value={this.state.message}
                />
              </div>
              <hr />
              <br />
              <p>
                <span> * </span> Champs requis
              </p>
              <div className="form-data">
                <input className="mail-btn" type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
        </div>
        </div>
    );
  }}

  export default MailForm;

