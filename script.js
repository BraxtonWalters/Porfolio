const toggleArr = document.querySelectorAll(".toggle");
const fColorArr = document.querySelectorAll(".blackText");
const headerColorArr = document.querySelectorAll(".headBackColorWhite");
const bodyColor = document.querySelector("body");

let nodeList = document.querySelectorAll(".anOnScroll");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove("animate");
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

function toggleMode(element) {
    let mode;
    if (element.innerText == "Dark Mode") {
        element.innerText = "Light Mode";
        mode = "dark";
    } else {
        mode = "light";
        element.innerText = "Dark Mode";
    }
    toggleArr.forEach(elem => {
        if (elem.tagName.toLowerCase() == "div" || elem.tagName.toLowerCase() == "nav" || elem.tagName.toLowerCase() == "body") {
            changeBG(elem, mode);
        } else {
            changeText(elem, mode);
        }
    })
}

function changeBG(elem, mode) {
    if (mode == "dark") {
        elem.classList.add("headBackColorBlack");
        elem.classList.remove("headBackColorWhite");
    } else {
        elem.classList.remove("headBackColorBlack");
        elem.classList.add("headBackColorWhite");
    }
}

function changeText(elem, mode) {
    if (mode == "dark") {
        elem.classList.remove("blackText");
        elem.classList.add("whiteText");
    } else {
        elem.classList.add("blackText");
        elem.classList.remove("whiteText");
    }
}










// function darkMode(element) {
//     if (element.innerText === "Dark Mode") {
//         element.innerText = "Light Mode"
//         bodyColor.classList.add("headBackColorBlack");

//         for (let i = 0; i < fColorArr.length; i++) {
//             fColorArr[i].classList.add("whiteText");
//             fColorArr[i].classList.remove("blackText");
//         }
//         for (let i = 0; i < headerColorArr.length; i++) {
//             headerColorArr[i].classList.add("headBackColorBlack");
//             headerColorArr[i].classList.remove("headBackColorWhite");
//         }
//     } else {
//         lightMode();
//     }
// }





