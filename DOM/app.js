document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  let secondButton = document.getElementById("button2");
  let colorfulDiv = document.getElementById("colorfulDiv");
  let colorfulPara = document.getElementById("colorfulPara");
  let nameDiv = document.getElementById("nameDiv");
  let nameDivButton = document.getElementById("nameDivButton");
  let firstClick = true;
  let ulButton = document.getElementById("ulButton");
  let nameList = document.getElementById("nameList");
  let friendsList = [
    "Kaley",
    "Jon",
    "Daze",
    "Zuka",
    "Christoph",
    "Debza",
    "Zeal",
    "Reid",
    "Aric",
    "Nathan",
  ];
  let counter = 0;

  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  // question #1

  let firstButton = document.createElement("button");
  let firstButtonText = document.createTextNode("button #1!");

  document.body.appendChild(div);
  div.appendChild(firstButton);
  firstButton.appendChild(firstButtonText);

  firstButton.addEventListener("click", function () {
    alert("Hey, you're really cool!");
  });

  // question #2
  secondButton.addEventListener("click", function () {
    alert(document.getElementById("input").value);
  });

  // question #3  (I made this a random color before realizing I had to do a mouseout function for reverting it back, but the random color is so much cooler so I'll comment out the mouse out way of doing this with a color of "red")

  colorfulDiv.addEventListener("mouseover", function () {
    let randomColor = getRandomColor();
    colorfulDiv.style.backgroundColor = randomColor;
  });

  // colorfulDiv.addEventListener("mouseout", function () {
  //  colorfulDiv.style.backgroundColor = red;
  // });

  // question #4

  colorfulPara.addEventListener("mouseover", function () {
    let randomColor = getRandomColor();
    colorfulPara.style.color = randomColor;
  });

  // question #5

  nameDivButton.addEventListener("click", function () {
    if (firstClick) {
      let span = document.createElement("span");
      let spantext = document.createTextNode("Hunter Hamilton II ");
      span.appendChild(spantext);
      nameDiv.appendChild(span);
      firstClick = false;
    }
  });

  // question #6
  ulButton.addEventListener("click", function () {
    console.log(counter);
    let li = document.createElement("li");
    let litext = document.createTextNode(friendsList[counter]);
    li.appendChild(litext);
    nameList.appendChild(li);
    counter++;
  });
});
