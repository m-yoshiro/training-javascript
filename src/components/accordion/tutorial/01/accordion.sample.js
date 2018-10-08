(function () {
  window.addEventListener('DOMContentLoaded', () => {

    const initAccordion = function() {
      const accordion = document.querySelector('.accordion');
      const item = accordion.querySelector('.accordion__item');
      const heading = item.querySelector('.accordion__action')

      heading.addEventListener('click', (event) => {
        const expanded = heading.getAttribute('aria-expanded');
        heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');

        if (expanded) {
          item.classList.toggle('accordion__item--active');
        }
      })
    }

    initAccordion();
  });
})();