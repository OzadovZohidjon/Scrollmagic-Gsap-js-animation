document.addEventListener('DOMContentLoaded', () =>{
    let controller =new ScrollMagic.Controller();

    let timeLine = new TimelineMax();
        timeLine
        .from(
            '.section_1_01', 4,{
                y: -100,
                x: -150,
                ease: Power3.easeInOut
            }
        )
        .from(
            '.section_1_02', 4,{
                y: -150,
                x: -250,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_03', 4,{
                y: -80,
                x: -100,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_04', 4,{
                y: -100,
                x: -150,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_05', 4,{
                y: -80,
                x: -200,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_06', 4,{
                y: -100,
                x: -350,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_07', 4,{
                y: -50,
                x: -150,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_08', 4,{
                y: 50,
                x: -350,
                ease: Power3.easeInOut
            }, '-=4'
        )
        .from(
            '.section_1_09', 4,{
                y: 100,
                x: -200,
                ease: Power3.easeInOut
            }, '-=4'
        )

    
    let scene =new ScrollMagic.Scene({
        triggerElement:'first_section',
        duration: "100%",
        triggerHock: 0,
        offset: "300"
    })

    .setTween(timeLine)
    .setPin('.first_section')
    .addTo(controller)

    let timeLine2 = new TimelineMax();
        timeLine2
        .to('.top .image_container', 4,{
            height: 0
        } )

    let scene2 =new ScrollMagic.Scene({
        triggerElement:'.second_section',
        duration: "100%",
        triggerHock: 0,
        offset: "300"
    })

    .setTween(timeLine2)
    .setPin('.second_section')
    .addTo(controller)

    let timeLine3 = new TimelineMax();
    timeLine3
        .to('.section_3_01', 4,{
            y: -250,
            ease: Power3.easeInOut
        }, '-=4' )
        .to('.section_3_02', 4,{
            y: -200,
            ease: Power3.easeInOut
        }, '-=4' )
        .to('.section_3_03', 4,{
            y: -100,
            ease: Power3.easeInOut
        }, '-=4' )
        .to('.section_3_04', 4,{
            y: 0,
            ease: Power3.easeInOut
        }, '-=4' )
        .to('.section_3_05', 4,{
            y: 150,
            ease: Power3.easeInOut
        }, '-=4' )
        .to('.section_3_06', 4,{
            y: 250,
            ease: Power3.easeInOut
        }, '-=4' )

    let scene3 =new ScrollMagic.Scene({
        triggerElement:'.third_section',
        duration: "100%",
        triggerHock: 0,
        offset: "500"
    })

    .setTween(timeLine3)
    .setPin('.third_section')
    .addTo(controller)


    let timeLine4 = new TimelineMax();
    timeLine4
    .to('.section_4_01', 4,{
        autoAlpha: 0
    })
    .from('.section_4_02', 4,{
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 4,{
        autoAlpha: 0
    })
    .from('.section_4_04', 4,{
        autoAlpha: 0
    })

    let scene4 =new ScrollMagic.Scene({
        triggerElement:'.forth_section',
        duration: "100%",
        triggerHock: 0,
        offset: "500"
    })

    .setTween(timeLine4)
    .setPin('.forth_section')
    .addTo(controller)
})