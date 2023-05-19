const mediaMobile = window.matchMedia('(min-width: 320px)');

function checkMediaChange(media) {
  if (media.matches) {
    let switcher = document.querySelector('.switcher');
    let switcherButtonBefore = document.querySelector('.switcher__button--before');
    let switcherButtonAfter = document.querySelector('.switcher__button--after');
    let imageBefore = document.querySelector('.example__image--before');
    let imageAfter = document.querySelector('.example__image--after');


    switcherButtonBefore.onclick = function() {
      switcher.classList.remove('switcher--after');
      switcher.classList.add('switcher--before');
      imageAfter.classList.remove('example__image--current');
      imageBefore.classList.add('example__image--current');
    }

    switcherButtonAfter.onclick = function() {
      switcher.classList.remove('switcher--before');
      switcher.classList.add('switcher--after');
      imageBefore.classList.remove('example__image--current');
      imageAfter.classList.add('example__image--current');
    }
  }
};

mediaMobile.addListener(checkMediaChange);
checkMediaChange(mediaMobile);
