// menu open
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}


// removig elements when each nav link is clicked 
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
  console.log("successful")
  navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//typed js 
const typedHome = new Typed(".home__typed",{
  strings:['Web developer', 'English Teacher', 'Python programmer',],
  typeSpeed: 75,
  backSpeed:75,
  loop:true,
  backDelay:2000,
})
// emails section
const contactForm = document.getElementById("contact-form"),
      contactMessage= document.getElementById("contact-message")

let sendEmail = (e) =>{
  e.preventDefault()
  emailjs.sendForm('service_s8s6esq','template_g08dno2','contact-form','ETy2AvQnt8CfsjTxA')
  .then(()=>{
    contactMessage.textContent= "Message sent successfully ✅"
    
    setTimeout(() => {
      contactMessage.textContent = ""
    }, 5000);
    contactForm.reset()
  } , ()=>{
    // show error message
     contactMessage.textContent = "message not sent (service error) ❌"
  })
}
contactForm.addEventListener('submit', sendEmail)
/// scroll animation
const sections = document.querySelectorAll("id")

const scrollActive = ()=>{
  const scrollDown = window.scrollY
  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
           screenTop = current.offsetTop-58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a [href *=' + sectionId + ']')
    if(scrollDown > screenTop && scrollDown  <= screenTop + sectionHeight){
      sectionClass.classList.add("active-link")

    }else{
      sectionClass.classList.remove("active-link")
    }
  })

}
const sr = ScrollReveal({
  origin:"top",
  distance:"70px",
  duration:2000,
  reset:true,
})
sr.reveal(`.home__content , .resume__content:nth-child(1)`)
sr.reveal(`.home__data ,.resume__content:nth-child(2) `, { orgin:'bottom'})

sr.reveal(`.about__content , .contact__content` , {origin:`bottom`})
sr.reveal(`.about__image , .contact__form` , {delay:300})

sr.reveal(`.project__card`,{interval:100})

// const telegramButton = document.getElementsByClassName("telegram")
// telegramButton.addEventListener("click",()=>{
//   alert("my telegram username : self_centured")
// })

// Saving the spline objects in catche 

const globDisplay = 'https://prod.spline.design/r8pP1p3JHCEFZa6V/scene.splinecode';
const diamondDisplay = 'https://prod.spline.design/iCKWezLsLbiNuqet/scene.splinecode';

function setItemTOCatche(key,value){
  window.localStorage.setItem(key , value)
}

setItemTOCatche('3DObjects1' , globDisplay)
setItemTOCatche('3DObjects2', diamondDisplay)

// accessing the objects from catch and prescribing them to the iframe 
const threeDimentionalObject1URL = window.localStorage.getItem("3DObjects1");
const threeDimentionalObject2URL = window.localStorage.getItem("3DObjects2");

const threeDimentionalObject1 = document.getElementById('threeDimentionalObject1')
const threeDimentionalObject2 = document.getElementById('threeDimentionalObject2')

try {
  async function setUrlToElement(){
    
    threeDimentionalObject2.setAttribute('url' , threeDimentionalObject1URL)
    threeDimentionalObject1.setAttribute('url' , threeDimentionalObject2URL)
     
  }
  setUrlToElement()
 }catch(err){
  console.log("error")
}finally{
  console.log("the catching function is finished")
}