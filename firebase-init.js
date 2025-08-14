// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAflm6x_xtbFTj2jCFyzPsjq824bkmKnyA",
  authDomain: "xblock-71178.firebaseapp.com",
  databaseURL: "https://xblock-71178-default-rtdb.firebaseio.com",
  projectId: "xblock-71178",
  storageBucket: "xblock-71178.firebasestorage.app",
  messagingSenderId: "853447493583",
  appId: "1:853447493583:web:f39cad2edf3cd9219bf4ba",
  measurementId: "G-DV5CFNPEDS"
};

// Inicializando Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
