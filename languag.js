const triangleRu = document.getElementById('triangle-ru') 
const triangleEn = document.getElementById('triangle-en')
const triangleCn = document.getElementById('triangle-cn')

const selectItemRu = document.getElementById('item-ru')
const selectItemEn = document.getElementById('item-en')
const selectItemCn = document.getElementById('item-cn')

triangleRu.style.opacity = "1"
const loginText = document.querySelector('#login-text')

function translationItemRu () {
   loginText.textContent = "Вход"
   let text = loginText.textContent 
  
}

function translationItemCn () {
   loginText.textContent = "入口"
   let text = loginText.textContent 
  
}

selectItemRu.addEventListener('click', () => {

   if (triangleRu.style.opacity == "0") {

      if (selectItemEn.classList.contains('language-item--active')){

         selectItemRu.classList.remove('language-item--open-up')
         selectItemRu.classList.add('language-item--active')
         triangleRu.style.opacity = "1"
         triangleRu.classList.remove('header-languageselection__icon-up')
         triangleRu.classList.add('header-languageselection__icon-down')
         selectItemEn.classList.remove('language-item--active')
         selectItemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         selectItemCn.classList.remove('language-item--open-dw')
         selectItemCn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         translationItemRu ()

      } else {

         selectItemRu.classList.remove('language-item--open-up')
         selectItemRu.classList.add('language-item--active')
         triangleRu.style.opacity = "1"
         triangleRu.classList.remove('header-languageselection__icon-up')
         triangleRu.classList.add('header-languageselection__icon-down')
         selectItemCn.classList.remove('language-item--active')
         selectItemCn.classList.add('language-item--hide')
         triangleCn.style.opacity = "0"
         selectItemEn.classList.remove('language-item--open-dw')
         selectItemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         translationItemRu ()
      }
   }else if ((triangleRu.style.opacity == "1")&&(triangleRu.classList.contains('header-languageselection__icon-down'))){
      
      triangleRu.classList.remove('header-languageselection__icon-down')
      triangleRu.classList.add('header-languageselection__icon-up')
      selectItemCn.classList.remove('language-item--hide')
      selectItemCn.classList.add('language-item--open-up')
      triangleCn.style.opacity = "0"
      selectItemEn.classList.remove('language-item--hide')
      selectItemEn.classList.add('language-item--open-dw')
      triangleEn.style.opacity = "0"
   
   } else  if ((triangleRu.style.opacity == "1")&&(triangleRu.classList.contains('header-languageselection__icon-up'))) {

      triangleRu.classList.remove('header-languageselection__icon-up')
      triangleRu.classList.add('header-languageselection__icon-down')
      selectItemCn.classList.remove('language-item--open-dw')
      selectItemCn.classList.add('language-item--hide')
      selectItemEn.classList.remove('language-item--open-up')
      selectItemEn.classList.add('language-item--hide')
   }
})

selectItemCn.addEventListener('click', () => {
   if (triangleCn.style.opacity == "0") {

      if (selectItemRu.classList.contains('language-item--active')){

         selectItemCn.classList.remove('language-item--open-up')
         selectItemCn.classList.add('language-item--active')
         triangleCn.style.opacity = "1"
         triangleCn.classList.add('header-languageselection__icon-down')
         triangleCn.classList.remove('header-languageselection__icon-up')
         selectItemRu.classList.remove('language-item--active')
         selectItemRu.classList.add('language-item--hide')
         triangleRu.style.opacity = "0"
         selectItemEn.classList.remove('language-item--open-dw')
         selectItemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         translationItemCn ()
      } else {

         selectItemCn.classList.add('language-item--active')
         selectItemCn.classList.remove('language-item--open-dw')
         triangleCn.style.opacity = "1"
         triangleCn.classList.remove('header-languageselection__icon-up')
         triangleCn.classList.add('header-languageselection__icon-down')
         selectItemRu.classList.remove('language-item--open-up')
         selectItemRu.classList.add('language-item--hide')
         triangleRu.style.opacity = "0"
         selectItemEn.classList.remove('language-item--active')
         selectItemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         translationItemCn ()
      }
   }else if ((triangleCn.style.opacity == "1") && (triangleCn.classList == 'header-languageselection__icon-down')) {

      triangleCn.classList.remove('header-languageselection__icon-down')
      triangleCn.classList.add('header-languageselection__icon-up')
      selectItemRu.classList.remove('language-item--hide')
      selectItemRu.classList.add('language-item--open-up')
      triangleRu.style.opacity = "0"
      selectItemEn.classList.remove('language-item--hide')
      selectItemEn.classList.add('language-item--open-dw')
      triangleEn.style.opacity = "0"

   }else if ((triangleCn.style.opacity == "1") && (triangleCn.classList.contains('header-languageselection__icon-up'))) {

      triangleCn.classList.remove('header-languageselection__icon-up')
      triangleCn.classList.add('header-languageselection__icon-down')
      selectItemRu.classList.remove('language-item--open-up')
      selectItemRu.classList.add('language-item--hide')
      triangleRu.style.opacity = "0"
      selectItemEn.classList.remove('language-item--open-dw')
      selectItemEn.classList.add('language-item--hide')
      triangleEn.style.opacity = "0"
   }
})


selectItemEn.addEventListener('click', () => {

   if (triangleEn.style.opacity == "0") {

      if (selectItemRu.classList.contains('language-item--active')){

         selectItemEn.classList.add('language-item--active')
         selectItemEn.classList.remove('language-item--open-dw')
         triangleEn.style.opacity = "1"
         triangleEn.classList.add('header-languageselection__icon-down')
         triangleEn.classList.remove('header-languageselection__icon-up')
         selectItemRu.classList.add('language-item--hide')
         selectItemRu.classList.remove('language-item--active')
         triangleRu.style.opacity = "0"
         selectItemCn.classList.add('language-item--hide')
         selectItemCn.classList.remove('language-item--open-up')
         triangleCn.style.opacity = "0"

      } else {

         selectItemEn.classList.add('language-item--active')
         selectItemEn.classList.remove('language-item--open-dw')
         triangleEn.style.opacity = "1"
         selectItemRu.classList.add('language-item--hide')
         selectItemRu.classList.remove('language-item--open-up')
         triangleRu.style.opacity = "0"
         selectItemCn.classList.add('language-item--hide')
         selectItemCn.classList.remove('language-item--active')
         triangleEn.style.opacity = "0"
         triangleRu.classList.add('header-languageselection__icon-down')
         triangleRu.classList.remove('header-languageselection__icon-up')

      }
     
   }else if ((triangleEn.style.opacity == "1") && (triangleEn.classList.contains('header-languageselection__icon-down'))) {
     
      selectItemRu.classList.remove('language-item--hide')
      selectItemRu.classList.add('language-item--open-up')
      triangleRu.style.opacity = "0"
      selectItemCn.classList.remove('language-item--hide')
      selectItemCn.classList.add('language-item--open-dw')
      triangleCn.style.opacity = "0"
      triangleEn.classList.remove('header-languageselection__icon-down')
      triangleEn.classList.add('header-languageselection__icon-up')
   
   }else if ((triangleEn.style.opacity == "1") && (triangleEn.classList.contains('header-languageselection__icon-up'))) {
     
      selectItemRu.classList.add('language-item--hide')
      selectItemRu.classList.remove('language-item--open-up')
      triangleRu.style.opacity = "0"
      selectItemCn.classList.add('language-item--hide')
      selectItemCn.classList.remove('language-item--open-dw')
      triangleCn.style.opacity = "0"
      triangleEn.classList.add('header-languageselection__icon-down')
      triangleEn.classList.remove('header-languageselection__icon-up')

   }
})
