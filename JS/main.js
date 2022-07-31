// For social media and contact in media (max-width 992px)
const round = document.querySelector(".round");
const info = document.querySelector(".info-header");
round.addEventListener("click", (eo) => {
  info.classList.toggle("active-social");
});
// For Nav Bar in media Max-width 992px
const bar = document.getElementById("bar");
const item = document.querySelector(".item");
bar.addEventListener("click", (eo) => {
  item.classList.toggle("active-nav");
});

// return button
let btnReturn = document.querySelector(".return");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    btnReturn.classList.add("scroll-active")
  } else {
    btnReturn.classList.remove("scroll-active")
  }
});
 btnReturn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
 })
