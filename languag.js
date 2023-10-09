const triangleRu = document.getElementById('triangle-ru')
const triangleEn = document.getElementById('triangle-en')
const triangleCn = document.getElementById('triangle-cn')
const itemRu = document.getElementById('item-ru')
const itemEn = document.getElementById('item-en')
const itemCn = document.getElementById('item-cn')

itemRu.addEventListener('click', () => {
   if (triangleRu.classList == 'header-languageselection__icon-down'){
      itemEn.classList.remove('language-item--hide')
      itemEn.classList.add('language-item--open-en')
      itemCn.classList.remove('language-item--hide')
      itemCn.classList.add('language-item--open-cn')
      triangleRu.classList.remove('header-languageselection__icon-down')
      triangleRu.classList.add('header-languageselection__icon-up')
      triangleEn.style.opacity = "0"
      triangleCn.style.opacity = "0"
   } else {
      itemEn.classList.remove('language-item--open-en')
      itemEn.classList.add('language-item--hide')
      itemCn.classList.remove('language-item--open-cn')
      itemCn.classList.add('language-item--hide')
      triangleRu.classList.remove('header-languageselection__icon-up')
      triangleRu.classList.add('header-languageselection__icon-down')
   }
})

// itemEn.addEventListener('click', () => {
//    itemRu.classList.remove('language-item--active')
//    itemRu.classList.add('language-item--hide-ru')

//    itemEn.classList.remove('language-item--open-en')
//    itemEn.classList.add('language-item--active')
  
//    triangleEn.style.opacity = "1"

   //itemRu.classList.add('language-item--hide-en')
   // itemCn.classList.remove('language-item--open-cn')
   // itemCn.classList.add('language-item--hide-cn')
   // triangle.classList.remove('header-languageselection__icon-up')
   // triangle.classList.add('header-languageselection__icon-down')
})


