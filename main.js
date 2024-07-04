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

const themeBGColor ="#0A0A0A" ;
const themeColor = "#fff6e9";
const liteBGColor = "rgb(0 0 0)";
const liteColor = "#c8c8c8";
const changeRootVariableValue = (variable,value)=>{
      root.style.setProperty(variable, value);
}
const changeThemeMode = ()=>{
      if(isDarkMode){
            themeToggleBtn.classList.remove('day')
            themeToggleBtn.classList.add('night')
            setThemeColor(themeColor,themeBGColor,liteColor,liteBGColor)
      }else{
            themeToggleBtn.classList.remove('night')
            themeToggleBtn.classList.add('day')
            setThemeColor(themeBGColor,themeColor,liteBGColor,liteColor)
      }
}

const setThemeColor = (color,bgColor,liteColor,liteBGColor)=>{
      changeRootVariableValue('--themeColor', color);
      changeRootVariableValue('--themeBGColor',bgColor);
      changeRootVariableValue('--lite-theme-color', liteColor);
      changeRootVariableValue('--lite-theme-BGColor', liteBGColor);
}


(window.onload = function(){
      let loaderWrapper = document.querySelector('.loader-wrapper');
      document.body.classList.remove('loaded')
      loaderWrapper.classList.add('active');
      // Function to detect the current theme
      function detectTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  isDarkMode = true;
            } else {
                  isDarkMode = false;
            }
            changeThemeMode()
      }
  
      detectTheme()
      // Listen for changes in the color scheme preference
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                  isDarkMode=true;
            } else {
                  isDarkMode = false;
            }
            changeThemeMode()
      });
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

themeToggleBtn.addEventListener('click',()=>{
      changeThemeMode()
      isDarkMode = !isDarkMode
})


const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            entry.target.classList.toggle('show-intersect',entry.isIntersecting);
            console.log(entry.target)
      })
})


animateElements.forEach(el=>observer.observe(el))




variationSliderProgressBar.addEventListener('input',(e)=>{
      console.log(e.target.valueAsNumber)
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