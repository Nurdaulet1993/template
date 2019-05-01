document.querySelector('.burger-button').addEventListener('click', function() {
    document.querySelector(this.dataset.target).classList.toggle('show');
});

$('.hero-carusel').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});
$('.testimonial-carusel').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000
});