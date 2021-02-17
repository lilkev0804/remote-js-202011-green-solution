import React, { Component } from 'react'
import fire from '../firebase/fire'
import './UserPage.css'




export default class UserPage extends Component {
    state = {
        newPassword:'',
        visible: "invisible",
        userName: ''
    }

    // toggle 
    handleClick =(e) => {
        const value = e.target.innerHTML
        if(value.includes('Account')){
            console.log('ok')
        }else if(value.includes('Calculator')){
            console.log("Calculator")
        }else{
            console.log("historical")
        }
    }

    handleChangePassword = (e) => { 
        this.setState({
            newPassword : e.target.value
        })
    }

    newValueInfo = () => {
        let user = fire.auth().currentUser;
        let newPassword = this.state.newPassword;

        user.updatePassword(newPassword).then(function() {
            alert(newPassword)
        }).catch((error)=> {
            alert(error)
        });
    }

    userName = () => {
        if(fire.auth().currentUser.email === "lemarie.kevin3@gmail.com"){
            this.setState({username : "hello"})
        }else{
            return 'fatal error'
        }
    }



    render() {
        return (
            
            <div className="UserPageContainer">
                <div className="UserPageHeader">
                     <button className="Disconnect-btn" onClick={() => fire.auth().signOut()}>Disconnect</button>
                    <p className="UserPageCurrenntUser"> You are connect with : {fire.auth().currentUser.email}{this.state.userName}</p>
                </div>
                <div className="UserPageImgProfils">
                    <div>Img Logo Company</div>
                </div>
                <div className="UserPageInfo">

                </div>
                <div className="UserPageButton">
                    <span className="UserPageButton-btn" onClick={this.handleClick}>Calculator</span>
                    <span className="UserPageButton-btn" onClick={this.handleClick}>Account Information</span>
                    <span className="UserPageButton-btn" onClick={this.handleClick}>My Historical</span>
                </div>
                    <div id="account-info" className={`UserPageModifiedInfo ${this.state.visible}`}>
                        <p className="UserPageToggleTitle">Modified your information</p>
                        <div className="UserPageToggleContainerInput">
                            <input className="InputUserPageModified" type="password" name="new-password" placeholder="New Password" onChange={this.handleChangePassword}></input>
                        <button className="UserPageButton-btn" onClick={this.newValueInfo}>Validate modification</button>
                        </div>
                    </div>
                    <div className="calculator">
                        
                    </div>
                    <div id="historical" className={`UserPageHistorical ${this.state.visible}`}>
                        <p className="UserPageToggleTitle">Your CO2 emission Historical</p>
                    </div>
            </div>
        )
    }
}




