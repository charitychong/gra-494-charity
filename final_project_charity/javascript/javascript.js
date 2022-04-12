
function myFunction() {



    var images=['imgs/001.jpg',
                'imgs/002.jpg',
                'imgs/003.jpg',
                'imgs/004.jpg',
                'imgs/005.jpg',];
    
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';
    
    $('body').css({'background':bgImg, 'background-size':'cover', });
    
    });


