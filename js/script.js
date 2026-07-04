// ToolNest Search v0.4

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();

    cards.forEach(card => {
      const text = (card.dataset.name || "").toLowerCase();

      if (keyword === "" || text.includes(keyword)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}