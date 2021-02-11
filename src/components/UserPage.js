import React, { Component } from 'react'
import fire from '../firebase/fire'
import './UserPage.css'


export default class UserPage extends Component {
    state = {
        name : "hello",
        newUserName : "",
        newPassword : ""
    }


    render() {
        console.log(this.state.name)
        return (
            
            <div className="UserPageContainer">
                <div className="UserPageHeader">
                     <button className="Disconnect-btn" onClick={() => fire.auth().signOut()}>Disconnect</button>
                    <p> You are connect with : {this.state.name}</p>
                </div>
                <div className="UserPageImgProfils">
                    <div>Img Logo Company</div>
                </div>
                <div className="UserPageInfo">

                </div>
                <div className="UserPageButton">
                    <span className="UserPageButton-btn">Account Information</span>
                    <span className="UserPageButton-btn">Calculator</span>
                    <span className="UserPageButton-btn" onClick={this.checkData}>My Historical</span>
                </div>
                <div className="UserPageModifiedInfo">
                    <p className="UserPageToggleTitle">Modified your information</p>
                    <div className="UserPageToggleContainerInput">
                        <input className="InputUserPageModified" type="password" name="new-password" placeholder="New Password" onChange={this.handleChangePassword}></input>
                        <button onClick={this.newValueInfo}>Validate modification</button>
                    </div>
                </div>
                <div className="UserPageCalculator">
                    <p className="UserPageToggleTitle">Calculate your CO2 emission</p>
                </div>
                <div className="UserPageHistorical">
                <p className="UserPageToggleTitle">Your CO2 emission Historical</p>
                </div>
                
            </div>
        )
    }
}




