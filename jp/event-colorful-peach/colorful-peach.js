const accordion = $('.accordionBtn');
$('.accordionContent').hide();

accordion.click(function () {
  let cont = $(this).next('.accordionContent');
  $(this).toggleClass('open');
  cont.slideToggle(400);
});