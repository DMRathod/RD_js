//restart button
var restart = document.querySelector("#bn");
var squares = document.querySelectorAll('td');
function clearBord()
{
	for(var i = 0;i < squares.length;i++)
	{
		squares[i].textContent = '';
	}
}
restart.addEventListener('click',clearBord);
function ChangeSign(){
	if (this.textContent == '') {
		this.textContent = 'X';
	}else if (this.textContent == 'X') {
		this.textContent = '0';
	}else if (this.textContent = '0') {
		this.textContent = '';
	}
}
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click',ChangeSign);
}
