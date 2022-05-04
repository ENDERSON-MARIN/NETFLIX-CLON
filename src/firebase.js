import firebase from "firebase"

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_FIREBASE_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const APPID = process.env.REACT_APP_FIREBASE_APPID;


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
