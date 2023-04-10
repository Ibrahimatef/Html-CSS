let headerMenu = document.getElementById("headerMenu");
let headerList = document.getElementById("headerList");
let home = document.getElementById("home");
let ourMission = document.getElementById("ourMission");
let whatWeDo = document.getElementById("whatWeDo");
let marketSolution = document.getElementById("marketSolution");
let contactUs = document.getElementById("contactUs");
let headerLinks = Array.from(document.querySelectorAll(".header ul li"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "home") {
          document.getElementById("homeText").style.animation =
            "showup 1s ease-in-out forwards";
          document.getElementById("firstHomeButton").style.animation =
            "showup 1s 0.5s ease-in-out forwards";
          document.getElementById("secondHomeButton").style.animation =
            "showup 1s 0.7s ease-in-out forwards";
        } else if (entry.target.id === "ourMission") {
          document.querySelector("#ourMission h1").style.animation =
            "showup 1s ease-in-out forwards";
          document.querySelector("#ourMission p").style.animation =
            "showup 1s 0.7s ease-in-out forwards";
          observer.unobserve(entry.target);
        } else if (entry.target.id === "whatWeDo") {
          document.getElementById("whatWeDoHeader").style.animation =
            "showup 1s ease-in-out forwards";
          document.getElementById("whatWeDoIcon1").style.animation =
            "showup 1s 0.7s ease-in-out forwards";
          document.getElementById("whatWeDoIcon2").style.animation =
            "showup 1s 1.4s ease-in-out forwards";
          document.getElementById("whatWeDoIcon3").style.animation =
            "showup 1s 2.1s ease-in-out forwards";
        } else if (entry.target.id === "marketSolution") {
          document.getElementById("marketSolution1").style.animation =
            "showup 1s ease-in-out forwards";
          document.getElementById("marketSolution2").style.animation =
            "showup 1s 1s ease-in-out forwards";
          document.getElementById("marketSolution3").style.animation =
            "showup 1s 1.3s ease-in-out forwards";
          document.getElementById("marketSolution4").style.animation =
            "showup 1s 1.6s ease-in-out forwards";
          document.getElementById("marketSolution5").style.animation =
            "showup 1s 1.9s ease-in-out forwards";
        } else if (entry.target.id === "contactUs") {
          document.getElementById("contactUsRow1").style.animation =
            "showup 1s ease-in-out forwards";
          document.getElementById("contactUsRow2").style.animation =
            "showup 1s 0.5s ease-in-out forwards";
        }
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(home);
observer.observe(ourMission);
observer.observe(whatWeDo);
observer.observe(marketSolution);
observer.observe(contactUs);

headerLinks.forEach((li, index) => {
  if (index !== headerLinks.length - 1) {
    li.onclick = (event) => {
      headerLinks.forEach((li) => {
        li.firstChild.classList.remove("active");
      });
      if (event.target.tagName.toLowerCase() === "a")
        event.target.classList.add("active");
      else event.target.firstChild.classList.add("active");
    };
  }
});

headerMenu.onclick = () => {
  document.getElementById("firstBar").classList.toggle("firstBarClicked");
  document.getElementById("secondBar").classList.toggle("secondBarClicked");
  document.getElementById("thirdBar").classList.toggle("thirdBarClicked");
  headerList.classList.toggle("show-header-list");
};
