window.addEventListener("load",function(){

  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function(){
    navMenu.classList.toggle('is-visible');
  });
  
    navMenu.addEventListener('click', function(){
      navMenu.classList.toggle('is-visible');
  });

});