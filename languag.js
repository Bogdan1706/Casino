const triangleRu = document.getElementById('triangle-ru') 
const triangleEn = document.getElementById('triangle-en')
const triangleCn = document.getElementById('triangle-cn')

const selectItemRu = document.getElementById('item-ru')
const selectItemEn = document.getElementById('item-en')
const selectItemCn = document.getElementById('item-cn')

triangleRu.style.opacity = "1"

let ru = 'ru', cn = 'cn', en = 'en'

const translations = {
   ru: {
      btnlog: "Вход",
      btnregistration: "Регистрация",
      concepttitleup: "Эксклюзивная",
      concepttitledown:"партнерская программа",
      concepttextup: "Мы предлагаем выгодные индивидуальные условия.",
      concepttextdown:"Регистрируйтесь и зарабатывайте вместе с нами",
      conceptbtn:"Присоединиться",
      advantagestitleup: "Наши",
      advantagestitledown: "преимущества",
      btnjoin: "Вступить",
      conditionstitlefirst: "условия",
      conditionstitlesecond: "работа сра",
      partnerstitletext: "парнеры",
      reviewstitletext: "отзывы",
      footercontenttitle:"контакты",
      footerbtnleft: "наш канал",
      footerbtnright:"связаться"
   },
   cn: {
      btnlog: "入口",
      btnregistration: "登记注册",
      concepttitleup: "独家服务",
      concepttitledown:"附属计划",
      concepttextup: "我们提供有利的个人条件。",
      concepttextdown:"登记及赚取",
      conceptbtn:"加入",
      advantagestitleup: "我们的",
      advantagestitledown: "优势",
      btnjoin: "加入",
      conditionstitlefirst: "条件",
      conditionstitlesecond: "立即工作",
      partnerstitletext: "合作伙伴",
      reviewstitletext: "检讨报告",
      footercontenttitle:"联络人",
      footerbtnleft: "我们的频道",
      footerbtnright:"联系我们"
   },
   en: {
      btnlog: "Entrance",
      btnregistration: "Registration",
      concepttitleup: "Exclusive",
      concepttitledown:"affiliate program",
      concepttextup: "We offer favorable individual conditions.",
      concepttextdown:"Register and earn with us",
      conceptbtn:"Join",
      advantagestitleup: "Our",
      advantagestitledown: "advantages",
      btnjoin: "Join",
      conditionstitlefirst: "conditions",
      conditionstitlesecond: "work immediately",
      partnerstitletext: "partners",
      reviewstitletext: "reviews",
      footercontenttitle:"contacts",
      footerbtnleft: "our channel",
      footerbtnright:"contact"
   }
}

function selectLanguage (lang) {
   let elements = document.querySelectorAll('[id]');
   
   for(let i = 0; i < elements.length; i++) {
      let id = elements[i].id
      if (id in translations[lang]) {
         elements[i].textContent = translations[lang][id]
      }
   }
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
         selectLanguage (ru)

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
         selectLanguage (ru)
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
         selectLanguage (cn)
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
         selectLanguage (cn)
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
         selectLanguage (en)
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
         selectLanguage (en)
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
