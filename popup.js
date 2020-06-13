// Соединение с сервером статистики stat.azbyka.ru
var request = 'wss://stat.azbyka.ru/realtime-view/project/extension/module/popup';

var popupSocket = new ReconnectingWebSocket(request);
popupSocket.onerror = function(error) {
	console.log("Ошибка " + error.message);
};
popupSocket.onclose = function(event) {
	if (event.wasClean) {
		console.log('Соединение закрыто чисто: '+request);
	} else {
		console.log('Обрыв соединения: '+request);
	}
	console.log('Код: ' + event.code + ' причина: ' + event.reason);
};

var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// Правила питания
var foodKind = [
	"Поста нет",								// 0
	"Из трапезы исключается мясо",				// 1
	"Пост. Разрешается рыба",					// 2
	"Пост. Разрешается рыбная икра",			// 3
	"Пост. Пища с растительным маслом",				// 4
	"Пост. В монастырях: горячая пища без масла",	// 5
	"Пост. В монастырях: сухоядение",				// 6
	"Пост. В монастырях: воздержание от пищи"		// 7
];
var mineaExtra = [
{type:0, m:9, d:11, link:1},
{type:0, m:9, d:26, link:2},
{type:0, m:9, d:27, link:3},
{type:0, m:9, d:28, link:4},
{type:0, m:10, d:1, link:5},
{type:0, m:10, d:2, link:6},
{type:0, m:10, d:10, link:7},
{type:0, m:10, d:11, link:8},
{type:0, m:10, d:15, link:9},
{type:0, m:11, d:15, link:10},
{type:0, m:11, d:18, link:11},
{type:0, m:11, d:19, link:12},
{type:0, m:11, d:24, link:13},
{type:0, m:11, d:27, link:14},
{type:0, m:11, d:28, link:15},
{type:0, m:12, d:2, link:16},
{type:0, m:12, d:18, link:17},
{type:0, m:12, d:20, link:18},
{type:0, m:12, d:30, link:19},
{type:0, m:1, d:10, link:20},
{type:0, m:1, d:24, link:21},
{type:0, m:1, d:25, link:22},
{type:40, m:1, d:25, link:23},
{type:0, m:2, d:3, link:24},
{type:0, m:2, d:17, link:25},
{type:0, m:4, d:19, link:26},
{type:0, m:4, d:30, link:27},
{type:0, m:5, d:3, link:28},
{type:0, m:5, d:12, link:29},
{type:0, m:5, d:19, link:30},
{type:0, m:6, d:19, link:31},
{type:0, m:7, d:4, link:32},
{type:0, m:7, d:4, link:33},
{type:0, m:7, d:5, link:34},
{type:0, m:7, d:31, link:35},
{type:0, m:0, d:77, link:36}
];
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


document.addEventListener('DOMContentLoaded', function() {

   // Локализация
	document.title = chrome.i18n.getMessage("extName");
	var extSettings = document.getElementById("extSettings");
	extSettings.setAttribute('title', chrome.i18n.getMessage("extOptions"));
	document.getElementById("extActiveTitle").innerText = chrome.i18n.getMessage("extActiveTitle");
	document.getElementById("extABCindex").innerText = chrome.i18n.getMessage("extABCindex");
	document.getElementById("yaform__search_text").setAttribute('placeholder', chrome.i18n.getMessage("extSearchPlaceholder"));
	document.getElementById("extBible").setAttribute('title', chrome.i18n.getMessage("extBibleTitle"));
	document.getElementById("extLibrаry").setAttribute('title', chrome.i18n.getMessage("extLibraryTitle"));
	document.getElementById("extLibrаry").setAttribute('data-url', chrome.i18n.getMessage("extLibraryLink"));
	document.getElementById("extPlayerHelp").setAttribute('title', chrome.i18n.getMessage("extPlayerHelp"));

	// Заменять ссылки
	var extActive = document.getElementById("extActive");
	extActive.checked = (localStorage["extActive"]) ? 'checked' : '';
	var iconName = (localStorage["extActive"]) ? 'av16x16on.png' : 'av16x16off.png';
	chrome.browserAction.setIcon({path:"img/"+iconName}); //Устанавливает новую иконку

	// Древо сайта, Каталог или Календарь
	var extSiteTree = document.getElementById("extSiteTree");
	buttonTreeOrCalendar(false);
	function buttonTreeOrCalendar(click=true){
		if (click) {
			switch (localStorage["extCalendar"]) {
				case '1':
				localStorage["extCalendar"] = '2';
				break;
				case '2':
				localStorage["extCalendar"] = '';
				break;
				default:
				localStorage["extCalendar"] = '1';
				break;
			}
		}
		switch (localStorage["extCalendar"]) {
			case '1':
			extSiteTree.innerText = chrome.i18n.getMessage("extCatalogue");
			orthodox_calendar (today);
			break;
			case '2':
			extSiteTree.innerText = chrome.i18n.getMessage("extSiteTree");
			siteCatalogue();
			break;
			default:
			extSiteTree.innerText = chrome.i18n.getMessage("extCalendar");
			siteTree ();
			break;
		}
	}
	extSiteTree.addEventListener('click', buttonTreeOrCalendar, false);
	
	
	// Сохранить параметры
	function saveOptions(){
		localStorage["extActive"] = extActive.checked?'1':'';
		iconName = (localStorage["extActive"]) ? 'av16x16on.png' : 'av16x16off.png';
		chrome.browserAction.setIcon({path:"img/"+iconName}); //Устанавливает новую иконку
		// Обновить страницу
		chrome.tabs.getCurrent(function(tab){
			chrome.tabs.reload();
		})
	}
	extActive.addEventListener('click', saveOptions, false);
	document.addEventListener('keyup', function(e) {
		if ((e.altKey && e.ctrlKey && e.keyCode == localStorage["extHotKey"].charCodeAt(0))) {
			extActive.checked = (extActive.checked) ? '' : 'checked';
			saveOptions();
		}
		return false;
	}, false);

	// Ссылка на страницу Параметров
	function gotoSettingsPage(info, tab){
		chrome.runtime.openOptionsPage();
//		chrome.tabs.create({"url" : "options.html"});
	}
	extSettings.addEventListener('click', gotoSettingsPage, false);
	
	document.getElementById("yandexform").addEventListener('click', function() {
		return {type: 3, logo: 'rb', arrow: false, webopt: false, websearch: false, bg: '#F1E9D6', fg: '#66452E', fontsize: 14, suggest: false, site_suggest: true};
	}, false);
	
	orthodox_radio ();
});

/*********************************************************
	Создаем Плеер 
	
**********************************************************/
var timerId = null;
function orthodox_radio () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://azbyka.ru/audio/audio1/radio/pravoslavnoe_radio.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (!xhr.responseText) return;
			// innerText does not let the attacker inject HTML elements.
			var data =  JSON.parse(xhr.responseText);
			if (!data.length) return;

			var opt = '';
			var trackUrl = document.getElementById("radioStations");
			for (var i = 0; i < data.length; i++){
				opt += '<option id="radio'+i+'" value="'+data[i].url+'">'+data[i].title+'</option>\n';
			}
//			trackUrl.innerHTML = opt;
			setContent(trackUrl, opt);
			document.getElementById("playerPanel").style.display = 'block';
			
			for (var i = 0; i < trackUrl.children.length; i++){
				var child = trackUrl.children[i];
				if (child.value == localStorage["trackUrl"]){
					child.selected = "true";
					break;
				}
			}
			if (i == trackUrl.children.length) {
				child = trackUrl.children[0];
				localStorage["trackUrl"] = child.value;
				child.selected = "true";
			}
			setTrackUrl (localStorage["trackUrl"]);
			
			var playButton = document.getElementById("playButton");
			function setPlayButton () {
				if (localStorage["extPlayer"]) {
					playButton.src = "img/pause.svg";
					playButton.setAttribute('title', chrome.i18n.getMessage("PauseTitle"));
				} else {
					document.getElementById("trackName").innerText="";
					playButton.src = "img/play.svg";
					playButton.setAttribute('title', chrome.i18n.getMessage("PlayTitle"));
				}
				bg_bibrefs_setIcon ();
			}
			setPlayButton ();
			
			// Сохранить и Отправить url трека на плеер
			function clickTrackUrl(){
				if (localStorage["extPlayer"]) {
					localStorage["extPlayer"] = "";
					chrome.runtime.sendMessage({method: "extPauseTrack"});
				} else {
					localStorage["trackUrl"] = trackUrl.children[trackUrl.selectedIndex].value;
					localStorage["extPlayer"] = localStorage["trackUrl"];
					chrome.runtime.sendMessage({method: "extPlayTrack"});
				}
				setPlayButton ();
			}
			
			playButton.addEventListener('click', clickTrackUrl, false);
			chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
				if (message.method == 'extPlayerTrigger') {
					if (localStorage["trackUrl"] == undefined || !localStorage["trackUrl"])
						localStorage["trackUrl"] = trackUrl.children[trackUrl.selectedIndex].value;
					setPlayButton ();
				} else if (message.method == 'extLoadStart') {
					document.getElementById('wait_pls').style.display = 'block';
				} else if (message.method == 'extCanPlay') {
					document.getElementById('wait_pls').style.display = 'none';
				}
			});
			trackUrl.addEventListener('change', function() {
				localStorage["trackUrl"] = trackUrl.children[trackUrl.selectedIndex].value;
				if (localStorage["extPlayer"] != localStorage["trackUrl"]) {
					chrome.runtime.sendMessage({method: "extPauseTrack"});
					localStorage["extPlayer"] = localStorage["trackUrl"];
					chrome.runtime.sendMessage({method: "extPlayTrack"});
					playButton.src = "img/pause.svg";
				}
			}, false);
		}
	}
	xhr.send();
}
function setTrackUrl (value) {
	if (timerId) clearInterval(timerId);
	localStorage["trackUrl"] = value;
	timerId = setInterval(function() {
	  azbyka_radio (localStorage["trackUrl"]);
	}, 2000);
}

function azbyka_radio (track) {
	var t = getLocation(track);
	if (t.hostname != 'radio.azbyka.ru') {
		trackName.innerText = "";
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://radio.azbyka.ru/azbyka.xsl", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.responseText) {
				var data =  JSON.parse(xhr.responseText);
				var trackName = document.getElementById("trackName");
				if (data[t.pathname]) {
//					trackName.innerHTML = data[t.pathname].title;
					setContent(trackName, data[t.pathname].title);
					return;
				}
			}
			trackName.innerText = "";
		}
	}
	xhr.send();
}
function getLocation(href) {
   var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
   return match && {
         protocol: match[1],
         host: match[2],
         hostname: match[3],
         port: match[4],
         pathname: match[5],
         search: match[6],
         hash: match[7]
      }
}

/******************************************************************
	Создает православный календарь
	
*******************************************************************/
function orthodox_calendar (today) {
	var y = today.getFullYear();
	var m = leadZero(today.getMonth()+1);
	var d = leadZero(today.getDate());
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://azbyka.ru/days/api/day/"+y+"-"+m+"-"+d+".json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// innerText does not let the attacker inject HTML elements.
			var data =  JSON.parse(xhr.responseText);
			if (!data) var day = xhr.responseText;
			else var day = createDay(today, data);
//			document.getElementById("extCalendar").innerHTML = day;
			setContent(document.getElementById("extCalendar"), day);
			
			if ((/chrome/i.test(navigator.userAgent)) || (/edge/i.test(navigator.userAgent))) {
				var winHeight = document.getElementById("popup").scrollHeight;
				document.body.style.height = winHeight+"px";	
				if (/edge/i.test(navigator.userAgent)) winHeight = document.body.scrollHeight;
				document.documentElement.style.height = winHeight+"px";	
			} 
//			else document.getElementById("calData").style.height = "280px";
			document.getElementById("calPrev").addEventListener('click', calPrevDay, false);
			document.getElementById("calNext").addEventListener('click', calNextDay, false);
			document.getElementById("calSetDay").addEventListener('change', calSetDay, false);
		}
		hlink ();
//		bible_verses ();
	}
	xhr.send();
}
	
/******************************************************************
	Формирует html код о дне
	
*******************************************************************/
function createDay(today, data) {
	var month = new Array("Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь");
//	var mantle = new Array("janvar","fevral","mart","aprel","maj","","","","sentjabr","oktjabr","","");
	var mantle = new Array("janvar","fevral","mart","aprel","maj","iyun","iyul","avgust","sentjabr","oktjabr","nojabr","dekabr");
	var day_image = "", day_image_level = 9999;
	var day_data = "";
	var great = 9999;
	var y = today.getFullYear();
	var m = leadZero(today.getMonth()+1);
	var d = leadZero(today.getDate());
	var od = getOldStyle(today);
	
	// Праздники
	var holidays = "";
	for (i=0; i<data.holidays.length; i++) {
		var holiday = "";
		var level = 999;
		if (data.holidays[i].full_title) holiday += strip_tags(data.holidays[i].full_title);
		else if (data.holidays[i].title) holiday += strip_tags(data.holidays[i].title);
		if (holiday) {
			var title = holiday;
			if (data.holidays[i].ideograph){
				holiday ='<span class="calTipicon'+data.holidays[i].ideograph+'"><img src="img/S'+
						data.holidays[i].ideograph+'.gif" />'+holiday+'</span>';
				level = data.holidays[i].ideograph;
				if (great > level) great = level;
			} else if (data.holidays[i].priority == 1) {
				holiday ='<span class="calTipicon0">'+holiday+'</span>';
			} else if (data.holidays[i].priority == 2){
				holiday ='<span class="calDayEvent">'+holiday+'</span>';
			}
			if (data.holidays[i].uri) {
				holiday = '<span class="hlink" data-url="https://azbyka.ru/days/prazdnik-'+data.holidays[i].uri+
						'" title="'+title+'">'+holiday+'</span>';
			}
			holidays += holiday+". ";
			
			if (day_image_level > level && data.holidays[i].imgs && data.holidays[i].imgs.length>0) {
				day_image = 'https://azbyka.ru/days/assets/img/holidays/'+
							data.holidays[i].imgs[0].holiday_id+'/'+data.holidays[i].imgs[0].image;
				day_image_caption = title;
				day_image_level = level;
			}
		}
	}
	
	// Иконы Богородицы
	var ikons = "";
	for (i=0; i<data.ikons.length; i++) {
		var ikon = "";
		var level = 999;
		if (data.ikons[i].clean_title) ikon += strip_tags(data.ikons[i].clean_title);
		else if (data.ikons[i].title) ikon += strip_tags(data.ikons[i].title);
		if (ikon) {
			var title = ikon;
			if (data.ikons[i].ideograph){
				ikon ='<span class="calTipicon'+data.ikons[i].ideograph+'"><img src="img/S'+
						data.ikons[i].ideograph+'.gif" />'+ikon+'</span>';
				level = data.ikons[i].ideograph;
				if (great > level) great = level;
			}
			if (data.ikons[i].uri) {
				ikon = '<span class="hlink" data-url="https://azbyka.ru/days/ikona-'+data.ikons[i].uri+
						'" title="'+title+'">'+ikon+'</span>';
			}
			ikons += ikon+". ";
			
			if (day_image_level > level && data.ikons[i].imgs && data.ikons[i].imgs.length>0) {
				day_image = 'https://azbyka.ru/days/assets/img/icons/'+
							data.ikons[i].imgs[0].icon_of_our_lady_id+'/'+data.ikons[i].imgs[0].img;
				day_image_caption = title;
				day_image_level = level;
			}
		}
	}
	
	// Святые
	var saints = "";
	for (i=0; i<data.saints.length; i++) {
		var saint = "";
		var title = "";
		var level = 999;
		if (data.saints[i].title_genitive) saint += strip_tags(data.saints[i].title_genitive);
		else if (data.saints[i].title) saint += strip_tags(data.saints[i].title);
		if (data.saints[i].title) title += strip_tags(data.saints[i].title);
		else if (data.saints[i].title_genitive) title += strip_tags(data.saints[i].title_genitive);
		if (saint) {
			if (data.saints[i].type_of_sanctity) {
				saint = strip_tags(data.saints[i].type_of_sanctity)+' '+saint;
				title = strip_tags(data.saints[i].type_of_sanctity)+' '+title;
			}
			if (data.saints[i].suffix) saint += strip_tags(data.saints[i].suffix);
			if (data.saints[i].ideograph){
				saint ='<span class="calTipicon'+data.saints[i].ideograph+'"><img src="img/S'+
						data.saints[i].ideograph+'.gif" />'+saint+'</span>';
				level = data.saints[i].ideograph;
				if (great > level) great = level;
			}
			if (data.saints[i].uri) {
				saint = '<span class="hlink" data-url="https://azbyka.ru/days/sv-'+data.saints[i].uri+
						'" title="'+title+'">'+saint+'</span>';
			}
			saints += saint+". ";
			
			if (day_image_level > level && data.saints[i].imgs && data.saints[i].imgs.length>0) {
				day_image = 'https://azbyka.ru/days/assets/img/saints/'+
							data.saints[i].imgs[0].saint_id+'/'+data.saints[i].imgs[0].image;
				day_image_caption = title;
				day_image_level = level;
			}
		}
	}
	
	// Текст
	var voice = getVoice(today);
	var text = "";
	for (i=0; i<data.texts.length; i++) {
		if (data.texts[i].text && data.texts[i].type==1) text += data.texts[i].text;
	}
	text = text.replace(/(<a[^>])(.*?)(<\/a>)/g, function(match, p1, p2, p3, offset, string){
		return p1+p2.replace(/<\/?[^>]+>/g,'')+p3;
	});
	text = text.replace(new RegExp('href', 'g'), 'data-url');
	text = text.replace(/data-url[^\?]*\?([^"]*)/g, function(match, p1, offset, string){
		var book = p1.split('.')[0];
		var chapter = p1.split('.')[1];
		// Полное наименование книги
		var title="";
		var filename="";
		var interpret="";
		for (i=0; i<bg_bibrefs_bookTitle.length; i++) {
			var the_book = bg_bibrefs_bookTitle[i];
			if (book == the_book['sign']){
				title = the_book['title'];
				filename = the_book['file'];
				interpret = the_book['interpret'];
				break;
			}
		}
		return 'title="'+title+' гл.'+chapter+'" '+'data-ref="'+p1+'" '+match;
	});
	text += '<hr><span class="hlink" data-url="https://azbyka.ru/bogosluzhebnye-ukazaniya?date='+y+'-'+m+'-'+d+'">Богослужебные указания ►</span>';
	text += ' <span class="hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/tipikon/">Типикон ►</span>';
	text += ' <span class="hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/chasoslov/">Часослов ►</span>';
	text += '<br><span class="calVoice hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/'+worships (today, voice)+'Глас '+voice+' ►</span>';
	// Минея
	if (mantle[od.month-1])
		text += ' <span class="hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/mineja-'+mantle[od.month-1]+'/'+od.date+'">Минея. '+month[od.month-1]+', '+od.date+' (ст.ст.) ►</span>';

	// Минея дополнительная
	for (i=0; i<mineaExtra.length; i++) {
		var minea = mineaExtra[i];
		var algorithm = parseInt(minea['type']/10);
		var wday = minea['type']%10;
		wday = wday?wday:7;
		var ym = od.year;
		var mm = minea['m'];
		var dm = minea['d'];
		if (mm == 0) {
			ed = getEaster(ym, dm);
			mm = ed.month;
			dm = ed.date;
		}
		switch (algorithm) {
		case 4:
			var nd = setNewStyle(ym, mm, dm-3);
			var wd = nd.getDay();
			wd = wd?wd:7;
			nd = setNewStyle(ym, mm, dm-3+wday-wd);
			break;
		default:
			nd = setNewStyle(ym, mm, dm);
			break;
		}
		ym = nd.getFullYear();
		mm = leadZero(nd.getMonth()+1);
		dm = leadZero(nd.getDate());
		if (y == ym && m == mm && d == dm) {
			text += ' <span class="hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/mineja-dopolnitelnaja/'+minea['link']+'">Минея доп. '+month[od.month-1]+', '+od.date+' (ст.ст.) ►</span>';
		}
	}

/*** Формируем данные дня ***/	
	var html = '<table>';
	// Дата
	var w = today.getDay();
	if (/edge/i.test(navigator.userAgent) )
		html += '<tr><td colspan=2>'+
				'<table><tr><td id="calPrev" class="calPrev" title="Предыдущий день"></td>'+
				'<td style="text-align:center;"><h4> <input id="calSetDay" type="date" value="'+y+'-'+m+'-'+d+'" title="Выбрать дату">'+
				' <span class="hlink" data-url="https://azbyka.ru/days/'+y+'-'+m+'-'+d+'" style="color: '+
				((w&&(great>2))?'#333333':'#ff0000')+';" title="Православный календарь">'+text_date(today)+'</span></h4></td>'+
				'<td id="calNext" class="calNext" title="Следующий день"></td></tr></table>'+
				'</td></tr>';
	else
		html += '<tr><td colspan=2>'+
				'<table width="100%"><tr><td id="calPrev" class="calPrev" title="Предыдущий день"></td>'+
				'<td style="text-align:center;"><h4><span class="hlink" data-url="https://azbyka.ru/days/'+y+'-'+m+'-'+d+'" style="color: '+
				((w&&(great>2))?'#333333':'#ff0000')+';" title="Православный календарь">'+text_date(today)+'</span> <input id="calSetDay" type="date" value="'+y+'-'+m+'-'+d+'" title="Выбрать дату"></h4></td>'+
				'<td id="calNext" class="calNext" title="Следующий день"></td></tr></table>'+
				'</td></tr>';
	
	// Пост 
	if (data.fasting.weeks) week = strip_tags(data.fasting.weeks);
	else week = "";
	if (data.fasting.round_week) round_week = strip_tags(data.fasting.round_week)+'. ';
	else round_week = "";
	html += '<tr><td style="text-align:center;" colspan=2><span class="calWeek">'+round_week+week+'</span></td></tr>';
	var fasting = foodKind[setFoodKind (today)];
//	if (data.fasting.voice) voice = 'Глас '+data.fasting.voice; 
//	else voice = "";
	
//	html += '<tr><td style="text-align:left;"width="50%" ><span class="calVoice hlink" data-url="https://azbyka.ru/otechnik/Pravoslavnoe_Bogosluzhenie/'+worships (today, voice)+'Глас '+voice+'</span></td>';
	html += '<tr><td style="text-align:left;"width="20%" ><span class="calVoice hlink" data-url="https://azbyka.ru/glas" title="Осмогласие">'+'Глас '+voice+'</span></td>';
	html += '<td style="text-align:right;"><span class="calFasting hlink" data-url="https://azbyka.ru/days/p-kalendar-postov-i-trapez" title="Календарь постов и трапез">'+fasting+'</span></td></tr>';
	html += '</table>';
	
	html += '<hr />';
	
	//	Икона дня
	if (day_image) day_image = '<img class="calDayImage" src="'+day_image+'" title="'+day_image_caption+
								'"><div class="calImageCaption">'+day_image_caption+'</div>';
	
	if (holidays) day_data += '<div class="calHolidays">'+holidays+'</div>';
	if (saints) day_data += '<div class="calSaints">'+saints+'</div>';
	if (ikons) day_data += '<div class="calIkons"><i>Икон Божией Матери:</i> '+ikons+'</div>';
	if (text) day_data += '<div class="calTexts"><hr />'+text+'</div>';
	
	html += '<div id="calData">';
	html += '<table width="100%"><tr><td style="vertical-align: top;"><div id="calIconImage">'+day_image+'</div></td>'+
			'<td>'+day_data+'</td></tr></table>';
	if (localStorage["extTroparion"]) html += troparion();
	html += '</div>';
//	html += infoline();
		
	return html;
}
function infoline() {
	return '<div><div class="lc">&nbsp;</div><div class="info hlink" data-url="https://azbyka.ru/extension#poll">Приглашаем Вас принять участие в опросе</div><div class="rc">&nbsp;</div></div>';
}

/******************************************************************
	Возвращает true если високосный год по новому стилю и 
	false - если нет. 
	
*******************************************************************/
function isLeap(year) {
	return (((year % 4)==0) && ((year % 100)!=0) || ((year % 400)==0)) ? true : false; 
}
/******************************************************************
	Возвращает смещение в днях между старым и новым стилями
	
*******************************************************************/
function shiftDays(year) {
	return (year-year%100)/100 - (year-year%400)/400 - 2;
}
/******************************************************************
	Возвращает дату по старому стилю в виде асоциированного массива

*******************************************************************/
function getOldStyle(nd){
	var num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//	num_days[1] = isLeap(year)?29:28;	// В високосном году в феврале 29 дней
	num_days[1] = ((y % 4)==0)?29:28;	// В високосном году в феврале 29 дней (по старому стилю)
	
	var od = new Object();
	var y = nd.getFullYear();
	var m = nd.getMonth();
	var d = nd.getDate();
	var w = nd.getDay();
	
	var m1 = new Date(y, 2, 1);			// 1 марта по новому стилю
	
	if (nd.getTime() < m1.getTime())	// Если дата раньше 1 марта по новому стилю, 
		var dd = shiftDays(y-1); 		// разница в днях между стилями в предыдущем году
	else								// иначе
		var dd = shiftDays(y); 			// разница в днях между стилями в текущем году

	// Вычитаем из даты разницу дней
	while (dd > 0) {
		if (d > dd) {d = d - dd; break;} 
		else {
			dd = dd - d;
			if (m > 0) {m--;} 
			else { y--; m=11;}
			d = num_days[m];
		}
	}
	od.date = d;
	od.month = m+1;
	od.year = y;
	od.day = w;

	return od;
}

/*********************************************************
	Возвращает дату Пасхи по старому стилю

**********************************************************/
function getEaster(Y, dd=0){
	var a, b, D, M;
	var ed = new Object();
	// Пасха по старому стилю не может быть раньше 1 марта,
	// поэтому все расчеты только для текущего года
	a = ((19*(Y %19) + 15) % 30);
	b = ((2*(Y %4) + 4*(Y %7) + 6*a + 6) % 7);
	if (a+b>9) {
		D=a+b-9; M=3;
	} else {
		D=22+a+b; M=2;
	}
	if (dd) {
		var td = new Date(Y, M, D+dd);
		Y = td.getFullYear();
		M = td.getMonth();
		D = td.getDate();
	}
	ed.date = D;
	ed.month = M+1;
	ed.year = Y;
	ed.day = 0;
	return ed;
}

/*********************************************************
	Преобразует даты старого стиля в дату нового стилями

**********************************************************/
function setNewStyle(y, m, d) {
	// Если дата до 1 марта по старому стилю, то разницу дней высчитываем по предыдущему году
	if ((leadZero(m)+leadZero(d)) < '0301') YY = y - 1;
	else YY = y;
	// Разница в днях между старым и новым стилями
	dd = shiftDays(YY); 
	nd = new Date (y, m-1, d+dd);
	return nd;	
}

/*********************************************************
	Преобразует дату в текст в формате 
	Д мммм ГГГГ г. (Д мммм ст.ст.)

**********************************************************/
function text_date(nd) {
    var mnr = new Array(" января "," февраля "," марта "," апреля "," мая "," июня "," июля "," августа "," сентября "," октября "," ноября "," декабря ");
    var mn = new Array(" янв. "," фев. "," мар. "," апр. "," мая "," июня "," июля "," авг. "," сен. "," окт. "," ноя. "," дек. ");
	var wd = new Array("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
	var y, m, d, t;
	y = nd.getFullYear();
	m = nd.getMonth();
	d = nd.getDate();
	w = nd.getDay();
	t = d + mnr[m];
	
	var od = getOldStyle(nd);
	y = od.year;
	m = od.month-1;
	d = od.date;
	t += ' <span class="oldstyle">(' + d + mnr[m] + 'ст.ст.),</span> ';
	t += wd[w];
	return t;
	
}	
// Добавляет ведущий ноль
function leadZero(n) {
	return (n>9)?(''+n):('0'+n);
}
// Strip HTML and PHP tags from a string
function strip_tags( str ){	
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	return str.replace(/<\/?[^>]+>/gi, '');
}
function calPrevDay () {
	today.setDate(today.getDate() - 1);
	orthodox_calendar (today);
}
function calNextDay () {
	today.setDate(today.getDate() + 1);
	orthodox_calendar (today);
}
function calSetDay () {
	var d = document.getElementById("calSetDay").value.split('-'); 
	today = new Date(parseInt(d[0]),parseInt(d[1])-1,parseInt(d[2]));
	orthodox_calendar (today);
}

// Пища в течение года
function setFoodKind (nd) {
	var od = getOldStyle(nd);
	var odd = setYMD(od);
	if (odd < od.year+'-01-05') {							// Продолжение Святок
		return 0;
	} else if (odd == od.year+'-01-05') {					// Навечерие Богоявления
		return 6;
	} else if (odd == od.year+'-01-06') {					// Богоявление
		return 0;
	} else if (odd < setYMD (getEaster(od.year, -69))) {	// Зимний мясоед
		if (od.day == 3 || od.day == 5) return 2;
		else return 0;
	} else if (odd < setYMD (getEaster(od.year, -62))) {	// Мытаря и фарисея
		return 0;
	} else if (odd < setYMD (getEaster(od.year, -55))) {	// Зимний мясоед (Блудного сына)
		if (od.day == 3 || od.day == 5) return 2;
		else return 0;
	} else if (odd < setYMD (getEaster(od.year, -48))) {	// Сырная седмицы
		return 1;
	} else if (odd == setYMD (getEaster(od.year, -48))) {	// Первый день Великого поста
		return 7;
	} else if (odd < setYMD (getEaster(od.year, -8))) {		// Великий пост
		if (odd == od.year+'-03-21') return 2;				// Благовещение
		if (od.day == 1 || od.day == 3 || od.day == 5) return 6;
		else if (od.day == 2 || od.day == 4) return 5;
		else return 4;
	} else if (odd == setYMD (getEaster(od.year, -8))) {	// Лазарева Суббота
		if (odd == od.year+'-03-21') return 2;
		return 3;
	} else if (odd == setYMD (getEaster(od.year, -7))) {	// Вход Господень в Иерусалим
		return 2;
	} else if (odd < setYMD (getEaster(od.year, 0))) {		// Страстная седмица
		if (od.day == 5) return 7;
		else if (od.day == 6) return 5;
		else return 6;
	} else if (odd < setYMD (getEaster(od.year, 6))) {		// Светлая седмицы
		return 0;
	} else if (odd < setYMD (getEaster(od.year, 49))) {		// Весенний мясоед
		if (od.day == 3 || od.day == 5) return 2;
		else return 0;
	} else if (odd < setYMD (getEaster(od.year, 56))) {		// Троицкая седмицы
		return 0;
	} else if (odd < od.year+'-06-29') {					// Апостольский пост
		if (odd == od.year+'-06-24') return 2;				// Рождество Иоанна Предтечи
		if (od.day == 1) return 5;
		else if (od.day == 3 || od.day == 5) return 6;
		else return 2;
	} else if (odd == od.year+'-06-29') {					// Петра и Павла
		if (od.day == 3 || od.day == 5) return 2;
		else return 0;
	} else if (odd <  od.year+'-08-01') {					// Летний мясоед
		if (od.day == 3 || od.day == 5) return 4;
		else return 0;
	} else if (odd < od.year+'-08-15') {					// Успенский пост
		if (odd == od.year+'-08-06') return 2;				// Преображение
		if (od.day == 1 || od.day == 3 || od.day == 5) return 6;
		else if (od.day == 2 || od.day == 4) return 5;
		else return 4;
	} else if (odd == od.year+'-08-15') {					// Успение
		if (od.day == 3 || od.day == 5) return 2;
		else return 0;
	} else if (odd <  od.year+'-11-15') {					// Осенний мясоед
		if (odd == od.year+'-08-29') return 4;				// Усекновение головы Иоанна Предтечи
		if (odd == od.year+'-09-14') return 4;				// Воздвижение
		if (od.day == 3 || od.day == 5){
			if (odd == od.year+'-09-08') return 2;			// Рождество Богородицы
			else if (odd == od.year+'-10-01') return 2;		// Покров
			else return 4;
		} 
		else return 0;
	} else if (odd < od.year+'-12-06') {					// Рождественский пост
		if (odd == od.year+'-11-21') return 2;				// Введение
		if (od.day == 1) return 5;
		else if (od.day == 3 || od.day == 5) return 6;
		else return 2;
	} else if (odd == od.year+'-12-06') {					// Св. Николая 
		return 2;
	} else if (odd < od.year+'-12-20') {					// Рождественский пост (продолжение)
		if (od.day == 1) return 5;
		else if (od.day == 3 || od.day == 5) return 6;
		else if (od.day == 2 || od.day == 4) return 4;
		else return 2;
	} else if (odd < od.year+'-12-24') {					// Рождественский пост (окончание)
		if (od.day == 1 || od.day == 3 || od.day == 5) return 6;
		else if (od.day == 2 || od.day == 4) return 5;
		else return 4;
	} else if (odd == od.year+'-12-24') {					// Рождественский сочельник
		return 6;
	} else return 0;										// Святки
}
function setYMD (d) {
	return d.year+'-'+leadZero(d.month)+'-'+leadZero(d.date);
}

// Службы в течение года

function worships (nd, voice) {
	var od = getOldStyle(nd);
	var w = od.day;
	var odd = setYMD(od);
	
// Постная триодь
	if (odd == setYMD (getEaster(od.year, -70))) {			// Неделя о мытаре и фарисее
		return 'sluzhby-predugotovitelnyh-sedmits/#0_1">Постная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, -63))) {	// Неделя о блудном сыне
		return 'sluzhby-predugotovitelnyh-sedmits/#0_5">Постная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, -57))) {	// В субботу мясопустную
		return 'sluzhby-predugotovitelnyh-sedmits/#0_9">Постная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, -56))) {	// Неделя мясопустная
		return 'sluzhby-predugotovitelnyh-sedmits/#0_13">Постная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, -50))) {	// В субботу сырную
		return 'sluzhby-predugotovitelnyh-sedmits/#0_17">Постная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, -49))) {	// В неделю сыропустную
		return 'sluzhby-predugotovitelnyh-sedmits/#0_21">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -49))) {	// Предуготовительные седмицы
		return 'oktoih/'+((voice-1)*7+w+1)+'">Октоих. ';
	} else if (odd < setYMD (getEaster(od.year, -41))) {	// Великий пост 1-я седмица
		return 'sluzhby-pervoj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -34))) {	// Великий пост 2-я седмица
		return 'sluzhby-vtoroj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -27))) {	// Великий пост 3-я седмица
		return 'sluzhby-tretej-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -20))) {	// Великий пост 4-я седмица
		return 'sluzhby-chetvertoj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -13))) {	// Великий пост 5-я седмица
		return 'sluzhby-pjatoj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, -6))) {		// Великий пост 6-я седмица
		return 'sluzhby-shestoj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 0))) {		// Великий пост страстная седмица
		return 'sluzhby-strastnoj-sedmitsy-velikogo-posta/'+(w?w:7)+'">Постная триодь. ';

// Цветная триодь
	} else if (odd < setYMD (getEaster(od.year, 7))) {		// Светлая седмица
		return 'sluzhby-svetloj-sedmitsy/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 14))) {		// 2-я седмица по Пасхе
		return '/sluzhby-vtoroj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 21))) {		// 3-я седмица по Пасхе
		return 'sluzhby-tretej-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 28))) {		// 4-я седмица по Пасхе
		return 'sluzhby-chetvertoj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 35))) {		// 5-я седмица по Пасхе
		return 'sluzhby-pjatoj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 42))) {		// 6-я седмица по Пасхе
		return 'sluzhby-shestoj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 49))) {		// 7-я седмица по Пасхе
		return 'sluzhby-sedmoj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd < setYMD (getEaster(od.year, 56))) {		// 8-я седмица по Пасхе
		return 'sluzhby-vosmoj-sedmitsy-po-pashe/'+(w+1)+'">Цветная триодь. ';
	} else if (odd == setYMD (getEaster(od.year, 56))) {	// День всех Святых
		return 'sluzhby-vosmoj-sedmitsy-po-pashe/8">Цветная триодь. ';

// Октоих 
	} else {
		return 'oktoih/'+((voice-1)*7+w+1)+'">Октоих. ';
	}
}

function getVoice(nd) {
	var y = nd.getFullYear();
	var ed = getEaster(y, 0);
	ed = new Date(ed.year, ed.month-1, ed.date+shiftDays(y));
	if (nd.getTime() < ed.getTime()) {
		ed = getEaster(y-1, 0);
		ed = new Date(ed.year, ed.month-1, ed.date+shiftDays(y));
	}
	var days = (nd.getTime()-ed.getTime())/(1000*60*60*24);
	if (days < 7) voice = days+1;
	else voice = (~~((days-7)/7))%8+1;
	return voice;
}

/******************************************************************
	Создает древо сайта
	
*******************************************************************/
function siteTree () {
	
//	document.getElementById("extCalendar").innerHTML = createTree();
	setContent(document.getElementById("extCalendar"), createTree());
	if ((/chrome/i.test(navigator.userAgent)) || (/edge/i.test(navigator.userAgent))) {
		var winHeight = document.getElementById("popup").scrollHeight;
		document.body.style.height = winHeight+"px";	
		if (/edge/i.test(navigator.userAgent))  winHeight = document.body.scrollHeight;
		document.documentElement.style.height = winHeight+"px";	
	} 

	hlink ();
}
function createTree() {
	var html = '<table width="100%" cellpadding="3">';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/molitvoslov/" title="Православный молитвослов.\nМолитвы, каноны, акафисты"><img src="img/icons/molitvoslov.png"> Молитвослов</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/fiction/" title="Православная художественная литература"><img src="img/icons/fiction.png"><span style="font-size: 85%;"> Художественная литература</span></span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/test/" title="Обучающие тесты"><img src="img/icons/test.png"> Богословие в тестах</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/shemy/" title="Наглядные пособия, схемы и таблицы"><img src="img/icons/shemy.png"> Схемы и пособия</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/katehizacija/" title="Основы православия. Катехизация и воцерковление"><img src="img/icons/katehizacija.png"> Катехизация</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/spravochniki/" title="Словари, справочники"><img src="img/icons/otechnik.png"> Справочники</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/audio/" title="Православные аудиокниги, песнопения,\nпроповеди, молитвы, жития святых."><img src="img/icons/audio.png"> Аудио</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/deti/" title="Сайт для родителей"><img src="img/icons/deti.png"> Азбука воспитания</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/video/" title="Видеочтения Священного Писания.\nВидеопроповеди"><img src="img/icons/video.png"> Видео</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/znakomstva/" title="Православная служба знакомств"><img src="img/icons/znakomstva.png"> Азбука верности</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/parkhomenko/foto/" title="Фоторассказы священника\nКонстантина Пархоменко"><img src="img/icons/parkhomenko.png"> Фоторассказы</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/zdorovie/" title="Православный сайт о здоровье"><img src="img/icons/zdorovie.png"> Азбука здоровья</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/viktorina/" title="Православные фотовикторины"><img src="img/icons/viktorina.png"> Фотовикторины</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/palomnik/" title="Монастыри, храмы, православные святыни мира"><img src="img/icons/palomnik.png"> Азбука паломника</span></td>'+
			'</tr>';
	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/propovedi/" title="Сборник проповедей\nправославных проповедников"><img src="img/icons/propovedi.png"> Проповеди</span></td>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://sueverie.net/" title="Суеверия: Фэн-шуй, Астрология, Оккультизм,\nЛюбовный приворот, Целительство"><img src="img/icons/sueverie.png"> Суеверие.нет</span></td>'+
			'</tr>';

	html += '<tr>'+
			'<td width="50%"><span class="siteleaf hlink" data-url="https://azbyka.ru/apokalipsis/" title="Об эсхатологии без эсхатофобии"><img src="img/icons/apokalipsis.png"> Апокалипсис</span></td>'+
			'<td width="50%"><span class="moresites hlink" data-url="https://azbyka.ru/project/index_tree.shtml" title="Древо сайта «Азбука веры»">Ещё...</span></td>'+
			'</tr>';
	html += '</table>';
//	html += infoline();
	return html;
}
/******************************************************************
	Создает ссылки из элементов класса hlink
	url - в атрибуте data-url
	
*******************************************************************/
function hlink () {
	// Всем ссылкам присваиваем класс hlink
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if(!links[i].classList.contains('hlink')) {
			links[i].classList.add('hlink');
		}
	}
	// Chrome extension: open a link from popup.html in a new tab
	var links = document.getElementsByClassName("hlink");
	for (var i = 0; i < links.length; i++) {
		(function () {
		var url = links[i].getAttribute('data-url');
			if (url) {
				links[i].onclick = function () {
					chrome.tabs.create({active: true, url: url});
				};
			} 
		})();
	}
}

function troparion () {
	return '<div id="extTroparion" class="extTroparion">'
		+'	<details>'
		+(!(/edge/i.test(navigator.userAgent))?'		<summary>Тропари, кондаки, молитвы и величания</summary>':'')
		+'		<h4>Тропарь святителю Мартину Исповеднику, папе Римскому, глас 4</h4>'
		+'		<p>И́стинных повеле́ний устне́ распространи́л еси́,/ уче́нии Боже́ственными вся просвети́л еси́,/ злове́рие низложи́л еси́, Богому́дре Марти́не,/ святи́телю всече́стне,/ помина́й нас, уго́дниче Христо́в,/ е́же к Нему́ хода́тайствы твои́ми,// да в ми́ре устро́иши живо́т наш.</p>'
		+'		<h4>Тропарь мученикам Антонию, Иоанну и Евстафию Виленским, Литовским, глас 4</h4>'
		+'		<p>И́же земны́х че́сти и сла́вы отве́ргшеся,/ до́блии и честни́и страда́льцы,/ ве́ры ра́ди кре́пко и му́жественно му́ки претерпе́сте,/ на смерть себе́ вда́вше за Живо́т всех – Влады́ку./ Те́мже и Христо́с пресла́вно столпо́м о́блачным/ с Небесе́ вас озари́/ и по́честьми и венцы́ от Престо́ла сла́вы венча́./ Со А́нгелы Тому́ предстоя́ще,// моли́те спасти́ся душа́м на́шим.</p>'
		+'	</details>'			
		+'</div>';
}
(function(window){
	window.htmlentities = {
		/**
		 * Converts a string to its html characters completely.
		 *
		 * @param {String} str String with unescaped HTML characters
		 **/
		encode : function(str) {
			var buf = [];
			
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}
			
			return buf.join('');
		},
		/**
		 * Converts an html characterSet into its original character.
		 *
		 * @param {String} str htmlSet entities
		 **/
		decode : function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
	};
})(window);

var showingTooltip = null;
var screenElem = null;

document.onmouseover = function(e) {
	if (!localStorage["extPopupVerses"]) return;
	if (showingTooltip) return;
	
	var target = e.target;
	var ref = target.getAttribute('data-ref');
	var data_title = target.getAttribute('data-title');
	if (!ref) return;
	if (!data_title) {
		bible_verses();	// Загружаем стихи Библии
		screenElem = document.createElement('div');
		screenElem.id = 'popup_BG_overlay';
		document.body.appendChild(screenElem);
		setTimeout(function () {
			if (screenElem) {
				document.body.removeChild(screenElem);
				screenElem = null;
			}
		}, 3000);
		return;
	}

	data_title = htmlentities.decode(data_title);
	
	var tooltipElem = document.createElement('div');
	tooltipElem.className = 'tooltip';
//	tooltipElem.innerHTML = '<span>'+data_title+'</span>';
	setContent(tooltipElem, '<span>'+data_title+'</span>');
	document.body.appendChild(tooltipElem);

	var coords = target.getBoundingClientRect();
	var left = 20;
	tooltipElem.style.width = document.body.offsetWidth - 70;

	var top = coords.top - tooltipElem.offsetHeight + 5;
	if (top < 20) { // не вылезать за верхнюю границу окна
		top = 20;
		tooltipElem.style.height = (coords.top - 40) + 'px';
	}

	tooltipElem.style.left = left + 'px';
	tooltipElem.style.top = top + 'px';

	showingTooltip = tooltipElem;


	target.onmouseleave = function(el) {
		if (showingTooltip) {
			var trgt = el.relatedTarget;
			if (trgt.className == 'tooltip') {
				trgt.onmouseleave = function(elm) {
					if (showingTooltip) {
						document.body.removeChild(showingTooltip);
						showingTooltip = null;
					}
				};
				return;
			}

			document.body.removeChild(showingTooltip);
			showingTooltip = null;
		}
	};
};
/******************************************************************
	Добавляет текст стихов Библии к ссылкам
	
*******************************************************************/
var bible_verses_loading = false;
function bible_verses () {
	bible_verses_loading = true;
	var a_length = jQuery('a[data-ref]').length;
	var a_i = 1;
	jQuery('a[data-ref]').each (function(){
		var el = jQuery(this);
		var ref = el.attr('data-ref');
		var book = ref.split('.')[0];
		var chapter = ref.split('.')[1];
		// Полное наименование книги
		var title="";
		var filename="";
		var interpret="";
		for (i=0; i<bg_bibrefs_bookTitle.length; i++) {
			var the_book = bg_bibrefs_bookTitle[i];
			if (book == the_book['sign']){
				title = the_book['title'];
				filename = the_book['file'];
				if (localStorage["extInterpretation"]) interpret = the_book['interpret'];
				break;
			}
		}
		if (filename) {
			// Текст Библии
			var verses = "";
			var xhr = new XMLHttpRequest();
//			xhr.open("GET", "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/bible/"+filename, true);
			xhr.open("GET", chrome.extension.getURL("bible/"+filename), true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					verses = bg_bibrefs_parseRefs(JSON.parse(xhr.responseText), chapter, interpret);
					el.attr('data-title', htmlentities.encode("<strong>"+title+"</strong><hr>"+verses) );
					el.attr('title', "");
					if (screenElem && a_i == a_length) {
						document.body.removeChild(screenElem);
						screenElem = null;
					}
					a_i++;
				}
					
			}
			xhr.send();	
		}
	});
}

/******************************************************************
	Создает каталог сайта из OPDS
	
*******************************************************************/
var opdsHomeUrl = 'https://azbyka.ru/opds';		// Основной каталог
var hrefBackButtonStack = new Array();			// Стек истории
var curentHref = "";							// Ссылка на текущий каталог

// localStorage.removeItem('hrefBackButtonStack');

function siteCatalogue () {
	createCatalogue();
}
function createCatalogue () {
	var url = "";
	if (localStorage['hrefBackButtonStack'] == undefined) {
		hrefBackButtonStack[0] = opdsHomeUrl;
		localStorage['hrefBackButtonStack'] = JSON.stringify(hrefBackButtonStack);
	}
	hrefBackButtonStack = JSON.parse(localStorage["hrefBackButtonStack"]);
	url = hrefBackButtonStack.pop();
	if (!url) url = hrefBackButtonStack[0];

	showOPDS (url);
}

// Отображение каталога OPDS
function showOPDS (url) {
	
//	console.log(localStorage['hrefBackButtonStack']);
//	console.log(hrefBackButtonStack);
//	console.log(url);
	if (!url) return;
	
	var opds = "";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				curentHref = url;
				var parser = new DOMParser();
				var xmlDoc = parser.parseFromString(xhr.responseText,"text/xml");

				// Ссылка на сайт
				if (xmlDoc.getElementsByTagName("uri")[0] != undefined &&
					xmlDoc.getElementsByTagName("uri")[0].childNodes[0] != undefined)
					href = xmlDoc.getElementsByTagName("uri")[0].childNodes[0].nodeValue;
				// Название каталога
				if (xmlDoc.getElementsByTagName("title")[0] != undefined &&
					xmlDoc.getElementsByTagName("title")[0].childNodes[0] != undefined)
					title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
				opds += '<h5 class="hlink" data-url="'+href+'">'+title+'</h5>';
				
				// Поиск в каталоге
				var links = xmlDoc.getElementsByTagName("link");
				var hrefSearch = "";
				for (var j=0; j<links.length; j++) {
					type = links[j].getAttribute("rel");
					if (type == "search"){
						hrefSearch = links[j].getAttribute("href");
						break;
					}
				}
				
				// Панель управления каталогом
				opds += '<div id="dashboard">\n';
					if (hrefBackButtonStack.length > 0) {
						// Кнопка "Домой"
						opds += '<img class="smallButton hxml" id="homeButton" src="img/home.svg" data-url="" title="В начало" />\n';
						// Кнопка "Назад"
						opds += '<img class="smallButton hxml" id="backButton" src="img/back.svg" data-url="" title="Назад" />\n';		
					}
					// Поле ввода поискового запроса
					if (hrefSearch) {
						opds += '<input type="submit" id="catalog__search_submit" value="" class="yaform__submit_image hxml" data-url="'+hrefSearch+'" />\n';
						opds += '<input type="search" name="text" id="catalog__search_text" class="yaform__search_text" placeholder="Поиск в каталоге" >\n';
					}
				opds += '</div>\n';
				
				// Содержимое каталога
				opds += '<div id="calData">\n<table>\n';

				var entries = xmlDoc.getElementsByTagName("entry");
				if (entries.length) {
					for (var i=0; i<entries.length; i++) {
						// Элемент каталога
						opds += '<tr>\n';
						var entry = entries[i];
						// Заголовок элемента
						if (entry.getElementsByTagName("title")[0] != undefined &&
							entry.getElementsByTagName("title")[0].childNodes[0] != undefined)
							title = entry.getElementsByTagName("title")[0].childNodes[0].nodeValue;
						else title = "";
						// Краткое описание элемента
						if (entry.getElementsByTagName("content")[0] != undefined &&
							entry.getElementsByTagName("content")[0].childNodes[0] != undefined)
							var content = entry.getElementsByTagName("content")[0].childNodes[0].nodeValue;
						else var content = "";
						// Миниатюра
						links = entry.getElementsByTagName("link");
						var image = "";
						for (var j=0; j<links.length; j++) {
							type = links[j].getAttribute("type");
							href = links[j].getAttribute("href");
							if (type.substr(0,5) == "image"){
								image = '<img class="thumbnail" src="'+href+'" />';
								break;
							}
						}
						// Ссылка на содержимое элемента
						for (var j=0; j<links.length; j++) {
							type = links[j].getAttribute("type");
							href = links[j].getAttribute("href");
							if (type == "text/html"){					// Ссылка на страницу на сайте
								opds += '<td class="hlink" data-url="'+href+'">\n'+image+'\n<h6>'+title+'</h6>\n<p class="content">'+content+'</p>\n</td>\n';
								break;
							} else if (type == "application/atom+xml"){	// Ссылка на подраздел
								opds += '<td class="hxml" data-url="'+href+'">\n'+image+'\n<h6>'+title+'</h6>\n<p class="content">'+content+'</p>\n</td>\n';
								break;
							}
						}
						opds += '</tr>\n';
					}
				// Ничего не найдено
				} else {	
					opds += '<tr><td><p style="text-align: center;"><i>Ничего не найдено</i></p>\n</td></tr>\n';
				}
				opds += '</table>\n</div>\n';
				
	//			document.getElementById("extCalendar").innerHTML = opds;
				setContent(document.getElementById("extCalendar"), opds);
				if ((/chrome/i.test(navigator.userAgent)) || (/edge/i.test(navigator.userAgent))) {
					var winHeight = document.getElementById("popup").scrollHeight;
					document.body.style.height = winHeight+"px";	
					if (/edge/i.test(navigator.userAgent))  winHeight = document.body.scrollHeight;
					document.documentElement.style.height = winHeight+"px";	
				} 

				hlink ();
				hxml ();
			} else {	// Ошибка запроса
				localStorage.removeItem('hrefBackButtonStack');
				if (url != opdsHomeUrl) createCatalogue ();
			}
		}
	}
	xhr.send();	
}

function hxml () {
	// Находим все элементы (ссылки) с классом hxml
	var links = document.getElementsByClassName("hxml");
	for (var i = 0; i < links.length; i++) {
		(function () {
		var url = links[i].getAttribute('data-url');
			// Обработчик нажатия ссылки
			links[i].onclick = function () {
				// Кнопка "Назад"
				if (this.id == 'backButton'){			
					if (hrefBackButtonStack.length > 0) url = hrefBackButtonStack.pop();
					else return;
				// Кнопка "Домой"
				} else if (this.id == 'homeButton'){
					url = opdsHomeUrl;
					hrefBackButtonStack.splice(0, hrefBackButtonStack.length);	// Очистить стек
				// Поиск
				} else if (this.id == 'catalog__search_submit'){
					var searchTerms = document.getElementById("catalog__search_text").value;
					url = url.replace('{searchTerms}', searchTerms);
					hrefBackButtonStack.push(curentHref);
				} else {
					hrefBackButtonStack.push(curentHref);
				}
				// Сохраняем в памяти стек, включая текущую страницу
				localStorage['hrefBackButtonStack'] = JSON.stringify(hrefBackButtonStack.concat(url));
					
				showOPDS (url);
			};
		})();
	}
}
