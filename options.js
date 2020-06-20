document.addEventListener('DOMContentLoaded', loadOptionsPage);

function loadOptionsPage () {
	// Значения по умолчанию
	if (localStorage["extCalendar"] === undefined) localStorage["extCalendar"] = '1';
	if (localStorage["languages"] === undefined) localStorage["languages"] = '';

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

	var langs = "crglianvuwsqmzptokh";


	var extHotKey = document.getElementById('extHotKey');
	var extWestEstTrigger = document.getElementById('extWestEstTrigger');
//	var extDefPopup = document.getElementsByName('extDefPopup');
	var extWestEstCol = document.getElementsByName('extWestEstCol');
// Локализация
	document.title = chrome.i18n.getMessage("extName");
	document.getElementById("extTab1Desc").firstChild.innerText = chrome.i18n.getMessage("extTab1Desc");
	document.getElementById("extTab2Desc").firstChild.innerText = chrome.i18n.getMessage("extTab2Desc");

	document.getElementById("azbykaLangs").innerText = chrome.i18n.getMessage("azbykaLangs");
	for (i=0; i<langs.length; i++) {
		document.getElementById(langs[i]+"Lang").innerText = chrome.i18n.getMessage(langs[i]+"Lang");
	}

	document.getElementById("azbykaFont").innerText = chrome.i18n.getMessage("azbykaFont");
	document.getElementById("ucsFont").innerText = chrome.i18n.getMessage("ucsFont");
	document.getElementById("rusFont").innerText = chrome.i18n.getMessage("rusFont");

	document.getElementById("extReplaceHrefDesc").innerText = chrome.i18n.getMessage("extReplaceHrefDesc");
	document.getElementById("extAuthorLinkDesc").innerText = chrome.i18n.getMessage("extAuthorLinkDesc");
	document.getElementById("extAuthorLinkHelp").setAttribute('title', chrome.i18n.getMessage("extAuthorLinkHelp"));
	document.getElementById("extTermLinkDesc").innerText = chrome.i18n.getMessage("extTermLinkDesc");
	document.getElementById("extTermLinkHelp").setAttribute('title', chrome.i18n.getMessage("extTermLinkHelp"));
	document.getElementById("extWestEstColDesc").innerText = chrome.i18n.getMessage("extWestEstColDesc");
	document.getElementById("extWestEstColHelp").setAttribute('title', chrome.i18n.getMessage("extWestEstColHelp"));
	document.getElementById("extWestEstCol0Exm").innerText = chrome.i18n.getMessage("extWestEstCol0Exm");
	document.getElementById("extWestEstCol1Exm").innerText = chrome.i18n.getMessage("extWestEstCol1Exm");
	document.getElementById("extWestEstTriggerDesc").innerText = chrome.i18n.getMessage("extWestEstTriggerDesc");
	document.getElementById("extNoDotDesc").innerText = chrome.i18n.getMessage("extNoDotDesc");

	document.getElementById("txtcolorDesc").innerText = chrome.i18n.getMessage("txtcolorDesc");
	document.getElementById("bgcolorDesc").innerText = chrome.i18n.getMessage("bgcolorDesc");
	document.getElementById("bgcolorOfHighlight").disabled = document.getElementById("bgcolorOfHighlightOn").checked?'':'disabled'

	document.getElementById("extHotKeyDesc").innerText = chrome.i18n.getMessage("extHotKeyDesc");

	document.getElementById("save").innerText = chrome.i18n.getMessage("saveResult");
	document.getElementById("reset").innerText = chrome.i18n.getMessage("resetOptions");

	document.getElementById("extReview1").innerText = chrome.i18n.getMessage("extReview1");
	document.getElementById("extReview2").innerText = chrome.i18n.getMessage("extReview2");
	
	if (/firefox/i.test(navigator.userAgent) ) {
		document.getElementById("webStore").innerText = "Firefox Add-Ons";
		document.getElementById("webStore").data.url = "https://addons.mozilla.org/ru/firefox/addon/%D0%B0%D0%B7%D0%B1%D1%83%D0%BA%D0%B0-%D0%B2%D0%B5%D1%80%D1%8B/";
		
	} else {
		document.getElementById("webStore").innerText = chrome.i18n.getMessage("webStore");
	}
	hlink ();

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

//	document.getElementById("extDefPopupDesc").innerText = chrome.i18n.getMessage("extDefPopupDesc");
//	document.getElementById("extCalendarDesc").innerText = chrome.i18n.getMessage("extCalendarDesc");
//	document.getElementById("extCatalogDesc").innerText = chrome.i18n.getMessage("extCatalogDesc");
//	document.getElementById("extTreeDesc").innerText = chrome.i18n.getMessage("extTreeDesc");
	document.getElementById("extTroparionDesc").innerText = chrome.i18n.getMessage("extTroparionDesc");
	document.getElementById("extTroparion").parentNode.style.display = "none";
	document.getElementById("extDateDesc").innerText = chrome.i18n.getMessage("extDateDesc");
	document.getElementById("extDateHelp").setAttribute('title', chrome.i18n.getMessage("extDateHelp"));
	
	document.getElementById("extPopupVersesDesc").innerText = chrome.i18n.getMessage("extPopupVersesDesc");
	document.getElementById("extInterpretationDesc").innerText = chrome.i18n.getMessage("extInterpretationDesc");

	document.getElementById("langBibleDesc").innerText = chrome.i18n.getMessage("langBibleDesc");
	document.getElementById("sysBible").innerText = chrome.i18n.getMessage("sysBible");
	document.getElementById("cuBible").innerText = chrome.i18n.getMessage("cuBible");
	document.getElementById("ruBible").innerText = chrome.i18n.getMessage("ruBible");
	document.getElementById("beBible").innerText = chrome.i18n.getMessage("beBible");
	document.getElementById("ukBible").innerText = chrome.i18n.getMessage("ukBible");
	document.getElementById("srBible").innerText = chrome.i18n.getMessage("srBible");
	document.getElementById("enBible").innerText = chrome.i18n.getMessage("enBible");

	//Текущие значения
	languages = localStorage["languages"];
	for (i=0; i<langs.length; i++) {
		document.getElementById(langs[i]+"_lang").checked = (languages.indexOf(langs[i])>0) ? 'checked' : '';
	}

	var c_fontSave = (localStorage["c_font"] === undefined) ? 'rus' : localStorage["c_font"];
	var c_font = document.getElementById("c_font");
	for (var i = 0; i < c_font.children.length; i++){
		var child = c_font.children[i];
		if (child.value == c_fontSave)	{
			child.selected = "true";
			break;
		}
	}

	document.getElementById("extReplaceHref").checked = (localStorage["extReplaceHref"]) ? 'checked' : '';
	for (var i=0;i<extWestEstCol.length; i++) {
		if (extWestEstCol[i].value == localStorage["extWestEstCol"]) {
			extWestEstCol[i].checked = 'checked';
		} else extWestEstCol[i].checked = '';
	}
	
	extWestEstTrigger.value = (localStorage["extWestEstTrigger"] === undefined) ? 'N' : localStorage["extWestEstTrigger"];
	document.getElementById("extAuthorLink").checked = (localStorage["extAuthorLink"]) ? 'checked' : '';
	document.getElementById("extTermLink").checked = (localStorage["extTermLink"]) ? 'checked' : '';
	document.getElementById("extNoDot").checked = (localStorage["extNoDot"]) ? 'checked' : '';

	document.getElementById("colorOfHighlight").value = (localStorage["colorOfHighlight"] === undefined) ? "#008000" : localStorage["colorOfHighlight"];
	document.getElementById("bgcolorOfHighlight").value = (localStorage["bgcolorOfHighlight"] === undefined) ? "#ffffff" : localStorage["bgcolorOfHighlight"];
	document.getElementById("colorOfHighlightOn").checked = (localStorage["colorOfHighlightOn"]) ? 'checked' : '';
	document.getElementById("bgcolorOfHighlightOn").checked = (localStorage["bgcolorOfHighlightOn"]) ? 'checked' : '';
	document.getElementById("colorOfHighlight").disabled = document.getElementById("colorOfHighlightOn").checked?'':'disabled'
	document.getElementById("bgcolorOfHighlight").disabled = document.getElementById("bgcolorOfHighlightOn").checked?'':'disabled'
	document.getElementById('colorOfHighlightOn').addEventListener('click', function() {
			document.getElementById("colorOfHighlight").disabled = document.getElementById("colorOfHighlightOn").checked?'':'disabled'
	}, false);
	document.getElementById('bgcolorOfHighlightOn').addEventListener('click', function() {
			document.getElementById("bgcolorOfHighlight").disabled = document.getElementById("bgcolorOfHighlightOn").checked?'':'disabled'
	}, false);

	var manifestData = chrome.runtime.getManifest();
	document.getElementById("extCopyright").innerText = chrome.i18n.getMessage("extCopyright");
	var date = new Date();
	document.getElementById("extVersion").innerText = '2017-'+date.getFullYear()+'. '+chrome.i18n.getMessage("extVersion")+': '+manifestData.version;

	extHotKey.value = (localStorage["extHotKey"] === undefined) ? 'B' : localStorage["extHotKey"];

	c_lang_checked();
	function c_lang_checked() {
		azbyka_font = document.getElementById('c_font');
		if (document.getElementById('c_lang').checked == true) azbyka_font.disabled = false;
		else azbyka_font.disabled = true;
	}
	document.getElementById('c_lang').addEventListener('click', c_lang_checked, false);

/*	
	for (var i=0;i<extDefPopup.length; i++) {
		if (extDefPopup[i].value == localStorage["extCalendar"]) {
			extDefPopup[i].checked = 'checked';
		} else extDefPopup[i].checked = '';
	}
*/	
	document.getElementById("extTroparion").checked = (localStorage["extTroparion"]) ? 'checked' : '';
	document.getElementById("extDate").checked = (localStorage["extDate"]) ? 'checked' : '';
	
	document.getElementById("extPopupVerses").checked = (localStorage["extPopupVerses"]) ? 'checked' : '';
	document.getElementById("extInterpretation").checked = (localStorage["extInterpretation"]) ? 'checked' : '';
	
	var langBibleSave = (localStorage["langBible"] === undefined) ? 'sys' : localStorage["langBible"];
	var langBible = document.getElementById("langBible");
	for (var i = 0; i < langBible.children.length; i++){
		var child = langBible.children[i];
		if (child.value == langBibleSave)	{
			child.selected = "true";
			break;
		}
	}
	document.getElementById("extInterpretation").disabled = document.getElementById("extPopupVerses").checked?'':'disabled';
		document.getElementById("extPopupVerses").checked?document.getElementById("extInterpretationDesc").classList.remove('disabled'):document.getElementById("extInterpretationDesc").classList.add('disabled');
	document.getElementById("langBible").disabled = document.getElementById("extPopupVerses").checked?'':'disabled';
		document.getElementById("extPopupVerses").checked?document.getElementById("langBibleDesc").classList.remove('disabled'):document.getElementById("langBibleDesc").classList.add('disabled');

	document.getElementById('extPopupVerses').addEventListener('click', function() {
		document.getElementById("extInterpretation").disabled = document.getElementById("extPopupVerses").checked?'':'disabled';
		document.getElementById("extPopupVerses").checked?document.getElementById("extInterpretationDesc").classList.remove('disabled'):document.getElementById("extInterpretationDesc").classList.add('disabled');
		document.getElementById("langBible").disabled = document.getElementById("extPopupVerses").checked?'':'disabled';
		document.getElementById("extPopupVerses").checked?document.getElementById("langBibleDesc").classList.remove('disabled'):document.getElementById("langBibleDesc").classList.add('disabled');
	}, false);

	// Сохранить параметры
	function saveOptions()	{
		languages = "";
		for (i=0; i<langs.length; i++) {
			languages+= document.getElementById(langs[i]+"_lang").checked?langs[i]:'';
		}
		if (languages)  languages='&'+languages;
		localStorage["languages"] = languages;
		
		var c_font = document.getElementById("c_font");
		localStorage["c_font"] = c_font.children[c_font.selectedIndex].value;

		localStorage["extReplaceHref"] = document.getElementById("extReplaceHref").checked?'1':'';
		for (var i=0;i<extWestEstCol.length; i++) {
			if (extWestEstCol[i].checked) {
				localStorage["extWestEstCol"] = extWestEstCol[i].value;
				break;
			}
		}
		localStorage["extWestEstTrigger"] = extWestEstTrigger.value;
		localStorage["extAuthorLink"] = document.getElementById("extAuthorLink").checked?'1':'';
		localStorage["extTermLink"] = document.getElementById("extTermLink").checked?'1':'';
		localStorage["extNoDot"] = document.getElementById("extNoDot").checked?'1':'';
	
		localStorage["colorOfHighlight"] = document.getElementById("colorOfHighlight").value;
		localStorage["bgcolorOfHighlight"] = document.getElementById("bgcolorOfHighlight").value;
		localStorage["colorOfHighlightOn"] = document.getElementById("colorOfHighlightOn").checked?'1':'';
		localStorage["bgcolorOfHighlightOn"] = document.getElementById("bgcolorOfHighlightOn").checked?'1':'';

		localStorage["extHotKey"] = extHotKey.value;
/*
		for (var i=0;i<extDefPopup.length; i++) {
			if (extDefPopup[i].checked) {
				localStorage["extCalendar"] = extDefPopup[i].value;
				break;
			}
		}
*/
		localStorage["extTroparion"] = document.getElementById("extTroparion").checked?'1':'';
		localStorage["extDate"] = document.getElementById("extDate").checked?'1':'';
		
		localStorage["extPopupVerses"] = document.getElementById("extPopupVerses").checked?'1':'';
		localStorage["extInterpretation"] = document.getElementById("extInterpretation").checked?'1':'';
		
		var langBible = document.getElementById("langBible");
		localStorage["langBible"] = langBible.children[langBible.selectedIndex].value;

		document.getElementById("saveResult").style.display = "block";
		document.getElementById("saveResult").innerText = chrome.i18n.getMessage("saveResultDesc");
		setTimeout(seccusResult, 3000);
	}
	// Окно сообщения
	function seccusResult()	{
		document.getElementById("saveResult").innerText = "";
		document.getElementById("saveResult").style.display = "none";
	}
	// Кнопка Сохранить
	var on_save=document.getElementById('save');
	on_save.addEventListener('click', saveOptions, false);
	
	document.addEventListener('keyup', function(e) {
		if ((e.altKey && e.ctrlKey && e.keyCode == localStorage["extWestEstTrigger"].charCodeAt(0))) {
			document.getElementById("extWestEstCol1").checked = (document.getElementById("extWestEstCol1").checked) ? '' : 'checked';
			document.getElementById("extWestEstCol0").checked = (document.getElementById("extWestEstCol1").checked) ? '' : 'checked';
			saveOptions();
		}
		return false;
	}, false);

	// Сбросить параметры
	function resetOptions()	{
		localStorage.clear();
		loadOptionsPage();
		document.getElementById("saveResult").style.display = "block";
		document.getElementById("saveResult").innerText = chrome.i18n.getMessage("resetOptionsDesc");
		setTimeout(seccusResult, 3000);
	}
	// Кнопка Сброс
	var on_reset=document.getElementById('reset');
	on_reset.addEventListener('click', resetOptions, false);
	
	// Разрешены только символы 0-9 и A-Z
	extHotKeyValue = extHotKey.value;
	extHotKey.addEventListener('blur', function (e){
	  var newValue = e.target.value;
	  if( !newValue || newValue.match(/[^0-9A-Z]/g)) {
		 extHotKey.value = extHotKeyValue;
		 return;
	  }
	extHotKeyValue = newValue;
	});
	extWestEstTriggerValue = extWestEstTrigger.value;
	extWestEstTrigger.addEventListener('blur', function (e){
	  var newValue = e.target.value;
	  if(  !newValue || newValue.match(/[^0-9A-Z]/g)) {
		 extWestEstTrigger.value = extWestEstTriggerValue;
		 return;
	  }
	  extWestEstTriggerValue = newValue;
	});
	
}
