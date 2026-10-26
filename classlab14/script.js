//collect the right and left buttons
const btnright =document.querySelector(".btnright")
const btnleft =document.querySelector(".btnleft")

//define a function to move scroll the  photo gallery by the number of pixe
function scrollGallery(pixels){
    document.querySelector("div.gallerycontainer").scrollBy(
        {
            left: pixels,
        behavior: "smooth"
        }
    )
        
}
//add event to each button when is clicked
btnright.addEventListener("click", function(){
    scrollGallery(500)
})
btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})


//form event
//get the elements
const myform = document.querySelector("#myForm")
const mymesg = document.querySelector(".msg")
const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")
const submitbtn = document.querySelector(".submitbtn")
const passwordmsg = document.querySelector(".passwordmsg")

//disable the submit button
window.addEventListener("load", function(){
    submitbtn.disabled = true
    submitbtn.classList ="disablebtn"
})
//add event listener to the  input of the password 
passwordInput.addEventListener("input", function(){
    //check the validity of the password as the user types
    const password = passwordInput.value
    if(password.length < 8){
        passwordError.textContent = "Password must be at least 8 characters"
        submitbtn.disabled = true
        submitbtn.classList = "disablebtn"
        passwordmsg.style.diplay = "none"
    }
    else{
        //clear the error message

        passwordError.textContent = ""
        //enable login button
        submitbtn.disabled = false
        submitbtn.classList = "submitbtn"
        passwordmsg.style.diplay = "block"
    }
    
})
//add event listener to the submit form
myform.addEventListener("submit", function(event){
    //prevent the default action of the form data
    event.preventDefault()
    //perform validation
    const usernameInput = document.querySelector("#username")
    const username = usernameInput.value

    if(username.trim() === ""){
        msg.textContent= "please enter the username"
        return
    }
    msg.textContent = `Welcome to js from ${username}`

    //clear the username input field
    usernameInput.value = ""
})

