document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelector('.news-items');
    const newsCount = document.querySelectorAll('.news-item').length;
    let currentIndex = 0;

    function slideNews() {
        currentIndex = (currentIndex + 1) % newsCount; // 인덱스 업데이트
        const offset = -currentIndex * 100; // 슬라이드 효과
        newsItems.style.transform = `translateX(${offset}%)`;
    }

    // 3초마다 슬라이드 변경
    setInterval(slideNews, 3000);
});
