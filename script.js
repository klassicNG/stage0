const toggleBtn = document.querySelector(".btn-toggle");
const card = document.querySelector(".profile-card");
let expanded = false;

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  card.classList.toggle("active", expanded);

  toggleBtn.innerHTML = expanded
    ? `<i class="fa-solid fa-circle-xmark"></i> See less`
    : `<i class="fa-solid fa-circle-plus"></i> See more`;
});

// Display current time in milliseconds
const timeElement = document.querySelector("[data-testid='test-user-time']");

if (timeElement) {
  const updateTime = () => {
    timeElement.textContent = "Current time: " + Date.now();
  };

  updateTime(); // show immediately on load
  setInterval(updateTime, 1000); // update every second
}
