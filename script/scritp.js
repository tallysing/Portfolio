let burger = document.getElementById('navTrigger'),
    nav    = document.getElementById('navMenu');

burger.addEventListener('click', function(e){
  if (!this.classList.contains("active")) {
    this.classList.add("active");
    nav.classList.add("active");
  } else {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  }
});