
let tg = window.Telegram.WebApp;

tg.expand();

let result = {val:""};
var votedata = document.getElementById("buttonvote");


votedata.addEventListener('click', function(){result.val = document.getElementById("calendar").value;})
console.log(result.val);


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(result.val);})