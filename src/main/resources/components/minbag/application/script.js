document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide img");
  const totalSlides = slides.length;

  function showSlide(index) {
    const slideContainer = document.querySelector(".slide");
    const offset = -index * 100; // 각 슬라이드의 너비에 따라 조정
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // 자동 슬라이드 전환
  let slideInterval = setInterval(nextSlide, 3000);

  // 버튼 클릭 이벤트 리스너
  document.getElementById("next").addEventListener("click", () => {
    clearInterval(slideInterval); // 자동 슬라이드 일시 정지
    nextSlide();
    slideInterval = setInterval(nextSlide, 3000); // 다시 시작
  });

  document.getElementById("prev").addEventListener("click", () => {
    clearInterval(slideInterval); // 자동 슬라이드 일시 정지
    prevSlide();
    slideInterval = setInterval(nextSlide, 3000); // 다시 시작
  });
});
