import firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/database'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-a7n6rBgTFANtEE0C0pqD_XfdJk2Q3Zg",
    authDomain: "upperline-app-32e49.firebaseapp.com",
    databaseURL: "https://upperline-app-32e49.firebaseio.com",
    projectId: "upperline-app-32e49",
    storageBucket: "upperline-app-32e49.appspot.com",
    messagingSenderId: "803039028243",
    appId: "1:803039028243:web:22ad024cfbb9585c9c8be6"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase
     