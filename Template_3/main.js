let visitedSkills = false;
let visitedStats = false;
let skills = document.getElementById("skills");
let stats = document.getElementById("stats");
let pers = Array.from(document.querySelectorAll(".skills p"));
let statsNum = Array.from(document.querySelectorAll(".stats h2"));
let upButton = document.getElementById("upButton");

const animatePer = (targetPer, element, type = "skills") => {
  let count = 1;
  const changeText = setInterval(() => {
    element.textContent = type === "skills" ? count++ + "%" : count++;
    if (element.textContent === targetPer) clearInterval(changeText);
  }, 10);
};

const animateSkills = () => {
  if (window.scrollY + 10 >= skills.offsetTop && !visitedSkills) {
    document.querySelector("#progressOne").style.setProperty("--width", "80%");
    document.querySelector("#progressTwo").style.setProperty("--width", "70%");
    document
      .querySelector("#progressThree")
      .style.setProperty("--width", "90%");
    document.querySelector("#progressFour").style.setProperty("--width", "85%");
    animatePer("80%", pers[0]);
    animatePer("70%", pers[1]);
    animatePer("90%", pers[2]);
    animatePer("85%", pers[3]);
    visitedSkills = true;
  }
};

const animateStats = () => {
  if (window.scrollY + 50 >= stats.offsetTop && !visitedStats) {
    for (let i = 0; i < statsNum.length; i++)
      animatePer("150", statsNum[i], "Stats");
    visitedStats = true;
  }
};

const animateUpButton = () => {
  if (window.scrollY >= 50) upButton.classList.add("show-up-button");
  else upButton.classList.remove("show-up-button");
};
window.onscroll = () => {
  animateSkills();
  animateStats();
  animateUpButton();
};
