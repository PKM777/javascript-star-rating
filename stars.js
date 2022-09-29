const [...elms] = document.querySelectorAll(".stars");
const getStars = document.getElementsByClassName("stars");
const rater = document.getElementById("rating");
rater.innerText = "Rate here";

elms.map((el) => {
  el.addEventListener("mouseenter", (event) => {
    for (let i = 0; i < elms.length; i++) {
      if (i < event.target.innerText) {
        rater.innerText = `${event.target.innerText}-Stars`;
        elms[i].style.backgroundColor = "yellow";
      } else {
        elms[i].style.backgroundColor = "white";
      }
    }
  });
  (el && window).addEventListener("dblclick", (e) => {
    for (let i = 0; i < elms.length; i++) {
      elms[i].style.backgroundColor = "white";
      rater.innerText = `Not Rated`;
    }
  });
});
