
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1
    })
        .to(".boundingelem", {
            y: '0',
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2
        })
        .from("#herofotter", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}

function circleMouseFollow(xScale, yScale) {
    window.addEventListener('mousemove', (det) => {
        document.querySelector('#mincircle').style.top = det.clientY + "px";
        document.querySelector('#mincircle').style.left = det.clientX + "px";
        document.querySelector('#mincircle').style.transform = `scale(${xScale}, ${yScale})`;
    })
}
function chaptaMouse() {
    var yScale = 1;
    var xScale = 1;

    var xprev = 0;
    var yprev = 0;

    document.querySelector('#mincircle').addEventListener('mousemove', (dets) => {
        yScale = gsap.utils.clamp(.3, 1.2, dets.clientY - yprev);
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollow(xScale, yScale);
    })
}
circleMouseFollow();
firstPageAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate =0;
    var diffrot =0;

    elem.addEventListener("mouseleave", (dets) => {
      let img = elem.querySelector(".elem img")
        gsap.to(img,{
            opacity : 0,
        })
        gsap.to(elem.querySelector('h1'),{
            opacity : 0.7,
            x:0
        })
    })


    elem.addEventListener("mousemove", (dets) => {

        gsap.to(elem.querySelector('h1'),{
            opacity : 0.2,
            x:60,
            ease : Power3
        })

        diffrot = dets.clientX - rotate;
        rotate  = dets.clientX;

    var diff = dets.clientY - elem.getBoundingClientRect().top;
      let img = elem.querySelector(".elem img")
        gsap.to(img,{
            opacity : 1,
            top : diff,
            left : dets.clientX,
            rotate :  gsap.utils.clamp(-30, 30, diffrot)

        })
    })
})


