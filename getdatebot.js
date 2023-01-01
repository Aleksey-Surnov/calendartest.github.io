
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let result = {val:""};
var votedata = document.getElementById("buttonvote");


votedata.addEventListener('click', function(){
	result.val = document.getElementById("calendar").value;
	tg.MainButton.setText("Вы выбрали дату" + result.val);
	tg.MainButton.show();})
console.log(result.val);


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(result.val);})
