$(document).ready(function () {
  // my eyes are bleeding, jquery is baphomet, this is jquery, please be gentle.

  // question #1

  let firstButton = $("<button></button>");
  firstButton.text("button #1!");
  $("body").append(firstButton);

  $(firstButton).click(function () {
    alert("iloveyou.exe");
  });

  // question #2, jQuery is easier to me than DOM, but I still dont like it as much, why is this a thing.

  $("#secondButton").click(function () {
    let text = $("#secondButtonText").val();
    if (text.length === 0) {
      $("#secondButton").prop("disabled", true);
    } else {
      alert($("#secondButtonText").val());
    }
  });

  // question #3
  $("#colorfulDiv").css({
    width: "100px",
    height: "100px",
    background: "black",
  });

  $("#colorfulDiv").mouseover(function () {
    $("#colorfulDiv").css("background-color", "red");
  });

  $("#colorfulDiv").mouseout(function () {
    $("#colorfulDiv").css("background-color", "blue");
  });

  // question #4
  // function for random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  $("#colorfulPara").click(function () {
    let randomColor = getRandomColor;
    $("#colorfulPara").css("color", randomColor);
  });

  // question #5

  $("#nameDivButton").click(function () {
    firstClick = true;
    if (firstClick) {
      let $span = $("<span>Hunter Hamilton II </span>");
      $("#nameDiv").append($span);
      firstClick = false;
    }
  });

  // question #6

  counter = 0;
  let $ul = $("#nameList");
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
  $("#ulButton").click(function () {
    let $li = $(`<li>${friendsList[counter]}</li>`);

    $ul.append($li);

    counter++;
  });
});
