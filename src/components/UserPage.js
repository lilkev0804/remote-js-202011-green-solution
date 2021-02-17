import axios from 'axios'
import React, { useState , useEffect } from 'react'
import fire from '../firebase/fire'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth';
import './UserPage.css'




export default function UserPage () {
    const [newPassword, setNewPassword] = useState('')
    // const [visible, setVisible] = useState('invisible')
    const [element, setElement] = useState([])
    const [distance, setDistance] = useState('')
    const [weight, setWeight] = useState('')
    const [myResult, setMyresult] = useState([''])
    const [selectEmissionFactorsUser,setSelectEmissionFactorsUser] = useState('')
    const [btnMsg, setBtnMsg] = useState('Calculate')
    // const [admin, setAdmin] = useState(['1', '2'])
    const [userName, setUsername] = useState('pseudo')
    const[name, setName] = useState('')
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
    },[myResult])

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
    

    const date = new Date()
    const catchValue = () => {
        const vehicule = selectEmissionFactorsUser.replace(',' , ".")
        const inputKm = distance.replace(',' , ".")
        const inputWeight = weight.replace(',' , ".")
        const userResult = vehicule * inputKm * inputWeight
        setMyresult(`Votre résultat ${userResult} kgCo2`)
        fire
        .firestore()
        .collection(userName).add({
            values : [userResult],
            date: date.getDate()
        })
        setDistance("")
        setWeight("")
        setSelectEmissionFactorsUser('')
        setBtnMsg('Try Again')
        fire
        .firestore()
        .collection(userName).onSnapshot(snapshot => {
            setValues(snapshot.docs.map(doc => doc.data().values))
            setDates(snapshot.docs.map(doc => doc.data().date))
        })
    } 
    
        return (
            
            <div className="UserPageContainer">
                <div className="UserPageHeader">
                     <button className="Disconnect-btn" onClick={() => fire.auth().signOut()}>Disconnect</button>
                    <p className="UserPageCurrenntUser"> You are connect with : {userName}</p>
                </div>
                <div className="UserPageImgProfils">
                    <div>{name}</div>
                </div>
                <div className="UserPageInfo">

                </div>
                <div className="UserPageButton">
                    <span className="UserPageButton-btn" >Calculator</span>
                    <span className="UserPageButton-btn" >Account Information</span>
                    <span className="UserPageButton-btn" >My Historical</span>
                </div>
                    <div id="account-info" className={`UserPageModifiedInfo `}>
                        <p className="UserPageToggleTitle">Modified your information</p>
                        <div className="UserPageToggleContainerInput">
                            <input className="InputUserPageModified" type="password" name="new-password" placeholder="New Password" onChange={handleChangePassword}></input>
                        <button className="Disconnect-btn" onClick={newValueInfo}>Validate modification</button>
                        </div>
                    </div>
                    <div className="calculator">
                        <div className="inputBoxVehicule">
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
                    <div id="historical" className={`UserPageHistorical`}>
                        <p className="UserPageToggleTitle">Your CO2 emission Historical</p>
                       <div className="listvalute">
                        <ul className="historyList">
                            {values.map(value => (
                                <li>Emission : {value} KGCO2</li>
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




