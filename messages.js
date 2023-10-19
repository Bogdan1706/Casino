const linkLeft = document.querySelector('#link-left')
const linkRight = document.querySelector('#link-right')
const pointer = document.querySelectorAll('#pointer')

pointer[0].classList.add('reviews-header__points-indicator--active')
function movePointRight (num) {
   if(num == 0) {
      pointer[pointer.length-1].classList.remove('reviews-header__points-indicator--active')
      pointer[num].classList.add('reviews-header__points-indicator--active')
   }else if (num > 0) {
      pointer[num-1].classList.remove('reviews-header__points-indicator--active')
      pointer[num].classList.add('reviews-header__points-indicator--active')
   }
}

function movePointLeft (num) {
   if(num == pointer.length-1) {
      pointer[0].classList.remove('reviews-header__points-indicator--active')
      pointer[pointer.length-1].classList.add('reviews-header__points-indicator--active')
   
   }else if (num < pointer.length-1) {
      pointer[num].classList.add('reviews-header__points-indicator--active')
      pointer[num+1].classList.remove('reviews-header__points-indicator--active')
   }
}

const message = {
   dealer: [
      {
         logoTitle: "Adcomba",
         logoImg: "./images/reviews/logo/1.png",
         imgMessage: "./images/reviews/slider/1.png",
         textMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure repellat consequatur deleniti fuga cum veritatis corporis explicabo,non tempora, dolorem minus ut excepturi provident mollitia alias!Obcaecati impedit doloribus consequuntur?Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.'
      },
      {
         logoTitle: "The World Nature",
         logoImg: "./images/reviews/logo/2.png",
         imgMessage: "./images/reviews/slider/2.png",
         textMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure repellat consequatur deleniti fuga cum veritatis corporis explicabo,non tempora, dolorem minus ut excepturi provident mollitia alias!Obcaecati impedit doloribus consequuntur?Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.Dolorem maxime quidem et nihil minima amet, consequuntur sunt porro illo rerum.'
      },
      {
         logoTitle: "Multiservi",
         logoImg: "./images/reviews/logo/3.png",
         imgMessage: "./images/reviews/slider/3.png",
         textMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure repellat consequatur deleniti fuga cum veritatis corporis explicabo,non tempora, dolorem minus ut excepturi provident mollitia alias!Obcaecati nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.Dolorem maxime quidem et nihil minima amet, consequuntur sunt porro illo rerum.'
      },
      {
         logoTitle: "AFF Star",
         logoImg: "./images/reviews/logo/4.png",
         imgMessage: "./images/reviews/slider/4.png",
         textMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure repellat consequatur deleniti fuga cum veritatis corporis explicabo,non tempora, dolorem minus ut excepturi provident mollitia alias!Obcaecati impedit doloribus consequuntur?Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.'
      },
      {
         logoTitle: "Eliziym",
         logoImg: "./images/reviews/logo/5.png",
         imgMessage: "./images/reviews/slider/5.png",
         textMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure repellat consequatur deleniti fuga cum veritatis corporis explicabo,non tempora, dolorem minus ut excepturi provident mollitia alias!Obcaecati impedit doloribus consequuntur?Dolorem maxime quidem et nihil minima amet, fugiat atque, nobis eveniet aliquid quia natus blanditiis assumenda sapiente necessitatibus soluta illum unde, consequuntur sunt porro illo rerum.Dolorem maxime quidem et nihil minima amet, consequuntur sunt porro illo rerum.'
      }
   ],
   
   elementary: 0,

   set: function(title, logo, text, img ) {
      document.getElementById("logo-img").src = logo
      document.getElementById("logo-title").textContent = title
      document.getElementById("reviews-text").textContent = text
      document.getElementById("reviews-img").src = img
   },
   left: function () {
      this.elementary--; 
      if(this.elementary < 0) {
         this.elementary = this.dealer.length - 1
      }
      this.set(this.dealer[this.elementary]["logoTitle"],this.dealer[this.elementary]["logoImg"],this.dealer[this.elementary]["textMessage"],this.dealer[this.elementary]["imgMessage"])
      movePointLeft (this.elementary)     
   },

   right: function () {
      this.elementary++;
      if(this.elementary == this.dealer.length) {
         this.elementary = 0;
      }   
      this.set(this.dealer[this.elementary]["logoTitle"],this.dealer[this.elementary]["logoImg"],this.dealer[this.elementary]["textMessage"],this.dealer[this.elementary]["imgMessage"])
      movePointRight (this.elementary)  
   }
}



linkLeft.addEventListener('click', (event) => {
   event.preventDefault()
   message.left()
   
})

linkRight.addEventListener('click', (event) => {
   event.preventDefault()
   message.right()
})
