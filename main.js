// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let modal = document.getElementById('modal'); 
let modalParagraph = document.getElementById("modal-message")

//document.getElementById('modal').hidden = true; 

let handleError = (errorMessage) => {
   modal.classList.remove('hidden')
   modalParagraph.innerText = errorMessage; 
    setTimeout(() => { 
     modal.classList.add('hidden') 
     modalParagraph.innerText = " "; //clears out inner p so we dont get repeated error messages
    }, 3000)
}
 
let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => fillHearts(event))
  .catch(error => handleError(error))
}

const fillHearts = (event) => {
  if (event.target.textContent === EMPTY_HEART) { //find this by console logging event in DT, target/text content shows as empty heart so thats what we want
    event.target.classList.add('activated-heart')
    event.target.textContent = FULL_HEART;
  }
  else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART;
  }

let like = [...document.getElementsByClassName('like')];
like.map(function(idx) {
  return idx.addEventListener('click', callServerAndCatch);  
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again."); //reject is an error syntax
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
