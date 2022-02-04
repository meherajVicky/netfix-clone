import React, { useState } from "react";
import app from "../../config/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./sign-in.css";

export default function Singin() {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const handleSignin = (event) => {
    const { name, value } = event.target;
    setSignin((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, signin.email, signin.password)
    .then((auth)=>{console.log("a",auth)})
    .then((err)=>{console.log("e",err)})
  };
  const register = async(e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, signin.email, signin.password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign in</h1>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleSignin}
          value={signin.email}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleSignin}
          value={signin.password}
        />
        <button onClick={onSubmit}>Sign in</button>
        <h4>
          New to Netflix? <span onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}
