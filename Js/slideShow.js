//animation list: flip, slice, box3D, pixel, fade, glide, card

$(document).ready(function () {

    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        row: 12,
        col: 35,
        animation: [

            'card'
        ],
        file: [
            {
                src: {
                    main: "img/main.png",
                    cover: "img/cover_1.jpg"
                },
                title: 'COSMOS',
                desc: "1: slideWiz is a JQuery based library created by a Nigerian Software " +
                "Engineer by the name 'Wisdom Emenike' who at the time of writing this library " +
                "works at Imaxinacion Technology, one of Nigeria's leading IT companies.",
                descLength: 220,
                button: {
                    text: 'Ver más',

                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    main: "img/main.png",
                    cover: "img/cover_2.jpg"
                },
                title: 'Naturaleza',
                desc: "2: slideWiz is a JQuery based library created by a Nigerian Software " +
                "Engineer by the name 'Wisdom Emenike' who at the time of writing this library " +
                "works at Imaxinacion Technology, one of Nigeria's leading IT companies.",
                button: {
                    text: 'Ver más',

                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    main: "img/main.png",
                    cover: "img/cover_3.jpg"
                },
                title: 'Big-Bang',
                desc: "3: slideWiz is a JQuery based library created by a Nigerian Software " +
                "Engineer by the name 'Wisdom Emenike' who at the time of writing this library " +
                "works at Imaxinacion Technology, one of Nigeria's leading IT companies.",
                descLength: 190,
                button: {
                    text: 'Ver más',

                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    main: "img/main.png",
                    cover: "img/cover_4.jpg"
                },
                title: 'Gamer Zone',
                desc: "4: slideWiz is a JQuery based library created by a Nigerian Software " +
                "Engineer by the name 'Wisdom Emenike' who at the time of writing this library " +
                "works at Imaxinacion Technology, one of Nigeria's leading IT companies.",
                button: {
                    text: 'Ver más',
                    url: false,
                    class: 'btn btn-medium btn-primary'
                }
            }
        ]

    });

});
