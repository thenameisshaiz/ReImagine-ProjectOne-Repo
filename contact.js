var tl = gsap.timeline()

tl.from("#nav1 h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.2,
})

tl.from("#tabs1 h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.2, 
    stagger:0.2
})
tl.from("#content",{
    y:20,
    opacity:0,
    duration:0.5,
    delay:0.2,
})