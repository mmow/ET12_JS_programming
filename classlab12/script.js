//get the elements with class name 'discriptions'
//querySelector only select first element
let desc = document.querySelector('.description')

//querySelectorAll selects all the elements  
let desc_all = document.querySelectorAll('.description')

//get the element by id 'titlt'
let t = document.querySelector('#title')

//get the element by tag name ,'li'
let list_item = document.querySelectorAll('li')
//Example:1
//select the element
let shape = document.querySelector(".shape")
let btnSquare = document.querySelector(".btnSquare")
let btnRectangle = document.querySelector('.btnRectangle')
let btnCircle = document.querySelector('.btnCircle')


btnCircle.addEventListener('click', function(){
    shape.textContent ="circle".toLocaleUpperCase()
    shape.className = "circle"
})
btnSquare.addEventListener("click",function(){
    shape.textContent ="square".toLocaleUpperCase()
    
})
btnRectangle.addEventListener("click",function(){
    shape.textContent ="rectangle".toLocaleUpperCase()
    shape.className = "rectangle"
})
