const APIURL = 'https://api.github.com/users/' 

const form = document.getElementById('form'); 
const search = document.getElementById('search'); 
var main = document.getElementById('main')
async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)  
        createCard(data);
        getRepos(username);
    }catch(err){
       if(err.response.status == 404){ 
          showErrorCard('There is no profile with this username');
       }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + "/repos")   
        addReposToTheCard(data);
    }catch(err){
       
          showErrorCard('Problem Fetching Repos');
       
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 

    const user = search.value; 

    if(user){ 
        getUser(user)
        search.value = ""
    }
}) 

function createCard(data){ 

    console.log(data);
    var card = document.createElement('div');  
    card.classList.add('card');  
    
    var imgDiv = document.createElement('div'); 
    var img = document.createElement('img'); 
    img.classList.add('avatar')
    img.setAttribute('src',data['avatar_url']) 
    imgDiv.appendChild(img); 


    var dataDiv = document.createElement('div'); 
    dataDiv.classList.add('user-info'); 

    var nameTag = document.createElement('h2'); 
    nameTag.innerText = data['name'] ==null ? data['login'] : data['name']

    var bioTag = document.createElement('p'); 
    bioTag.innerText = data['bio'];  

    var ulTag = document.createElement('ul'); 
     
    var li1 = document.createElement('li'); 
    li1.innerText = data['followers']  
    var st1 = document.createElement('strong'); 
    st1.innerText = 'Followers'; 
    li1.appendChild(st1); 
    
    var li2 = document.createElement('li'); 
    li2.innerText = data['following'] 
    var st2 = document.createElement('strong'); 
    st2.innerText = 'Following'; 
    li2.appendChild(st2); 

    var li3 = document.createElement('li');  
    li3.innerText = data['public_repos'] 
    var st3 = document.createElement('strong'); 
    st3.innerText = 'Repos' 
    li3.appendChild(st3);  

    ulTag.appendChild(li1);
    ulTag.appendChild(li2);
    ulTag.appendChild(li3);

    dataDiv.appendChild(nameTag)
    dataDiv.appendChild(bioTag) 
    dataDiv.appendChild(ulTag);  

    var repoChart = document.createElement('div'); 
    repoChart.setAttribute('id','repos'); 

    dataDiv.appendChild(repoChart);

    card.appendChild(imgDiv)
    card.appendChild(dataDiv) 

    main.innerHTML = null ; 
    main.appendChild(card);
    
    
}

function showErrorCard(message){
    main.innerHTML = `<div class = "card"><h1>${message}</h1></div>`
} 


function addReposToTheCard(data){

    console.log("REPOS DATA"); 
    console.log(data);
    const reposElement = document.getElementById('repos'); 

    data.slice(0,10).forEach(repo=>{
        const repoElement = document.createElement('a'); 
        repoElement.classList.add('repo'); 
        repoElement.href = repo.html_url;  
        repoElement.target = '_blank'; 
        repoElement.innerText = repo.name; 

        reposElement.appendChild(repoElement);
    })
}