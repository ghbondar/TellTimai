window.onload = init;
rotate;

function init() {
    
    rotate();
    elementDisplay();
}

/* ghb 2019-02-11: These functions power the Social Media Carousel. */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var n = Math.floor(Math.random() *(slides.length));
document.getElementByClassName("dot").src = slides[n];

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mediaSlide");
    var dots = document.getElementsByClassName("dot");
    /* ghb: trying to randomize.   
     * var n = Math.floor(Math.random() *(slides.length));
    document.getElementByClassName("dot").src = slides[n];  */
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

/* ghb: This function prevents the header-element from displaying in the news feed.  */
function elementDisplay() {
    var iframe = document.getElementById("news");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("header")[0];
    elmnt.style.display = "none";
}

/* ghb: This function opens a UHawaii payment window */
function openWin() {
    window.open("https://giving.uhfoundation.org/funds/12650604?fbclid=IwAR3jjnU_kIlMmI5VczytWSEsHAR4Fe1e0ajpMcXkIZoyktCSbAuKDv-gg6w");
}

/* ebb: This function randomly rotates the images */
function rotate() {
    var thisImage = 0;
    var images = new Array ('img/rotator/1.jpg', 'img/rotator/2.jpg', 'img/rotator/3.jpg', 'img/rotator/4.jpg', 'img/rotator/5.jpg', 'img/rotator/6.jpg', 'img/rotator/7.jpg')
    
    /* ebb: This line randomizes the order of the images:*/
    var thisImage = Math.floor(Math.random() *(images.length));
    document.getElementById("rotator").src = images[thisImage];
    
    /* ebb: Uncomment this if you want continual image rotation in seconds*/
    setTimeout(rotate, 5 * 1000);
}

/*ebb: Old code that seems only to work with continual image rotation in order, not for refresh from server.*/
/*  var thisImage = 0;
function rotate() {
var images = new Array ('Images/maryrmitford.png', 'Images/MRMchild.png', 'Images/MRMwrit.png', 'Images/letter.png', 'Images/Flush.png', 'Images/MRMJul.png', 'Images/TMC.png');
thisImage++;
if (thisImage == images.length) {
thisImage = 0;
}
document.getElementById("rotator").src = images[thisImage];
setTimeout(rotate, 5 * 1000);
}*/

/* ghb 2019-01-11: Change Log:
 * ghb 2019-01-11: Adapted this javascript from digitalmitford.org
 * ghb 2019-01-19: added openWin fcn from w3schools.com
 * ghb 2019-02-03: added elementDisplay fcn
 * ghb 2019-02-11: added functions to power the Social Media Carousel
 * */