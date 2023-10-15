const passwordInputs = document.querySelectorAll("[data-status]");
const myForm = document.querySelector("#form-content");

let pwInpArr = Array.from(passwordInputs);

pwInpArr.forEach(inp => {
    inp.addEventListener('input', (e)=>{
        let rest = pwInpArr.filter(item => item !== e.target)
    })
})

myForm.addEventListener('submit', e =>{
    e.preventDefault();

    let matches = pwInpArr.every(val =>{
        return val.value === pwInpArr.at(-1).value;
    })
    
    if (!matches){
        pwInpArr[pwInpArr.length - 1].setCustomValidity('passwords must match');
        pwInpArr.forEach(input => input.dataset.status = "error");
    } else {
        pwInpArr[pwInpArr.length - 1].setCustomValidity('');
        pwInpArr.forEach(input => input.dataset.status = "valid");
    }
})