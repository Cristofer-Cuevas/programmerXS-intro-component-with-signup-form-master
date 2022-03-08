const form = document.getElementById("form");

// INPUT FIRST NAME AND CONTAINER

const firstName = document.getElementById("inp-first-name");

const firstNameError = document.getElementById("first-name-error");

// INPUT LAST NAME

const lastName = document.getElementById("inp-last-name");

const lastNameError = document.getElementById("last-name-error");
console.log(lastNameError);

// INPUT EMAIL ADRESS

const inpEmail = document.getElementById("inp-email");

const emailError = document.getElementById("email-error");

// INPUT PASSWORD

const inpPassword = document.getElementById("inp-password");

const passwordError = document.getElementById("password-error");

// CLAIM BUTTON

const claimButton = document.getElementById("claim");

const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener("click", (e) => {
  e.preventDefault();
});

// firstName.addEventListener('change', ());

const inputsContainer = document.getElementById("inputs-container");

inputsContainer.addEventListener("focusout", (e) => {
  console.log(e);
  if (e.target.value.trim().length == 0) {
    e.target.classList.add("icon-error");

    e.target.nextElementSibling.classList.add("show-message-error");
  } else {
    e.target.classList.remove("icon-error");

    e.target.nextElementSibling.classList.remove("show-message-error");
  }
});

// console.log(form.value);

const fName = () => {
  if (firstName.value.trim().length == 0) {
    firstName.classList.add("icon-error");

    firstNameError.classList.add("show-message-error");
  } else {
    firstName.classList.remove("icon-error");

    firstNameError.classList.remove("show-message-error");
  }
};

const lName = () => {
  if (lastName.value.trim().length == 0) {
    lastName.classList.add("icon-error");

    lastNameError.classList.add("show-message-error");
  } else {
    lastName.classList.remove("icon-error");

    lastNameError.classList.remove("show-message-error");
  }
};

const email = () => {
  if (
    inpEmail.value.trim().length == 0 ||
    regEx.test(inpEmail.value) == false
  ) {
    inpEmail.classList.add("icon-error");
    emailError.classList.add("show-message-error");
  } else {
    inpEmail.classList.remove("icon-error");
    emailError.classList.remove("show-message-error");
  }
};

const password = () => {
  if (inpPassword.value.trim().length == 0) {
    inpPassword.classList.add("icon-error");

    passwordError.classList.add("show-message-error");
  } else {
    inpPassword.classList.remove("icon-error");

    passwordError.classList.remove("show-message-error");
  }
};

const validations = () => {
  if (
    firstName.value.trim().length > 0 &&
    lastName.value.trim().length > 0 &&
    inpEmail.value.trim().length > 0 &&
    inpPassword.value.trim().length > 0 &&
    regEx.test(inpEmail.value) == true
  ) {
    form.submit();
  }
};

claimButton.addEventListener("click", () => {
  fName();
  lName();
  email();
  password();
  validations();
});
