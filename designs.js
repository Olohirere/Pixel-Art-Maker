// Select color input
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

// Select size input
sizePicker.addEventListener('click', (e) => {
	e.preventDefault();
	let height = inputHeight.value;
	let width = inputWidth.value;
	table.firstElementChild.remove();
	makeGrid(height, width);
});

/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	// Your code goes here!
	for (let i = 0; i <= height; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j <= width; j++) {
			let cell = row.insertCell(j);
			cell.addEventListener('click', (e) => {
				cell.style.backgroundColor = color.value;
			});
		}
	}
}

$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
});



function makeGrid(height, width) {
	$('tr').remove();
	// Your code goes here!
	for (var i = 1; i <= height; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var j = 1; j <= width; j++) {
			$('#table' + i).append('<td></td>');
		}
	}
	//add color to cell 
	$('td').click(function addColor() {
		color = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		} else
			$(this).attr('style', 'background-color:' + color);
	});
}