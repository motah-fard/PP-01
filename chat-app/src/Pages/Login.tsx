import React, { useState } from "react";
import Add from "../img/brown_colored_image_1.png";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true);
      console.log(err);
    }
    navigate("/")
  };
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button> Sign in</button>
      </form>
      {err && <span>Something went wrong</span>}
      <p>You don't have an account? <Link to="/register">Register</Link></p>
    </div>
  </div>
  )
}

export default Login
