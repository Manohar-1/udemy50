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
    const date = time.getDate()
    const hoursForClock = hours % 12; 
    minutes = time.getMinutes(); 
    seconds = time.getSeconds(); 
    console.log(month+" "+day+" "+hours+" "+minutes+" "+seconds);
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,359)}deg)` 
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,359)}deg)`  
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,359)}deg)` 
    
    timeEl.innerText = hoursForClock+":"+((minutes<10)?("0"+minutes):minutes)+((hours>=12)?"PM":"AM");
    dateEl.innerHTML = `${days[day]},${months[month]}<span class="circle">${date}</span>`
}

const scale  = (num,in_min,in_max,out_min,out_max)=>{
  return (num-in_min)*(out_max-out_min)/(in_max-in_min) + out_min;
}

setInterval(()=>{
  setTime();
},1000 );
