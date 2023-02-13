import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBNm4agtxgUf33kAAif_CdaLamTvahEpjs",
  authDomain: "invoiceapp-e2f58.firebaseapp.com",
  projectId: "invoiceapp-e2f58",
  storageBucket: "invoiceapp-e2f58.appspot.com",
  messagingSenderId: "268640523792",
  appId: "1:268640523792:web:c52d1d80b6b70ed1cd1c95",
});

const db = getFirestore(firebaseApp);

export { db };
