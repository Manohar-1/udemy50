const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle') 

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] 
const months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] 


toggleEl.addEventListener('click',(e)=>{
      const html = document.querySelector('html'); 
      if(html.classList.contains('dark')){
        html.classList.remove('dark');  
        e.target.innerHTML = 'Dark mode'
      }else{
        html.classList.add('dark'); 
        e.target.innerHTML = 'Light mode';
      }
})

function setTime(){
    const time = new Date(); 
    const month = time.getMonth(); 
    const day = time.getDay(); 
    const hours = time.getHours(); 

    const hoursForClock = hours % 12; 
    minutes = time.getMinutes(); 
    seconds = time.getSeconds(); 

    hourEl.computedStyleMap.transform = `translate(-50%,-100%) rotate()`
}

setTime();
