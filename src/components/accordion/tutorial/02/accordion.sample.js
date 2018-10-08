(function () {
  window.addEventListener('DOMContentLoaded', () => {

    const initAccordion = function() {
      const accordion = document.querySelector('.accordion');

      // querySelector => querySelectorAll
      // '.accordion__item' を全て取得する
      // querySelectorAllで取得された要素たちは、「配列のようなもの」に格納される
      const items = accordion.querySelectorAll('.accordion__item');

      // itemsの中身を繰り返し処理する
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const heading = item.querySelector('.accordion__action')

        heading.addEventListener('click', (event) => {
          const expanded = heading.getAttribute('aria-expanded');
          heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');

          if (expanded) {
            item.classList.toggle('accordion__item--active');
          }
        })
      }
    }

    initAccordion();
  });
})();