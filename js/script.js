document.querySelector('.burger-menu').onclick = function () {
   document.querySelector('.menu').classList.toggle('open-menu');
   document.querySelector('.burger-menu').classList.toggle('active');
}

$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 0,
   nav: true,
   dots: false,
   responsive: {
      0: {
         items: 1,
      }
   }
})

const wow = new WOW({
   boxClass: 'wow', /* класс, который необходим для работы wow.js */
   animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
   offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
   mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
   live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
})
wow.init(); /* Инициализация плагина с установленными выше свойствами */

///

// document.querySelector('#plus1').onclick = function () {
//    document.querySelector('#plus1').classList.toggle('rotate-plus');
//    document.querySelector('#answer1').classList.toggle('question-show');
// }

const plusIcons = document.getElementsByClassName('plus');
const questions = document.getElementsByClassName('question-item');

if (plusIcons.length > 0) {
   for (let index = 0; index < plusIcons.length; index++) {
      const plusIcon = plusIcons[index];
      const question = questions[index];
      plusIcon.addEventListener("click", function (e) {
         plusIcon.classList.toggle('rotate-plus');
         question.classList.toggle('question-show');
      });
   }
}