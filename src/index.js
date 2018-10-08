(function () {
  window.addEventListener('DOMContentLoaded', () => {

    const initAccordion = function() {
      const accordion = document.querySelector('.accordion');

      accordion.addEventListener('click', (event) => {
        const { target, currentTarget } = event;
        let item;
  
        if(target.matches('.accordion__item') ) {
          item = target;
        } else if (target.matches('.accordion__item *')) {
          const closest = target.closest('.accordion__item');
          if (currentTarget.contains(closest)) {
            item = closest;
          } else {
            return undefined;
          }
        }
  
        if(item && !target.matches('.accordion__content')) {
          const heading = item.querySelector('.accordion__action');
          const expanded = heading.getAttribute('aria-expanded');
          heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
  
          if (expanded) {
            item.classList.toggle('accordion__item--active');
          }
        }
      })
    }

    initAccordion();
  });
})();