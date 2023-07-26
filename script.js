const navbar = document.querySelector('header');

window.onscroll = () => {
    if(window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    }
    else{
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }
}

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const fasolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    fasolid.classList.toggle("fa-xmark")
})

hlink.forEach(link => {
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
        fasolid.classList.toggle("fa-xmark")
    })
})

//testimonial
const usertexts = document.getElementsByClassName("user-text"); 
const userpics = document.getElementsByClassName("user-pic"); 

function showReview(){
    for(userpic of userpics){
        userpic.classList.remove("active-pic");
    }
    for(usertext of usertexts){
        usertext.classList.remove("active-text")
    }

    let i = Array.from(userpics).indexOf(event.target);

    userpics[i].classList.add('active-pic');
    usertexts[i].classList.add('active-text');
}

const toggleBtn = document.getElementById('toggleBtn');

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener('change',()=>{
    card_1_front.classList.toggle('rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})

