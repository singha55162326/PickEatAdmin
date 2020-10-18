import * as firebase from 'firebase';




const firebaseConfig = {
    apiKey: "AIzaSyAvPMvcKC3LVYE2vTigzytnTBfNEeH8eBw",
    authDomain: "pickeat-e8e37.firebaseapp.com",
    databaseURL: "https://pickeat-e8e37.firebaseio.com",
    projectId: "pickeat-e8e37",
    storageBucket: "pickeat-e8e37.appspot.com",
    messagingSenderId: "282472123195",
    appId: "1:282472123195:web:6447c8bf8d0f4e75bb851e",
    measurementId: "G-B2YTEG1WV9"
};
firebase.initializeApp(firebaseConfig);

export default firebase;