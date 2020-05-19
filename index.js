const button = document.querySelector(".btn");
const ul = document.querySelector(".list-group");

button.addEventListener("click", generateJokes);

function generateJokes(e) {
  const numberOfJokes = document.getElementById("exampleForm2");
  if (numberOfJokes.value) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.icndb.com/jokes/random/${numberOfJokes.value}`
    );

    xhr.onload = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.response);
        let output = "";
        if (response.type == "success") {
          response.value.forEach(joke => {
            output += `<li class="list-group-item">${joke.joke}</li>`;
          });
        }
      } else {
        output += "<li>something went wrong</li>";
      }
      ul.innerHTML = output;
    };

    xhr.send();
    numberOfJokes.value = "";
  } else {
    window.alert("Enter enter valid input");
  }
}
