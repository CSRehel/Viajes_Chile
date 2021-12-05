//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

.tooltip.css("color","red")

// numero opcional (800) especifica los milisegundos del scroll smooth
$('html, body').animate({
    scrollTop: $(hash).offset().top
}, 800, function () {
    window.location.hash = hash;
});

