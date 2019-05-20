
    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoPlay: true,
        speed: 400,
        prevArrow:'<a type="button" class="prevButton pull-left"></a>',
        nextArrow:'<a type="button" class="nextButton pull-right"></a>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoPlay: true,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    arrows: true,
                    dots: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.title').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true

    });
    $(document).ready(function() {
        $("a.scroll").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1500,
                easing: "swing"
            });
            return false;
        });
    });
    function diplay_hide (blockId, hidden)
    {
        if ($(blockId).css('display') == 'none')
        {
            $(blockId).animate({height: 'show'}, 500);
        }
        else
        {
            $(blockId).animate({height: 'hide'}, 500);
        }}