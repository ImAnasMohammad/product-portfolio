var isDarkMode = true;
const animateElements = document.querySelectorAll('.hide-intersect')
const navBar = document.querySelector('.navbar');
const navToggleBtn = document.querySelector('#toggle-nav-bar');
const navItemsWrapper = document.querySelector('.nav-items-wrapper');
const themeToggleBtn = document.querySelector('#theme-toggler');
const root = document.querySelector(':root');
var prevScrollValue = 0;

const variationSliderProgressBar = document.querySelector('#slider-progress');

// default for Dark Mode

const changeRootVariableValue = (variable,value)=>{
      root.style.setProperty(variable, value);
}


(window.onload = function(){
      let loaderWrapper = document.querySelector('.loader-wrapper');
      document.body.classList.remove('loaded')
      loaderWrapper.classList.add('active');
})()



navToggleBtn.addEventListener('click',()=>{
      navItemsWrapper.classList.toggle('active')
})


window.onscroll = function () {

      const value = window.scrollY;

      if(value>=110){
            navBar.classList.add('sticky');
            

            if(prevScrollValue>value){
                  navBar.classList.remove('top-20');
            }else{
                  navBar.classList.add('top-20');
            }
            prevScrollValue = value;
      }else{
            navBar.classList.remove('sticky');
      }
};



const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            entry.target.classList.toggle('show-intersect',entry.isIntersecting);
            console.log(entry.target)
      })
})


animateElements.forEach(el=>observer.observe(el))




variationSliderProgressBar.addEventListener('input',(e)=>{
      changeRootVariableValue('--before-width',e.target.valueAsNumber+"%");
})



var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop:true
    });