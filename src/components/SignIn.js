import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import UserProfiles from './UserProfiles'
import './Connect.css'

const SignIn = () => {
    const [usernameInput , setUsernameInput] = useState('')
    const [userPassword , setUserPassword] = useState('')
    const [visible, setInvisible] = useState('')
    const [adress, setAdress] = useState('')
    


    const handleChangeInput = (e) => {
        const value = e.target.value
        setUsernameInput(value)
    }
    const handleChangeInputPw = (e) => {
        const valuePw = e.target.value
        setUserPassword(valuePw)
    }



    const handler = (e) => {
        if(usernameInput === UserProfiles.username && userPassword === UserProfiles.password){
            setAdress('/userpage')
        }else{
            setInvisible('visible')
            e.preventDefault();
        }
        
    };

 
    return (
        <div className="ConnectContainer">
            <form className="ConnectFormContainer" >
                <div className="ConnectFormContainer-Top">
                    <span className="ConnectFormBtn-top underlineSign">Sign In</span>
                    <Link className="ConnectFormBtn-top" to="/signup">Sign Up</Link> 
                </div>
                <div className="ConnectFormContainer-Middle">
                    <div className="ConnectFormInput">
                        <label for="username"> Username</label>
                        <input name="username" value={usernameInput} onChange={ handleChangeInput} type="text"></input>
                    </div>
                    <div className="ConnectFormInput">
                        <label for="password"> Password</label>
                        <input name="password" value={userPassword} onChange={(e) => handleChangeInputPw(e)} type="password"></input>
                    </div>
                </div>
                <span className={`alertSignIn invisible ${visible}`}>Username or password Incorrect</span>
                <div className="ConnectFormContainer-Bottom">
                    <Link className="ConnectFormBtnValidateInput" 
                    to={{ pathname: `/userpage`,
                    data: {
                         name: usernameInput,
                     }}}
                    onClick={handler} >Sign in</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn)