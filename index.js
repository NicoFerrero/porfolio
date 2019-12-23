function toggleMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  //const links = document.querySelectorAll('.links');
  const links = document.querySelectorAll('.nav-links li');
  nav.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
    links.forEach(link => {
      link.classList.remove('on-white');
    });
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'visible';
  }

  burger.classList.toggle('toggle');
}

function toggleMenuLinks() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  nav.classList.remove('nav-active');

  document.body.style.overflowY = 'visible';

  burger.classList.remove('toggle');
}

function fadeHome(element) {
  window.addEventListener('scroll', function() {
    const elemento = document.getElementById(element);
    if (window.scrollY > elemento.offsetTop + elemento.offsetHeight - 170) {
      elemento.classList.add('hidden');
    } else {
      elemento.classList.remove('hidden');
    }
  });
}

function fadeNav() {
  window.addEventListener('scroll', function() {
    const navAux = document.querySelector('.nav-links');
    if (navAux.classList.contains('nav-active')) {
      return;
    }
    const home = document.getElementById('home');
    const nav = document.getElementById('navigation');
    //const links = document.querySelectorAll('.links');
    const links = document.querySelectorAll('.nav-links li');
    if (window.scrollY > home.offsetTop + home.offsetHeight - 55) {
      nav.classList.add('shadowed');
      links.forEach(link => {
        link.classList.add('on-white');
      });
      document.querySelector('.line1').classList.add('on-white-burger');
      document.querySelector('.line2').classList.add('on-white-burger');
      document.querySelector('.line3').classList.add('on-white-burger');
      document.querySelector('.logo').style.color = '#4f1d21';
      document.querySelector('.logo').style.marginTop = 0;
    } else {
      nav.classList.remove('shadowed');
      links.forEach(link => {
        link.classList.remove('on-white');
      });
      document.querySelector('.line1').classList.remove('on-white-burger');
      document.querySelector('.line2').classList.remove('on-white-burger');
      document.querySelector('.line3').classList.remove('on-white-burger');
      document.querySelector('.logo').style.color = '#fff';
    }
  });
}

fadeHome('h1');
fadeHome('h2');
fadeHome('a');
fadeNav();
