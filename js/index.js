// alert("Website is currently in development")
let change2Check = null;
let isVisible = true;

document.addEventListener("DOMContentLoaded", () => {
  spotlightCursor();
  goToSchoolLink();
  goToRepoLink();
  copyText();
  resizeHandler();
  updateNavBtn();
  scrollNavDetect();
  scrollToSection();
  addJumbleSubBtn();
  onHoverLowerOpacity();

  setTimeout(() => {
    introType(50);
  }, 2000);

  window.addEventListener("resize", resizeHandler);
});

function resizeHandler() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (viewportWidth <= 500) {
    disabledEducBtn(true);
    enableListenerSchoolTxt(true);

    disabledProjBtn(true);
    enableListenerProjTxt(true);
  } else {
    disabledEducBtn(false);
    enableListenerSchoolTxt(false);

    disabledProjBtn(false);
    enableListenerProjTxt(false);

    onHoverLowerOpacity();
  }
}

// For Educ Buttons
function disabledEducBtn(status) {
  if (status) {
    let btns = document.querySelectorAll(".education-btn");

    btns.forEach((btn) => {
      btn.disabled = status;

      let div = document.createElement("div");
      div.classList.add("education-btn");
      div.setAttribute("data-school", `${btn.dataset.school}`);

      div.innerHTML = btn.innerHTML;

      btn.parentNode.replaceChild(div, btn);
    });
  } else {
    let divs = document.querySelectorAll(".education-btn");

    divs.forEach((div) => {
      let button = document.createElement("button");
      button.classList.add("education-btn");
      button.setAttribute("data-school", `${div.dataset.school}`);
      button.setAttribute("type", "button");

      button.innerHTML = div.innerHTML;
      div.parentNode.replaceChild(button, div);

      goToSchoolLink();
    });
  }
}

function enableListenerSchoolTxt(status) {
  if (status) {
    let txts = document.querySelectorAll(".education-btn .school");

    txts.forEach((txt) => {
      txt.setAttribute(
        "onclick",
        `mobileRedirectSchool('${txt.dataset.school}');`
      );
    });
  } else {
    let txts = document.querySelectorAll(".education-btn .school");

    txts.forEach((txt) => {
      txt.removeAttribute("onclick");
    });
  }
}

function mobileRedirectSchool(school) {
  if (school == "bsu") {
    window.open("https://www.bulsu.edu.ph", "_blank");
  } else if (school == "yanga") {
    window.open("https://dyci.edu.ph", "_blank");
  } else if (school == "james") {
    window.open(
      "https://www.facebook.com/StJamesAcademyPlaridelBulacan",
      "_blank"
    );
  }
}

// For Proj Buttons
function disabledProjBtn(status) {
  if (status) {
    let btns = document.querySelectorAll(".project-container");

    btns.forEach((btn) => {
      btn.disabled = status;

      let div = document.createElement("div");
      div.classList.add("project-container");

      div.setAttribute("data-proj", `${btn.dataset.proj}`);

      div.innerHTML = btn.innerHTML;

      btn.parentNode.replaceChild(div, btn);
    });
  } else {
    let divs = document.querySelectorAll(".project-container");

    divs.forEach((div) => {
      let button = document.createElement("button");
      button.classList.add("project-container");
      button.setAttribute("data-proj", `${div.dataset.proj}`);
      button.setAttribute("type", "button");

      button.innerHTML = div.innerHTML;
      div.parentNode.replaceChild(button, div);

      goToRepoLink();
    });
  }
}

function enableListenerProjTxt(status) {
  if (status) {
    let txts = document.querySelectorAll(".project-container .main");
    txts.forEach((txt) => {
      txt.setAttribute("onclick", `mobileRedirectProj('${txt.dataset.proj}');`);
    });
  } else {
    let txts = document.querySelectorAll(".project-container .main");

    txts.forEach((txt) => {
      txt.removeAttribute("onclick");
    });
  }
}

function mobileRedirectProj(proj) {
  if (proj == "calculator") {
    window.open("https://clarence-coronel.github.io/calculator/", "_blank");
  } else if (proj == "sketch") {
    window.open(
      "https://clarence-coronel.github.io/top_etch-a-sketch/",
      "_blank"
    );
  } else if (proj == "nintendo") {
    window.open("https://youtu.be/BUBPs8jkx3Q", "_blank");
  } else if (proj == "tictac") {
    window.open(
      "https://clarence-coronel.github.io/tic-tac-fighter/",
      "_blank"
    );
  } else if (proj == "ischeduleadmin") {
    window.open("https://youtu.be/pmj1Z1T57us", "_blank");
  } else if (proj == "ischedule") {
    window.open("https://youtu.be/nNwMujc2vDI", "_blank");
  } else if (proj == "pokedex") {
    window.open(
      "https://pokedex-henna-nine.vercel.app/?page=1&limit=20",
      "_blank"
    );
  }
}

function copyToClipboard(textToCopy, type) {
  clearInterval(change2Check);
  // Create a temporary textarea element
  var textarea = document.createElement("textarea");

  // Set the value of the textarea to the text you want to copy
  textarea.value = textToCopy;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  if (type == "email") {
    let ico = document.querySelector(`#copyEmail`);
    let btn = document.querySelector(".copy-text[data-info='email']");
    let text = document.querySelector(".email");

    if (document.querySelector(`#copyPhone`).innerText == "done") {
      document.querySelector(`#copyPhone`).innerText = "content_copy";
      document
        .querySelector(".copy-text[data-info='phone']")
        .classList.remove("copied");
      document.querySelector(".phone-num").classList.remove("text-copied");
    }

    btn.classList.add("copied");
    text.classList.add("text-copied");

    ico.innerText = "done";

    change2Check = setTimeout(() => {
      ico.innerText = "content_copy";
      btn.classList.remove("copied");
      text.classList.remove("text-copied");
    }, 5000);
  } else {
    let ico = document.querySelector(`#copyPhone`);
    let btn = document.querySelector(".copy-text[data-info='phone']");
    let text = document.querySelector(".phone-num");

    if (document.querySelector(`#copyEmail`).innerText == "done") {
      document.querySelector(`#copyEmail`).innerText = "content_copy";
      document
        .querySelector(".copy-text[data-info='email']")
        .classList.remove("copied");
      document.querySelector(".email").classList.remove("text-copied");
    }

    btn.classList.add("copied");

    ico.innerText = "done";
    text.classList.add("text-copied");

    change2Check = setTimeout(() => {
      ico.innerText = "content_copy";
      btn.classList.remove("copied");
      text.classList.remove("text-copied");
    }, 5000);
  }
}

function spotlightCursor() {
  document.addEventListener("mousemove", function (event) {
    let light = document.getElementById("light");

    if (!light) {
      let lightEl = document.createElement("div");
      lightEl.setAttribute("id", "light");

      console.log(lightEl);
      document.querySelector("body").appendChild(lightEl);

      light = lightEl;
    }

    // Get the mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Update the position of the circular div
    light.style.left = mouseX - light.offsetWidth / 2 + "px";
    light.style.top = mouseY - light.offsetHeight / 2 + "px";
  });
}

function goToSchoolLink() {
  let schools = document.querySelectorAll(".education-btn");

  schools.forEach((school) => {
    school.addEventListener("click", () => {
      if (school.dataset.school == "bsu") {
        window.open("https://www.bulsu.edu.ph", "_blank");
      } else if (school.dataset.school == "yanga") {
        window.open("https://dyci.edu.ph", "_blank");
      } else if (school.dataset.school == "james") {
        window.open(
          "https://www.facebook.com/StJamesAcademyPlaridelBulacan",
          "_blank"
        );
      }
    });
  });
}

function goToRepoLink() {
  let projects = document.querySelectorAll(".project-container");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      if (project.dataset.proj == "sketch") {
        window.open(
          "https://clarence-coronel.github.io/top_etch-a-sketch/",
          "_blank"
        );
      } else if (project.dataset.proj == "calculator") {
        window.open("https://clarence-coronel.github.io/calculator/", "_blank");
      } else if (project.dataset.proj == "nintendo") {
        window.open("https://youtu.be/BUBPs8jkx3Q", "_blank");
      } else if (project.dataset.proj == "tictac") {
        window.open(
          "https://clarence-coronel.github.io/tic-tac-fighter/",
          "_blank"
        );
      } else if (project.dataset.proj == "ischeduleadmin") {
        window.open("https://youtu.be/pmj1Z1T57us", "_blank");
      } else if (project.dataset.proj == "ischedule") {
        window.open("https://youtu.be/nNwMujc2vDI", "_blank");
      } else if (project.dataset.proj == "pokedex") {
        window.open(
          "https://pokedex-henna-nine.vercel.app/?page=1&limit=20",
          "_blank"
        );
      }
    });
  });
}

function copyText() {
  let btns = document.querySelectorAll(".copy-text");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.info == "email")
        copyToClipboard("clarence.coronel.r@gmail.com", "email");
      else if (btn.dataset.info == "phone")
        copyToClipboard("0967 599 8955", "phone");
    });
  });
}

function updateNavBtn() {
  let nav = document.querySelectorAll(".nav-row");

  nav.forEach((item) => {
    item.addEventListener("click", () => {
      selectNewNav(item.dataset.goto);
    });
  });
}

function scrollNavDetect() {
  window.addEventListener("scroll", () => {
    scrollToSection();
  });
}

function scrollToSection() {
  let about = document.querySelector("#about").getBoundingClientRect();
  let skills = document.querySelector("#skills").getBoundingClientRect();
  let proj = document.querySelector("#proj").getBoundingClientRect();

  if (proj.top < window.innerHeight - (60 * window.innerHeight) / 100)
    updateSelectedNavStyle("proj");
  else if (skills.top < window.innerHeight - (60 * window.innerHeight) / 100)
    updateSelectedNavStyle("skills");
  else if (about.top < window.innerHeight - (60 * window.innerHeight) / 100)
    updateSelectedNavStyle("about");
}

function selectNewNav(navSelected) {
  updateSelectedNavStyle(navSelected);

  let topPosition = document.getElementById(navSelected).offsetTop - 80;

  if (navSelected == "about") topPosition -= 300;

  window.scrollTo({
    top: topPosition,
    left: 0,
    behavior: "smooth",
  });
}

function updateSelectedNavStyle(newNav) {
  document.querySelectorAll(".nav-row").forEach((remove) => {
    remove.classList.remove("selected");
  });

  document
    .querySelector(`.nav-row[data-goto="${newNav}"]`)
    .classList.add("selected");
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isStickyElementAtTop(stickyElement) {
  if (stickyElement) {
    const computedStyle = window.getComputedStyle(stickyElement);
    const position = computedStyle.getPropertyValue("position");

    return (
      position === "sticky" && stickyElement.getBoundingClientRect().top === 0
    );
  }
  return false;
}

function introType(speed) {
  const indicator = document.querySelector(".indicator");
  let introText = document.querySelector(".short-intro .text");
  let index = 0;

  let string = `Passionate about merging design seamlessly with code, specializes
    in crafting captivating digital experiences through continuous learning 
    and innovation.`;

  let type = setInterval(() => {
    if (string.length - 1 >= index) {
      if (!indicator.classList.contains("indicator-pause"))
        indicator.classList.add("indicator-pause");
      introText.append(string[index]);
      index++;
    } else {
      indicator.classList.remove("indicator-pause");
      removeInterval(type);
    }
  }, speed);
}

function removeInterval(interval) {
  clearInterval(interval);
}

function addJumbleSubBtn() {
  let btn = document.querySelector(".intro button");

  btn.addEventListener("click", () => {
    btn.disabled = true;

    if (btn.dataset.content == "jr" && btn.dataset.status == "off") {
      btn.setAttribute("data-status", "on");
      transToMsg();
      btn.setAttribute("data-content", "msg");
    } else if (btn.dataset.content == "msg" && btn.dataset.status == "off") {
      btn.setAttribute("data-status", "on");
      transToJr();
      btn.setAttribute("data-content", "jr");
    }
  });
}

function jumbleLetter(length) {
  let pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let jumbled = "";

  for (i = 0; i < length; i++) {
    let randNum = Math.floor(Math.random() * pool.length - 1) + 1;
    jumbled += pool[randNum];
  }

  return jumbled;
}

function changeToJr() {
  let logoText = document.querySelector(".intro .sub");
  let counter = 0;
  let morph = setInterval(() => {
    counter++;
    if (counter <= 4) {
      logoText.innerText = "F" + jumbleLetter(10);
    } else if (counter <= 8) {
      logoText.innerText = "Fro" + jumbleLetter(9);
    } else if (counter <= 12) {
      logoText.innerText = "Fron" + jumbleLetter(8);
    } else if (counter <= 16) {
      logoText.innerText = "Front" + jumbleLetter(7);
    } else if (counter <= 24) {
      logoText.innerText = "Front-" + jumbleLetter(6);
    } else if (counter <= 28) {
      logoText.innerText = "Front-E" + jumbleLetter(5);
    } else if (counter <= 32) {
      logoText.innerText = "Front-En" + jumbleLetter(4);
    } else if (counter <= 36) {
      logoText.innerText = "Front-End" + jumbleLetter(3);
    } else if (counter <= 40) {
      logoText.innerText = "Front-End " + jumbleLetter(2);
    } else if (counter <= 44) {
      logoText.innerText = "Front-End D" + jumbleLetter(1);
    } else if (counter <= 48) {
      logoText.innerText = "Front-End De" + jumbleLetter(1);
    } else if (counter <= 52) {
      logoText.innerText = "Front-End Dev" + jumbleLetter(1);
    } else if (counter <= 56) {
      logoText.innerText = "Front-End Deve" + jumbleLetter(1);
    } else if (counter <= 60) {
      logoText.innerText = "Front-End Devel" + jumbleLetter(1);
    } else if (counter <= 64) {
      logoText.innerText = "Front-End Develo" + jumbleLetter(1);
    } else if (counter <= 68) {
      logoText.innerText = "Front-End Develop" + jumbleLetter(1);
    } else if (counter <= 72) {
      logoText.innerText = "Front-End Develope" + jumbleLetter(1);
    } else if (counter <= 76) {
      logoText.innerText = "Front-End Developer";
      let btn = document.querySelector(".intro button");
      btn.setAttribute("data-status", "off");
      btn.disabled = false;
    }
  }, 50);
}

function changeToMsg() {
  let logoText = document.querySelector(".intro .sub");
  let counter = 0;
  let morph = setInterval(() => {
    counter++;
    if (counter <= 4) {
      logoText.innerText = "I" + jumbleLetter(22);
    } else if (counter <= 8) {
      logoText.innerText = "I " + jumbleLetter(20);
    } else if (counter <= 12) {
      logoText.innerText = "I B " + jumbleLetter(18);
    } else if (counter <= 16) {
      logoText.innerText = "I Bu" + jumbleLetter(16);
    } else if (counter <= 20) {
      logoText.innerText = "I Bui" + jumbleLetter(14);
    } else if (counter <= 24) {
      logoText.innerText = "I Buil" + jumbleLetter(12);
    } else if (counter <= 28) {
      logoText.innerText = "I Build" + jumbleLetter(10);
    } else if (counter <= 32) {
      logoText.innerText = "I Build " + jumbleLetter(8);
    } else if (counter <= 36) {
      logoText.innerText = "I Build S" + jumbleLetter(6);
    } else if (counter <= 40) {
      logoText.innerText = "I Build St" + jumbleLetter(4);
    } else if (counter <= 44) {
      logoText.innerText = "I Build Stu" + jumbleLetter(2);
    } else if (counter <= 48) {
      logoText.innerText = "I Build Stuf" + jumbleLetter(1);
    } else if (counter <= 52) {
      logoText.innerText = "I Build Stuff" + jumbleLetter(1);
    } else if (counter <= 56) {
      logoText.innerText = "I Build Stuff.";
      let btn = document.querySelector(".intro button");
      btn.setAttribute("data-status", "off");
      btn.disabled = false;
    }
  }, 50);
}

function transToMsg() {
  let logoText = document.querySelector(".intro .sub");
  let counter = 0;
  let morph = setInterval(() => {
    counter++;
    if (counter <= 4) {
      logoText.innerText = "Front-End Develope" + jumbleLetter(1);
    } else if (counter <= 8) {
      logoText.innerText = "Front-End Develop" + jumbleLetter(2);
    } else if (counter <= 12) {
      logoText.innerText = "Front-End Develo" + jumbleLetter(3);
    } else if (counter <= 16) {
      logoText.innerText = "Front-End Devel" + jumbleLetter(4);
    } else if (counter <= 20) {
      logoText.innerText = "Front-End Deve" + jumbleLetter(5);
    } else if (counter <= 24) {
      logoText.innerText = "Front-End Dev" + jumbleLetter(6);
    } else if (counter <= 28) {
      logoText.innerText = "Front-End De" + jumbleLetter(7);
    } else if (counter <= 32) {
      logoText.innerText = "Front-End D" + jumbleLetter(8);
    } else if (counter <= 36) {
      logoText.innerText = "Front-End " + jumbleLetter(9);
    } else if (counter <= 40) {
      logoText.innerText = "Front-End" + jumbleLetter(10);
    } else if (counter <= 44) {
      logoText.innerText = "Front-En" + jumbleLetter(11);
    } else if (counter <= 48) {
      logoText.innerText = "Front-E" + jumbleLetter(12);
    } else if (counter <= 52) {
      logoText.innerText = "Front-" + jumbleLetter(13);
    } else if (counter <= 56) {
      logoText.innerText = "Front" + jumbleLetter(14);
    } else if (counter <= 60) {
      logoText.innerText = "Fron" + jumbleLetter(15);
    } else if (counter <= 64) {
      logoText.innerText = "Fro" + jumbleLetter(16);
    } else if (counter <= 68) {
      logoText.innerText = "Fr" + jumbleLetter(17);
    } else if (counter <= 72) {
      logoText.innerText = "F" + jumbleLetter(18);
    } else if (counter <= 76) {
      logoText.innerText = "" + jumbleLetter(19);
    } else if (counter <= 80) {
      logoText.innerText = jumbleLetter(23);
      removeInterval(morph);
      changeToMsg();
    }
  }, 25);
}

function transToJr() {
  let logoText = document.querySelector(".intro .sub");
  let counter = 0;
  let morph = setInterval(() => {
    counter++;
    if (counter <= 4) {
      logoText.innerText = "I Build Stuff" + jumbleLetter(1);
    } else if (counter <= 8) {
      logoText.innerText = "I Build Stuf" + jumbleLetter(2);
    } else if (counter <= 12) {
      logoText.innerText = "I Build Stu" + jumbleLetter(3);
    } else if (counter <= 16) {
      logoText.innerText = "I Build St" + jumbleLetter(4);
    } else if (counter <= 20) {
      logoText.innerText = "I Build S" + jumbleLetter(5);
    } else if (counter <= 24) {
      logoText.innerText = "I Build " + jumbleLetter(6);
    } else if (counter <= 28) {
      logoText.innerText = "I Build" + jumbleLetter(7);
    } else if (counter <= 32) {
      logoText.innerText = "I Buil" + jumbleLetter(8);
    } else if (counter <= 36) {
      logoText.innerText = "I Bui" + jumbleLetter(9);
    } else if (counter <= 40) {
      logoText.innerText = "I Bu" + jumbleLetter(10);
    } else if (counter <= 44) {
      logoText.innerText = "I B" + jumbleLetter(11);
    } else if (counter <= 48) {
      logoText.innerText = "I " + jumbleLetter(12);
    } else if (counter <= 52) {
      logoText.innerText = "I" + jumbleLetter(13);
    } else if (counter <= 92) {
      logoText.innerText = jumbleLetter(14);
      removeInterval(morph);
      changeToJr();
    }
  }, 25);
}

function onHoverLowerOpacity() {
  let educs = document.querySelectorAll(".education-btn");
  let projs = document.querySelectorAll(".project-container");

  educs.forEach((educ) => {
    educ.addEventListener("mouseover", () => {
      educs.forEach((button) => {
        button.classList.add("blur");
      });
      educ.classList.remove("blur");
    });

    educ.addEventListener("mouseout", () => {
      educs.forEach((button) => {
        button.classList.remove("blur");
      });
    });
  });

  projs.forEach((proj) => {
    proj.addEventListener("mouseover", () => {
      projs.forEach((button) => {
        button.classList.add("blur");
      });
      proj.classList.remove("blur");
    });

    proj.addEventListener("mouseout", () => {
      projs.forEach((button) => {
        button.classList.remove("blur");
      });
    });
  });
}
