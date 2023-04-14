const aboutSection = document.getElementById("aboutSection");
const utilitiesSection = document.getElementById("utilitiesSection");
const teamSection = document.getElementById("teamSection");
const atoopiaSection = document.getElementById("atoopiaSection");
const ebookSection = document.getElementById("ebookSection");
const faqSection = document.getElementById("faqSection");
const homeSection = document.getElementById("homeSection");
const connectSection = document.getElementById("connectSection");
const homeBtn = document.getElementById("homebtn");
const sectionList = [
  homeSection,
  aboutSection,
  teamSection,
  atoopiaSection,
  ebookSection,
  connectSection,
  // utilitiesSection,
  faqSection,
];

const fade = (element, section) => {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.001) {
      clearInterval(timer);
      const sectionElement = document.getElementById(section);
      sectionList.forEach((e) => {
        if (e !== sectionElement) {
          e.classList.add("hidden");
          return;
        }
        if (e === homeSection) {
          homeBtn.classList.add("hidden");
        } else {
          homeBtn.classList.remove("hidden");
        }
        console.log(e);
        e.classList.remove("hidden");
      });
      unfade(element);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 10);
};

const unfade = (element) => {
  var op = 0.1;
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
};

const toSection = (section) => {
  fade(document.body, section);
};
