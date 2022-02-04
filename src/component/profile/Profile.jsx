import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import app from "../../config/firebase";
import { logout } from "../../redux/user";
import Nav from "../nav/Nav";
import "./profile.css";
export default function Profile() {
  const { email } = useSelector((s) => s.user.user);
  const dispatch = useDispatch();
  const logOut = async () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="profile">
      <Nav />
      <div className="body">
        <h1>Edit profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
          <div className="profile__details">
            <h2>{email}</h2>
            <div className="profile__planes">
            <h3>Plans</h3>
              <button className="signout" onClick={logOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
