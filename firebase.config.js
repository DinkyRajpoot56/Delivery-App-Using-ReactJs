import {getApp, getApps, initializeApp} from "firebase/app";
import { getfirestore} from "firebase/firestore";
import { getstorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDEKyc0sjCciT_0m1P_q-xOt9ItpRB7NPg",
    authDomain: "foodorderingapp-590b4.firebaseapp.com",
    databaseURL: "https://foodorderingapp-590b4-default-rtdb.firebaseio.com",
    projectId: "foodorderingapp-590b4",
    storageBucket: "foodorderingapp-590b4.appspot.com",
    messagingSenderId: "637585105528",
    appId: "1:637585105528:web:4689d84e3fccf9dea8c38d"
  };
  
  const app = getApps.length > 0 > getApp() : initializeApp{firebaseConfig};

  const firestore = getfirestore{app}
  const storage = getstorage{app}

  export { app, firestore, storage };
  
