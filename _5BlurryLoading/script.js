
const bg=document.querySelector('.bg'); 
const loadText=document.querySelector('.loading-text') 

let load=0;
let p=setInterval(blurring,30);

function blurring(){
    load++; 

    if(load==100){
        clearInterval(p); 
    } 
    loadText.innerText=`${load}%`; 
    loadText.style.opacity=scale(load,1,100,1,0);
    bg.style.filter=`blur(${scale(load,1,100,30,0)}px)` 
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}