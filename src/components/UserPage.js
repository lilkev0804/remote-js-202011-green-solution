import React, { Component } from 'react'
import './UserPage.css'

export default class UserPage extends Component {
    state = {
        name : ""
    }

    catchValue= (name) => {
        const userNameInput = name
        this.setState({name : userNameInput})
    }
    componentDidMount(){
        const {name} = this.props.location.data
        this.catchValue(name)
    }

    render() {
        return (
            <div className="UserPageContainer">
                <div className="UserPageHeader">
                    <p> You are connect with : {this.state.name}</p>
                </div>
                <div className="UserPageImgProfils">
                    <div>Img Logo Company</div>
                </div>
                <div className="UserPageInfo">

                </div>
                <div className="UserPageButton">
                    <span className="UserPageButton-btn">Account Information</span>
                    <span className="UserPageButton-btn">My Historical</span>
                </div>
            </div>
        )
    }
}




