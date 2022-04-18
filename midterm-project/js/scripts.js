
function myFunction() {

    var x = document.getElementById("highlight1__callout--content");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




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










