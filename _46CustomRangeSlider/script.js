const range = document.getElementById('range'); 

range.addEventListener('input',(e)=>{
    const value = +e.target.value; 
    const label = e.target.nextElementSibling; 

    const num_width = parseInt(getComputedStyle(e.target).getPropertyValue('width'));
    const num_label_width = parseInt(getComputedStyle(label).getPropertyValue('width')); 

    const max = +e.target.max;  
    const min = +e.target.min;

    const left = value * (num_width/max) - num_label_width/2 + scale(value,min,max,10,-10); 
    
    label.style.left = `${left}px`
    label.innerHTML = value;
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}