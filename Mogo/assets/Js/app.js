alert
$(function () {

    var header = $("#header"),
        introH = $("#into").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrolltop();

        console.log(scrollOffset);

        if( scrollOffset >= introH) {
            header.addClass (fixed);
        } else {
            header.removeClass (fixed);
        }

    });


});