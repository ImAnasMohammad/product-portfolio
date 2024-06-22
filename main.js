var isDarkMode = true;
const animateElements = document.querySelectorAll('.hide-intersect')
const navBar = document.querySelector('.navbar');
const navToggleBtn = document.querySelector('#toggle-nav-bar');
const navItemsWrapper = document.querySelector('.nav-items-wrapper');
const themeToggleBtn = document.querySelector('#theme-toggler');
const root = document.querySelector(':root');

// default for Dark Mode

const themeBGColor ="#0A0A0A" ;
const themeColor = "#fff6e9";
const liteBGColor = "rgba(149, 149, 149,0.8)";
const liteColor = "#2c2c2c";

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
      root.style.setProperty('--themeColor', color);
      root.style.setProperty('--themeBGColor',bgColor);
      root.style.setProperty('--lite-theme-color', liteColor);
      root.style.setProperty('--lite-theme-BGColor', liteBGColor);
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
window.onscroll = function (e) {
      navBar.classList.toggle('sticky',window.scrollY>=110)
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