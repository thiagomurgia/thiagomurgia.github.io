// working button
function mouseIn(){
    document.getElementById("arrow")
    arrow.classList.add("active")
}
function mouseOut(){
    document.getElementById("arrow")
    arrow.classList.remove("active")
}



// fixed navbar after scroll second page
function fixNav(){
    window.addEventListener('scroll',function(e){
        const scrolled = window.scrollY;
    
        if(scrollY > 900){
            document.getElementById("navbar");
            navbar.classList.add("fixed");         
        }else{
            document.getElementById("navbar");
            navbar.classList.remove("fixed") 
        }
    })
}
fixNav();

// select a link active in menu

function verifyElement(){
    const elClassName = document.querySelectorAll('a');
    
    document.addEventListener('click', ()=>{
        const linkElH = document.getElementById('lHome')
    })
}
verifyElement()

// const progress = document.querySelector(".progress-bar-done");

// setTimeout(() => {
//   progress.style.opacity = 1;
//   progress.style.width = progress.getAttribute("data-done") + "%";
// }, 1000);

// fixNav();