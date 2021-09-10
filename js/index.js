/**************************** SUBHEADER ANIMATION *****************************/ 

const position = [
    "Machine Learning Engineer",
    "Developer",
]

let step = 0;
let substep = 0; 

function increment() {

    let text = position[step].substr(0, substep);
    $("#subtitle p").html(text); 
    
    substep += 1;
    if (text === position[step]) {
        clearInterval(subtitle_animation);
        setTimeout(function() {
            subtitle_animation = setInterval(decrement, 50); 
        }, 2000);
    }
}

function decrement() {

    let text = position[step].substr(0, substep - 1);
    $("#subtitle p").html(text);

    substep -= 1;
    if (text === "") {

        clearInterval(subtitle_animation);
        
        step += 1; 
        step %= 2;
        substep = 0; 

        setTimeout(function() {
            subtitle_animation = setInterval(increment, 100);
        }, 200);    
    }
}

let subtitle_animation = setInterval(increment, 100); 

/************************ END SUBHEADER ANIMATION *****************************/ 

/******************************* SWIPER ***************************************/

let mySwiper = new Swiper(".swiper", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true, 
    roundLengths: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }, 

    breakpoints: {
        300: {
            slidesPerView: 1    
        },
        768: {
            slidesPerView: 2
        },
        999: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4 
        },
    }
  });

/**************************** END SWIPER **************************************/


