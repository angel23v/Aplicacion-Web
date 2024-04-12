let form = document.querySelector(".form_login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ENVIADO");

  let user = document.querySelector(".usuario").value;

  user != "admin" ? (location.href = "/user") : (location.href = "/admin");
});
