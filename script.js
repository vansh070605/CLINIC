// Initialize AOS animations
AOS.init({
    duration: 1200,
  });
  
  // Navbar background change on scroll
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling already handled by CSS scroll-behavior
  
  // Counter Animation
  const counters = document.querySelectorAll('span[data-target]');
  counters.forEach(counter => {
    counter.innerText = '0';
  
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;
  
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCounter();
  });
  
// JavaScript for automatic testimonial slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
const wrapper = document.querySelector('.testimonial-wrapper');

function showTestimonial(index) {
  const offset = -100 * index;
  wrapper.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
}, 5000);

// Manual navigation
document.querySelector('.testimonial-nav .prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
});

document.querySelector('.testimonial-nav .next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
});


  
  // Form Validation (Simple)
  const form = document.getElementById('appointment-form');
  const inputs = form.querySelectorAll('input, select');
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.checkValidity()) {
        input.style.border = '2px solid #ff4d4d';
      } else {
        input.style.border = '2px solid #48cae4';
      }
    });
  });
  
  form.addEventListener('submit', e => {
    let valid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.style.border = '2px solid #ff4d4d';
        valid = false;
      }
    });
    if (!valid) {
      e.preventDefault();
      alert('Please fill all fields correctly!');
    }
  });

// Preloader

  
  // Scroll to Top Button Show/Hide
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});


// FAQ Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + "px";
    header.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter span');
  const speed = 200; // The speed at which the number will increment

  // Intersection Observer to detect when the section comes into view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start counting when the section comes into view
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          
          const interval = setInterval(() => {
            count += Math.ceil(target / speed);
            counter.textContent = count;
            if (count >= target) {
              clearInterval(interval);
              counter.textContent = target;
            }
          }, 1);
        });
        
        // Stop observing after the section is in view
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
  
  // Start observing the section with the counters
  const section = document.getElementById('achievements');
  observer.observe(section);
});
