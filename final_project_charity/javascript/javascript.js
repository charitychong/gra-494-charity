
  document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.video-thumb');
    const closeBtn = document.querySelector('.close');
    const overlay = document.querySelector('.video-overlay');
  
    openBtn.addEventListener('click', () => {
      overlay.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  
  });


  document.addEventListener('DOMContentLoaded', () => {
    const openBtn2 = document.querySelector('.video-thumb2');
    const closeBtn2 = document.querySelector('.close2');
    const overlay2 = document.querySelector('.video-overlay2');
  
    openBtn2.addEventListener('click', () => {
      overlay2.style.display = 'block';
    });
  
    closeBtn2.addEventListener('click', () => {
      overlay2.style.display = 'none';
    });
  
  });



  document.addEventListener('DOMContentLoaded', () => {
    const openBtn3 = document.querySelector('.video-thumb3');
    const closeBtn3 = document.querySelector('.close3');
    const overlay3 = document.querySelector('.video-overlay3');
  
    openBtn3.addEventListener('click', () => {
      overlay3.style.display = 'block';
    });
  
    closeBtn3.addEventListener('click', () => {
      overlay3.style.display = 'none';
    });
  
  });


  document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');
    const closeBtn4 = document.querySelector('.close4');
    const contactformoverlay = document.querySelector('.contactform-overlay');
  
    submit.addEventListener('click', () => {
      contactformoverlay.style.display = 'block';
    });
  
    closeBtn4.addEventListener('click', () => {
      contactformoverlay.style.display = 'none';
    });
  
  });
  
  