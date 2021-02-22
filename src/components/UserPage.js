import React, { Component } from "react";
import fire from "../firebase/fire";
import "./UserPage.css";

export default class UserPage extends Component {
  state = {
    newPassword: "",
    visible: "invisible",
  };

  // toggle

  handleChangePassword = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  };

  newValueInfo = () => {
    let user = fire.auth().currentUser;
    let newPassword = this.state.newPassword;

    user
      .updatePassword(newPassword)
      .then(function () {
        alert(newPassword);
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    return (
      <div className="UserPageContainer">
        <div className="UserPageHeader">
          <button
            className="Disconnect-btn"
            onClick={() => fire.auth().signOut()}
          >
            Disconnect
          </button>
          <p className="UserPageCurrenntUser">
            {" "}
            You are connect with : {fire.auth().currentUser.email}
          </p>
        </div>
        <div className="UserPageImgProfils">
          <div>Img Logo Company</div>
        </div>
        <div className="UserPageInfo"></div>
        <div className="UserPageButton">
          <span className="UserPageButton-btn">Account Information</span>
          <span className="UserPageButton-btn">Calculator</span>
          <span className="UserPageButton-btn">My Historical</span>
        </div>
        <div className={`UserPageModifiedInfo ${this.state.visible}`}>
          <p className="UserPageToggleTitle">Modified your information</p>
          <div className="UserPageToggleContainerInput">
            <input
              className="InputUserPageModified"
              type="password"
              name="new-password"
              placeholder="New Password"
              onChange={this.handleChangePassword}
            ></input>
            <button className="UserPageButton-btn" onClick={this.newValueInfo}>
              Validate modification
            </button>
          </div>
        </div>
        <div className={`UserPageCalculator ${this.state.visible}`}>
          <p className="UserPageToggleTitle">Calculate your CO2 emission</p>
        </div>
        <div className={`UserPageHistorical ${this.state.visible}`}>
          <p className="UserPageToggleTitle">Your CO2 emission Historical</p>
        </div>
      </div>
    );
  }
}
