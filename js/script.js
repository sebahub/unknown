$(document).ready(function () {

//*** fixed on scroll ***//

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 66) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });

    var swiper = new Swiper('.swiper-container', {
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       slidesPerView: 1,
       paginationClickable: true,
       spaceBetween: 30,
       loop: true
   });

$('.card_btn').on('click', function () {
 $('.swiper-slide-active .card').toggleClass('flipped');
 $(this).text(function(i, v){
              return v === 'zurück' ? 'zum Rezept' : 'zurück';
           });

});

$("input#spezialabo").click(function() {
    $("input.ifchecked").attr("disabled", !this.checked);
    $("input#later").prop('checked', false);
});

$("input#later").click(function() {
    $("input#spezialabo").prop('checked', false);
    $("input.ifchecked").attr("disabled", !this.unchecked);


});


});
