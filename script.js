let lastScrollY = window.scrollY;
const nav = document.getElementById("nav");
const date = document.getElementById("date");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
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
