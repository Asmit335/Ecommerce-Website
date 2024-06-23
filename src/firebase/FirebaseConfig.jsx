// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFireStore } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD86QpUlCAGvWhpkcumxwtcYCkCpCQQmTs",
//   authDomain: "easy-site-f273b.firebaseapp.com",
//   projectId: "easy-site-f273b",
//   storageBucket: "easy-site-f273b.appspot.com",
//   messagingSenderId: "356815667437",
//   appId: "1:356815667437:web:bd7622f97385495a6f0ce4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fireDB=getFireStore(app)
// const auth=getAuth(app)
// export {fireDB,auth};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Correct the function name

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86QpUlCAGvWhpkcumxwtcYCkCpCQQmTs",
  authDomain: "easy-site-f273b.firebaseapp.com",
  projectId: "easy-site-f273b",
  storageBucket: "easy-site-f273b.appspot.com",
  messagingSenderId: "356815667437",
  appId: "1:356815667437:web:bd7622f97385495a6f0ce4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app); // Use the correct function name
const auth = getAuth(app);
export { fireDB, auth };
