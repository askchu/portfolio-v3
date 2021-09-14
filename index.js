
const hamburger = document.querySelector("#nav-icon");
const aboutMeLink = document.querySelector(".aboutLink");
const portfolioLink = document.querySelector(".portfolioLink");
const contactMe = document.querySelector(".contactLink");
const links = document.querySelector(".links");
const navbar = document.querySelector("nav");
const socialMedia = document.querySelector(".socialMedia");
const body = document.querySelector("body");
const downloadButton = document.querySelector(".download");
const form = document.querySelector("#form");
const formButton = document.querySelector(".btn");

hamburger.addEventListener("click", () => {


    hamburger.classList.toggle("open");
    links.classList.toggle("open");
    navbar.classList.toggle("open");
    body.classList.toggle("open");
})

aboutMeLink.addEventListener("click", () => {
    let desktop_view = window.matchMedia("(min-width: 1200px)");
    if (!desktop_view.matches) {
        hamburger.classList.toggle("open");
        links.classList.toggle("open");
        body.classList.toggle("open");
        navbar.classList.toggle("open");
    }

})

portfolioLink.addEventListener("click", () => {
    let desktop_view = window.matchMedia("(min-width: 1200px)");
    if (!desktop_view.matches) {
        hamburger.classList.toggle("open");
        links.classList.toggle("open");
        body.classList.toggle("open");
        navbar.classList.toggle("open");
    }
})

contactMe.addEventListener("click", () => {
    let desktop_view = window.matchMedia("(min-width: 1200px)");
    if (!desktop_view.matches) {
        hamburger.classList.toggle("open");
        links.classList.toggle("open");
        body.classList.toggle("open");
        navbar.classList.toggle("open");
    }
})



downloadButton.addEventListener('click', () => {
    downloadButton.innerHTML = "Downloading";
    setTimeout(() => {
        window.open('./resume.pdf');
        downloadButton.innerHTML = "Download Resume";
    }, 1000)
})

// Contact input message effect
const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blur() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }

}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blur);
})

const inputContainers = document.querySelectorAll(".input-container")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }

    sendEmail('https://formsubmit.co/ajax/alex.chu16@hotmail.com', data)

    formButton.style.pointerEvents = "none";
    form.reset();

    inputContainers.forEach(input => {
        input.classList.remove("focus");
    })

    setTimeout(() => {
        window.scrollTo(0, 0);
        formButton.style.pointerEvents = "auto";

    }, 1000)

})

const sendEmail = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(data),
        dataType: "json"
    });
    return response.json();
}

const openModalButton = document.querySelectorAll('.modal');
const closeModalButton = document.querySelectorAll('.closeModal');
const overlays = document.querySelectorAll('.overlay');
const projects = document.querySelectorAll('.project');

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.nextElementSibling;

        openModal(modal);
        const parent = button.closest(".project");
        projects.forEach(project => {
            if (project !== parent) {
                project.classList.add("active");
            }
        })
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.preview')
        closeModal(modal);
        const parent = button.closest(".project");
        projects.forEach(project => {
            if (project !== parent) {
                project.classList.remove("active");
            }
        })
    })
})

overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
        const modal = overlay.previousElementSibling;
        modal.classList.remove('active');
        body.classList.remove('open');
        overlay.classList.remove('active');
        const parent = overlay.closest(".project");
        projects.forEach(project => {
            if (project !== parent) {
                project.classList.remove("active");
            }
        })
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    const overlays = modal.nextElementSibling
    overlays.classList.add('active');
    body.classList.add('open');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    const overlays = modal.nextElementSibling
    overlays.classList.remove('active');
    body.classList.remove('open');
}
