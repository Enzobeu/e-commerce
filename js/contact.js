// Sélection du formulaire
const form = document.getElementById('form');

// Fonctions de validation
function validateFirstName() {
  const firstName = document.getElementById('firstName').value;
  const errorMsg = document.getElementById('firstNameErrorMsg');
  
  if (firstName.trim() === '') {
    errorMsg.textContent = 'Veuillez saisir votre prénom';
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s-]{2,}$/.test(firstName)) {
    errorMsg.textContent = 'Le prénom doit contenir au moins 2 caractères et ne peut contenir que des lettres';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

function validateLastName() {
  const lastName = document.getElementById('lastName').value;
  const errorMsg = document.getElementById('lastNameErrorMsg');
  
  if (lastName.trim() === '') {
    errorMsg.textContent = 'Veuillez saisir votre nom';
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s-]{2,}$/.test(lastName)) {
    errorMsg.textContent = 'Le nom doit contenir au moins 2 caractères et ne peut contenir que des lettres';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

function validateAddress() {
  const address = document.getElementById('address').value;
  const errorMsg = document.getElementById('addressErrorMsg');
  
  if (address.trim() === '') {
    // L'adresse n'est pas obligatoire, pas d'erreur
    errorMsg.textContent = '';
    return true;
  } else if (address.length < 5) {
    errorMsg.textContent = 'L\'adresse doit contenir au moins 5 caractères';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

function validateCity() {
  const city = document.getElementById('city').value;
  const errorMsg = document.getElementById('cityErrorMsg');
  
  if (city.trim() === '') {
    // La ville n'est pas obligatoire, pas d'erreur
    errorMsg.textContent = '';
    return true;
  } else if (!/^[a-zA-ZÀ-ÿ\s-]{2,}$/.test(city)) {
    errorMsg.textContent = 'La ville doit contenir au moins 2 caractères et ne peut contenir que des lettres';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const errorMsg = document.getElementById('emailErrorMsg');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email.trim() === '') {
    // L'email n'est pas obligatoire, pas d'erreur
    errorMsg.textContent = '';
    return true;
  } else if (!emailRegex.test(email)) {
    errorMsg.textContent = 'Veuillez saisir une adresse email valide';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById('message').value;
  const errorMsg = document.getElementById('messageErrorMsg');
  
  if (message.trim() === '') {
    // Le message n'est pas obligatoire, pas d'erreur
    errorMsg.textContent = '';
    return true;
  } else if (message.length < 10) {
    errorMsg.textContent = 'Le message doit contenir au moins 10 caractères';
    return false;
  } else {
    errorMsg.textContent = '';
    return true;
  }
}

// Ajout des événements de validation en temps réel
document.getElementById('firstName').addEventListener('input', validateFirstName);
document.getElementById('lastName').addEventListener('input', validateLastName);
document.getElementById('address').addEventListener('input', validateAddress);
document.getElementById('city').addEventListener('input', validateCity);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('message').addEventListener('input', validateMessage);

// Validation du formulaire à la soumission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isAddressValid = validateAddress();
  const isCityValid = validateCity();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  
  // Si tous les champs sont valides, on peut soumettre le formulaire
  if (isFirstNameValid && isLastNameValid && isAddressValid && isCityValid && isEmailValid && isMessageValid) {
    alert('Formulaire soumis avec succès !');
    form.reset();
  }
});