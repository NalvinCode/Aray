const aboutSection = document.getElementById("aboutSection");
const utilitiesSection = document.getElementById("utilitiesSection");
const teamSection = document.getElementById("teamSection");
const ebookSection = document.getElementById("ebookSection");
const faqSection = document.getElementById("faqSection");
const homeSection = document.getElementById("homeSection");
const comingSoonSection = document.getElementById("comingSoonSection");
const homeBtn = document.getElementById("homebtn");
const sectionList = [
  homeSection,
  aboutSection,
  teamSection,
  comingSoonSection,
  utilitiesSection,
  faqSection,
];

const closeModal = (modalId) => {
  let modal = document.getElementById(modalId);
  modal.classList.add("hidden");
};

const openModal = (modalId) => {
  let modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

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

const handleAcc = (index) => {
  const accordion = document.getElementById(`${"acc" + index}`);
  let icon1 = document.getElementById(`${"plus" + index}`);
  let icon2 = document.getElementById(`${"minus" + index}`);
  if (accordion.classList.contains("hidden")) {
    accordion.classList.remove("hidden");
    icon1.classList.add("hidden");
    icon2.classList.remove("hidden");
    return;
  }
  accordion.classList.add("hidden");
  icon2.classList.add("hidden");
  icon1.classList.remove("hidden");
};
