import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCz3AEKRTZ4mIDqtSWrUTE3OBCadsJZsCE",
    authDomain: "crown-db-lawkakala.firebaseapp.com",
    databaseURL: "https://crown-db-lawkakala.firebaseio.com",
    projectId: "crown-db-lawkakala",
    storageBucket: "crown-db-lawkakala.appspot.com",
    messagingSenderId: "919866271157",
    appId: "1:919866271157:web:80f652b0821d08173225fc",
    measurementId: "G-DFWMJSF7WY"
  };

  firebase.initializeApp(config);

  export const createUser = async (userAuth , additionalData)=>{

    if(!userAuth) return;

    const data =  firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await data.get();

    if(!snapShot.exists){
      const {email , displayName} = userAuth;
      const createdAt = new Date();
      
      try {
          await data.set({
            email,
            displayName,
            createdAt,
            ...additionalData
          })        
      } catch (error) {
        console.log('Cant set the data' , error);
      }
    }
    return data;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const singInWithGoogle = ()=> {
    return auth.signInWithPopup(provider);
  };
export default firebase;