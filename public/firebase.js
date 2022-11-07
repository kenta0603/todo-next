import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXir0CPd4ktuFoZhcUonU5Hj4lbvB3DUQ",
  authDomain: "todo-next-2339d.firebaseapp.com",
  projectId: "todo-next-2339d",
  storageBucket: "todo-next-2339d.appspot.com",
  messagingSenderId: "440999135843",
  appId: "1:440999135843:web:5ea22f71678cd486db4656"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };