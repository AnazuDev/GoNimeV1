let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

function downloadApp() {
    window.location.href = 'https://github.com/AnazuDev/GoNimeApp/raw/main/com.anasbex.gonime_15_1.0.4-1725789188139-signed.apk';
}
function downloadSnap() {
    window.location.href = 'https://github.com/AnazuDev/GoNimeApp/raw/main/com.anasbex.gonime_15_1.0.4-1725789188139-signed.apk';
}
function injectApp() {
    window.location.href = 'https://anasbex.vercel.app/injectgn/';
}