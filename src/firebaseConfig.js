
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZoYVctk0WjoDEi_BsBqpRn4IEEaSjYQY",
    authDomain: "woof-d3287.firebaseapp.com",
    projectId: "woof-d3287",
    storageBucket: "woof-d3287.appspot.com",
    messagingSenderId: "784391104180",
    appId: "1:784391104180:web:77a24ee75a99044cdb99e1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
