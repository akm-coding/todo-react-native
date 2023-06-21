import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHMgkjsS43KdFTCF1Fz6ZrfShFiKOTHME',
  authDomain: 'todo-f24f8.firebaseapp.com',
  projectId: 'todo-f24f8',
  storageBucket: 'todo-f24f8.appspot.com',
  messagingSenderId: '754761040585',
  appId: '1:754761040585:web:93daec49d74b319f4f4318',
  measurementId: 'G-5ZX1SBZE2L',
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase};