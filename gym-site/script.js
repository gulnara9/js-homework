const BASE_URL = "http://localhost:8080/offer";
const cardsContainer = document.querySelector(".cardss");
const loadMoreBtn = document.getElementById("load-more-btn");
let pageCount = 1;

loadMoreBtn.addEventListener("click", loadMoreCards);

axios.get(`${BASE_URL}`).then((response) => {
  const mydata = response.data;
  drawCard(mydata.slice(0, 6));
  if (mydata.length > 6) {
    loadMoreBtn.style.display = "block";
  }
});

function loadMoreCards() {
  axios.get(`${BASE_URL}`).then((response) => {
    const mydata = response.data;
    const startIndex = 6 + (pageCount - 1) * 3;
    const endIndex = startIndex + 3;
    const cardsToLoad = mydata.slice(startIndex, endIndex);
    drawCard(cardsToLoad);

    if (endIndex >= mydata.length) {
      loadMoreBtn.style.display = "none";
    }

    pageCount++;
  });
}

function drawCard(arr) {
  arr.forEach((el) => {
    const card = document.createElement("div");
    card.className = "col-lg-3 card";
    card.innerHTML = `
      <div class="image d-flex justify-content-center">
        <img src="${el.photo}" alt="" width="60px" />
      </div>
      <div class="card-body">
        <h3>${el.title}</h3>
        <p>
          ${el.desc}
        </p>
        <div class="buttons d-flex justify-content-between mt-3">
          <a id="id${el.id}" onclick="deleteCard(${el.id})" class="btn btn-danger deleteBtn">Delete</a>
          <a href="./add-edit.html?id=${el.id}" id="id${el.id}" class="btn btn-success editBtn">Edit</a>
          <a href="#" onclick=addFavCard('${el.id}') class="btn btn-primary btn-sm">Add fav</a>
        </div>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}

function deleteCard(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
 //////
 let search = document.querySelector("#search");
 let sort = document.querySelector(".sort");
search.addEventListener("input", function (e) {
  axios.get(BASE_URL).then((response) => {
    let filteredCard = response.data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    cardsContainer.innerHTML = ""; // Əvvəlki kartları silin
    drawCard(filteredCard);
  });
});

let accendingCard = true;
sort.addEventListener("click", function () {
  axios.get(BASE_URL).then((response) => {
    let sortData = response.data.sort((a, b) => {
      if (accendingCard) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    accendingCard = !accendingCard;
    cardsContainer.innerHTML = ""; // Əvvəlki kartları silin
    drawCard(sortData);
  });
});


const favCards = JSON.parse(localStorage.getItem("fav-cards")) || [];

async function addFavCard(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  const data = await res.data;

  let isAvailable = favCards.find((el) => el.id === data.id);
 
  if (!isAvailable) {
    favCards.push(data);
    localStorage.setItem("fav-cards", JSON.stringify(favCards));
  } else {
    alert("Character already exists in favorite list!");
  }
}
