const jokeContainer = document.getElementById("joke");
const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,explicit&type=single";
let currentJoke = "";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      currentJoke = item.joke;
      jokeContainer.textContent = currentJoke;
    });
};

let saveJoke = () => {
  if (currentJoke) {
    // You can customize the saving mechanism here (e.g., save to a database, local storage, etc.)
    var saveText = document.createElement("p");
    saveText.innerHTML = currentJoke;
    document.body.appendChild(saveJoke);
  } else {
    alert("No joke to save. Get a joke first!");
  }
};

// Example usage:
// getJoke();
