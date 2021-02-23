import axios from 'axios'
import React, { useState , useEffect } from 'react'
import fire from '../firebase/fire'
import 'firebase/firestore'
import 'firebase/auth';
import './UserPage.css'




export default function UserPage () {
    const [newPassword, setNewPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [element, setElement] = useState([])
    const [distance, setDistance] = useState('')
    const [weight, setWeight] = useState('')
    const [myResult, setMyresult] = useState([''])
    const [selectEmissionFactorsUser,setSelectEmissionFactorsUser] = useState('')
    const [btnMsg, setBtnMsg] = useState('Calculate')
    // const [admin, setAdmin] = useState(['1', '2'])
    const [userName, setUsername] = useState('pseudo')
    // const [name, setName] = useState('') catch username in dB
    const [values, setValues] = useState([""])
    const [dates, setDates] = useState([''])



     const handleChangePassword = (e) => { 
            setNewPassword(e.target.value)
    }

    const newValueInfo = () => {
        let user = fire.auth().currentUser;
        let newPasswords = newPassword;
        user.updatePassword(newPasswords).then(function() {
            alert(newPasswords)
        }).catch((error)=> {
            alert(error)
        });
    }

    useEffect(() => {
        async function req(){
           const request = await axios.get("https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight=")
            await setElement(request.data.aggs)
            setUsername(fire.auth().currentUser.email)
        } 
        req();
    },[])


    const truck = []
    element.map(dat => (
        dat.results.filter(result => (
                result["Identifiant_de_l'élément"].includes("21066") || result["Identifiant_de_l'élément"].includes("21074") || result["Identifiant_de_l'élément"].includes("21052") || result["Identifiant_de_l'élément"].includes("28023") ? truck.push(result.Total_poste_non_décomposé) : ""
                )
            )
        )
    )

    const checkValue = (e) => {
        setSelectEmissionFactorsUser(e.target.value)
    }

    const format = () => {
        let options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date().toLocaleDateString([], options);
    } 

    const catchValue = () => {
        const vehicule = selectEmissionFactorsUser.replace(',' , ".")
        const inputKm = distance.replace(',' , ".")
        const inputWeight = weight.replace(',' , ".")
        const userResult = vehicule * inputKm * inputWeight
        if(userResult === 0 || userResult === " "){
            setMyresult(`Votre résultat est incorrect`)
        }else{
            setMyresult(`Votre résultat ${userResult} kgCo2`)
            fire
            .firestore()
            .collection(userName).add({
                values : [userResult],
                date: format()
            })
            setDistance("")
            setWeight("")
            setSelectEmissionFactorsUser('')
            setBtnMsg('Nouveau calcul')
            // fire
            // .firestore()
            // .collection(userName).onSnapshot(snapshot => {
            //     setValues(snapshot.docs.map(doc => doc.data().values))
            //     setDates(snapshot.docs.map(doc => doc.data().date))
            // })
        }
    } 

    const handleClick = (e) => {
        e.preventDefault()
        if(e.target.value === "historique"){
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
            fire
            .firestore()
            .collection(userName).onSnapshot(snapshot => {
            setValues(snapshot.docs.map(doc => doc.data().values))
            setDates(snapshot.docs.map(doc => doc.data().date))
            })
        }else if(e.target.value === "compte"){
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
        }else{
            document.getElementById(`${e.target.value}`).classList.toggle('invisible')
        }
        
    }


        return (
            <div className="UserPageContainer">
                <div  className={`UserPageHeader`}>
                     <button className="Disconnect-btn" onClick={() => fire.auth().signOut()}>Déconnection </button>
                    <p className="UserPageCurrenntUser"> Bienvenue : {userName}</p>
                </div>
                <div className="UserPageImgProfils">
                    <div>Avatar</div>
                </div>
                <div className="UserPageButton">
                    <button className="UserPageButton-btn"  onClick={handleClick} value="calcul">Calculateur</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="compte">Information de votre compte</button>
                    <button className="UserPageButton-btn" onClick={handleClick} value="historique">Votre historique</button>
                </div>
                    <div  id="compte" className={`UserPageModifiedInfo invisible`}>
                        <p className="UserPageToggleTitle">Modifier votre mot de passe</p>
                        <div className="UserPageToggleContainerInput">
                            <input className="InputUserPageModified" type="text" name="new-password" placeholder="Nouveau mot de passe" onChange={handleChangePassword}></input>
                            <input className="InputUserPageModified" type="text" name="new-password" placeholder="Confirmer mot de passe" onChange={handleChangePassword}></input>
                        <button className="Disconnect-btn" onClick={newValueInfo}>Validez</button>
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
                            <span>{myResult}</span>
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
