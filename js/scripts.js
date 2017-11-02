<<<<<<< HEAD
function Player(mark, active) {
  this.mark = mark;
}
Player.prototype.mark = function(playerMark) {
  return this.mark = playerMark;
}



//Front end
$(function(){
  var playerX = new Player("X", true);
  var playerO = new Player("O", false);


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
=======
var gameRun = true;
var matrix = [[null, null, null],
              [null, null, null],
              [null, null, null]]

function check() {
  var xTester = new RegExp('xxx'),
      oTester = new RegExp('ooo');
  var diagUp = matrix[0][2] + matrix[1][1] + matrix[2][0];
  for (var x = 0; x < matrix.length; x++) {
    var rowStr = matrix[x].join("");
    var col1Str = col1Str += matrix[x][0];
    var col2Str = col2Str += matrix[x][1];
    var col3Str = col3Str += matrix[x][2];
    var diagDown = diagDown += matrix[x][x];

    if (xTester.test(rowStr) || xTester.test(diagDown) || xTester.test(diagUp)) {
      winner("X");
      break;
    } else if (oTester.test(rowStr) || oTester.test(diagDown) || oTester.test(diagUp)) {
      winner("O");
      break;
    } else if (true) {

    }
  }
  if (xTester.test(col1Str) || xTester.test(col2Str) || xTester.test(col3Str)) {
    winner("X");
  } else if (oTester.test(col1Str) || oTester.test(col2Str) || oTester.test(col3Str)) {
    winner("O");
  }
}
function reset() {
  matrix = [[null, null, null],
            [null, null, null],
            [null, null, null]];
  $('.box').each(function(){
    $(this).text("");
  })
  $('.btn').removeClass('active');
  $('.winner').removeClass('active');
  gameRun = true;
}
function winner(winner){
  gameRun = false;
  $('.winner').text(winner + " Wins!!").addClass('active');
  $('.btn').addClass('active');
}

$(function(){
  var thisChar = "x";
  $('.box').click(function() {
    if ($(this).text() === "" && gameRun === true) {
      $(this).text(thisChar);//add character to clicked box
      var row = parseInt($(this).attr('data-row')); // place character in matrix
      var col = parseInt($(this).attr('data-index'));
      matrix[row][col] = thisChar;
      if (thisChar === "x") { //swap character
        thisChar = "o"
      } else {
        thisChar = "x"
      }
      setTimeout(check, 5);//check to see if winner
    }
  });
  $("#clear").click(function(){
    reset();
  });
>>>>>>> colins-version
});
