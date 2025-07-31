const btn = document.getElementById("btn");
const overlay = document.getElementById("modalOverlay");
const closebtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal-box");

btn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", (e) => {
  overlay.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

closebtn.addEventListener("click", (e) => {
  overlay.classList.add("hidden");
});
