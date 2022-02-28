"use strict";
// Title tab
window.onload = function () {
  let pageTitle = document.title;
  let attentionMessage = "Come Back 🙏🙏";
  let blinkEvent = null;

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    } else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  function blink() {
    blinkEvent = setInterval(function () {
      if (document.title === attentionMessage) {
        document.title = pageTitle;
      } else {
        document.title = attentionMessage;
      }
    }, 1000);
  }
};

// fade in
let opacity = 0;
let intervalID = 0;
let change_title = window.onload;
window.onload = function () {
  fadeIn();
  if (change_title) {
    change_title();
  }
};
function fadeIn() {
  setInterval(show, 110);
}
function show() {
  var body = document.getElementById("body");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

//night mode
const dayTheme = function () {
  mainBody.style.backgroundImage = "None";
  mainBody.style.color = "black";
  navBrandName.style.color = "black";
  navBar.style.backgroundColor = "white";
  nightModeIcon.src = "img/png/moon.png";
  leetcode_color.setAttribute("fill", "#000");
};
const nightTheme = function () {
  mainBody.style.backgroundImage = "url(img/svg/background.svg)";
  mainBody.style.color = "white";
  navBrandName.style.color = "white";
  navBar.style.backgroundColor = "#333";
  nightModeIcon.src = "img/png/sun.png";
  leetcode_color.setAttribute("fill", "#fff");
  // console.log(leetcode_color.fill);
  // nightLabel.style.boxShadow=' 0rem 0rem 4rem 2rem rgba(251,251,0, 0.5)';
  // nightLabel.style.backgroundColor='rgb(251,251,0)';
};
const changeTheme = function () {
  if (nightModeBtn.checked === false) {
    nightTheme();
  } else {
    dayTheme();
  }
  nightModeBtn.checked = !nightModeBtn.checked;
};
nightLabel.addEventListener("click", changeTheme);

//nav-bar
const switchColor = function (e) {
  nav_items.forEach(function (ele) {
    ele.style.color = "#fdbb04";
  });
  if (e === "h") {
    homeBtn.style.color = "gray";
  } else if (e == "a") {
    aboutBtn.style.color = "gray";
  } else if (e == "s") {
    skillsBtn.style.color = "gray";
  } else if (e == "p") {
    projectsBtn.style.color = "gray";
  } else if (e == "c") {
    contactBtn.style.color = "gray";
  }
};
homeBtn.addEventListener("click", () => {
  switchColor("h");
});
aboutBtn.addEventListener("click", () => {
  switchColor("a");
});
skillsBtn.addEventListener("click", () => {
  switchColor("s");
});
projectsBtn.addEventListener("click", () => {
  switchColor("p");
});
contactBtn.addEventListener("click", () => {
  switchColor("c");
});
// section Home
hireBtn.addEventListener("click", () => {
  window.open("http://wa.me/918651484067");
});
// section platform
hacker_rank_btn.addEventListener("click", () => {
  window.open("https://www.hackerrank.com/Sk_the_optimizer");
});
gfg_btn.addEventListener("click", () => {
  window.open("https://auth.geeksforgeeks.org/user/sktovisit/practice/");
});
leetcode_btn.addEventListener("click", () => {
  window.open("https://leetcode.com/S_K_THE_OPTIMIZER/");
});
codeforces_btn.addEventListener("click", () => {
  window.open("https://codeforces.com/profile/sk_the_optimizer");
});
codechef_btn.addEventListener("click", () => {
  window.open("https://www.codechef.com/users/shubham_5802");
});

//section About
resumrBtn.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1Tqy8_t-oGL17QttY0R6R6Pm4ihQM_-2Y/view?usp=sharing"
  );
});
designerBtn.addEventListener("click", () => {
  window.open("https://www.careerexplorer.com/careers/web-designer/");
});
developerBtn.addEventListener("click", () => {
  window.open("https://en.wikipedia.org/wiki/Web_developer");
});
projectManagerBtn.addEventListener("click", () => {
  window.open("https://en.wikipedia.org/wiki/Project_manager");
});


// // section Project
// natrousBtn.addEventListener('click', ()=> {
//   window.open("../projects/natrous.html");
// });
// maptyBtn.addEventListener('click', () => {
//   window.open("../projects/mapty/index.html");
// });
// bankistBtn.addEventListener('click', ()=>{
//   window.open("../projects/bankist/index.html");
// })



// // Some random colors
// const colors = ["#FFFF", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// let numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });





/**
 * Ribbons Class File.
 * Creates low-poly ribbons background effect inside a target container.
 */
 ;(function(name, factory) {
  if (typeof window === 'object') {
    window[name] = factory()
  }
})('Ribbons', function() {
  var _w = window,
    _b = document.body,
    _d = document.documentElement

  // random helper
  var random = function() {
    if (arguments.length === 1) {
      // only 1 argument
      if (Array.isArray(arguments[0])) {
        // extract index from array
        var index = Math.round(random(0, arguments[0].length - 1))
        return arguments[0][index]
      }
      return random(0, arguments[0]) // assume numeric
    } else if (arguments.length === 2) {
      // two arguments range
      return Math.random() * (arguments[1] - arguments[0]) + arguments[0]
    } else if (arguments.length === 4) {
      //

      var array = [arguments[0], arguments[1], arguments[2], arguments[3]]
      return array[Math.floor(Math.random() * array.length)]
      //return console.log(item)
    }
    return 0 // default
  }

  // screen helper
  var screenInfo = function(e) {
    var width = Math.max(
        0,
        _w.innerWidth || _d.clientWidth || _b.clientWidth || 0
      ),
      height = Math.max(
        0,
        _w.innerHeight || _d.clientHeight || _b.clientHeight || 0
      ),
      scrollx =
        Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) -
        (_d.clientLeft || 0),
      scrolly =
        Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) -
        (_d.clientTop || 0)

    return {
      width: width,
      height: height,
      ratio: width / height,
      centerx: width / 2,
      centery: height / 2,
      scrollx: scrollx,
      scrolly: scrolly
    }
  }

  // mouse/input helper
  var mouseInfo = function(e) {
    var screen = screenInfo(e),
      mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
      mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0

    return {
      mousex: mousex,
      mousey: mousey,
      centerx: mousex - screen.width / 2,
      centery: mousey - screen.height / 2
    }
  }

  // point object
  var Point = function(x, y) {
    this.x = 0
    this.y = 0
    this.set(x, y)
  }
  Point.prototype = {
    constructor: Point,

    set: function(x, y) {
      this.x = x || 0
      this.y = y || 0
    },
    copy: function(point) {
      this.x = point.x || 0
      this.y = point.y || 0
      return this
    },
    multiply: function(x, y) {
      this.x *= x || 1
      this.y *= y || 1
      return this
    },
    divide: function(x, y) {
      this.x /= x || 1
      this.y /= y || 1
      return this
    },
    add: function(x, y) {
      this.x += x || 0
      this.y += y || 0
      return this
    },
    subtract: function(x, y) {
      this.x -= x || 0
      this.y -= y || 0
      return this
    },
    clampX: function(min, max) {
      this.x = Math.max(min, Math.min(this.x, max))
      return this
    },
    clampY: function(min, max) {
      this.y = Math.max(min, Math.min(this.y, max))
      return this
    },
    flipX: function() {
      this.x *= -1
      return this
    },
    flipY: function() {
      this.y *= -1
      return this
    }
  }

  // class constructor
  var Factory = function(options) {
    this._canvas = null
    this._context = null
    this._sto = null
    this._width = 0
    this._height = 0
    this._scroll = 0
    this._ribbons = []
    this._options = {
      // ribbon color HSL saturation amount
      colorSaturation: '80%',
      // ribbon color HSL brightness amount
      colorBrightness: '60%',
      // ribbon color opacity amount
      colorAlpha: 0.65,
      // how fast to cycle through colors in the HSL color space
      colorCycleSpeed: 6,
      // where to start from on the Y axis on each side (top|min, middle|center, bottom|max, random)
      verticalPosition: 'center',
      // how fast to get to the other side of the screen
      horizontalSpeed: 150,
      // how many ribbons to keep on screen at any given time
      ribbonCount: 3,
      // add stroke along with ribbon fill colors
      strokeSize: 0,
      // move ribbons vertically by a factor on page scroll
      parallaxAmount: -0.5,
      // add animation effect to each ribbon section over time
      animateSections: true
    }
    this._onDraw = this._onDraw.bind(this)
    this._onResize = this._onResize.bind(this)
    this._onScroll = this._onScroll.bind(this)
    this.setOptions(options)
    this.init()
  }

  // class prototype
  Factory.prototype = {
    constructor: Factory,

    // Set and merge local options
    setOptions: function(options) {
      if (typeof options === 'object') {
        for (var key in options) {
          if (options.hasOwnProperty(key)) {
            this._options[key] = options[key]
          }
        }
      }
    },

    // Initialize the ribbons effect
    init: function() {
      try {
        this._canvas = document.createElement('canvas')
        this._canvas.style['display'] = 'block'
        this._canvas.style['position'] = 'fixed'
        this._canvas.style['margin'] = '0'
        this._canvas.style['padding'] = '0'
        this._canvas.style['border'] = '0'
        this._canvas.style['outline'] = '0'
        this._canvas.style['left'] = '0'
        this._canvas.style['top'] = '0'
        this._canvas.style['width'] = '100%'
        this._canvas.style['height'] = '100%'
        this._canvas.style['z-index'] = '-1'
        this._onResize()

        this._context = this._canvas.getContext('2d')
        this._context.clearRect(0, 0, this._width, this._height)
        this._context.globalAlpha = this._options.colorAlpha

        window.addEventListener('resize', this._onResize)
        window.addEventListener('scroll', this._onScroll)
        document.body.appendChild(this._canvas)
      } catch (e) {
        console.warn('Canvas Context Error: ' + e.toString())
        return
      }
      this._onDraw()
    },

    // Create a new random ribbon and to the list
    addRibbon: function() {
      // movement data
      var dir = Math.round(random(1, 9)) > 5 ? 'right' : 'left',
        stop = 1000,
        hide = 200,
        min = 0 - hide,
        max = this._width + hide,
        movex = 0,
        movey = 0,
        startx = dir === 'right' ? min : max,
        starty = Math.round(random(0, this._height))

      // asjust starty based on options
      if (/^(top|min)$/i.test(this._options.verticalPosition)) {
        starty = 0 + hide
      } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
        starty = this._height / 2
      } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
        starty = this._height - hide
      }

      // ribbon sections data
      var ribbon = [],
        point1 = new Point(startx, starty),
        point2 = new Point(startx, starty),
        point3 = null,
        color = Math.round(random(35, 35, 40, 40)),
        delay = 0

      // buils ribbon sections
      while (true) {
        if (stop <= 0) break
        stop--

        movex = Math.round(
          (Math.random() * 1 - 0.2) * this._options.horizontalSpeed
        )
        movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25))

        point3 = new Point()
        point3.copy(point2)

        if (dir === 'right') {
          point3.add(movex, movey)
          if (point2.x >= max) break
        } else if (dir === 'left') {
          point3.subtract(movex, movey)
          if (point2.x <= min) break
        }
        // point3.clampY( 0, this._height );
        //console.log(Math.round(random(1, 5)))
        ribbon.push({
          // single ribbon section
          point1: new Point(point1.x, point1.y),
          point2: new Point(point2.x, point2.y),
          point3: point3,
          color: color,
          delay: delay,
          dir: dir,
          alpha: 0,
          phase: 0
        })

        point1.copy(point2)
        point2.copy(point3)

        delay += 4
        //color += 1
        //console.log('colorCycleSpeed', color)
      }
      this._ribbons.push(ribbon)
    },

    // Draw single section
    _drawRibbonSection: function(section) {
      if (section) {
        if (section.phase >= 1 && section.alpha <= 0) {
          return true // done
        }
        if (section.delay <= 0) {
          section.phase += 0.02
          section.alpha = Math.sin(section.phase) * 1
          section.alpha = section.alpha <= 0 ? 0 : section.alpha
          section.alpha = section.alpha >= 1 ? 1 : section.alpha

          if (this._options.animateSections) {
            var mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1

            if (section.dir === 'right') {
              section.point1.add(mod, 0)
              section.point2.add(mod, 0)
              section.point3.add(mod, 0)
            } else {
              section.point1.subtract(mod, 0)
              section.point2.subtract(mod, 0)
              section.point3.subtract(mod, 0)
            }
            section.point1.add(0, mod)
            section.point2.add(0, mod)
            section.point3.add(0, mod)
          }
        } else {
          section.delay -= 0.5
        }
        //console.log('section.color', section.color)
        var s = this._options.colorSaturation,
          l = this._options.colorBrightness,
          c =
            'hsla(' +
            section.color +
            ', ' +
            s +
            ', ' +
            l +
            ', ' +
            section.alpha +
            ' )'

        this._context.save()

        if (this._options.parallaxAmount !== 0) {
          this._context.translate(
            0,
            this._scroll * this._options.parallaxAmount
          )
        }
        this._context.beginPath()
        this._context.moveTo(section.point1.x, section.point1.y)
        this._context.lineTo(section.point2.x, section.point2.y)
        this._context.lineTo(section.point3.x, section.point3.y)
        this._context.fillStyle = c
        this._context.fill()

        if (this._options.strokeSize > 0) {
          this._context.lineWidth = this._options.strokeSize
          this._context.strokeStyle = c
          this._context.lineCap = 'round'
          this._context.stroke()
        }
        this._context.restore()
      }
      return false // not done yet
    },

    // Draw ribbons
    _onDraw: function() {
      // cleanup on ribbons list to rtemoved finished ribbons
      for (var i = 0, t = this._ribbons.length; i < t; ++i) {
        if (!this._ribbons[i]) {
          this._ribbons.splice(i, 1)
        }
      }

      // draw new ribbons
      this._context.clearRect(0, 0, this._width, this._height)

      for (
        var a = 0;
        a < this._ribbons.length;
        ++a // single ribbon
      ) {
        var ribbon = this._ribbons[a],
          numSections = ribbon.length,
          numDone = 0

        for (
          var b = 0;
          b < numSections;
          ++b // ribbon section
        ) {
          if (this._drawRibbonSection(ribbon[b])) {
            numDone++ // section done
          }
        }
        if (numDone >= numSections) {
          // ribbon done
          this._ribbons[a] = null
        }
      }
      // maintain optional number of ribbons on canvas
      if (this._ribbons.length < this._options.ribbonCount) {
        this.addRibbon()
      }
      requestAnimationFrame(this._onDraw)
    },

    // Update container size info
    _onResize: function(e) {
      var screen = screenInfo(e)
      this._width = screen.width
      this._height = screen.height

      if (this._canvas) {
        this._canvas.width = this._width
        this._canvas.height = this._height

        if (this._context) {
          this._context.globalAlpha = this._options.colorAlpha
        }
      }
    },

    // Update container size info
    _onScroll: function(e) {
      var screen = screenInfo(e)
      this._scroll = screen.scrolly
    }
  }

  // export
  return Factory
})

new Ribbons({
  colorSaturation: '60%',
  colorBrightness: '50%',
  colorAlpha: 0.5,
  colorCycleSpeed: 5,
  verticalPosition: 'random',
  horizontalSpeed: 200,
  ribbonCount: 3,
  strokeSize: 0,
  parallaxAmount: -0.2,
  animateSections: true
})





