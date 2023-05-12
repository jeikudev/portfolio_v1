const parallaxElement = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

const update = (cursorPosition) => {
    parallaxElement.forEach((element) => {
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;
        let speedz = element.dataset.speedz;

        let isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;
        
        element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
                                    translateY(calc(-50% + ${yValue * speedy}px))
                                    perspective(2300px) translateZ(${zValue * speedz}px)`;
    })
}
update(0);
window.addEventListener("mousemove", (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;

    update(event.clientX);
})


