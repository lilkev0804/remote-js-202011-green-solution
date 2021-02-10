import React, { Component } from 'react'

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
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}




