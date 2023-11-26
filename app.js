// scroll animation
const theAnimation = document.querySelectorAll(".animation");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation")
        } else {
            entry.target.classList.remove("scroll-animation")
        }
    })
},
    {
        threshold: 0.3
    });
for (let i = 0; i < theAnimation.length; i++) {
    const elements = theAnimation[i];
    observer.observe(elements);
}


// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();