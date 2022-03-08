//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDIodtS0ae5rTvEML3qly34mlnt2ZWg-zs",
    authDomain: "fir-comp1800-a3f83.firebaseapp.com",
    projectId: "fir-comp1800-a3f83",
    storageBucket: "fir-comp1800-a3f83.appspot.com",
    messagingSenderId: "19704281715",
    appId: "1:19704281715:web:013bb4a6365f108c724806",
    measurementId: "G-DTBRRYWEX6"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
