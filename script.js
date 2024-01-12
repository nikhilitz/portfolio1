const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function chapta() {
    var xScale = 1;
    var yScale = 1;
    var prevX = 0;
    var prevY = 0;
    window.addEventListener("mousemove", function (dets) {

        xScale = gsap.utils.clamp(0.8, 1, dets.clientX - prevX);
        yScale = gsap.utils.clamp(0.8, 1, dets.clientY - prevY);
        prevX = dets.clientX;
        prevY = dets.clientY;
        circleMouseFollower(xScale, yScale);

    })

}
chapta();
function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets);
        cursor = document.querySelector(".minicircle");
        cursor.style.cssText = "left: " + dets.clientX + "px; top: " + dets.clientY + "px;";
        cursor.style.transform = `scale(${xScale},${yScale})`;
        // cursor.style.font=`1rem`;
    });

}
circleMouseFollower();
function reveal() {
    var t1 = gsap.timeline();
    t1.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 0.5,
    }

    )
        .to(".boundingelem", {
            y: 0,
            duration: 0.7,
        })
        .to(".boundingec", {
            y: 0,
            duration: 0.7,
            delay: -1

        })
        .to(".boundingsmall", {
            y: 0,
            duration: 0.5,
            delay: -1,
            // stagger:1 
            // is for delay in similar ones in a class

        })
        .from("#herofooter", {
            y: -10,
            duration: 1,
            opacity: 0

        })

}
reveal();
var circle = document.querySelector(".minicircle");
document.querySelectorAll(".elem").forEach(function (e) {
    var diffRot = 0;
    var rotate = 0;
    e.addEventListener("mouseleave", function () {
        gsap.to(e.querySelector("img"), {
            opacity: 0,
        })
        circle.innerText = "";

    })
    e.addEventListener("mousemove", function (details) {
        var yDiff = details.clientY - e.getBoundingClientRect().top;
        circle.innerText = "view";
        circle.style.backgroundColor="red";
        diffRot = details.clientX - rotate;
        rotate = details.clientX;
        //e.getBoundingClientRect() details of elements 
        console.log(yDiff);
        gsap.to(e.querySelector("img"), {
            opacity: 1,
            // ease:Power1,
            top: yDiff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRot),
        })
    })
}

)