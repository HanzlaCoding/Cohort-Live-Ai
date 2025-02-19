const tl = gsap.timeline();

tl.from('nav .part1 h5', {
    x: -30,
    opacity: 0,
    duration: .3,
    ease: 'power3.out'
})

tl.from('nav .part2 a', {
    y: 20,
    opacity: 0,
    duration: .2,
    ease: 'power3.out'
})

tl.from('main .introduction h4',{
    x:-40,
    opacity:0,
    duration:.3
})