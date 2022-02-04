import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomeScreen from "./component/home/HomeScreen";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import app from "./config/firebase";
import { login, logout } from "./redux/user";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.user);
  const navigation = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log("usr", userAuth);
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
        navigation("/", { replace: true });
      } else {
        //logout
        dispatch(logout());
        navigation("/login", { replace: false });
      }
    });
    return unSubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
