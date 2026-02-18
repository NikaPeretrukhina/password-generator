const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
"/"];

let firstRandomPass = document.getElementById("first-random-pass")
let secondRandomPass = document.getElementById("second-random-pass")
let generateBtn = document.getElementById("generate-btn")


generateBtn.addEventListener("click", function(){
    firstRandomPass.textContent = "";
    secondRandomPass.textContent = "";
    
    for(let i= 0; i < 15; i++){
        
       let charactersRandom = characters[Math.floor( characters.length * Math.random())]
       firstRandomPass.textContent += charactersRandom
       
       
       
       let charactersRandomSecond = characters[Math.floor( characters.length * Math.random())]
       secondRandomPass.textContent += charactersRandomSecond
       
       
    }
   
    
})