// Соединение с сервером статистики stat.azbyka.ru
var request = 'wss://stat.azbyka.ru/realtime-view/project/extension/module/background';

var bgSocket = new ReconnectingWebSocket(request);
bgSocket.onerror = function(error) {
	console.log("Ошибка " + error.message);
};
bgSocket.onclose = function(event) {
	if (event.wasClean) {
		console.log('Соединение закрыто чисто: '+request);
	} else {
		console.log('Обрыв соединения: '+request);
	}
	console.log('Код: ' + event.code + ' причина: ' + event.reason);
};

//clearLocalStore();
// БД авторов
var bg_bibrefs_data2="";
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://azbyka.ru/wp-content/authors.json", true);
xhr2.onreadystatechange = function() {
  if (xhr2.readyState == 4) {
	bg_bibrefs_data2 =  JSON.parse(xhr2.responseText);
  }
}
xhr2.send();
	
// БД терминов
var bg_bibrefs_data3="";
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://azbyka.ru/wp-content/terms.json", true);
xhr3.onreadystatechange = function() {
  if (xhr3.readyState == 4) {
	bg_bibrefs_data3 =  JSON.parse(xhr3.responseText);
  }
}
xhr3.send();	

function install_notice() {
	if (localStorage.getItem('bg_install_time')) return;

	var now = new Date().getTime();
	localStorage.setItem('bg_install_time', now);
//	chrome.tabs.create({url: "options.html"});
	chrome.runtime.openOptionsPage();
}
install_notice();

// Значения по умолчанию
if (localStorage["extCalendar"] === undefined) localStorage["extCalendar"] = '1';
if (localStorage["languages"] === undefined) localStorage["languages"] = '&cr';

if (localStorage["extTroparion"] === undefined) localStorage["extTroparion"] = '';

if (localStorage["c_font"] === undefined) localStorage["c_font"] = 'rus';

if (localStorage["extActive"] === undefined) localStorage["extActive"] = '1';
if (localStorage["extDate"] === undefined) localStorage["extDate"] = '';
if (localStorage["extReplaceHref"] === undefined) localStorage["extReplaceHref"] = '';
if (localStorage["extAuthorLink"] === undefined) localStorage["extAuthorLink"] = '';
if (localStorage["extTermLink"] === undefined) localStorage["extTermLink"] = '';
if (localStorage["extWestEstCol"] === undefined) localStorage["extWestEstCol"] = '';
if (localStorage["extWestEstTrigger"] === undefined) localStorage["extWestEstTrigger"] = 'N';
if (localStorage["extNoDot"] === undefined) localStorage["extNoDot"] = '';

if (localStorage["colorOfHighlight"] === undefined) localStorage["colorOfHighlight"] = '#008000';
if (localStorage["bgcolorOfHighlight"] === undefined) localStorage["bgcolorOfHighlight"] = '#ffffff';
if (localStorage["colorOfHighlightOn"] === undefined) localStorage["colorOfHighlightOn"] = '';
if (localStorage["bgcolorOfHighlightOn"] === undefined) localStorage["bgcolorOfHighlightOn"] = '';

if (localStorage["extPopupVerses"] === undefined) localStorage["extPopupVerses"] = '1';
if (localStorage["extInterpretation"] === undefined) localStorage["extInterpretation"] = '1';

// Проигрыватель
var sound      = document.createElement('audio');
sound.id       = 'azbyka-audio-player';
sound.controls = 'controls';
sound.preload      = 'auto';
sound.type     = 'audio/mpeg';
document.body.appendChild(sound);

sound.oncanplay = function () {
	chrome.runtime.sendMessage({method: "extCanPlay"});
};

chrome.commands.onCommand.addListener(function(command) {
	if (command == 'player-on-off') {
		playerTrigger ();
	}
});
function playerTrigger () {
	if (localStorage["extPlayer"] == "") {
		sound.src = localStorage["trackUrl"];
		localStorage["extPlayer"] = localStorage["trackUrl"];
		sound.play();
		bg_bibrefs_setIcon ();
	} else {
		sound.pause();
		sound.src = "";
		localStorage["extPlayer"] = "";
		bg_bibrefs_setIcon ();
	}
	chrome.runtime.sendMessage({method: "extPlayerTrigger"});
}
bg_bibrefs_setIcon ();

chrome.browserAction.setBadgeBackgroundColor({color: 'darkgreen'});

searchSelection(chrome.i18n.getMessage("extSearchPlaceholder"));

// Ждем запроса от content.js и отправляем ему параметры
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
	if(message.method == 'highlightBibleReferences') {
		
		var languages = localStorage["languages"];
		if (languages.indexOf('c')>0 && localStorage["c_font"]) languages +='&'+localStorage["c_font"];
		sendResponse({
			extActive: localStorage["extActive"],
			color: (localStorage["colorOfHighlightOn"]?localStorage["colorOfHighlight"]:""),
			bgcolor: (localStorage["bgcolorOfHighlightOn"]?localStorage["bgcolorOfHighlight"]:""),
			hotkey: localStorage["extHotKey"],
			langs: languages,
			bible_lang: bg_bibrefs_getLanguage(),
			replace: localStorage["extReplaceHref"]?true:false,
			authors: localStorage["extAuthorLink"]?true:false,
			authors_data: bg_bibrefs_data2,
			terms: localStorage["extTermLink"]?true:false,
			terms_data: bg_bibrefs_data3,
			dates: localStorage["extDate"]?true:false,
			collision: localStorage["extWestEstCol"]?true:false,
			nodot: localStorage["extNoDot"]?true:false,
			west_est: localStorage["extWestEstTrigger"],
			popup: localStorage["extPopupVerses"],
			interpretation: localStorage["extInterpretation"]
		});

	} else if (message.method == 'extActivaionTrigger') {
		localStorage["extActive"] = localStorage["extActive"]?'':'1';// Изменить значение на противоположное
		bg_bibrefs_setIcon ();
		// Обновить страницу
		chrome.browserAction.setBadgeText({text:""});
		chrome.tabs.getCurrent(function(tab){
			chrome.tabs.reload();
		});
	} else if (message.method == 'extWestEstTrigger') {
		localStorage["extWestEstCol"] = localStorage["extWestEstCol"]?'':'1';// Изменить значение на противоположное
		// Обновить страницу
		chrome.browserAction.setBadgeText({text:""});
		chrome.tabs.getCurrent(function(tab){
			chrome.tabs.reload();
		});
	} else if (message.method == 'extReferencesCount') {
		chrome.browserAction.setBadgeText({text:message.count});
	} else if (message.method == 'getBibleVerses') {
		var book = message.reference.split('.')[0];
		var chapter = message.reference.split('.')[1];
		// БД терминов
		var bg_bibrefs_text="";
		var xhr4 = new XMLHttpRequest();
		xhr4.open("GET", "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/bible/ru/mf", true);
		xhr4.onreadystatechange = function() {
		  if (xhr4.readyState == 4) {
			bg_bibrefs_text =  JSON.parse(xhr4.responseText);
			sendResponse({
			verses: "<span style='display: block; width: 100%;'>"+bg_bibrefs_text+"</span>"
		});
	  }
		}
		xhr4.send();	
	} else if (message.method == 'extPlayTrack') {
		sound.src = localStorage["trackUrl"];
		localStorage["extPlayer"] = localStorage["trackUrl"];
		sound.play();
		chrome.runtime.sendMessage({method: "extLoadStart"});
		bg_bibrefs_setIcon ();
	} else if (message.method == 'extPauseTrack') {
		sound.pause();
		sound.src = "";
		localStorage["extPlayer"] = "";
		chrome.runtime.sendMessage({method: "extCanPlay"});
		bg_bibrefs_setIcon ();
	} else {
		sendResponse({});
	}
});
chrome.tabs.onActivated.addListener(function (info) {
	chrome.browserAction.setBadgeText({text:""});

	chrome.tabs.sendMessage(info.tabId, {method: "getReferencesCount"});
});

// Очистка localStorage
function clearLocalStore() {
	localStorage.removeItem("languages");
	localStorage.removeItem("extCalendar");
	localStorage.removeItem("extTroparion");
	localStorage.removeItem("c_font");

	localStorage.removeItem("extActive");
	localStorage.removeItem("extDate");
	localStorage.removeItem("extReplaceHref");
	localStorage.removeItem("extWestEstCol");
	localStorage.removeItem("extWestEstTrigger");
	localStorage.removeItem("extNoDot");

	localStorage.removeItem("extAuthorLink");
	localStorage.removeItem("extTermLink");

	localStorage.removeItem("colorOfHighlight");
	localStorage.removeItem("bgcolorOfHighlight");
	localStorage.removeItem("colorOfHighlightOn");
	localStorage.removeItem("bgcolorOfHighlightOn");

	localStorage.removeItem("extHotKey");
	
	localStorage.removeItem("extPopupVerses");
}
/* ------------------------------------------------
Функции для создания контекстного меню
------------------------------------------------ */
// Сепаратор контекстного меню
function contextMenuSeparator () {
	chrome.contextMenus.create({
		"contexts": ["all"],
		"type": "separator"
	});
}

// Поиск контекста в пользовательском поиске
function searchSelection(title) 	{
	chrome.contextMenus.create({
		"title": title + ' "%s"', 
		"contexts":['selection'], 
		"onclick": function (info, tab) {
//			var targetURL ="http://www.google.com/cse?cx=007730902333140962016:ylugm969rrw&q="+info.selectionText;  
			var targetURL ="https://azbyka.ru/sear/?searchid=1639178&text="+info.selectionText;  
			chrome.tabs.create({url: targetURL});
		}
	}); 
}
/*******************************************************************************
   Получить язык Библии
   
*******************************************************************************/  
function bg_bibrefs_getLanguage() {
	// Язык Библии
	var lang = localStorage["langBible"];
	var langs = ['cu', 'ru', 'be', 'uk', 'sr', 'en'];
	if (lang == undefined || lang == 'system') {
		lang = chrome.i18n.getMessage("@@ui_locale");
		if (langs.indexOf( lang ) == -1 ) lang = 'ru';
	}
	return lang;
}

/*******************************************************************************
   Изменить иконку приложения
   
*******************************************************************************/  
function bg_bibrefs_setIcon () {
	if (localStorage["extPlayer"]) {	// Включено радио
		var iconName = (localStorage["extActive"]) ? 'av16x16on_r.png' : 'av16x16off_r.png';
	} else {
		var iconName = (localStorage["extActive"]) ? 'av16x16on.png' : 'av16x16off.png';
	}
	chrome.browserAction.setIcon({path:"img/"+iconName}); //Устанавливает новую иконку
}