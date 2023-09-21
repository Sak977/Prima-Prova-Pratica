const home = document
  .querySelector(".header-ul")
  .querySelector("li:first-child a");
const login = document
  .querySelector(".header-ul")
  .querySelector("li:nth-child(2) a");
const contatti = document
  .querySelector(".header-ul")
  .querySelector("li:last-child a");
const overlay = document.querySelector(".overlay");

const formLogin = document.getElementById("login");
const inputUserForLogin = document.getElementById("user");
const inputPassForLogin = document.getElementById("pass");
const divErroreInputUser = document.querySelector("#user + div");
const divErroreInputPass = document.querySelector("#pass + div");
const btnCloseFormLink = formLogin.querySelector(".chiudi");

const formLogin2 = document.getElementById("login-2");
const newAcc = document.querySelector(".flex-form-2").querySelector("a");
const inputUserForLogin2 = document.getElementById("user-2");
const inputPassForLogin2 = document.getElementById("pass-2");
const divErroreInputUser2 = document.querySelector("#user-2 + div");
const divErroreInputPass2 = document.querySelector("#pass-2 + div");
const btnCloseFormLink2 = formLogin2.querySelector(".chiudi");

const contactForm = document.querySelector(".contact-form");
const contactFormInputName = document.getElementById("contact-form-name");
const contactFormInputNickame = document.getElementById(
  "contact-form-nickname"
);
const contactFormInputEmail = document.getElementById("contact-form-email");
const contactFormInputPhone = document.getElementById("contact-form-phone");
const contactFormInputPrivacy = document.getElementById("privacy");
const btnCloseFormLink3 = contactForm.querySelector(".chiudi");

const header = document.querySelector(".header-flex");

const frequentAskedQuestions = document
  .querySelector(".accordion")
  .querySelector("ul");

const regularExpressions = {
  user: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
  firstName: /^[a-zA-Z]{1,10}$/,
  lastName: /^[a-zA-Z]{1,10}$/,
  phoneNumber: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
};

//ALL FUNCTIONS
const loginFunction = function () {
  formLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
  header.classList.remove("sticky");
};

const newAccFunction = function () {
  formLogin.classList.add("hidden");
  formLogin2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const keydownOverlay = function () {
  formLogin.classList.add("hidden");
  formLogin2.classList.add("hidden");
  contactForm.classList.add("hidden");
  overlay.classList.add("hidden");
};

const btnCloseFormLinks = function (
  formLogin,
  divErroreInputUser,
  divErroreInputPass
) {
  formLogin.classList.add("hidden");
  overlay.classList.add("hidden");
  divErroreInputUser.classList.add("hidden");
  divErroreInputPass.classList.add("hidden");
};

const formSubmit = function (
  regularExpressions,
  inputUserForLogin,
  inputPassForLogin,
  divErroreInputUser,
  divErroreInputPass,
  formLogin
) {
  if (
    regularExpressions.user.test(inputUserForLogin.value.trim()) &
    regularExpressions.password.test(inputPassForLogin.value.trim())
  )
    formLogin.submit();

  if (regularExpressions.user.test(inputUserForLogin.value.trim())) {
    divErroreInputUser.classList.add("hidden");
  } else {
    divErroreInputUser.classList.remove("hidden");
  }

  if (regularExpressions.password.test(inputPassForLogin.value.trim())) {
    divErroreInputPass.classList.add("hidden");
  } else {
    divErroreInputPass.classList.remove("hidden");
  }
};

const contactFormFunction = function (
  regularExpressions,
  contactFormInputName,
  contactFormInputNickame,
  contactFormInputEmail,
  contactFormInputPhone,
  contactFormInputPrivacy,
  contactForm
) {
  if (
    regularExpressions.user.test(contactFormInputEmail.value.trim()) &
    regularExpressions.firstName.test(contactFormInputName.value.trim()) &
    regularExpressions.lastName.test(contactFormInputNickame.value.trim()) &
    regularExpressions.phoneNumber.test(contactFormInputPhone.value.trim()) &
    contactFormInputPrivacy.checked
  )
    contactForm.submit();

  if (regularExpressions.user.test(contactFormInputEmail.value.trim())) {
    contactFormInputEmail.classList.remove("border-1");
  } else {
    contactFormInputEmail.classList.add("border-1");
  }

  if (regularExpressions.firstName.test(contactFormInputName.value.trim())) {
    contactFormInputName.classList.remove("border-1");
  } else {
    contactFormInputName.classList.add("border-1");
  }

  if (regularExpressions.lastName.test(contactFormInputNickame.value.trim())) {
    contactFormInputNickame.classList.remove("border-1");
  } else {
    contactFormInputNickame.classList.add("border-1");
  }

  if (regularExpressions.phoneNumber.test(contactFormInputPhone.value.trim())) {
    contactFormInputPhone.classList.remove("border-1");
  } else {
    contactFormInputPhone.classList.add("border-1");
  }

  if (
    !contactFormInputPrivacy.checked &
    regularExpressions.user.test(contactFormInputEmail.value.trim()) &
    regularExpressions.firstName.test(contactFormInputName.value.trim()) &
    regularExpressions.lastName.test(contactFormInputNickame.value.trim()) &
    regularExpressions.phoneNumber.test(contactFormInputPhone.value.trim())
  ) {
    alert(
      "E' necessario dare il consenso al trattamento dei propri dati personali"
    );
  }
};

//EVENTI

// FORM LOGIN, FORM LOGIN 2
login.addEventListener("click", function (e) {
  e.preventDefault();
  loginFunction();
});

newAcc.addEventListener("click", newAccFunction);

btnCloseFormLink.addEventListener("click", function (e) {
  e.preventDefault();
  btnCloseFormLinks(formLogin, divErroreInputUser, divErroreInputPass);
});

btnCloseFormLink2.addEventListener("click", function (e) {
  e.preventDefault();
  btnCloseFormLinks(formLogin2, divErroreInputUser2, divErroreInputPass2);
});

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  formSubmit(
    regularExpressions,
    inputUserForLogin,
    inputPassForLogin,
    divErroreInputUser,
    divErroreInputPass,
    e.target
  );
});

formLogin2.addEventListener("submit", function (e) {
  e.preventDefault();
  formSubmit(
    regularExpressions,
    inputUserForLogin2,
    inputPassForLogin2,
    divErroreInputUser2,
    divErroreInputPass2,
    e.target
  );
});

// CONTATTI
contatti.addEventListener("click", function (e) {
  e.preventDefault();
  contactForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
  header.classList.remove("sticky");
});

btnCloseFormLink3.addEventListener("click", function (e) {
  e.preventDefault();
  contactForm.classList.add("hidden");
  overlay.classList.add("hidden");
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  contactFormFunction(
    regularExpressions,
    contactFormInputName,
    contactFormInputNickame,
    contactFormInputEmail,
    contactFormInputPhone,
    contactFormInputPrivacy,
    contactForm
  );
});

// KEYDOWN EVENT
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    keydownOverlay();
  }
});

// CLICK EVENT OVERLAY
overlay.addEventListener("click", keydownOverlay);

// DOMANDE FREQUENTI
frequentAskedQuestions.addEventListener("click", function (e) {
  const clicked = e.target.closest(".accordion-flex");
  console.log(clicked);
  if (!clicked) return;
  document
    .querySelectorAll(".accordion-flex")
    .forEach((li) => li.classList.remove("margin"));
  clicked.classList.add("margin");
  clicked.nextElementSibling.classList.toggle("hidden");
  clicked.querySelector(".span-icon").classList.toggle("hidden");
  clicked.querySelector(".span-icon-visible").classList.toggle("hidden");
});

//sticky navigation

const sectionScopriDiPiù = document.querySelector(".scopri-di-più");

const headerObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

headerObserver.observe(sectionScopriDiPiù);
