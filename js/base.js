let star  = document.getElementById("star");
let cliff  = document.getElementById("cliff");
let char  = document.getElementById("char");
const header = document.querySelector(".navbar");
const sectionOne = document.querySelector("#top");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    //star.style.top = value * 0.5 + 'px';
    cliff.style.top = value * 0.3 + 'px';
    //char.style.bottom = value * 0.15 + 'px';
})

const sectionOneOptions = {};
  
  const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);