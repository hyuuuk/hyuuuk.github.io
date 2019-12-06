function openPopup(id, callback) {
    var thisPopup = $('#popup-' + id);
    thisPopup.after('<div class="popup_overlay"></div>')
    thisPopup.fadeIn(200);
    $('html, body').css({
        overflow: 'hidden'
    });
    $('.popup_overlay').fadeIn(100);
    $(document).mouseup(function (e) {
        if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
            $('.popup').fadeOut(100);
            $('.popup_overlay').fadeOut(200, function () {
                $('.popup_overlay').remove();
            });
            $('html, body').removeAttr('style');
        };
    });
    $(document).on("click", function (e) {
        if ($('.popup').is(e.target)) {
            $('.popup').fadeOut(100);
            $('.popup_overlay').fadeOut(200, function () {
                $('.popup_overlay').remove();
            });
            $('html, body').removeAttr('style');
        }
    });
};

function closePopup() {
    $('.popup').fadeOut(100);
    $('.popup_overlay').fadeOut(200, function () {
        $('.popup_overlay').remove();
    });
    $('html, body').removeAttr('style');
};