function Navigate(page) {
  let container = document.getElementById("content");

  fetch(page + ".html")
    .then((response) => response.text())
    .then((html) => {
      container.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching page: ", error);
    });
}

Navigate("accueil");

// Get the container element
var btnContainer = document.getElementById("liens");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    let page = this.getAttribute("href").substring(1);

    Navigate(page);
  });
});
