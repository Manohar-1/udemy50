const labels=document.querySelectorAll('.form-control label'); 


labels.forEach((label)=>{
    label.innerHTML=label.innerText.split('')
    .map((ltr,idx)=>`<span style="transition-delay:${idx*50}ms">${ltr}</span>`).join('');
})