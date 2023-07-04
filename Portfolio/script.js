  //changing text
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Web Developer.";
      }, 0);
      setTimeout(() => {
          text.textContent = "App Developer.";
      }, 4235);
      // setTimeout(() => {
      //     text.textContent = "";
      // }, 8000); //1s = 1000 milliseconds
  }

  textLoad();
  setInterval(textLoad, 8000);
  //menubar resize menu
  const nav = document.querySelector(".menubar"),
      navOpenBtn = document.querySelector(".navOpenBtn"),
      navCloseBtn = document.querySelector(".navCloseBtn");

  navOpenBtn.addEventListener("click", () => {
      nav.classList.add("openNav");
      nav.classList.remove("openSearch");
  });
  navCloseBtn.addEventListener("click", () => {
      nav.classList.remove("openNav");
  });

  // Smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));
          const navHeight = document.querySelector('.menubar').offsetHeight; // Get height of navigation bar
          const topOffset = target.getBoundingClientRect().top + window.pageYOffset; // Get top offset of target element
          const totalOffset = topOffset - navHeight; // Subtract height of navigation bar

          window.scrollTo({
              top: totalOffset,
              behavior: 'smooth'
          });
      });
  });
  //resume active highlighter
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".resumeinfos .reslink li");
  window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop + sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });

      navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.classList.contains(current)) {
              li.classList.add("active");
          }
      });
  });



  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateCircularProgressBars() {
    var circularProgressBars = document.querySelectorAll('.circular-progress');
    circularProgressBars.forEach(function(bar) {
      var progressValue = parseInt(bar.querySelector('.progress-value').textContent);
      var currentProgress = 0;
      var speed = 15; // Adjust this value for a slower animation
  
      function animate() {
        if (currentProgress < progressValue) {
          currentProgress += 1;
          bar.style.background = 'conic-gradient(#7d2ae8 ' + (currentProgress * 3.6) + 'deg, #ededed 0deg)';
          bar.querySelector('.progress-value').textContent = currentProgress + '%';
          setTimeout(animate, speed);
        }
      }
  
      if (isInViewport(bar)) {
        animate();
      }
    });
  }
  
  function debounce(func, delay) {
    var timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }
  
  var debouncedAnimateCircularProgressBars = debounce(animateCircularProgressBars, 100);
  
  window.addEventListener('scroll', debouncedAnimateCircularProgressBars);
  window.addEventListener('resize', debouncedAnimateCircularProgressBars);
  
  animateCircularProgressBars();
  
  
  //jump cuntents
  function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;

          if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
          } else {
              reveals[i].classList.remove("active");
          }
      }
  }

  window.addEventListener("scroll", reveal);
  document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
  });
 //circle
