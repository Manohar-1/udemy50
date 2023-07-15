const icons = document.querySelectorAll('.faq-toggle') 

icons.forEach(icon => {
    icon.addEventListener('click',()=>{
        icon.parentNode.classList.toggle('active')
    })
})