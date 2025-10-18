let ctr = 0;

function callback(){
   document.querySelectorAll("h4")[0].innerHTML = ctr;
   ctr++;
}
setInterval(callback, 1000);