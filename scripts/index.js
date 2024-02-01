const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardWidth = document.querySelector(".carousel-item").offsetWidth;
let currentIndex = 0;

function slideCarousel(direction) {
	if (direction === "next") {
		currentIndex++;
		if (currentIndex >= carousel.children.length) {
			currentIndex = 0;
		}
	} else {
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = carousel.children.length - 1;
		}
	}

	const translateXValue = -currentIndex * cardWidth;
	carousel.style.transform = `translateX(${translateXValue}px)`;
}

prevBtn.addEventListener("click", () => {
	slideCarousel("prev");
});

nextBtn.addEventListener("click", () => {
	slideCarousel("next");
});
