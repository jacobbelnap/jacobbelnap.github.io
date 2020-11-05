function toggle2() {
   document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/*function toggle2() {
   window.addEventListener('load',(event)=>{
      // add code here to run when page loads
      const hambutton = document.querySelector('.hamburger');
      const mainnav = document.querySelector('.navigation')
      
      hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false); window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}
*/