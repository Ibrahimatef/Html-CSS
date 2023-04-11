let headerMenu = document.getElementById("headerMenu");
let headerList = document.getElementById("headerList");
let home = document.getElementById("home");
let ourMission = document.getElementById("ourMission");
let whatWeDo = document.getElementById("whatWeDo");
let marketSolution = document.getElementById("marketSolution");
let contactUs = document.getElementById("contactUs");
let ourWork = document.getElementById("ourWork");
let headerLinks = Array.from(document.querySelectorAll(".header ul li"));
let scrollDots = document.querySelectorAll(".scroll-dots a");
let threshold = window.innerWidth < 768 ? 0 : 1;

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
        } else if (entry.target.id === "ourWork") {
          document.querySelector(
            ".our-work .container > .text"
          ).style.animation = "showup 1s ease-in-out forwards";
          document.querySelector(".our-work .owl-carousel").style.animation =
            "showup 1s 0.5s ease-in-out forwards";
        } else if (entry.target.id === "contactUs") {
          document.getElementById("contactUsRow1").style.animation =
            "showup 1s ease-in-out forwards";
          document.getElementById("contactUsRow2").style.animation =
            "showup 1s 0.5s ease-in-out forwards";
        }
        headerLinks.forEach((li) => {
          li.firstChild.classList.remove("active");
        });
        scrollDots.forEach((li) => {
          li.classList.remove("active");
        });
        document
          .querySelector(`a[href="#${entry.target.id}"]`)
          .classList.add("active");
        document
          .getElementById(`${entry.target.id}Dot`)
          .parentElement.classList.add("active");
        // observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: threshold,
  }
);

observer.observe(home);
observer.observe(ourMission);
observer.observe(whatWeDo);
observer.observe(marketSolution);
observer.observe(ourWork);
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

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    margin: 5,
    responsive: {
      0: {
        nav: false,
      },
      992: {
        nav: true,
      },
    },
  });
});
