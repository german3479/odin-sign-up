const passwordInputs = document.querySelectorAll(".pw-input > input");
const myForm = document.querySelector("#form-content");
const passwordMsg = document.querySelector("#passwordMsg");

let pwInpArr = Array.from(passwordInputs);

pwInpArr.forEach(inp => {
    inp.addEventListener('input', (e)=>{
        const matches = pwInpArr.every(val => val.value === pwInpArr[0].value);

        if (!matches){
            passwordMsg.classList.add('visible');
        } else {
            passwordMsg.classList.remove('visible');
        }
    })
})

myForm.addEventListener('submit', e =>{
    e.preventDefault();

    let matches = pwInpArr.every(val =>{
        return val.value === pwInpArr.at(-1).value;
    })
    
    if (!matches){
        passwordMsg.classList.add('visible');
    } else {
        passwordMsg.classList.remove('visible');
    }
})