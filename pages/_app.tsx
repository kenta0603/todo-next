import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import Login from "./login"
import Logout from "./logout"

export default function App({ Component, pageProps }: AppProps) {
const [isAuth, setIsAuth] = useState(false);

  return (
    <Login element={setIsAuth={setIsAuth}} />
  );
}
