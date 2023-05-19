let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let editBtn = document.querySelector("#editUserBtn");

let user = JSON.parse(localStorage.getItem("users"));
const url = "http://localhost:8080/users";

function button() {
  userName.value && userEmail.value
    ? (editBtn.disabled = false)
    : (editBtn.disabled = true);
}

userName.addEventListener("input", button);
userEmail.addEventListener("input", button);

userName.value = user.username;
userEmail.value = user.email;

editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value && userEmail.value) {
    fetch(`${url}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName.value,
        email: userEmail.value,
      }),
    })
      .then(() => {
        window.location = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
