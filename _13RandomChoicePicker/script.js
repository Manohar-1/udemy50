const tagsEl = document.getElementById('tags') 

const textaread = document.getElementById('textarea') 

textaread.focus()

textaread.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

    if(e.key=='Enter'){
        
        setTimeout(()=>{
            e.target.value=''
        },10)
        selectRandomTag()
       
        
    }
})

function selectRandomTag(){
    
    const interval = setInterval(()=>{
        const randomTag = pickRandom(); 
        hightlightTag(randomTag); 
        setTimeout(()=>{
            unhighLightTag(randomTag)
        },100)
    },100) 

    setTimeout(()=>{
        clearInterval(interval) 

        const randomTag = pickRandom(); 
        hightlightTag(randomTag)
    },3000)
}

function pickRandom(){
    let tags = document.querySelectorAll('.tag'); 
    return tags[Math.floor(Math.random()*tags.length)]
}
function hightlightTag(tag){
    tag.classList.add('highlight') 
}


function unhighLightTag(tag){
    tag.classList.remove('highlight')
}

function createTags(input){
    var tags = input.split(',')
                 .filter(tag=>tag.trim()!=='')
                 .map(tag=>tag.trim())
                
    tags = tags.filter((tag,index)=>{
        return tags.indexOf(tag)===index;
    })
                 
    
    console.log(tags);
    
    tagsEl.innerHTML=''
    tags.forEach(tag=>{
        const tagEl = document.createElement('span'); 

        tagEl.classList.add('tag') 
        tagEl.innerText = tag 
        tagsEl.append(tagEl)
    })
    
}