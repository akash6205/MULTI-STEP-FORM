const inputName = document.querySelector('#name')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const stepCount = document.querySelectorAll('.step')
const button = document.querySelector('#button')
const form = document.querySelector('#form')


// console.log(formDate.get('inputName'));

function changingStep(){
        let active = document.querySelector('.active')
        let nextActive = active.parentElement.nextElementSibling.firstElementChild;
        nextActive.classList.toggle('active')
        active.classList.remove('active')
}

function velidation (type){
        type.nextElementSibling.style.display = 'none'
        type.style.border = '1px solid blue';
}
function velidationError (type){
        type.nextElementSibling.style.display = 'block'
        type.style.border = '1px solid var(--clr-primary-red-100)';
}
let n = 0;
button.addEventListener('click' ,()=>{
    let newFormData = new FormData(form)
        if(newFormData.get('name') != '' && newFormData.get('email') != '' && newFormData.get('number') != ''){
            changingStep()
            velidation(email)
            velidation(inputName)
            velidation(number)
        }
    else{
        if(inputName.value != ''){
            velidation(inputName)
        }
        else{
            velidationError(inputName)
        }
        if(email.value != ''){
            velidation(email)
        }
        else{
            velidationError(email)
        }
        if(number.value != ''){
            velidation(number)
        }
        else{
            velidationError(number)            
        }
    }
    

})
