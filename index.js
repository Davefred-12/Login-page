const nameInput = document.querySelector('.name')
console.log(nameInput)

const mailInput = document.querySelector('.nameMail')
console.log(mailInput)

const genderInput = document.querySelector('.nameGender')
console.log(genderInput)

const passwordInput = document.querySelector('.namePassword')
console.log(passwordInput)

const buttonInput = document.querySelector('.login')
console.log(buttonInput)

buttonInput.addEventListener("click", function collectDetails(){
  let nameInputValue = nameInput.value
  let mailInputValue = mailInput.value
  let genderInputValue = genderInput.value
  let passwordInputValue = passwordInput.value
  console.log(nameInputValue) 
  console.log(mailInputValue) 
  console.log(genderInputValue) 
  console.log(passwordInputValue) 
})

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

