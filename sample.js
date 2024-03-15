function myFunction() {
    alert("you are bobda!");
  }
  burger = document.querySelector('.burger')
  navlist = document.querySelector('.navlist')
  navbar = document.querySelector('.navbar')
  
  
  
  burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
  }) 


  document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = document.querySelectorAll('.images img');
    let currentIndex = 0;
  
    // Show initial images
    displayImages();
  
    // Previous button click event
    prevButton.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 3;
      }
      displayImages();
    });
  
    // Next button click event
    nextButton.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex > images.length - 3) {
        currentIndex = 0;
      }
      displayImages();
    });
  
    // Function to display images based on currentIndex
    function displayImages() {
      images.forEach((img, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }
  });

  

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', revealFeatures);
  
    function revealFeatures() {
      var features = document.querySelectorAll('.english li');
  
      features.forEach(function (feature) {
        var featureTop = feature.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (featureTop < windowHeight) {
          feature.classList.add('active');
        } else {
          feature.classList.remove('active');
        }
      });
    }
  });
  