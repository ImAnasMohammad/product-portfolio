(window.onload = function(){
      let loaderWrapper = document.querySelector('.loader-wrapper');
      loaderWrapper.classList.add('active')
})()
const navBar = document.querySelector('.navbar');
const navToggleBtn = document.querySelector('#toggle-nav-bar');
const navItemsWrapper = document.querySelector('.nav-items-wrapper');
const themeToggleBtn = document.querySelector('#theme-toggler')

navToggleBtn.addEventListener('click',()=>{
      navItemsWrapper.classList.toggle('active')
})
window.onscroll = function (e) {
      navBar.classList.toggle('sticky',window.scrollY>=110)
};

themeToggleBtn.addEventListener('click',(e)=>{
      // document.style = 
})