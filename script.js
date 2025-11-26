let lastScrollY = window.scrollY;
const nav = document.getElementById("nav");
const date = document.getElementById("date");
const item = document.getElementById("item");
const indi = document.querySelector(".indi");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    nav.classList.add("hide");
    top2.classList.add("hide1");
    indi.style.marginTop = "2vw";
  } else {
    nav.classList.remove("hide");
    top2.classList.remove("hide1");
    indi.style.marginTop = "9vw";
  }
  lastScrollY = window.scrollY;
});

function updateClock() {
  const el = document.getElementById("clock");
  el.textContent = new Date()
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(/am|pm/i, (m) => m.toUpperCase());
}

setInterval(updateClock, 1000);
updateClock();

function showDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months start from 0
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  document.getElementById("date").textContent = formattedDate;
}

showDate();

function menu() {
  document.querySelector(".social").classList.toggle("show");
}

let mobileMenu = document.querySelector(".mobileMenu");
let top1 = document.querySelector(".top1");
let top2 = document.querySelector(".top");

mobileMenu.style.maxHeight = "0px";

function menu() {
  if (mobileMenu.style.maxHeight == "0px") {
    mobileMenu.style.maxHeight = "350px";
    top1.style.padding = "10px";
    top2.style.gap = "1vw";
    top2.style.animation = "bounceMenu 0.8s ease-in-out";
  } else {
    mobileMenu.style.maxHeight = "0px";
    top1.style.padding = "0px";
    top2.style.gap = "0vw";
    top2.style.animation = "bounceMenu1 0.8s ease-in-out";
  }
}
