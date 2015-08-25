'use strict';

// jshint devel:true

$(function() {

  var mark = 'X';

  $('[id^=cell]').click(function() {
    var $cell = $(this);
    $cell.text(mark);


    if (mark === 'X') {
      mark = 'O';
    } else {
      mark = 'X';
    }

    checkForVictory();
    $cell.off('click');

  });
});

var lines = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 3, 6, 9 ],
  [ 1, 5, 9 ],
  [ 3, 5, 7 ]
];

// rest of your code
$(function resetBoard() {
    document.getElementsByTag('form').innerHTML = '';
 });

function checkForVictory() {
  lines.forEach(function(line) {
    var $cell1 = $('#cell-' + line[0]),
        $cell2 = $('#cell-' + line[1]),
        $cell3 = $('#cell-' + line[2]);

    if ($cell1.text() === '') {
      return;
    }

    if ($cell1.text() === $cell2.text() &&
        $cell2.text() === $cell3.text()) {
        alert($cell1.text() + ' is the winner!');
    }
  });
 }
