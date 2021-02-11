import React, {useCallback, useContext , useState} from 'react'
import {Redirect, withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import { AuthContext } from '../Auth'
import fire from '../firebase/fire'
import './Connect.css'

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

    const [usernameInput , setUsernameInput] = useState('')
    const [userPassword , setUserPassword] = useState('')

    const handleChangeInput = (e) => {
        const value = e.target.value
        setUsernameInput(value)
    }
    const handleChangeInputPw = (e) => {
        const valuePw = e.target.value
        setUserPassword(valuePw)
    }
    

    if (currentUser) {
        return <Redirect 
        to={{ pathname: '/userpage',
            data: {
                 name: usernameInput,
             }}}
        /> 
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
                         <label for="email"> Email</label>
                         <input name="email" type="email" value={usernameInput} onChange={ handleChangeInput}></input>
                     </div>
                     <div className="ConnectFormInput">
                         <label for="password"> Password</label>
                         <input name="password" type="password" value={userPassword} onChange={(e) => handleChangeInputPw(e)}></input>
                     </div>
                 </div>
                 <div className="ConnectFormContainer-Bottom">
                    <button className="ConnectFormBtnValidateInput" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn)