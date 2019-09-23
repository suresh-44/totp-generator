const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
var deferredPrompt;
window.addEventListener("beforeinstallprompt", (e)=> {
  // console.log(e);
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';
  addBtn.addEventListener("click", () => {
    e.prompt();

    e.userChoice.then((res)=> {
      if (res.outcome === "accepted") {
        console.log("user accepted to add home screen")
      } else {
        console.log("user decline to add home screen")
      }
    })
  })
});

// let seconds = 30;
// let doPlay = true;
// let loader = document.getElementById('loader')
// let α = 0
// let π = Math.PI
// let t = (seconds/360 * 1000);

// (function draw() {
//   α++;
//   α %= 360;
//   let r = ( α * π / 180 )
//     , x = Math.sin( r ) * 125
//     , y = Math.cos( r ) * - 125
//     , mid = ( α > 180 ) ? 1 : 0
//     , anim = 'M 0 0 v -125 A 125 125 1 ' 
//            + mid + ' 1 ' 
//            +  x  + ' ' 
//            +  y  + ' z';
//   //[x,y].forEach(function( d ){
//   //  d = Math.round( d * 1e3 ) / 1e3;
//   //});

//   loader.setAttribute( 'd', anim );

//   if(doPlay){
//     setTimeout(draw, t); // Redraw
//   }
// })();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../service-worker.js')
  .then(function(registration) {
    console.log('Service worker is enabled successfully, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
  });
}

const qrCode = new QRCode("qrcode");
qrCode.makeCode("Suresh");

localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"))

var testObject = { 'one': 1, 'two': 2, 'three': 3 };

localStorage.setItem("object", JSON.stringify(testObject));
console.log(JSON.parse(localStorage.getItem("object")));