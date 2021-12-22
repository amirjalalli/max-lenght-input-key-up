let $ = document
const inputElem = $.querySelector('input')
const spanElem = $.querySelector('.counter')
const inputMaxLenght = inputElem.getAttribute('maxlength')

// console.log(inputMaxLenght)

inputElem.addEventListener ('keyup',function(){
    spanElem.innerHTML = inputMaxLenght - inputElem.value.length
})
 