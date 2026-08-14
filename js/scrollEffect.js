const cards = document.querySelectorAll('.card');

const Options = {
    thresold: 1,
    rootMargin: "0px 0px -150px 0px"
}

const animationAppear = new IntersectionObserver(function(entries, animationOnAppear){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            animationOnAppear.unobserve(entry.target);
        }
    })
}, Options);

cards.forEach(card => {
    animationAppear.observe(card);
})