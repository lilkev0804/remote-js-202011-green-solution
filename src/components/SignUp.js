import React, {useCallback} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import fire from '../firebase/fire'

const SignUp = ({ history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        try{
            await fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/userpage")
        }catch(error){
            alert(error)
        }
    },[history])
    return (
        <div className="ConnectContainer">
            <form className="ConnectFormContainer" onSubmit={handleSignUp}>
                <div className="ConnectFormContainer-Top">
                    <Link className="ConnectFormBtn-top" to='/login'>SignIn</Link>
                    <p className="ConnectFormBtn-top underlineSign" >Sign Up</p>
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

export default withRouter(SignUp)