// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyCo2kqihbV94pdz3ru4WvCNtVmf6ZZDzao",
//   authDomain: "netflix-clone-c3e1f.firebaseapp.com",
//   projectId: "netflix-clone-c3e1f",
//   storageBucket: "netflix-clone-c3e1f.appspot.com",
//   messagingSenderId: "277310856296",
//   appId: "1:277310856296:web:7b2bad3eb92e75bb336fdd",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { auth };
// export default db;

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
let app;

const firebaseConfig = {
  apiKey: "AIzaSyCo2kqihbV94pdz3ru4WvCNtVmf6ZZDzao",
  authDomain: "netflix-clone-c3e1f.firebaseapp.com",
  projectId: "netflix-clone-c3e1f",
  storageBucket: "netflix-clone-c3e1f.appspot.com",
  messagingSenderId: "277310856296",
  appId: "1:277310856296:web:7b2bad3eb92e75bb336fdd",
};
if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const analytics = getAnalytics(app);

export default app;
