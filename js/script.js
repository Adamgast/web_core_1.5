function mobileInitSlider() {
	if (window.innerWidth <= 767.98) {
		const swiper = new Swiper('.brands__slider', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1.2,
			spaceBetween: 16,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				490: {
					slidesPerView: 2,
				},
			},
		});
	}
}
mobileInitSlider();
window.addEventListener('resize', mobileInitSlider);

function showMore() {
	const showMoreButton = document.querySelector('.brands__showmore');
	const listBrends = document.querySelectorAll(".brands__slide");
	showMoreButton.addEventListener('click', (e) => {
		listBrends.forEach((el) => {
			if (el.closest(".show")) {
				el.classList.remove("show");
				showMoreButton.classList.remove("active");
				showMoreButton.textContent = "Показать все";
			} else {
				el.classList.add("show");
				showMoreButton.classList.add("active");
				showMoreButton.textContent = "Скрыть";
			}
		});
	});
}
showMore();