const generateBtn = document.querySelector(".generate-btn");
const input = document.querySelector("input");
const copyI = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

const generatePassword = ()=>{
    let key = "0123456789!@$%^&*()_+-{};:,.<>?/~`'";
    for (let i = 65; i<=90; i++) {
        key += String.fromCharCode(i);
        key += (String.fromCharCode(i)).toLowerCase();
    }
    const passwordLength = 24;
    let password = "";
    for(let i=0; i<passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * key.length);
        password += key.substring(randomNumber, randomNumber + 1)
    }
    input.value = password;
}

const copyPassword = ()=>{
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}

generateBtn.addEventListener("click", ()=>generatePassword())

copyI.addEventListener("click", ()=>{
    copyPassword();
    if(input.value){
        alertContainer.classList.remove("active");
        setTimeout(()=>{
            alertContainer.classList.add("active")
        }, 2000)
    }
})
