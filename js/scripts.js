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
});
