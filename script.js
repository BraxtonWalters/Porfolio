const anElement = document.querySelectorAll(".anOnScroll")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("")
        }
    }))
}, {
    threshold: 0.5
});

for (let i = 0; i > anElement.length; i++) {
    const element = anElement[i];
    observer.observe[element];
}