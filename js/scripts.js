var row1 = ["", "", ""];
var row2 = ["", "", ""];
var row3 = ["", "", ""];

var col1 = ["", "",""];
var col2 = ["", "", ""];
var col3 = ["", "", ""];

$(function(){
  var nextChar = "x";
  $('.box').click(function() {
    if ($(this).text() === "") {
      $(this).text(nextChar);
      if (nextChar === "x") {
        nextChar = "o"
      } else {
        nextChar = "x"
      }
    }
  });
});
