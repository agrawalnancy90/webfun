document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".career-card");

  cards.forEach((card) => {
    const heading = card.querySelector(".career-heading");
    const arrow = heading.querySelector(".expand-icon");

    card.addEventListener("click", () => {
      // Close all other expanded cards
      cards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("expanded");
          const otherArrow = c.querySelector(".arrow");
          if (otherArrow) otherArrow.classList.remove("expanded");
        }
      });

      card.classList.toggle("expanded");
      if (arrow) arrow.classList.toggle("expanded");
    });
  });
});

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  bubble.addEventListener('mouseenter', () => {
    bubble.style.transform = 'scale(1.2) rotate(5deg)';
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.style.transform = 'scale(1) rotate(0)';
  });
});