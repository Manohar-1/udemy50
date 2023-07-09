const panels=document.querySelectorAll('.panel'); 

panels.forEach(panel=>{
    panel.addEventListener("mouseover",()=>{ 
        removeAllActiveClasses();
        panel.classList.add('active');
    })
})
function removeAllActiveClasses() 
{
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}