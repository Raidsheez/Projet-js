let bouton = document.getElementById('submit');

let nom = document.getElementById('nom');
let missNom = document.getElementById('missNom');
let nomValid = /^([a-zA-Zàâéèëêïîôùüç]{3,})+([-'\s][a-zA-Zàâéèëêïîôùüç]{3,})?$/;

bouton.addEventListener('click', validationNom);
function validationNom(event){
  if (nom.validity.valueMissing){
    event.preventDefault();    
    missNom.textContent = 'Nom manquant';
    missNom.style.color = 'red';
  }else if (nomValid.test(nom.value) == false){
    event.preventDefault();
    missNom.textContent = 'Format incorrect';
    missNom.style.color = 'orange';
  }else{
    missNom.textContent = "Good job !";
    missNom.style.color = 'green';
  }
}

let prenom = document.getElementById('prenom');
let missPrenom = document.getElementById('missPrenom');
let prenomValid = /^([a-zA-Zàâéèëêïîôùüç]{3,})+([-'\s][a-zA-Zàâéèëêïîôùüç]{3,})?$/;

bouton.addEventListener('click', validationPrenom);

function validationPrenom(event){
  if (prenom.validity.valueMissing){
    event.preventDefault();
    missPrenom.textContent = 'Prénom manquant';
    missPrenom.style.color = 'red';
  }else if (prenomValid.test(prenom.value) == false){
    event.preventDefault();
    missPrenom.textContent = 'Format incorrect';
    missPrenom.style.color = 'orange';
  }else{
    missPrenom.textContent = "Good job !";
    missPrenom.style.color = 'green';
  }
}

let email = document.getElementById('email');
let missEmail = document.getElementById('missEmail');
let emailValid = /^[a-z0-9._-]+@[a-z0-9._-]+((\.com)|(\.fr))$/;

bouton.addEventListener('click', validationEmail);

function validationEmail(event){
  if (email.validity.valueMissing){
    event.preventDefault();
    missEmail.textContent = 'Email manquant';
    missEmail.style.color = 'red';
  }else if (emailValid.test(email.value) == false){
    event.preventDefault();
    missEmail.textContent = 'Format incorrect';
    missEmail.style.color = 'orange';
  }else{
    missEmail.textContent = "Good job !";
    missEmail.style.color = 'green';
  }
}

let tel = document.getElementById('tel');
let missTel = document.getElementById('missTel');
let telValid = /^((\+)33|0)[1-9](\d{2}){4}$/;

bouton.addEventListener('click', validationTel);

function validationTel(event){
  if (tel.validity.valueMissing){
    event.preventDefault();
    missTel.textContent = 'Numéro de téléphone manquant';
    missTel.style.color = 'red';
  }else if (telValid.test(tel.value) == false){
    event.preventDefault();
    missTel.textContent = 'Format incorrect';
    missTel.style.color = 'orange';
    
  }else{
    missTel.textContent = "Good job !";
    missTel.style.color = 'green';
  }
}

let password = document.getElementById('password');
let missPassword = document.getElementById('missPassword');
let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/

bouton.addEventListener('click', validationPassword);

function validationPassword(event){
  if (password.validity.valueMissing){
    event.preventDefault();
    missPassword.textContent = 'Mot de passe manquant';
    missPassword.style.color = 'red';
  }else if (passwordValid.test(password.value) == false){
    event.preventDefault();
    missPassword.textContent = 'Format incorrect';
    missPassword.style.color = 'orange';
  }else{
    missPassword.textContent = "Good job !";
    missPassword.style.color = 'green';
  }
}

let adress = document.getElementById('street');
let missAdress = document.getElementById('missAdress');
let adressValid = /^[0-9a-zA-Zàâéèëêïîôùüç]{3,}$/

bouton.addEventListener('click', validationAdress);

function validationAdress(event){
  if (adress.validity.valueMissing){
    event.preventDefault();
    missAdress.textContent = 'Adresse manquante';
    missAdress.style.color = 'red';
  }else if (adressValid.test(adress.value) == false){
    event.preventDefault();
    missAdress.textContent = 'Format incorrect';
    missAdress.style.color = 'orange';
  }else{
    missAdress.textContent = "Good job !";
    missAdress.style.color = 'green';
  }
}
