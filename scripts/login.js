let connexion = document.getElementById('connexion');

let mail = document.getElementById('mail');
let missMail = document.getElementById('missMail');
let mailValid = /^[a-z0-9._-]+@[a-z0-9._-]+((\.com)|(\.fr))$/;

connexion.addEventListener('click', validationMail);

function validationMail(event){
  if (mail.validity.valueMissing){
    event.preventDefault();
    missMail.textContent = 'Email manquant';
    missMail.style.color = 'red';
  }else if (mailValid.test(mail.value) == false){
    event.preventDefault();
    missMail.textContent = 'Format incorrect';
    missMail.style.color = 'orange';
  }else{
    missMail.textContent = "C'est bien idiot";
    missMail.style.color = 'green';
  }
}

let mdp = document.getElementById('mdp');
let missMdp = document.getElementById('missMdp');
let mdpValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/

connexion.addEventListener('click', validationMdp);

function validationMdp(event){
  if (mdp.validity.valueMissing){
    event.preventDefault();
    missMdp.textContent = 'Mot de passe manquant';
    missMdp.style.color = 'red';
  }else if (mdpValid.test(mdp.value) == false){
    event.preventDefault();
    missMdp.textContent = 'Format incorrect';
    missMdp.style.color = 'orange';
  }else{
    missMdp.textContent = "C'est bien idiot";
    missMdp.style.color = 'green';
  }
}