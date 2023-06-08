$(document).ready(function () {
    $(".c-mainvisual__slider").slick({
        cssEase: "linear",
        respondTo: "slider",
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1
    });
    $(".c-pickup__slider").slick({
        cssEase: "linear",
        respondTo: "slider",
        centerMode: true,
        centerPadding: '5.08%',
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: $(".c-control__itempre"),
        nextArrow: $(".c-control__itemnext"),
        slidesToShow: 5,
        slidesToScroll: 1,
    });
});