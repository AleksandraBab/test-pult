/* Объявляем переменные */

const productsList = document.querySelectorAll('.product__link')
const img = document.querySelector('.product__pic');

/* Запускаем слайдеры */

const swiper1 = new Swiper('.swiper-container_1', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination_1',
    clickable: true,
  },
});


const swiper2 = new Swiper('.swiper-container_2', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination_2',
    clickable: true,
  },
});

/* Меняем цвета ссылок на продукт и картинку */

const changeColor = function(evt) {
  evt.target.classList.add('product__link_active');
}

productsList.forEach((item) => {
  item.addEventListener('mouseover', (evt) => {
    const productArr = Array.from(productsList);
    if (productArr.some((function (item) {return item.classList.contains('product__link_active')})))
      { const activeProduct = document.querySelector('.product__link_active');
        activeProduct.classList.remove('product__link_active')
      };
      changeColor(evt);
  })
  item.addEventListener('mouseenter', (evt) => {
      img.src = evt.target.dataset.pic;
    })
});





