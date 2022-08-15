const trueCallback = function (entries, observer) {
  const btnArrowRef = document.querySelector('.link-arrow');
  btnArrowRef.removeEventListener('click', scrollTop);
  btnArrowRef.addEventListener('click', scrollTop);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btnArrowRef.classList.remove('is-visible');
    } else {
      btnArrowRef.classList.add('is-visible');
    } // intersecting: true or false
  });
};

function scrollTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.getElementsByTagName('header')[0];

observer.observe(target);
