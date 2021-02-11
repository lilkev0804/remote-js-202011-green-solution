import React, {useCallback, useContext} from 'react'
import {Redirect, withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import { AuthContext } from '../Auth'
import fire from '../firebase/fire'
import './Connect.css'
import Header from './Header'

const SignIn = ({ history}) => {
    const handleLogin = useCallback(
        async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        try{
            await fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            history.push("/userpage")
        }catch(error){
            alert(error)
        }
    },[history])

    const {currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to='/userpage'/> 
    }
    return (
        <div className="ConnectContainer">
            <form className="ConnectFormContainer" onSubmit={handleLogin}>
                <div className="ConnectFormContainer-Top">
                    <p className="ConnectFormBtn-top underlineSign" >Sign In</p>
                    <Link className="ConnectFormBtn-top" to='/signup'>SignUp</Link>
                </div>
                <div className="ConnectFormContainer-Middle">
                     <div className="ConnectFormInput">
                         <label for="email"> Username</label>
                         <input name="email" type="email"></input>
                     </div>
                     <div className="ConnectFormInput">
                         <label for="password"> Password</label>
                         <input name="password" type="password"></input>
                     </div>
                 </div>
                 <div className="ConnectFormContainer-Bottom">
                    <button className="ConnectFormBtnValidateInput" type="submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn)