var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.3, 
    stagger:0.2
})

gsap.from(".head2",{
    x:-50,
    opacity:0,
    duration:1,
    delay:3
})

gsap.from(".head3",{
    x:50,
    opacity:0,
    duration:1,
    delay:4
})

gsap.from(".slider",{
    opacity:0,
    duration:0.01,
    delay:5,
})

gsap.from(".page2-heading",{
    x:100,
    // duration:2,
    // delay:1,
    opacity:0,
    scrollTrigger:{
       trigger:".page2-heading",
       scroller:"body",
    //    markers:"true",
    //    start:"top 1%",
       end:"top 4%",
       scrub:3,
    }
})

gsap.from(" .page2 .wrapper .card img",{
    y:20,
    opacity:0,
    duration:2,
    delay:3,
    // duration:2,
    // delay:2,
    scrollTrigger:{
        trigger:".page2 .wrapper .card img",
        scroller:"body",
        // markers:"true",
        // start:"top 1%",
        end:"top 5%",
        scrub:true,
    }
})

gsap.from(".intro-text",{
    x:-10,
    duration:3,
    delay:3,
    opacity:0,
})

gsap.from(".book-btn",{
    x:70,
    duration:3,
    delay:5,
    opacity:0,
})