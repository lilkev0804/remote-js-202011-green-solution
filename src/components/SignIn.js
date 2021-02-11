import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import fire from '../firebase/fire'
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

    // const checkData = (e) => {
    //     if(usernameInput === UserProfiles.username && userPassword === UserProfiles.password){
    //         setAdress('/userpage')
            
    //     }else{
    //         setInvisible('visible')
    //         e.preventDefault();
    //     }
        
    // };

    // const checkData = () => {
    //     fire.auth().signInWithEmailAndPassword(usernameInput, userPassword).then(() => {
    //         setAdress('/userpage')
    //     }).catch(() => {
    //         setInvisible('visible')
    //     })
    // } 

    const checkData = () => {
        fire.database().ref('users/' + usernameInput).on('value', (snapshot) => {
            const data = snapshot.val()
            const nameInput = data.username
            const passwordInput = data.password
            if(usernameInput === nameInput && userPassword === passwordInput){
                setAdress('/userpage')
            }else{
                console.log("error")
            }
        })
    }

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
                    to={{ pathname: adress,
                    data: {
                         name: usernameInput,
                     }}}
                    onClick={checkData} >Sign in</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn)