const imgs = document.querySelectorAll("[data-src]")
let imgOptions = { threshold: 0, rootMargin: "0px 0px 600px 0px" }
function preloadImg(img) {
        const src = img.getAttribute("data-src")

        if (!src) return;

        img.src = src
}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
                if (!entry.isIntersecting) {
                        return
                } else {
                        preloadImg(entry.target)
                        imgObserver.unobserve(entry.target)
                }
        })
}, imgOptions)


imgs.forEach(image => {
        imgObserver.observe(image)
})