//index.html
//side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function myFunction(x) {
  x.classList.toggle("change");
}
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const aboutusElements = document.querySelectorAll('.aboutus');
  
  aboutusElements.forEach((el) => observer.observe(el));s
//scroll (about page)
//inside about page (script)