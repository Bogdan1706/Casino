const triangleRu = document.getElementById('triangle-ru')
const triangleEn = document.getElementById('triangle-en')
const triangleCn = document.getElementById('triangle-cn')
const itemRu = document.getElementById('item-ru')
const itemEn = document.getElementById('item-en')
const itemCn = document.getElementById('item-cn')
triangleRu.style.opacity = "1"
// triangleEn.style.opacity = "0"
// triangleCn.style.opacity = "0"

itemRu.addEventListener('click', () => {
   if (triangleRu.style.opacity == "0") {
      if (itemEn.classList.contains('language-item--active')){
         itemRu.classList.add('language-item--active')
         itemRu.classList.remove('language-item--open-ru')
         triangleRu.style.opacity = "1"
         itemEn.classList.remove('language-item--active')
         itemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         itemCn.classList.remove('language-item--open-cn')
         itemCn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         triangleRu.classList.add('header-languageselection__icon-down')
         triangleRu.classList.remove('header-languageselection__icon-up')
      } else {
         itemRu.classList.add('language-item--active')
         itemRu.classList.remove('language-item--open-ru')
         triangleRu.style.opacity = "1"
         itemEn.classList.remove('language-item--open-en')
         itemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         itemCn.classList.remove('language-item--active')
         itemCn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         triangleRu.classList.add('header-languageselection__icon-down')
         triangleRu.classList.remove('header-languageselection__icon-up')
      }
   }else if ((triangleRu.style.opacity == "1")&&(triangleRu.classList.contains('header-languageselection__icon-down'))){
      itemEn.classList.remove('language-item--hide')
      itemEn.classList.toggle('language-item--open-up')
      triangleEn.style.opacity = "0"
      itemCn.classList.remove('language-item--hide')
      itemCn.classList.add('language-item--open-dw')
      triangleCn.style.opacity = "0"
      triangleRu.classList.remove('header-languageselection__icon-down')
      triangleRu.classList.add('header-languageselection__icon-up')
   } else  if ((triangleRu.style.opacity == "1")&&(triangleRu.classList.contains('header-languageselection__icon-up'))) {
      itemEn.classList.remove('language-item--open-en')
      itemEn.classList.add('language-item--hide')
      itemCn.classList.remove('language-item--open-cn')
      itemCn.classList.add('language-item--hide')
      triangleRu.classList.remove('header-languageselection__icon-up')
      triangleRu.classList.add('header-languageselection__icon-down')
   }
})

itemEn.addEventListener('click', () => {
   if (triangleEn.style.opacity == "0") {
      itemRu.classList.remove('language-item--active')
      itemRu.classList.add('language-item--hide')
      itemEn.classList.remove('language-item--open-en')
      itemEn.classList.add('language-item--active')
      triangleEn.style.opacity = "1"
      itemCn.classList.remove('language-item--open-cn')
      itemCn.classList.add('language-item--hide')
      triangleEn.classList.remove('header-languageselection__icon-up')
      triangleEn.classList.add('header-languageselection__icon-down')
   }else if ((triangleEn.style.opacity == "1") && (triangleEn.classList.contains('header-languageselection__icon-down'))) {
      itemRu.classList.remove('language-item--hide')
      itemRu.classList.add('language-item--open-ru')
      triangleRu.style.opacity = "0"
      itemCn.classList.remove('language-item--hide')
      itemCn.classList.add('language-item--open-cn')
      triangleCn.style.opacity = "0"
      triangleEn.classList.remove('header-languageselection__icon-down')
      triangleEn.classList.add('header-languageselection__icon-up')
   }else if ((triangleEn.style.opacity == "1") && (triangleEn.classList.contains('header-languageselection__icon-up'))) {
      itemRu.classList.add('language-item--hide')
      itemRu.classList.remove('language-item--open-ru')
      triangleRu.style.opacity = "0"
      itemCn.classList.add('language-item--hide')
      itemCn.classList.remove('language-item--open-cn')
      triangleCn.style.opacity = "0"
      triangleEn.classList.add('header-languageselection__icon-down')
      triangleEn.classList.remove('header-languageselection__icon-up')
   }
})

itemCn.addEventListener('click', () => {
   if (triangleCn.style.opacity == "0") {
      if (itemRu.classList.contains('language-item--active')){
         itemRu.classList.remove('language-item--active')
         itemRu.classList.add('language-item--hide')
         triangleRu.style.opacity = "0"
         itemEn.classList.remove('language-item--open-en')
         itemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         itemCn.classList.remove('language-item--open-cn')
         itemCn.classList.add('language-item--active')
         triangleCn.style.opacity = "1"
         triangleCn.classList.remove('header-languageselection__icon-up')
         triangleCn.classList.add('header-languageselection__icon-down')
      }else {
         itemRu.classList.remove('language-item--open-ru')
         itemRu.classList.add('language-item--hide')
         triangleRu.style.opacity = "0"
         itemEn.classList.remove('language-item--active')
         itemEn.classList.add('language-item--hide')
         triangleEn.style.opacity = "0"
         itemCn.classList.remove('language-item--open-cn')
         itemCn.classList.add('language-item--active')
         triangleCn.style.opacity = "1"
         triangleCn.classList.remove('header-languageselection__icon-up')
         triangleCn.classList.add('header-languageselection__icon-down')
      }
   }else if ((triangleCn.style.opacity == "1") && (triangleCn.classList == 'header-languageselection__icon-down')) {
      itemRu.classList.remove('language-item--hide')
      itemRu.classList.add('language-item--open-ru')
      triangleRu.style.opacity = "0"
      itemEn.classList.remove('language-item--hide')
      itemEn.classList.add('language-item--open-cn')
      triangleEn.style.opacity = "0"
      triangleCn.classList.remove('header-languageselection__icon-down')
      triangleCn.classList.add('header-languageselection__icon-up')
   }else if ((triangleCn.style.opacity == "1") && (triangleCn.classList.contains('header-languageselection__icon-up'))) {
      itemRu.classList.add('language-item--hide')
      itemRu.classList.remove('language-item--open-ru')
      triangleRu.style.opacity = "0"
      itemEn.classList.remove('language-item--open-cn')
      itemEn.classList.add('language-item--hide')
      triangleEn.style.opacity = "0"
      triangleCn.classList.remove('header-languageselection__icon-up')
      triangleCn.classList.add('header-languageselection__icon-down')
   }
})


