import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDClvSrpXo0Fr_aTSvfftG_DgMNw_Acrtg",
  authDomain: "dht11-da77e.firebaseapp.com",
  databaseURL: "https://dht11-da77e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dht11-da77e",
  storageBucket: "dht11-da77e.firebasestorage.app",
  messagingSenderId: "264410821204",
  appId: "1:264410821204:web:d95f5306ee959905f5b3c1",
  measurementId: "G-L2G4QPH2EP"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
