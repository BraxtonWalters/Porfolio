let nodeList = document.querySelectorAll(".anOnScroll")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            console.log(entry.target.classList);
        }
    })
}, {
    threshold: 0.5
});

for (let i = 0; i < nodeList.length; i++) {
    const element = nodeList[i];
    console.log(nodeList[i]);
    observer.observe(element);
}

