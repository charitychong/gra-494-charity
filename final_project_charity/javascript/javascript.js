
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
  
  $( document ).ready(function() {
  var bgColorArray = ['imgs/001.jpg','imgs/002.jpg', 'imgs/003.jpg', 'imgs/004.jpg', 'imgs/005.jpg'],
  selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('#random-shit').css('background', 'url(' + selectBG + ')')
  });




  /*
  function displayText() {
    var text = document.getElementById("fname").innerHTML;
 
    var output = document.getElementById("first-name");
    output.innerHTML = text;

    alert(text)
   };

  */
  
  $("#myForm").submit(function(e) {
    e.preventDefault();
});
  


function displayText(){
  // Selecting the input element and get its value --- FIRST NAME
  var text = document.getElementById("fname").value;
  
  // Displaying the value
  var output = document.getElementById("first-name");
  output.innerHTML = text;



  // Selecting the input element and get its value --- LAST NAME
  var text2 = document.getElementById("lname").value;
  
  // Displaying the value
  var output2 = document.getElementById("last-name");
  output2.innerHTML = text2;



  // Selecting the input element and get its value --- MESSAGE
  var text3 = document.getElementById("message").value;
  
  // Displaying the value
  var output3 = document.getElementById("message-content");
  output3.innerHTML = text3;


}


