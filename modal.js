
const entry = document.getElementById('entry')
const page = document.getElementById('page');
const register = document.getElementById('register')
const join = document.getElementById('join')



function createModalEnter () {
   const modal =document.createElement('div')
   modal.classList.add('vmodal')
   modal.insertAdjacentHTML('afterbegin', `
   <div class="vmodal-overlay">
      <div class="vmodal-window">
         <div  class="vmodal-window__close">
            <img id = "close" src="./images/modal/close_icon.png" alt="close" class="vmodal-window__close-img">
         </div>
         <div class="vmodal-header">
            <div class="vmodal-header__avatar">
               <svg class="vmodal-header__avatar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                  <path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Bitstream Vera Sans" d="M 11.5 6 L 11.1875 6.40625 L 10 8 L 4 8 L 3 8 L 3 9 L 3 25 L 3 26 L 4 26 L 28 26 L 29 26 L 29 25 L 29 9 L 29 8 L 28 8 L 22 8 L 20.8125 6.40625 L 20.5 6 L 20 6 L 12 6 L 11.5 6 z M 12.5 8 L 19.5 8 L 20.6875 9.59375 L 21 10 L 21.5 10 L 27 10 L 27 24 L 5 24 L 5 10 L 10.5 10 L 11 10 L 11.3125 9.59375 L 12.5 8 z M 8 11 C 7.4477153 11 7 11.447715 7 12 C 7 12.552285 7.4477153 13 8 13 C 8.5522847 13 9 12.552285 9 12 C 9 11.447715 8.5522847 11 8 11 z M 16 11 C 12.698136 11 10 13.698136 10 17 C 10 20.301864 12.698136 23 16 23 C 19.301864 23 22 20.301864 22 17 C 22 13.698136 19.301864 11 16 11 z M 16 13 C 18.220984 13 20 14.779016 20 17 C 20 19.220984 18.220984 21 16 21 C 13.779016 21 12 19.220984 12 17 C 12 14.779016 13.779016 13 16 13 z" color="#ccc" overflow="visible" enable-background="accumulate" font-family="Bitstream Vera Sans"/>
               </svg>
            </div>
         </div>
         <div class="vmodal-content">
            <form class="vmodal-content__form" >
               <div class="vmodal-content__form-user">
                  <input type="text" name="" required="">
                  <label>Username</label>
               </div>
               <div class="vmodal-content__form-pass">
                  <input type="password" name="" required="">
                  <label>Password</label>
               </div>
               <div class="vmodal-content__form-submit">
                  <input type="submit" value="Log in">
               </div>
            </form>
         </div> 
      </div>
   </div> 
`)
   document.body.prepend(modal)
   return modal
}

function removeModal () {
   const removeModal = document.querySelector('div.vmodal')
   removeModal.remove()
}

function createModalRegistration () {
   const modal = document.createElement('div')
   modal.classList.add('vmodal')
   modal.insertAdjacentHTML('afterbegin', `
   <div class="vmodal-overlay">
      <div class="vmodal-window">
         <div class="vmodal-window__close">
            <img id = "close" src="./images/modal/close_icon.png" alt="close" class="vmodal-window__close-img">
         </div>
         <div class="vmodal-header">
            <div class="vmodal-header__avatar">
               <svg class="vmodal-header__avatar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                  <path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Bitstream Vera Sans" d="M 11.5 6 L 11.1875 6.40625 L 10 8 L 4 8 L 3 8 L 3 9 L 3 25 L 3 26 L 4 26 L 28 26 L 29 26 L 29 25 L 29 9 L 29 8 L 28 8 L 22 8 L 20.8125 6.40625 L 20.5 6 L 20 6 L 12 6 L 11.5 6 z M 12.5 8 L 19.5 8 L 20.6875 9.59375 L 21 10 L 21.5 10 L 27 10 L 27 24 L 5 24 L 5 10 L 10.5 10 L 11 10 L 11.3125 9.59375 L 12.5 8 z M 8 11 C 7.4477153 11 7 11.447715 7 12 C 7 12.552285 7.4477153 13 8 13 C 8.5522847 13 9 12.552285 9 12 C 9 11.447715 8.5522847 11 8 11 z M 16 11 C 12.698136 11 10 13.698136 10 17 C 10 20.301864 12.698136 23 16 23 C 19.301864 23 22 20.301864 22 17 C 22 13.698136 19.301864 11 16 11 z M 16 13 C 18.220984 13 20 14.779016 20 17 C 20 19.220984 18.220984 21 16 21 C 13.779016 21 12 19.220984 12 17 C 12 14.779016 13.779016 13 16 13 z" color="#ccc" overflow="visible" enable-background="accumulate" font-family="Bitstream Vera Sans"/>
               </svg>
            </div>
         </div>
         <div class="vmodal-content">
            <form class="vmodal-content__form" >
               <div class="vmodal-content__form-user">
                  <input type="text" name="name" required="">
                  <label>enter your name</label>
               </div>
               <div class="vmodal-content__form-user">
                  <input type="email" name="email" required="">
                  <label>enter your email</label>
               </div>
               <div class="vmodal-content__form-pass">
                  <input type="password" name="pass" required="">
                  <label>enter the password</label>
               </div>
               <div class="vmodal-content__form-pass">
               <input type="password" name="pass" required="">
               <label>confirm your password</label>
            </div>
               <div class="vmodal-content__form-submit">
                  <input type="submit" value="Регистрация">
               </div>
            </form>
         </div> 
      </div>
   </div> 
`)
   document.body.prepend(modal)
   return modal
}


entry.addEventListener( 'click', () => {
   const getModule = createModalEnter()
   let closing = false
   setTimeout (() => {
      !closing && getModule.classList.add('open')
      page.classList.add('page--noscrol')

   }, 200)

   const closeModalEntry = document.getElementById('close')
   closeModalEntry.addEventListener('click', () => {
      closing = true
      getModule.classList.remove('open')
      getModule.classList.add('hide')
      setTimeout(() => {
         getModule.classList.remove('hide')
         removeModal()
         closing = false
      }, 200)
      page.classList.remove('page--noscrol')
      
   })
})


register.addEventListener( 'click', () => {
   const getModule = createModalRegistration()
   let closing = false
   setTimeout (() => {
      !closing && getModule.classList.add('open')
      page.classList.add('page--noscrol')

   }, 200)

   const closeModalEntry = document.getElementById('close')
   closeModalEntry.addEventListener('click', () => {
      closing = true
      getModule.classList.remove('open')
      getModule.classList.add('hide')
      setTimeout(() => {
         getModule.classList.remove('hide')
         removeModal()
         closing = false
      }, 200)
      page.classList.remove('page--noscrol')
      
   })
})

join.addEventListener( 'click', () => {
   const getModule = createModalRegistration()
   let closing = false
   setTimeout (() => {
      !closing && getModule.classList.add('open')
      page.classList.add('page--noscrol')

   }, 200)

   const closeModalEntry = document.getElementById('close')
   closeModalEntry.addEventListener('click', () => {
      closing = true
      getModule.classList.remove('open')
      getModule.classList.add('hide')
      setTimeout(() => {
         getModule.classList.remove('hide')
         removeModal()
         closing = false
      }, 200)
      page.classList.remove('page--noscrol')
      
   })
})