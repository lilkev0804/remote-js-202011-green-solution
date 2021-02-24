import axios from 'axios'
import React, { useState , useEffect } from 'react'
import fire from '../firebase/fire'
import 'firebase/firestore'
import 'firebase/auth'
import './UserPage.css'
import firebase from 'firebase';




export default function UserPage () {
    const [newPassword, setNewPassword] = useState('')
    const [visible, setVisible] = useState(true)
    const [element, setElement] = useState([])
    const [distance, setDistance] = useState('')
    const [weight, setWeight] = useState('')
    const [myResult, setMyresult] = useState([''])
    const [selectEmissionFactorsUser,setSelectEmissionFactorsUser] = useState('')
    const [btnMsg, setBtnMsg] = useState('Calculate')
    const [userName, setUsername] = useState('pseudo')
    const [name, setName] = useState('') 
    const [values, setValues] = useState([""])
    const [dates, setDates] = useState([''])
    const [urlImg, setUrlImg] = useState('')
    const [catchUrlImg, setCatchUrlImg] = useState("")
    const[messageBtnAvatar, setMessageBtnAvatar]= useState('Choisissez votre avatar')

    //Function to catch new password from user
    const handleChangePassword = (e) => { 
            setNewPassword(e.target.value)
    }
    //Function to update password
    const newValueInfo = () => {
        let user = fire.auth().currentUser;
        let newPasswords = newPassword;
        user.updatePassword(newPasswords).then(function() {
            alert(newPasswords)
        }).catch((error)=> {
            alert(error)
        });
    }
    // Function toggle avatar div 
    const choiceAvatar =() => {
        setVisible(!visible)
    }
    //Function to catch choice of Avatar by user
    const myAvatar = (e) => {
        setUrlImg(e.target.value)
    }
    // Function to add avatar in DB
    const send = () => {
        fire
        .firestore()
        .collection(userName).doc(`avatar`).update({
            avatar : urlImg
        })
        setVisible(!visible)
        setMessageBtnAvatar(`Changer d'avatar`)
    }

    useEffect(() => {
        setUsername(fire.auth().currentUser.email)
        async function req(){
           const request = await axios.get("https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight=")
            await setElement(request.data.aggs) 
        } 
        req()
    },[])

    //Function to catch CO2 in APi
    const truck = []
    element.map(dat => (
        dat.results.filter(result => (
                result["Identifiant_de_l'élément"].includes("21066") || result["Identifiant_de_l'élément"].includes("21074") || result["Identifiant_de_l'élément"].includes("21052") || result["Identifiant_de_l'élément"].includes("28023") ? truck.push(result.Total_poste_non_décomposé) : ""
                )
            )
        )
    )

    // if avatar is load in DB
    fire.firestore().collection(userName).doc(`avatar`).get().then((doc) => {
        if(doc.exists){
            setCatchUrlImg(doc.data().avatar)
            document.getElementById('button-avatar').style.display ="none"
        }else{
            setCatchUrlImg('truck4')
        }
    })
    // Function for catch, the select value by user
    const checkValue = (e) => {
        setSelectEmissionFactorsUser(e.target.value)
    }
    //Function for format date
    const format = () => {
        let options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date().toLocaleDateString([], options);
    } 
    //function for calcul and push in DB
    const catchValue = () => {
        const vehicule = selectEmissionFactorsUser.replace(',' , ".")
        const inputKm = distance.replace(',' , ".")
        const inputWeight = weight.replace(',' , ".")
        const userResult = Math.floor(vehicule * inputKm * inputWeight)
        if(userResult === 0 || userResult === " "){
            setMyresult(`Votre résultat est égale à zero`)
        }else{
            setMyresult(`Votre résultat ${userResult} kgCo2`)
            fire
            .firestore()
            .collection(userName).doc(`value`).update( {
                values : firebase.firestore.FieldValue.arrayUnion(userResult),
                date: firebase.firestore.FieldValue.arrayUnion(format())
            })
            setDistance("")
            setWeight("")
            setSelectEmissionFactorsUser('')
            setBtnMsg('Nouveau calcul')
        }
    } 

    //Function for toggle and refresh historical value
    const handleClick = (e) => {
        e.preventDefault()
        if(e.target.value === "historique"){
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
            fire.firestore().collection(userName).doc(`value`).get().then((doc) => {
                if(doc.exists){
                    setValues(doc.data().values)
                    setDates(doc.data().date)
                }else{
                    console.log('non document')
                }
            })
        }else if(e.target.value === "compte"){
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
        }else{
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
        }
    }


    //Function for get pseudo
    fire.firestore().collection(userName).doc('info').get().then((doc) => {
        if(doc.exists){
            setName(doc.data().usernameValue)
        }else{
            setName('inconnue')
        }
    })
    
    const ChangeAvatar = () => {
        return (<>
        <div className="allInputUser">
        <div className="groupeRadio">
                <input type="radio" id="truck1" name="truck1" value="truck1" onClick={myAvatar} checked/>
                <label for="truck1"><img className="imgchoiceavatar" src="img/truck1.svg"  alt='delivery truck'></img></label>
            </div>
            <div className="groupeRadio">
                <input type="radio" id="truck2" name="truck2" value="truck2" onClick={myAvatar}/>
                <label for="truck2"><img className="imgchoiceavatar" src="img/truck2.svg" alt='truck'></img></label>
            </div>
            <div className="groupeRadio">
                <input type="radio" id="truck3" name="truck3" value="truck3" onClick={myAvatar}/>
                <label for="truck3"><img className="imgchoiceavatar" src="img/truck3.svg" alt='delivery truck'></img></label>
            </div>
            <div className="groupeRadio">
                <input type="radio" id="truck4" name="truck4" value="truck4" onClick={myAvatar}/>
                <label for="truck4"><img className="imgchoiceavatar" src="img/truck4.svg" alt='delivery truck'></img></label>
            </div>
        </div>
        <button className="button-choiceAvatar" onClick={send}>Valider</button>
        </>)
    }
        return (
            <div className="UserPageContainer">
                <div  className={`UserPageHeader`}>
                     <button className="Disconnect-btn" onClick={() => fire.auth().signOut()}>Déconnection </button>
                </div>
                <p className="UserPageCurrenntUser"> Bienvenue <span className="userNameSpan">{name}</span> dans votre espace personnel 😀 </p>
                <div className="AvatarVisible">
                    <img className="imgAvatar" src={`img/${catchUrlImg}.svg`} alt="logo avatar"/>
                </div>
                <div className={`UserPageImgProfils `}>
                    <button className={`Disconnect-btn ${visible ?  "" : " invisible"}`} id="button-avatar" onClick={choiceAvatar}>Choisir votre avatar</button>
                    <div className={`formchoiceAvatar ${visible ?  "invisible" : " "} `} >
                        <h2>{messageBtnAvatar}</h2>

                        <ChangeAvatar></ChangeAvatar>
                    </div>
                </div>
                <div className="UserPageButton">
                    <button className="UserPageButton-btn"  onClick={handleClick} value="calcul">Calculateur</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="compte">Information de votre compte</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="historique">Votre historique</button>
                </div>
                    <div  id="compte" className={`UserPageModifiedInfo invisible`}>
                        <div>
                            <p className="UserPageToggleTitle">Modifier votre mot de passe</p>
                                <div className="UserPageToggleContainerInput">
                                    <input className="InputUserPageModified" type="text" name="new-password" placeholder="Nouveau mot de passe" onChange={handleChangePassword}></input>
                                    <input className="InputUserPageModified" type="text" name="new-password" placeholder="Confirmer mot de passe" onChange={handleChangePassword}></input>
                                    <button className="Disconnect-btn" onClick={newValueInfo}>Validez</button>
                                </div>
                        </div>
                        <div>
                            <p className="UserPageToggleTitle">Modifier votre avatar</p>
                            <ChangeAvatar></ChangeAvatar>
                        </div>
                    </div>
                    <div id="calcul" className="calcul invisible">
                        <p className="UserPageToggleTitle">Calculateur</p>
                        <div className="inputBoxVehicule">
                        <label for="vehicule" className="calculator-titleBox">Type de véhicule : </label>
                            <select name="vehicule" id="vehiculeSelect" onChange={checkValue} className="vehiculeList" >
                                <option className="vehiculeList" value={truck[9]} >Vehicule utilitaire 3,5T</option> 
                                <option className="vehiculeList" value={truck[0]} >Poids lourd 19T</option> 
                                <option className="vehiculeList" value={truck[1]} >Poids lourd 26T</option>
                                <option className="vehiculeList" value={truck[2]} >Poids lourd 40T</option>
                            </select>
                        </div>
                        <div className="inputUserBlock">
                                <label for="distance" className="calculator-titleBox">Distance : </label>
                                <div className="inputUserkm">
                                    <input name='distance' value={distance} onChange={(e) => setDistance(e.target.value)} className="calculator-input" id="kmInput" placeholder="Km" required/>
                                </div>
                        </div>
                        <div className="inputUserBlock">
                                <label for="poids" className="calculator-titleBox">Poids de la marchandise : </label>
                                <div className="inputUserkm">
                                    <input name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="calculator-input" id="inputWeight" placeholder="Tonnes" required/>
                                </div>
                        </div>
                        <div className="afterResult">
                            <button className="Disconnect-btn" onClick={catchValue}>{btnMsg}</button>
                            <span className="message-result-user">{myResult}</span>
                        </div>
                    </div>
                    <div id="historique" className={`UserPageHistorical invisible`}>
                        <p className="UserPageToggleTitle">Vos émissions de CO2</p>
                       <div className="listvalute">
                        <ul className="historyList">
                            {values.map(value => (
                                <li>Emission : {value} KgCO2</li>
                            ))}
                            </ul>
                            <ul className="historyList">
                            {dates.map(date => (
                                <li>Jour : {date}</li>
                            ))}
                        </ul>
                       </div>
                    </div>
            </div>
        )
}
