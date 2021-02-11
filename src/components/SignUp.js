import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import fire from '../firebase/fire'
import './Connect.css'

export default function SignUp() {
    const [usernameInput , setUsernameInput] = useState('')
    const [userPassword , setUserPassword] = useState('')
    const [visible, setInvisible] = useState('')
    const [userPasswordVer, setUserPasswordVer] = useState('')
    

    const handleChangeInput = (e) => {
        const value = e.target.value
        setUsernameInput(value)
    }
    const handleChangeInputPw = (e) => {
        const valuePw = e.target.value
        setUserPassword(valuePw)
    }
    const handleChangeInputPwCh = (e) => {
        const valuePwCh = e.target.value
        setUserPasswordVer(valuePwCh)
    }


    const handler = (e) => {
        if(usernameInput !== "" && userPassword === userPasswordVer){
            // let userName = fire.database().ref('profils')
            // fire.database().ref(usernameInput).push(usernameInput)
            // fire.database().ref(usernameInput).push(userPassword)
            // fire.auth().createUserWithEmailAndPassword(usernameInput, userPassword).then((u) =>{
            //         console.log(u)
            // }).catch((err)=>{
            //     console.log(err)
            // })
            fire.database().ref('users/' + usernameInput).set({
                username : usernameInput,
                password: userPassword
            })
            setUsernameInput("")
            setUserPassword("")
        }else{
            setInvisible('visible')
            e.preventDefault();
        }
        
    };
    return (
        <div className="ConnectContainer">
        <form className="ConnectFormContainer">
            <div className="ConnectFormContainer-Top">
                <Link className="ConnectFormBtn-top" to="/signin">Sign In</Link> 
                <span className="ConnectFormBtn-top underlineSign">Sign Up</span>
            </div>
            <div className="ConnectFormContainer-Middle">
                    <div className="ConnectFormInput">
                        <label for="username"> Email</label>
                        <input name="username" value={usernameInput} onChange={ handleChangeInput} type="text"></input>
                    </div>
                    <div className="ConnectFormInput">
                        <label for="password"> Password</label>
                        <input name="password" value={userPassword} onChange={(e) => handleChangeInputPw(e)} type="password"></input>
                    </div>
                    <div className="ConnectFormInput">
                        <label for="password"> Password</label>
                        <input name="password" value={userPasswordVer} onChange={(e) => handleChangeInputPwCh(e)} type="password"></input>
                    </div>
                </div>
                <span className={`alertSignIn invisible ${visible}`}> Password Incorrect</span>
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
