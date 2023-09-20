const result = document.getElementById('result')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};  

clipboard.addEventListener('click',()=>{
    const textarea = document.createElement('textarea'); 
    const password = result.innerText; 

    if(!password){
        return;
    } 

    textarea.value = password; 
    document.body.appendChild(textarea) 
    textarea.select() 
    document.execCommand('copy'); 
    alert('Password copied to clipboard!')
})

generate.addEventListener('click',()=>{ 
    const length = +document.getElementById('length').value;
    const hasLower = lowercase.checked; 
    const hasUpper = uppercase.checked; 
    const hasNumber = numbers.checked; 
    const hasSymbols = symbols.checked; 


    result.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbols,length);
})


function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword = '' 
    const typesCount = lower + upper + number + symbol;
    const typesArr =  [{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])

    if(typesCount ===0){
        return ''
    }

    console.log(length); 

    for(let i = 0;i < length; i+=typesCount){
          typesArr.forEach(type=>{
            const funcName = Object.keys(type)[0] 
            generatedPassword += randomFunc[funcName]();
          }) 
    } 

    

    return generatedPassword.slice(0,length);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


