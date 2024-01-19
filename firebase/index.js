import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyBqY6xHDcRQHBudXCarWNd8bp1i1dHRJls",
  authDomain: "todo-reactnative-f9bc7.firebaseapp.com",
  projectId: "todo-reactnative-f9bc7",
  storageBucket: "todo-reactnative-f9bc7.appspot.com",
  messagingSenderId: "1075567962877",
  appId: "1:1075567962877:web:559ec41fef0b844c746c94"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


// const auth=getAuth(app)
// const storage = getStorage(app);
export{ auth, createUserWithEmailAndPassword,db };
