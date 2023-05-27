const BASE_URL = "http://localhost:8080/offer";
const id = new URLSearchParams(window.location.search).get("id");
console.log(id);
const childForm = document.querySelector("#childForm");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const photo = document.querySelector("#cardPhoto");
const submitBtn = document.querySelector("#submitBtn");

axios.get(`${BASE_URL}/${id}`).then((res) => {
  data = res.data;

  title.value = data.title;
  desc.value = data.desc;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    title: title.value,
    desc: desc.value,
    photo: `./images/${photo.value.split("\\")[2]}`,
  };
  if (obj.title && obj.desc) {
    if (id) {
      axios.patch(`${BASE_URL}/${id}`, obj);
    } else {
      axios.post("http://localhost:8080/offer", obj);
    }
    window.location = "./index.html";
  } else {
    alert("bütün sahələri doldur!!!");
  }
});
