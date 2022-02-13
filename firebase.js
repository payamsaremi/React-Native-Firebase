import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx8RAIPHZuWqAdbwEh-pyTvJpYGM-RsY0",
  authDomain: "react-native-firebase-a4af4.firebaseapp.com",
  projectId: "react-native-firebase-a4af4",
  storageBucket: "react-native-firebase-a4af4.appspot.com",
  messagingSenderId: "985961917431",
  appId: "1:985961917431:web:c0bdbc1383b3d81d665cf2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
    })
    .catch((err) => console.log(err.message));

export { auth, createUser, updateProfile, signOut };
