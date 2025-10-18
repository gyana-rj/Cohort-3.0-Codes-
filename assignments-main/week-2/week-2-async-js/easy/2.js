let ctr = 1;

function callback(){
    console.log(ctr);
    ctr++;
    setTimeout(callback, 1000);
}

setTimeout(callback, 1000);