const triangleRu = document.getElementById('triangle-ru') 
const triangleEn = document.getElementById('triangle-en')
const triangleCn = document.getElementById('triangle-cn')

const selectItemRu = document.getElementById('item-ru')
const selectItemEn = document.getElementById('item-en')
const selectItemCn = document.getElementById('item-cn')

triangleRu.style.opacity = "1"

const loginText = document.querySelector('#btn__login-text')
const btnRrgistrationText = document.querySelector('#btn__registration-text')
const conceptTitleUp = document.querySelector('#concept-title__up')
const conceptTitleDown = document.querySelector('#concept-title__down')
const conceptBtn = document.querySelector('#concept-btn')
const advantagesTitleUp = document.querySelector("#advantages-title__up")
const advantagesTitleDown = document.querySelector("#advantages-title__down")
// const btnJoin = document.querySelector("#btn-join")
const conditionsTitleFirst = document.querySelector("#conditions-title__first")
const conditionsTitleSecond = document.querySelector("#conditions-title__second")
const partnersTitleText = document.querySelector("#partners-title__text")
const reviewsTitleText = document.querySelector("#reviews-title__text")
const footerContentTitle = document.querySelector("#footer-content__title")
const footerBtnLeft = document.querySelector("#footer-btn__left")
const footerBtnRight = document.querySelector("#footer-btn__right")


function translationItemRu () {
   loginText.textContent = "Вход"
   btnRrgistrationText.textContent = "Регистрация"
   conceptBtn.textContent = "Присоединиться"
   btnJoin.textContent = "Вступить"
   conceptTitleUp.textContent = 'Эксклюзивная'
   conceptTitleDown.textContent = "партнерская программа"
   advantagesTitleUp.textContent = "Наши"
   advantagesTitleDown.textContent = "преимущества"
   conditionsTitleFirst.textContent = "условия"
   conditionsTitleSecond.textContent = "работа сра"
   partnersTitleText.textContent = "парнеры"
   reviewsTitleText.textContent = "отзывы"
   footerContentTitle.textContent = "контакты"
   footerBtnLeft.textContent = "наш канал"
   footerBtnRight.textContent = "связаться"
}

function translationItemCn () {
   loginText.textContent = "入口"
   btnRrgistrationText.textContent = "登记注册"
   conceptBtn.textContent = "加入"
   btnJoin.textContent = "加入"
   conceptTitleUp.textContent = "附属计划"
   conceptTitleDown.textContent = "独家服务"
   advantagesTitleUp.textContent = "我们的"
   advantagesTitleDown.textContent = "优势"
   conditionsTitleFirst.textContent = "条件"
   conditionsTitleSecond.textContent = "注册会计师的工作"
   partnersTitleText.textContent = "合作伙伴"
   reviewsTitleText.textContent = "检讨报告"
   footerContentTitle.textContent = "联络人"
   footerBtnLeft.textContent = "我们的频道"
   footerBtnRight.textContent = "联系我们"
}

function translationItemEn () {
   loginText.textContent = "Entrance"
   btnRrgistrationText.textContent = "Registration"
   conceptBtn.textContent = "Join"
   btnJoin.textContent = "Join"
   conceptTitleUp.textContent = 'Exclusive'
   conceptTitleDown.textContent = "affiliate program"
   advantagesTitleUp.textContent = "Our"
   advantagesTitleDown.textContent = "advantages"
   conditionsTitleFirst.textContent = "conditions"
   conditionsTitleSecond.textContent = "the work of the cpa"
   partnersTitleText.textContent = "partners"
   reviewsTitleText.textContent = "reviews"
   footerContentTitle.textContent = "contacts"
   footerBtnLeft.textContent = "our channel"
   footerBtnRight.textContent = "contact"
  
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
         translationItemEn ()
      } else {

         selectItemEn.classList.add('language-item--active')
         selectItemEn.classList.remove('language-item--open-dw')
         triangleEn.style.opacity = "1"
         selectItemRu.classList.add('language-item--hide')
         selectItemRu.classList.remove('language-item--open-up')
         triangleRu.style.opacity = "0"
         selectItemCn.classList.add('language-item--hide')
         selectItemCn.classList.remove('language-item--active')
         triangleCn.style.opacity = "0"
         triangleRu.classList.add('header-languageselection__icon-down')
         triangleRu.classList.remove('header-languageselection__icon-up')
         translationItemEn ()
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
