// ==========================================
// KMG KOPPELA TRADING ENTERPRISE
// Website JavaScript
// ==========================================


// ================= MOBILE NAVIGATION =================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



// Close menu when clicking a link

const navLinks = document.querySelectorAll("#nav a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});




// ================= FAQ ACCORDION =================


const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question=>{


    question.addEventListener("click",()=>{


        const answer = question.nextElementSibling;


        answer.classList.toggle("show");


        const icon = question.querySelector("i");


        if(icon){

            icon.classList.toggle("fa-plus");

            icon.classList.toggle("fa-minus");

        }


    });


});




// ================= CONTACT FORM MESSAGE =================


const contactForm = document.querySelector(".contact-form");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert("Thank you for contacting KMG Kopela Trading Enterprise. We will respond shortly.");


    contactForm.reset();


});


}
