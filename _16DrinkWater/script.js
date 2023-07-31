const big = document.querySelector('.cup') 
const remaining = document.getElementById("remained"); 
const percentage = document.getElementById("percentage");
const cups = document.querySelectorAll('.cup-small');  
const litersToBeDrunk = document.getElementById('liters')  

var initial = 0; 
var final = 2; 

cups.forEach((cup,idx)=>{
  cup.addEventListener('click',()=>{ 
    initial= 0;
    fillCupsTillIndex(cups,idx);
  });
})


function fillCupsTillIndex(cups,idx){
    cups.forEach((cup,i)=>{ 
        if(idx==i && cup.classList.contains('full')){  
            cup.classList.remove('full'); 
        }else if(i<=idx){ 
            initial+=0.25;
            cup.classList.add('full');
        }else{ 
            cup.classList.remove('full');
        }
    })
    FillUpTheBigCup(initial);
} 


function FillUpTheBigCup(completed){ 

    
    remain = 2 - completed; 

    completedFraction = (completed/2) 
    remainedFraction = (remain/2)  

    if(initial==0){
        percentage.innerText="";
        percentage.style.visibility='hidden';  
        remaining.style.visibility='visible'; 
        percentage.style.height = 0; 
        remaining.innerHTML = ` <span id="liters">${remain}L</span>  
        <small>Remained</small>`
    }else if(remain==0){
        // remaining.style.display = 'none';
        // percentage.style.display = 'flex'; 
        remaining.innerHTML = null;
        remaining.style.visibility='hidden';   
        percentage.style.visibility = "visible"
        remaining.style.height = 0;
    }else{ 
        remaining.innerHTML = ` <span id="liters">${remain}L</span>  
        <small>Remained</small>`
        percentage.style.visibility='visible'; 
        remaining.style.visibility='visible';
        // remaining.style.display = 'flex';
        // percentage.style.display = 'flex';
    }

    remaining.style.flex= remainedFraction; 
    percentage.style.flex = completedFraction;

    if(remain!=0){ 
        remain.innerText = 
        litersToBeDrunk.innerText = `${remain}L`
    }
    if(completedFraction!=0){
        percentage.innerText = `${completedFraction*100}%`
    }
    
}
