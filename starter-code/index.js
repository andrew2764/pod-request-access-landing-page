const form = document.getElementById("form");
const input = document.getElementById("input");
const errorMessageElem = document.createElement("span");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
errorMessageElem.classList.add("error");
errorMessageElem.innerText = "Opps! Please check your email!";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".error")?.remove();
  const regexResult = input.value.toLowerCase().match(emailRegex);
  if (!regexResult) {
    form.appendChild(errorMessageElem);
    return;
  }
});
