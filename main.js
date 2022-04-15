
AOS.init({
   duration:800,
   offset:150,
})

var typed = new Typed (".auto-type", {
    strings:["Frontend Developer" , "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
 
 
/*SHOW SIDEBAR*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-sidebar')
  })
}

if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar')
  })
}


/*CONTACT*/


const conbtn = document.getElementById('submit-button')
const inputs = document.querySelector('form')
conbtn.addEventListener("click", () => {
  Email.send({
    SecureToken : "1c70533c-54c4-44c2-927d-ce150c207def",
    To : 'devs3coder@gmail.com',
    From : inputs.elements["email"].value,
    Subject : "A Message From Your Website ",
    Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value
  }).then(msg => alert("Still needs fixing. Please send me a message using my Email"))

  
})

/*Vanilla tilt js*/
VanillaTilt.init(document.querySelectorAll(".p-box")), {
   max:25,
   speed:400
}




