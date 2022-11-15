let star  = document.getElementById("star");
let cliff  = document.getElementById("cliff");
let char  = document.getElementById("char");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    star.style.top = value * 0.5 + 'px';
    cliff.style.top = value * 0.3 + 'px';
    //char.style.bottom = value * 0.15 + 'px';
})