const counter = document.querySelectorAll('.counter');
console.log(counter);
counter.forEach(counter => {
     counter.innerText = 0 
     
     const updateCounter = () =>{
        const target = +counter.getAttribute('data-target'); 
        const start =  +counter.innerText; 

        const c = target/200 

        if(start<target){
            counter.innerText = `${Math.ceil(start+c)}`
            setTimeout(updateCounter,0);
        }else{
            counter.innerText = target;
        }

     }


     updateCounter();
})