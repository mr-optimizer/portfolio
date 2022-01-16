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
  window.open("https://leetcode.com/SK_5802/");
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


// section Project
natrousBtn.addEventListener('click', ()=> {
  window.open("../projects/natrous.html");
});
maptyBtn.addEventListener('click', () => {
  window.open("../projects/mapty/index.html");
});
bankistBtn.addEventListener('click', ()=>{
  window.open("../projects/bankist/index.html");
})