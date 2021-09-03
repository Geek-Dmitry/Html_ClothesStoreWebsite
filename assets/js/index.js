$(document).ready(function () {

    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    //smooth scrolling on all buttons on the MainPage
    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);

        return false;
    });

    $("#header-logo").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $("#shop-button").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});