const nums = document.querySelectorAll('.nums span') 
const counter = document.querySelector('.counter') 
const final = document.querySelector('.final') 
const replay = document.querySelector('#replay')  


runAnimation(); 

function resetDOM(){
    counter.classList.remove('hide') 
    final.classList.remove('show') 

    nums.forEach((num)=>{
        num.classList.value = ''
    }) 

    nums[0].classList.add('in')
}

function runAnimation(){
     nums.forEach((num,idx)=>{
        const nextToLast = nums.length - 1 
        console.log("INDEX VALUE:",idx)
        num.addEventListener('animationend',(e)=>{ 

            // console.log("I AM ACTIVATED HA HA HA HA HA HA HA")
            if(e.animationName==='goIn' && idx!==nextToLast){ 
                // console.log("Go In Animation...",idx)
                num.classList.remove('in') 
                num.classList.add('out')
            }else if(e.animationName ==='goOut' && num.nextElementSibling){
                // console.log("Go Out Animation...",idx)
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add('hide') 
                final.classList.add('show')
            }
        })
     })
}


replay.addEventListener('click',()=>{
    resetDOM(); 
    runAnimation()
})