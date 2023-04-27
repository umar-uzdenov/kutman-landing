;setTimeout(main, 0);

function main() {
    const slideList = [...document.querySelectorAll(".slide")]
    const slides = document.querySelector(".slides")
    slides.style.width = `${(slideList.length + 1) * 100}vw`
    const length = slideList.length
    slides.append(slideList[0].cloneNode(true))

    document.querySelector(".next-slide").addEventListener("click", nextSlide)
    setInterval(nextSlide, 3000);
    
    let currentSlide = 0
    async function nextSlide() {
        currentSlide += 1
        slides.style.left = `-${currentSlide * 100}vw`
        if (currentSlide == length) {
            await sleep(300)
            currentSlide = 0
            slides.style.transition = "0s"
            slides.style.left = `-${currentSlide * 100}vw`
            await sleep(300)
            slides.style.transition = "0.3s"
        }

    }

    const list = document.querySelector(".list")
    const servicesButton = document.querySelector(".services")
    let serviceListState = false

    servicesButton.addEventListener("click", async () => {
        console.log("lol")
        if (serviceListState) {
            document.querySelector(".list").style.display = "none"
            document.querySelector(".slider").style.display = "flex"
        } else {
            document.querySelector(".slider").style.display = "none"
            document.querySelector(".list").style.display = "flex"
        }
        serviceListState = !serviceListState
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}