/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";
// axios.get("https://api.github.com/users/willmoon19");


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// const divCard = document.querySelector(".card");

const divCard = document.querySelector(".cards");

axios
.get("https://api.github.com/users/willmoon19")
.then((res) => {
    const gitInfo = res.data;
    const gitProfile = profile(gitInfo);
    divCard.append(gitProfile);
})
.catch((error) => {
  console.log(error);
});
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell"];

  followersArray.forEach((item) => {
    axios
    .get(item)
    .then((res) => {
      const friend = profile(res.data);
      divCard.append(friend);
    })
    .catch((error) => {
      console.log(error);
    });
  });


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
https://api.github.com/users/tetondan
https://api.github.com/users/dustinmyers
https://api.github.com/users/justsml
https://api.github.com/users/luishrd
https://api.github.com/users/bigknell
*/

function profile (obj){
const profCard = document.createElement("div");
const profImg = document.createElement("img");
const profInfo = document.createElement("div");
const profH3 = document.createElement("h3");
const profP1 = document.createElement("p");
const profP2 = document.createElement("p");
const profP3 = document.createElement("p");
const profA = document.createElement("a");
const profP4 = document.createElement("p");
const profP5 = document.createElement("p");
const profP6 = document.createElement("p");
profCard.classList.add("card");
profInfo.classList.add("card-info");
profH3.classList.add("name");
profP1.classList.add("username");
profP3.textContent = ("Profile:");
profImg.setAttribute("src", obj.avatar_url);
profA.setAttribute("href", obj.url);
profH3.textContent = (obj.name);
profP1.textContent = (obj.login);
profP2.textContent = (`Location: ${obj.location}`);
profA.textContent = (obj.url);
profP4.textContent = (`Followers: ${obj.followers}`);
profP5.textContent = (`Following: ${obj.following}`);
profP6.textContent = (`Bio: ${obj.bio}`);
profCard.appendChild(profImg);
profCard.appendChild(profInfo);
profInfo.appendChild(profH3);
profInfo.appendChild(profP1);
profInfo.appendChild(profP2);
profInfo.appendChild(profP3);
profInfo.appendChild(profP4);
profInfo.appendChild(profP5);
profInfo.appendChild(profP6);
profP3.appendChild(profA);
return profCard;
};
