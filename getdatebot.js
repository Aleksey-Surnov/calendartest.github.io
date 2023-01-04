
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let result = {val:""};

tg.MainButton.setText("Выбрать");
tg.MainButton.show();

let dataandtime = [{'dt':'05-01-2023', 'iswork':'1'}, {'dt':'08-01-2023', 'iswork':'1'}]




Telegram.WebApp.onEvent("mainButtonClicked", function(){
	if (document.getElementById("calendar").value=== "") {
		tg.MainButton.setText("Дата не выбрана");
		tg.MainButton.show();
	} 
	else {
		for(let i = 0; i < dataandtime.length; i++) {
			let obj = dataandtime[i];
			if (obj.dt === document.getElementById("calendar").value) {
				tg.MainButton.setText("Дата занята");
				break;}
			else {
				tg.MainButton.show();
				result.val = document.getElementById("calendar").value;
				tg.sendData(result.val);}}}})
