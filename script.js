let dayNight = document.querySelector(".dayNight");

let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingEffect = new Typed("#text", {
  strings: ["Rahul Saini", "3rd Year B.TECH Undergrade", "pursuing my B.Tech in CS" , "Coding Enthusiast"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});
