//===================================SLIDER========================================
$(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
})

//==================PASSIVE LISTENERS=================//
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};


//==========================================DROPDOWN================================


const dropper = document.querySelector('.last');
const menu = document.querySelector('.drops');


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('last-itm')) {
    menu.classList.toggle('drops--active'), menu.classList.contains('drops--active');


  } else if (e.target.classList.contains('drops--active')) {
    return;

  } else if (!menu.contains(e.target)) {
    menu.classList.remove('drops--active')
  }
})


//========================================SIDE PANNEL======================================

const cart = document.querySelector('.cart-menu');
const commerce = document.querySelector('.commerce-card');
const crossBtn = document.querySelector('.cross');


commerce.addEventListener('click', (e) => {
  if (e.target.classList.contains('cross')) {
    e.target.closest('.commerce-card--active').classList.remove('commerce-card--active');
  }
})

cart.addEventListener('click', () => {

  commerce.classList.toggle('commerce-card--active'), commerce.classList.contains('commerce-card--active');

})

//========================================VIDEO PLAYER======================================

const video = document.querySelector('.toggler-play');
const multimedia = document.querySelector('.multimed');
const minPlayer = document.querySelector('.mini-player')
const closeVideo = document.querySelector('.cross-video');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('toggler-play')) {

    multimedia.classList.add('multimed--active');

  } else if (e.target.classList.contains('cross-video')) {
    multimedia.classList.remove('multimed--active');

  } else if (!minPlayer.contains(e.target)) {
    multimedia.classList.remove('multimed--active');
  }

})
//==================================BURGER================================
const header = document.querySelector('.header-container');
const burger = document.querySelector('.burger-logo');
const naval = document.querySelector('.navigator');
const hopper = document.querySelector('.hopper');


header.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger-logo')) {
    naval.classList.toggle('navigator--active'), naval.classList.contains('navigator--active');
  } else if (e.target.classList.contains('last-itm')) {
    hopper.classList.toggle('hopper--height-set'), hopper.classList.contains('hopper--height-set');
  }
})


const forms = document.querySelector('.forms');
const submitForm = document.querySelector('.forms__submitter');
const submitBtn = document.querySelector('.forms__subscribe-now');

const numRange = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const emptyVal = '';

function onSubmit(e) {
  let dataStorage = [];

  let inputData = {
    value: submitForm.value,
  }

  let { value } = inputData;
  let DATA = {
    email: submitForm.value,
  };

  e.preventDefault();
  let re = /\S+@\S+\.\S+/;

  if (submitForm.value.match(re)) {
    alert('email successfully submitted')
    submitForm.classList.add('forms__submitter--success')
  } else if (!submitForm.value.match(re)) {
    alert('email address MUST contain @ sign');
    submitForm.classList.add('forms__submitter--failure');
  }


  dataStorage.push(DATA);
  forms.reset()
  console.log(DATA)
}

function formInput() {
  if (submitForm.value === '') {
    submitForm.classList.add('forms__submitter--failure');
    alert('e-mail field cannot be empty!')
  }
  else if (submitForm.value !== '') {
    submitForm.classList.remove('forms__submitter--failure');
    submitForm.classList.remove('forms__submitter--success');
  }
}

const modalBlock = document.querySelector('.modal-block');
const modalWindow = document.querySelector('.modal-block__window');
const crossClose = document.querySelector('.closebtn');
const scary = document.querySelector('.scr-btn');


modalBlock.addEventListener('click', (e) => {
  if (e.target.classList.contains('scr-btn')) {
    modalWindow.classList.toggle('modal-block__window--turned'), modalWindow.classList.contains('modal-block__window--turned')
  }
})

// modalBlock.addEventListener('click', (e) => {
//   if (e.target.classList.contains('closebtn')) {
//     e.target.closest('.modal-block').classList.add('modal-block--modal-hide');
//   }
// })



submitBtn.addEventListener('click', onSubmit)
submitForm.addEventListener('keyup', formInput)

