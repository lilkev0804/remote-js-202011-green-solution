import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCu15em6tL-E0SLKkJ6P_V5BuPVpnKcxmc",
    authDomain: "greensolution-fbaf1.firebaseapp.com",
    projectId: "greensolution-fbaf1",
    storageBucket: "greensolution-fbaf1.appspot.com",
    messagingSenderId: "855775915572",
    appId: "1:855775915572:web:7855f9afeb32267d642461"
  };

 let fire = firebase.initializeApp(firebaseConfig)
 export default fire