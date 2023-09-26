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
form.addEventListener('submit', (event) => {
    // stopper l'envoi du formulaire
    event.preventDefault();

    // teste si le mots de passe à minimum 3 caractères
    if (pwd.value.length < 3) {
        // Afficher un message d'erreur
        alert('Le mot de passe doit contenir au moins 3 caractères');
        return;
    }

    // teste si les mots de passe sont identiques
    if (pwd.value !== pwdconfirm.value) {
        // Afficher un message d'erreur
        alert('Les mots de passe ne sont pas identiques');
        return;
    }

    // envoi du formulaire
    alert('compte créé avec succès');
    form.submit();
});