const WEBSITENAME = "Turrnut's Blog";
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
});

// Close the navbar if a link is clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.style.display = 'none';
  });
});

let toname = {
  "about": "About me",
  "articles": "My Articles",
  "constitution": "Constitution of the Turrnut Republic",
  "turrcoin": "All about Turrcoins",
  "products": "Turrnut Products"
}

let truename = window.location.pathname.split("/").pop().replace(".html", "");
const currentTitle = WEBSITENAME + " - " + truename;

if (window.location.pathname.split("/").pop() == "index.html" || window.location.pathname.split("/").pop() == "") {
  document.querySelector("head").querySelector("title").innerHTML = WEBSITENAME;
  document.querySelector("body").querySelector(".navbar").querySelector(".container").querySelector("h1").innerHTML = WEBSITENAME;
} else {
  let thename = toname[window.location.pathname.split("/").pop().replace(".html", "")];
  document.querySelector("head").querySelector("title").innerHTML = thename;
  document.querySelector("body").querySelector(".navbar").querySelector(".container").querySelector("h1").innerHTML = thename;
}

document.querySelector("footer").innerHTML = "<em>Copyright (c) Turrnut 2024. All rights reserved.</em>";
try {
  document.getElementById("to_const").onclick = () => {
    window.open("constitution.html");
  }
} catch (e) { }

try {
  document.getElementById("to_coin").onclick = () => {
    window.open("turrcoin.html");
  }
} catch (e) {}

window.addEventListener('beforeunload', (e) => {
  // document.title = "eafdasdf";
  console.log("bruh");
});
