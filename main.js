/* =========== Mixitup FIlter ======= */

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* ====Active Work===== */

const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));


// Swiper initialization Testimonial 
const testiSwiper = new Swiper(".testimonial__container", {
//   cssMode: true,
    loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Contact form 
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault();

  // input has value
  if(contactName.value === '' || contactEmail.value === '' || Message.value === '') {
    // add or remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

      //show message
  contactMessage.textContent = 'Fill all the input fields';
  } else {
    //serviceID - templateID - #form - publickey
    emailJs.sendForm('service_6bp7ya6', 'template_zbcoyii', '#contact-form', 'DIJxytUGfVcAmkjnO')

    .then(() => {
      //show message and add color, window + dot to open emoji
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Message sent ✔️';

      //remove message after 5 seconds
      setTimeout(() =>  {
        contactMessage.textContent = '';
      }, 5000);
    })

    // clear input fields
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
}

contactForm.addEventListener('submit', sendEmail);
