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
  marksIcon.forEach((e) => {
    e.style.backgroundColor = "white";
  });
  projectCards.forEach((e) => {
    e.style.backgroundColor = "white";
  })
  projectsContainer.style.backgroundColor = "#f4f4f4";
};
const nightTheme = function () {
  mainBody.style.backgroundImage = "url(img/svg/background.svg)";
  mainBody.style.color = "white";
  navBrandName.style.color = "white";
  navBar.style.backgroundColor = "#333";
  nightModeIcon.src = "img/png/sun.png";
  leetcode_color.setAttribute("fill", "#fff");
  
  marksIcon.forEach((e) => {
    e.style.backgroundColor = "black";
  });
  projectCards.forEach((e) => {
    e.style.backgroundColor = "black";
  })
  projectsContainer.style.backgroundColor = "#444";
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

resumrBtn.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1hsrTqeqOnbzgYBYfbH7OcOF1L39oLrII/view?usp=sharing"
  );
});

// section about (eduction)
// section platform
hacker_rank_btn.addEventListener("click", () => {
  window.open("https://www.hackerrank.com/Sk_the_optimizer");
});
gfg_btn.addEventListener("click", () => {
  window.open("https://auth.geeksforgeeks.org/user/mr_optimizer/practice/");
});
leetcode_btn.addEventListener("click", () => {
  window.open("https://leetcode.com/mr_optimizer/");
});
codeforces_btn.addEventListener("click", () => {
  window.open("https://codeforces.com/profile/sk_the_optimizer");
});
codechef_btn.addEventListener("click", () => {
  window.open("https://www.codechef.com/users/shubham_5802");
});

// section project

cssProjectBtn.addEventListener("click", () => {
  cssProjectBtn.classList.add("project__container__nav__btn--inactive")
  jsProjectBtn.classList.remove("project__container__nav__btn--inactive")
  reactProjectBtn.classList.remove("project__container__nav__btn--inactive")
  backendProjectBtn.classList.remove("project__container__nav__btn--inactive")
  cppProjectBtn.classList.remove("project__container__nav__btn--inactive")

  jsProjects.forEach((e) => {
    e.style.display = "none";
  });
  reactProjects.forEach((e) => {
    e.style.display = "none";
  });
  backendProjects.forEach((e) => {
    e.style.display = "none";
  });
  cppProjects.forEach((e) => {
    e.style.display = "none";
  });
  cssProjects.forEach((e) => {
    e.style.removeProperty("display");
  });
});
jsProjectBtn.addEventListener("click", () => {
  jsProjectBtn.classList.add("project__container__nav__btn--inactive")
  cssProjectBtn.classList.remove("project__container__nav__btn--inactive")
  reactProjectBtn.classList.remove("project__container__nav__btn--inactive")
  backendProjectBtn.classList.remove("project__container__nav__btn--inactive")
  cppProjectBtn.classList.remove("project__container__nav__btn--inactive")

  jsProjects.forEach((e) => {
    e.style.removeProperty("display");
  });
  reactProjects.forEach((e) => {
    e.style.display = "none";
  });
  backendProjects.forEach((e) => {
    e.style.display = "none";
  });
  cppProjects.forEach((e) => {
    e.style.display = "none";
  });
  cssProjects.forEach((e) => {
    e.style.display = "none";
  });
});
reactProjectBtn.addEventListener("click", () => {
  cssProjectBtn.classList.remove("project__container__nav__btn--inactive")
  jsProjectBtn.classList.remove("project__container__nav__btn--inactive")
  reactProjectBtn.classList.add("project__container__nav__btn--inactive")
  backendProjectBtn.classList.remove("project__container__nav__btn--inactive")
  cppProjectBtn.classList.remove("project__container__nav__btn--inactive")

  jsProjects.forEach((e) => {
    e.style.display = "none";
  });
  reactProjects.forEach((e) => {
    e.style.removeProperty("display");
  });
  backendProjects.forEach((e) => {
    e.style.display = "none";
  });
  cppProjects.forEach((e) => {
    e.style.display = "none";
  });
  cssProjects.forEach((e) => {
    e.style.display = "none";
  });
});
backendProjectBtn.addEventListener("click", () => {
  cssProjectBtn.classList.remove("project__container__nav__btn--inactive")
  jsProjectBtn.classList.remove("project__container__nav__btn--inactive")
  reactProjectBtn.classList.remove("project__container__nav__btn--inactive")
  backendProjectBtn.classList.add("project__container__nav__btn--inactive")
  cppProjectBtn.classList.remove("project__container__nav__btn--inactive")

  jsProjects.forEach((e) => {
    e.style.display = "none";
  });
  reactProjects.forEach((e) => {
    e.style.display = "none";
  });
  backendProjects.forEach((e) => {
    e.style.removeProperty("display");
  });
  cppProjects.forEach((e) => {
    e.style.display = "none";
  });
  cssProjects.forEach((e) => {
    e.style.display = "none";
  });
});
cppProjectBtn.addEventListener("click", () => {
  cssProjectBtn.classList.remove("project__container__nav__btn--inactive")
  jsProjectBtn.classList.remove("project__container__nav__btn--inactive")
  reactProjectBtn.classList.remove("project__container__nav__btn--inactive")
  backendProjectBtn.classList.remove("project__container__nav__btn--inactive")
  cppProjectBtn.classList.add("project__container__nav__btn--inactive")

  jsProjects.forEach((e) => {
    e.style.display = "none";
  });
  reactProjects.forEach((e) => {
    e.style.display = "none";
  });
  backendProjects.forEach((e) => {
    e.style.display = "none";
  });
  cppProjects.forEach((e) => {
    e.style.removeProperty("display");
  });
  cssProjects.forEach((e) => {
    e.style.display = "none";
  });
});



// for counting visitors
function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}
