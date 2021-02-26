import React, { useCallback, useContext, useState } from "react";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import fire from "../firebase/fire";
import "./Connect.css";

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/userpage");
      } catch (error) {
        setVisible("visible");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  const [usernameInput, setUsernameInput] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [visible, setVisible] = useState("");

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setUsernameInput(value);
  };
  const handleChangeInputPw = (e) => {
    const valuePw = e.target.value;
    setUserPassword(valuePw);
  };

  if (currentUser) {
    return (
      <Redirect
        to={{
          pathname: "/userpage",
          data: {
            name: usernameInput,
          },
        }}
      />
    );
  }
  return (
    <div className="ConnectContainer">
      <form className="ConnectFormContainer" onSubmit={handleLogin}>
        <div className="ConnectFormContainer-Top">
          <p className="ConnectFormBtn-top underlineSign">Se connecter</p>
          <Link className="ConnectFormBtn-top" to="/signup">
            S'enregistrer
          </Link>
        </div>
        <div className="ConnectFormContainer-Middle">
          <div className="ConnectFormInput">
            <label for="email"> Email</label>
            <input
              name="email"
              type="email"
              value={usernameInput}
              onChange={handleChangeInput}
            ></input>
          </div>
          <div className="ConnectFormInput">
            <label for="password"> Mot de passe</label>
            <input
              name="password"
              type="password"
              value={userPassword}
              onChange={(e) => handleChangeInputPw(e)}
            ></input>
          </div>
        </div>
        <span className={`ConnectContainerErrorLogin ${visible}`}>
          Email ou mot de passe incorrect
        </span>
        <div className="ConnectFormContainer-Bottom">
          <button className="ConnectFormBtnValidateInput" type="submit">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
