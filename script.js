
const searchInput = document.getElementById("search");
const gameList = document.getElementById("gameList");
const emptyMessage = document.getElementById("empty");

if (searchInput && gameList) {
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value
      .trim()
      .toLowerCase();

    const cards = gameList.querySelectorAll(".game-card");
    let visibleCount = 0;

    cards.forEach(function (card) {
      const name = card.querySelector("h3")
        .textContent.toLowerCase();

      const matched = name.includes(keyword);
      card.hidden = !matched;

      if (matched) visibleCount++;
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount !== 0;
    }
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent =
      "Biểu mẫu đã được kiểm tra! Đây là bản demo, chưa gửi dữ liệu lên máy chủ.";

    contactForm.reset();
  });
}
