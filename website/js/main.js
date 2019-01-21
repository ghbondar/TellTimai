function init() {
    rotate();
}


/* ghb: This javascript open a UHawaii payment window */
function openWin() {
  window.open("https://giving.uhfoundation.org/funds/12650604?fbclid=IwAR3jjnU_kIlMmI5VczytWSEsHAR4Fe1e0ajpMcXkIZoyktCSbAuKDv-gg6w");
}

/* ebb: This javascript rotates images on reload from server*/
function rotate() {
    var thisImage = 0;
    var images = new Array ('img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg' )
    
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

window.onload = init;
rotate;

/* ghb 2019-01-11: Change Log: */
/* ghb 2019-01-11: Adapted this javascript from digitalmitford.org */
/* ghb 2019-01-19: added openWin fcn from w3schools.com */