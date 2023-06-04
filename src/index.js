import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import { CartContextProvider } from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyATpH6h6r4XA31S7A36BUpd4Ntn8ABHxJc",
  authDomain: "react-worksh.firebaseapp.com",
  projectId: "react-worksh",
  storageBucket: "react-worksh.appspot.com",
  messagingSenderId: "584474356",
  appId: "1:584474356:web:3571350bba3161046088a1",
  measurementId: "G-90T2E5FZGM"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

