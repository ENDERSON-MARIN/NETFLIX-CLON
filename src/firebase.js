import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAW5gzkkkvRdHkoXJcAa64vHoiTtsqj4r4",
  authDomain: "netflix-clon-8f82e.firebaseapp.com",
  projectId: "netflix-clon-8f82e",
  storageBucket: "netflix-clon-8f82e.appspot.com",
  messagingSenderId: "431192396935",
  appId: "1:431192396935:web:9f9be7672722baf6acd422",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
