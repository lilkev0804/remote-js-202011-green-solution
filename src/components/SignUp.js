import React, {useCallback, useState} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import fire from '../firebase/fire'
import 'firebase/firestore'
import 'firebase/auth';
import firebase from 'firebase'



const SignUp = ({ history}) => {
    const [visible, setVisible] = useState('')
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const {email, password , username , confirmpassword} = event.target.elements
        if(password.value === confirmpassword.value ){
            fire
            .firestore()
            .collection(email.value).doc('info').set( {
                usernameValue : username.value,
                emailValue : email.value,
                ddcreate: firebase.firestore.FieldValue.serverTimestamp()
            })
            fire
            .firestore()
            .collection(email.value).doc(`avatar`).set({
                avatar : ""
            })
            fire
            .firestore()
            .collection(email.value).doc(`value`).set( {
                values : [],
                date: []
            })
            try{
                await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                history.push("/userpage")
            }catch(error){
                alert(error)
            }
        }else{
            setVisible('visible')
        }
    },[history])
    return (
        <div className="ConnectContainer">
            <form className="ConnectFormContainer" onSubmit={handleSignUp}>
                <div className="ConnectFormContainer-Top">
                    <Link className="ConnectFormBtn-top" to='/login'>Sign In</Link>
                    <p className="ConnectFormBtn-top underlineSign" >Sign Up</p>
                </div>
                <div className="ConnectFormContainer-Middle">
                     <div className="ConnectFormInput">
                         <label for="email"> Email</label>
                         <input name="email" type="email"></input>
                     </div>
                     <div className="ConnectFormInput">
                         <label for="username"> Username</label>
                         <input name="username" type="text"></input>
                     </div>
                     <div className="ConnectFormInput">
                         <label for="password"> Password</label>
                         <input name="password" type="password"></input>
                     </div>
                     <div className="ConnectFormInput">
                         <label for="confirmpassword"> Confirm Password</label>
                         <input name="confirmpassword" type="password"></input>
                     </div>
                 </div>
                 <span className={`ConnectContainerErrorLogin ${visible}`}>Password doesn't match.</span>
                 <div className="ConnectFormContainer-Bottom">
                    <button className="ConnectFormBtnValidateInput" type="submit">Sign Up</button>
                </div>
            </form>
    </div>
  );
};

export default withRouter(SignUp);
