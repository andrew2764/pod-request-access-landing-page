const form = document.getElementById("form");
const input = document.getElementById("input");
const errorMessageElem = document.createElement("span");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
errorMessageElem.classList.add("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".error")?.remove();
  if (!input.value) {
    errorMessageElem.innerText = "Opps! Please add your email!";
    form.appendChild(errorMessageElem);
    return;
  }
  const regexResult = input.value.toLowerCase().match(emailRegex);
  if (!regexResult) {
    errorMessageElem.innerText = "Opps! Please check your email!";
    form.appendChild(errorMessageElem);
    return;
  }
});
