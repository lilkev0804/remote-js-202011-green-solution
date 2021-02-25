import axios from 'axios'
import React, { useState , useEffect } from 'react'
import fire from '../firebase/fire'
import 'firebase/firestore'
import 'firebase/auth'
import './UserPage.css'
import firebase from 'firebase';




export default function UserPage () {
    const [visible, setVisible] = useState(true) // To toggle element
    const [element, setElement] = useState([])
    const [distance, setDistance] = useState('')
    const [weight, setWeight] = useState('')
    const [myResult, setMyresult] = useState([''])
    const [selectEmissionFactorsUser,setSelectEmissionFactorsUser] = useState('')
    const [btnMsg, setBtnMsg] = useState('Calculate')
    const [userName, setUsername] = useState('pseudo') // To catch email with DB
    const [name, setName] = useState('') // To catch username with DB
    const [values, setValues] = useState([""])
    const [dates, setDates] = useState([''])
    const [urlImg, setUrlImg] = useState('') // To catch Img from DB
    const [catchUrlImg, setCatchUrlImg] = useState("truck4") // To print Img in dom
    const [newUserName, setNewUserName] = useState('') // To change Username
    const[newPasswordEnter, setNewPasswordEnter] =useState("") // To send Password to DB
    const[newPasswordEnterC, setNewPasswordEnterC] =useState('') // To catch NewPass user Input
    const [messagePassword, setMessagePassword] = useState('') // To catch NewPassConfirm user Input
    const [messageModified, setMessageModified] =useState("") // Message when u change avatar
    const [messageModifiedPseudo, setMessageModifiedPseudo] =useState('')  // Message when u change username


    //Function to update password
    const newValueInfo = () => {
        let user = fire.auth().currentUser;
        let newPasswords = newPasswordEnter;
        const styleMessage = document.querySelector('.MessagePasswords')
        if(newPasswordEnter !== newPasswordEnterC){
            styleMessage.style.color ="red"
            setMessagePassword('Mot de passe non identique')
        }else{
            user.updatePassword(newPasswords).then(function() {
                styleMessage.style.color ="white"
                setMessagePassword(`Votre nouveau mot de passe est ${newPasswords}`)
            }).catch(()=> {
                styleMessage.style.color ="red"
                setMessagePassword('Une erreur à été rencontré')
            });
        }

    }
     //Function new pseudo
     const handleNewUsername =() => {
        if(newUserName === ""){
            setMessageModifiedPseudo("Entrez un nouveau pseudo !")
        }else {
            fire
            .firestore()
            .collection(userName).doc(`info`).update({
                usernameValue : newUserName
            })
            setName(newUserName)
            setMessageModifiedPseudo("Pseudo mise à jour !")
        }
    }
    //Function to catch choice of Avatar by user
        const myAvatar = (e) => {
            setUrlImg(e.target.value)
        }
    // Function to add / update avatar in DB
    const send = () => {
        if(urlImg === ""){
            setMessageModified("Choisissez un avatar !")
        }else{
            fire
            .firestore()
            .collection(userName).doc(`avatar`).update({
                avatar : urlImg
            })
            setVisible(!visible)
            setMessageModified("Avatar mise à jour !")
        }
    }
    //Function to check if avatar is load or not
    const checkAvatar = () => {
        if(catchUrlImg === " "){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    //Function for get pseudo
    fire.firestore().collection(userName).doc('info').get().then((doc) => {
        if(doc.exists){
            setName(doc.data().usernameValue)
        }else{
            setName('Inconnue')
        }
    })


    useEffect(() => {
        setUsername(fire.auth().currentUser.email)
        async function req(){
           const request = await axios.get("https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight=")
            await setElement(request.data.aggs) 
        } 
        req()
        checkAvatar()
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
            if(vehicule === ""){
                setMyresult('Selectionnez un type de véhicule !')
            }else{
                setMyresult(`Votre résultat est égale à zero !`)
            }
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
        const value = e.target.value
        const historique = document.getElementById("historique")
        const compte = document.getElementById('compte')
        const calcul = document.getElementById('calcul')
        if(value === "calcul"){
            calcul.classList.toggle('invisible')
            compte.classList.add('invisible')
            historique.classList.add('invisible')
        }else if(value === 'compte'){
            calcul.classList.add('invisible')
            compte.classList.toggle('invisible')
            historique.classList.add('invisible')
            setMessagePassword("")
            setNewPasswordEnter('')
            setNewPasswordEnterC('')
            setMessageModified('')
            setMessageModifiedPseudo('')
        }else{
            historique.classList.toggle('invisible')
            calcul.classList.add('invisible')
            compte.classList.add('invisible')
            fire.firestore().collection(userName).doc(`value`).get().then((doc) => {
                if(doc.exists){
                    setValues(doc.data().values)
                    setDates(doc.data().date)
                }else{
                    console.log('non document')
                }
            })
        }
    }



   

    const ChangeAvatar = () => {
        return (<>
        <div className="allInputUser">
        <div className="groupeRadio">
                <input type="radio" id="truck1" name="truck1" value="truck1" onClick={myAvatar} select />
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
        <p className="MessagePasswords">{messageModified}</p>
        <button className="Disconnect-btn" onClick={send}>Valider</button>
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
                <div className="UserPageButton">
                    <button className="UserPageButton-btn"  onClick={handleClick} value="calcul">Calculateur</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="compte">Information de votre compte</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="historique">Votre historique</button>
                </div>
                    <div id="compte" className={`UserPageModifiedInfo invisible `}>
                        <div className="modified-avatar-already">
                            <p className="UserPageToggleTitle">Modifier votre mot de passe</p>
                                <div className="UserPageToggleContainerInput">
                                    <input className="InputUserPageModified" type="text" name="new-password" placeholder="Nouveau mot de passe" value={newPasswordEnter} onChange={(e) => setNewPasswordEnter(e.target.value)}></input>
                                    <input className="InputUserPageModified" type="text" name="new-password-verified" placeholder="Confirmer mot de passe" value={newPasswordEnterC} onChange={(e) => setNewPasswordEnterC(e.target.value)}></input>
                                    <p className="MessagePasswords">{messagePassword}</p>
                                    <button className="Disconnect-btn" onClick={newValueInfo}>Validez</button>
                                </div>
                        </div>
                        <div className="modified-avatar-already">
                            <p className="UserPageToggleTitle">Modifier votre avatar</p>
                            <ChangeAvatar></ChangeAvatar>
                        </div>
                        <div className="modified-avatar-already">
                            <p className="UserPageToggleTitle">Modifier votre pseudo</p>
                            <p className="line-p">Votre pseudo actuel est <span className="grassSpan">{name}</span> </p>
                            <div className="inputNewUsername">
                                <input className="InputUserPageModified" placeholder="Votre nouveau pseudo" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}></input>
                                <p className="MessagePasswords">{messageModifiedPseudo}</p>
                                <button className="Disconnect-btn" onClick={handleNewUsername}>Valider</button>
                            </div>
                        </div>
                    </div>
                    <div id="calcul" className={`UserPageCalcul invisible`}>
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

// Made with love