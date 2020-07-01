var part = "#ffffff";
var particlesJSON = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": part
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#5c5555",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
tsParticles.load("particlesjs", particlesJSON);
//particlesJS("particlesjs", particlesJSON);

var $projects = $('.bar');


$(document).ready(function() {
  $projects.waypoint(function(){
  $('.html').addClass('htmlbar');
  $('.css').addClass('css-bar');
  $('.js').addClass('js-bar');
  $('.react').addClass('react-bar');
  $('.php').addClass('php-bar');
  $('.python').addClass('python-bar');
},{
  offset: '75%'
})
});


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const container = tsParticles.domItem(0);
const options = container.options;
function changeColor() {
  console.log("works "+part);
  options.particles.color.value = part;
container.refresh();
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        part= "#ffffff";
        changeColor();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        part= "#000000";
        changeColor();
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
