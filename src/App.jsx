import { useState } from "react";
import Login from "./Login";
import { ToastContainer } from 'react-toastify';


export default function App() {
  const [user, setUser] = useState('')
  return (
      <>
        <Login/>
      <ToastContainer />
      </>
    )
}