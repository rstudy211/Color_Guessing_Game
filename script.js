var level = "hard";
const easyToggleBtn = document.getElementById("easy");
const hardToggleBtn = document.getElementById("hard");
const new_color = document.querySelector(".newColor");

easyToggleBtn.addEventListener("click", (e) => {
  //console.log(e.target.style.backgroundColor)
  //e.target.style.backgroundColor = "steelblue"
  //e.target.style.color = "white"
  e.target.classList.add("active");
  hardToggleBtn.classList.remove("active");
  level = "easy";
  renderQn();
});
hardToggleBtn.addEventListener("click", (e) => {
  e.target.classList.add("active");
  easyToggleBtn.classList.remove("active");
  level = "hard";
  renderQn();
});
function random_rgba(n) {
  var colors = [];
  for (let i = 0; i < n; i++) {
    var o = Math.round,
      r = Math.random,
      s = 255;
    var re = o(r() * s).toString();
    var g = o(r() * s).toString();
    var b = o(r() * s).toString();
    var tcolor = [re, g, b];
    console.log(tcolor);
    colors.push(tcolor);
    //return '(' + re + ',' + g + ',' + b + ')';
  }
  console.log(colors);
  return colors;
}
function renderQn() {
  const headColor = document.createElement("span");
  const head = document.getElementById("head");
  const allbox = document.getElementById("allbox");

  //console.log("dkjsk");
  var n = level == "hard" ? 6 : 3;
  var colors = random_rgba(n);
  //console.log(colors)

  new_color.addEventListener("click", (e) => {
    // color = random_rgba(n)
    e.target.innerText = "New colors";
    renderQn();
  });
  var color = "(" + colors[Math.floor(Math.random() * colors.length)] + ")";
  head.innerHTML = "RGB";
  allbox.innerHTML = "";

  headColor.innerHTML = color;
  head.appendChild(headColor);
  let temp = false;
  for (let i = 0; i < n; i++) {
    // const outerBox = document.createElement('div');
    // outerBox.setAttribute("id", "outerBox")
    const box = document.createElement("div");
    //console.log(colors[i][0] + colors[i][1])
    box.style.backgroundColor =
      "rgb(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
    box.setAttribute("id", "box" + i);
    box.setAttribute("class", "sameColor");

    // outerBox.appendChild(box)
    allbox.appendChild(box);
    // const elementBoxes = document.getElementsByClassName("sameColor")
    box.addEventListener("click", (e) => {
      let boxColor = box.style.backgroundColor;

      if (boxColor.replace(/ /g, "") === "rgb" + color) {
        console.log(true);
        // temp = true;
        // console.log("djskjf" + temp)
        for (let i = 0; i < n; i++) {
          console.log("box" + i);
          document.getElementById("box" + i).style.visibility = "visible";
          document.getElementById("box" + i).style.backgroundColor =
            "rgb" + color;
          document.querySelector(".header").style.backgroundColor =
            "rgb" + color;
        }
        // return temp;
        new_color.innerText = "Play again";
      } else {
        box.style.visibility = "hidden";
      }
    });
  }
}

window.onload = () => {
  renderQn();
};
