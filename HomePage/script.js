let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let autoPlayInterval;

function showSlide(n) {
    // Ẩn slide hiện tại
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Tính toán slide tiếp theo (vòng lặp)
    currentSlide = (n + slides.length) % slides.length;
    
    // Hiển thị slide mới
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Chuyển slide bằng nút điều khiển (prev/next)
function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoPlay();
}

// Chuyển slide bằng chỉ báo (indicator)
function goToSlide(n) {
    showSlide(n);
    resetAutoPlay();
}

// Hàm tự động phát
function autoPlay() {
    autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // 5 giây/slide
}

// Reset và khởi động lại tự động phát khi người dùng tương tác
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlay();
}

// Khởi tạo slide đầu tiên và tự động phát
showSlide(currentSlide);
autoPlay();