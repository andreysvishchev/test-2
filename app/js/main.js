$(function () {
  $('.product__item-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('product__item-title--active')
  });

  $('.reviews__slider').slick();

  $(".promo__link").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  document.getElementById("number").addEventListener('input', restrictToInteger);

  function restrictToInteger() {
    this.value = this.value.replace(/[^\d]/g, '');
  };

  let time = 1800;
  const countDownEl = document.getElementById("countdown");

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  };

});