document.addEventListener("DOMContentLoaded", () => {
	// For the first carousel
	const carousel1 = document.querySelector(".carousel1");
	const prevBtn1 = document.getElementById("prev1");
	const nextBtn1 = document.getElementById("next1");
	const cardWidth1 = document.querySelector(".carousel-item1").offsetWidth;
	let currentIndex1 = 0;

	// For the second carousel
	const carousel2 = document.querySelector("#carousel2");
	const prevBtn2 = document.getElementById("prev2");
	const nextBtn2 = document.getElementById("next2");
	const cardWidth2 = document.querySelector(".carousel-item2").offsetWidth;
	let currentIndex2 = 0;

	function slideCarousel(carousel, prevBtn, nextBtn, cardWidth, direction) {
		let currentIndex = carousel === carousel1 ? currentIndex1 : currentIndex2;

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

		carousel.style.transition = "transform 0.5s ease";
		carousel.style.transform = `translateX(${translateXValue}px)`;

		if (carousel === carousel1) {
			currentIndex1 = currentIndex;
		} else {
			currentIndex2 = currentIndex;
		}
	}

	prevBtn1.addEventListener("click", () => {
		console.log("prev1");
		slideCarousel(carousel1, prevBtn1, nextBtn1, cardWidth1, "prev");
	});

	nextBtn1.addEventListener("click", () => {
		console.log("Next1");

		slideCarousel(carousel1, prevBtn1, nextBtn1, cardWidth1, "next");
	});

	prevBtn2.addEventListener("click", () => {
		console.log("prev2");

		slideCarousel(carousel2, prevBtn2, nextBtn2, cardWidth2, "prev");
	});

	nextBtn2.addEventListener("click", () => {
		console.log("Next2");

		slideCarousel(carousel2, prevBtn2, nextBtn2, cardWidth2, "next");
	});
});
