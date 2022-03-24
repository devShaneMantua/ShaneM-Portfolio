
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
    Host : "smtp.mailtrap.io",
    Username : "88e828c2330534",
    Password : "b4408e6641144e",
    To : 'devs3coder@gmail.com',
    From : inputs.elements["email"].value,
    Subject : "A Message From Your Website ",
    Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value
  }).then(msg => alert("Message Successfully Sent"))

  
})




