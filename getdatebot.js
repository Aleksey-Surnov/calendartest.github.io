
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let result = {val:""};

tg.MainButton.setText("Выбрать");
tg.MainButton.show();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	if (document.getElementById("calendar").value=== "") {
		tg.MainButton.setText("Дата не выбрана");
		tg.MainButton.show();
	} 
	else {tg.MainButton.show();
	      result.val = document.getElementById("calendar").value;
	      tg.sendData(result.val);}})
