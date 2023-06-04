import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDL_m-fC_C_nkVCuCTQFLhZcKfbxGLUPtI',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://hackstory-23-delhi.firebaseio.com',
  projectId: 'hackstory-23-delhi',
  storageBucket: 'hackstory-23-delhi.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:907336710962:android:fd3bc0a9f68b9481fef52b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
