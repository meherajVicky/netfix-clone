import React, { useState } from "react";
import Signin from "../sign-in/Signin";
import "./login.css";
export default function Login() {
  const [signin, setSignin] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button className="login__buttons" onClick={() => setSignin(true)}>
          Sign in
        </button>
        <div className="login__gradient"></div>
      </div>

      <div className="login__body">
        {signin ? (
          <Signin/>
        ) : (
          <>
            <h1>Unlimited flimes,TV programmes and more...</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__screenInput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login__button"
                    onClick={() => setSignin(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
