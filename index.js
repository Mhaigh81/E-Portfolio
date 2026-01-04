let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for (let i=0; i < shapes.length; ++i){
        const isOdd = i % 2 !==0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}



function toggleContast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList.add("dark-theme")
    }
    else {
    document.body.classList.remove("dark-theme")
    }
}

function contact() {
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList.add("modal__overlay--visible")

    event.preventDefault();
    emailjs
        .sendForm(
            'service_52iu82j',
            'template_3g1nm5b',
            event.target,
            '2iNhXXsWHpa2r3YaL'
        ).then(() => {
           
            loading.classList.remove("modal__overlay--visible")
            success.classList.add("modal__overlay--visible")
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert("The email service is temporarily unavailable. Please contact me directly on mhaigh@me.com")
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList.add("modal--open")
}