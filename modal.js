
const btnEntry = document.querySelector('#btn-entry')
const modalEntry = document.querySelector('#modal-entry')
const btncloseEntry = document.querySelector('#close-entry')

const btnRegister = document.querySelector('#btn-register')
const modalRegister = document.querySelector('#modal-registration')
const btnCloseRegister = document.querySelector('#close-registre')

const btnJoin = document.querySelector('#btn-join')
const modalJoin = document.querySelector('#modal-join')
const btnCloseJoin = document.querySelector('#close-join')
const page = document.getElementById('page');

btnEntry.addEventListener('click', () => {
   modalEntry.style.display = 'block'
   page.classList.add('page--noscrol')
} )

btncloseEntry.addEventListener('click', () => {
   modalEntry.style.display = 'none '
   page.classList.remove('page--noscrol')
   
} )

btnRegister.addEventListener('click', () => {
   modalRegister.style.display = 'block'
   page.classList.add('page--noscrol')
} )

btnCloseRegister.addEventListener('click', () => {
   modalRegister.style.display = 'none'
   page.classList.remove('page--noscrol')
   
} )

btnJoin.addEventListener('click', () => {
   modalJoin.style.display = 'block'
   page.classList.add('page--noscrol')
}) 

btnCloseJoin.addEventListener('click', () => {
   modalJoin.style.display = 'none'
   page.classList.remove('page--noscrol')
})