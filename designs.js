function makeGrid(height, width) {
    var table = document.getElementById("pixelCanvas");
    var grid = "";
    for (var x = 0; x < height; x++) {
        grid += '<tr class="row-' + x + '">';
        for (var y = 0; y < width; y++) {
            grid += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;
    colorCell();
}
function submission() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
function colorCell() {
    var colorPicker = document.getElementById("colorPicker");
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            var targetcell = event.target;
            targetcell.style.backgroundColor = colorPicker.value;
        });
    }
}
document.getElementById('sizePicker').onsubmit = function () {
    submission();
};
