
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let result = {val:""};

tg.MainButton.setText("Выбрать");
tg.MainButton.show();


async function load() {
	let url = 'https://docs.google.com/spreadsheets/d/1MzFq4ysE8EjP_jHyW0F7hJaczh7kEJ9HIC6_DE2wixI/gviz/tq?tqx=out:json&tq&gid=0';
        let obj = await (await fetch(url)).json();
        console.log(obj);
	return obj;}

let data_j = load();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	if (document.getElementById("calendar").value=== "") {
		tg.MainButton.setText("Дата не выбрана");
		tg.MainButton.show();
	} 
	else {tg.MainButton.show();
	      result.val = document.getElementById("calendar").value;
	      tg.sendData(result.val);
	      tg.sendData(data_j);}})
