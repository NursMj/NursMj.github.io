  $(document).ready(function(){
    $('.description_slider').slick({
        infinite: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.beside_slider').slick({
        infinite: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }
        ]
    });
  })
