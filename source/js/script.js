$(document).ready(function () {
    $('.js-btn').on('click', function() {
        var textBtn =$('.js-btn').text();
        $('.js-btn').text(textBtn == "Работаете в этой компании?" ? "Отменить запрос в сотрудники" : "Работаете в этой компании?");
    });

    if ($('.js-btn').is('[disabled=disabled]')) {
        $('.js-btn').text('Я работаю в этой компании');
        $('.js-btn').addClass('green-disabled');
        $('.js-stat').removeClass('visually-hidden');
        $('.js-edit').removeClass('visually-hidden');
        $('.js-review').addClass('visually-hidden');
    };

    function checkWidth() {
        if ($(window).width() <= 1024) {
            var showChar = 350;
            var ellipsestext = "...";
            var moretext = "Читать далее";
            var lesstext = "Свернуть";
            $('.js-parag').each(function () {
                var content = $(this).html();
                if (content.length > showChar) {
                    var show_content = content.substr(0, showChar);
                    var hide_content = content.substr(showChar, content.length - showChar);
                    var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink blue-link">' + moretext + '</a></span>';
                    $(this).html(html);
                } else {
                    return false;
                }
            });

            $('.morelink').click(function () {
                if ($(this).hasClass('less')) {
                    $(this).removeClass('less');
                    $(this).html(moretext);
                } else {
                    $(this).addClass('less');
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
        }
    };

    checkWidth();

    $(window).resize(function() {
        checkWidth();
    });



    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('.up-btn').is(':hidden')) {
                $('.up-btn').css({opacity : 1}).fadeIn('slow');
            }
        } else {
            $('.up-btn').stop(true, false).fadeOut('fast');
        }
    });
    $('.up-btn').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });

    let closePopup = function() {
        $('.js-comment').fadeOut(300);
        $('body').removeClass('body-pop-up');
    }
    let openPopup = function() {
        $('.js-comment').fadeIn();
        $('body').addClass('body-pop-up');
    }
    $('.js-review').on('click', function(evt) {
        evt.preventDefault();
        openPopup();
    });
    $('.js-cross').on('click', function () {
        closePopup();
    });

    $(document).bind('keydown', function(evt) {
        if (evt.which == 27) {
            closePopup();
        }
    });

    $(document).on('click', function(evt) {
        if($('.js-review').is(":visible") && $(evt.target).is('.body-pop-up')) {
            closePopup();
        }
    });


    $('.products-photos').on('click',function () {
        if ($('.active-photo').next('.products-photos__item').length) {
            $('.active-photo').removeClass('active-photo').next('.products-photos__item').addClass('active-photo');
            }else {
            $('.active-photo').removeClass('active-photo');
            $('.products-photos__item').first().addClass('active-photo');
        }
    });

    $('[data-fancybox="gallery"]').attr('rel', 'gallery').fancybox({
            arrows: true,

    });

});
