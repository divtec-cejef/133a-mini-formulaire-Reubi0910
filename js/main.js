/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// récupération du <body>
const body = document.querySelector('body');

const listeBg = document.querySelector('#bg');
console.log(listeBg);
body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value}.jpg)`;
listeBg.addEventListener('change', () => {
    body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value}.jpg)`;
});

/******************
 ENVOI DU FORMULAIRE
 ******************/
// récupération du formulaire et des champs mot de passe
const form = document.querySelector('form');
const pwd = document.querySelector('#pwd');
const pwdconfirm = document.querySelector('#pwdconfirm');

// Ecouter l'envoi du formulaire
form.addEventListener('submit', (e) => {
    // teste si les mots de passe sont identiques
    if (pwd.value !== pwdconfirm.value) {
        // Annuler l'envoi du formulaire
        e.preventDefault();
        // Afficher un message d'erreur
        alert('Les mots de passe ne sont pas identiques');
        return;
    }

});