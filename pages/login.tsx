import React from 'react'
import ButtonAppBar from "./components/ButtonAppBar"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../public/firebase"

const Login = ({ setIsAuth }) => {
const loginInWithGoogle = () => {
  //Googleでログイン
  signInWithPopup(auth, provider).then((result) => {
    setIsAuth(true);
  })
}

  return (
    <>
      <ButtonAppBar />
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </>
  )
}

export default Login