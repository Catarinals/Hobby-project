function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function applyNow() {
  let name = prompt("What's your first name?");
  let email = prompt("What is your e-mail?");
  name = name.toLowerCase().trim();
  email = email.toLocaleLowerCase().trim();

  alert(`🖌 Thank you ${name}! We'll be in touch by e-mail.`);
}
let applyButton = document.querySelector(".applyButton");
applyButton.addEventListener("click", applyNow);
