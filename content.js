var bg_bibrefs_langs = "";
var bg_bibrefs_replace = false;
var bg_bibrefs_collision = false;
var bg_bibrefs_west_est = "N";
var bg_bibrefs_hotkey = "B";

var bg_bibrefs_progress0=0;
var bg_bibrefs_progress1=0;
var bg_bibrefs_progress2=0;
var bg_bibrefs_progress3=0;
var bg_bibrefs_count=0;
var bg_bibrefs_nodot='';
var newStyle="";
var bg_bibrefs_data2;
var bg_bibrefs_data3;

var bg_bibrefs_popup;
var bg_bibrefs_interpretation;

var bg_bibrefs_month_fullname = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var bg_bibrefs_month_name = ['янв','фев','мар','апр','ма[йя]','июн','июл','авг','сен','окт','ноя','дек'];
var bg_bibrefs_month_days = [31,29,31,30,31,30,31,31,30,31,30,31];

document.addEventListener('keyup', function(e) {
	if ((e.altKey && e.ctrlKey && e.keyCode == bg_bibrefs_hotkey.charCodeAt(0))) {
		chrome.runtime.sendMessage({method: "extActivaionTrigger"});
	} else if ((e.altKey && e.ctrlKey && e.keyCode == bg_bibrefs_west_est.charCodeAt(0))) {
		chrome.runtime.sendMessage({method: "extWestEstTrigger"});
	}
    return false;
}, false);


chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
	if(message.method == 'getReferencesCount') {
		chrome.runtime.sendMessage({method: "extReferencesCount", count: (""+bg_bibrefs_count)});
	}
});
chrome.runtime.sendMessage({method: "highlightBibleReferences"}, function(response){

	if (response.extActive == 1) {
		bg_bibrefs_langs = response.langs;
		bg_bibrefs_replace = response.replace;
		bg_bibrefs_collision = response.collision;
		bg_bibrefs_nodot = response.nodot;
		bg_bibrefs_data2 = response.authors_data;
		bg_bibrefs_data3 = response.terms_data;
		newStyle = (response.color?('color: '+response.color+';'):'');
		newStyle += (newStyle?' ':'')+(response.bgcolor?('background-color: '+response.bgcolor+';'):'');
		bg_bibrefs_popup = response.popup;
		bg_bibrefs_interpretation = response.interpretation;
		bg_bibrefs_BibleLanguage = response.bible_lang;	// Язык Библии
		bg_bibrefs_getBibleTitle(bg_bibrefs_BibleLanguage);
		bg_bibrefs_getBibleFile(bg_bibrefs_BibleLanguage);
		
		if (response.dates) doFindDates();
		doFindAndReplace();
		
		if (response.authors && bg_bibrefs_data2) doFindAuthors();
		
		if (response.terms && bg_bibrefs_data3) doFindTerms();
	} else 
		chrome.runtime.sendMessage({method: "extReferencesCount", count: ""});

	
	bg_bibrefs_west_est = response.west_est;
	bg_bibrefs_hotkey = response.hotkey;
});
// Асинхронный поиск и подсветка дат 
function doFindDates() {
	findAndReplace(0, 'date', '');
}
// Асинхронный поиск и подсветка ссылок на Библию 
function doFindAndReplace() {
	var arrayOfWords = bg_bibrefs_url[bg_bibrefs_progress1];
	var searchStr = arrayOfWords.name;
	var replaceStr = arrayOfWords.sign;
	
	if (bg_bibrefs_nodot && searchStr.charAt(searchStr.length-1)=='.') searchStr += '?';
	findAndReplace(1, searchStr, replaceStr);
	bg_bibrefs_progress1++;
	chrome.runtime.sendMessage({method: "extReferencesCount", count: (""+bg_bibrefs_count)});

	if (bg_bibrefs_progress1 < bg_bibrefs_url.length) {
		setTimeout(doFindAndReplace, 0);
	} else bg_bibrefs_start();

}
// Асинхронный поиск и подсветка ссылок на Святых отцов и церковных писателей 
function doFindAuthors() {
	var san = bg_bibrefs_data2.author[bg_bibrefs_progress2].san;
	san = san?("("+san+"\\s+)?"):"";
	var name = bg_bibrefs_data2.author[bg_bibrefs_progress2].name;
	var lastname = bg_bibrefs_data2.author[bg_bibrefs_progress2].lastname;
	var title = bg_bibrefs_data2.author[bg_bibrefs_progress2].title;
	var url = bg_bibrefs_data2.author[bg_bibrefs_progress2].url;
	
//	searchStr = "(?<![0-9A-Za-zА-Яа-яёЁ])("+san+name+(lastname?("\\s+"+lastname):"")+")(?![0-9A-Za-zА-Яа-яёЁ])";
	searchStr = "(?:[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ]|^)("+san+name+(lastname?("\\s+"+lastname):"")+")(?![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ])";
	replaceStr = 'href="'+url+'" title="'+title+'"';
	findAndReplace(2, searchStr, replaceStr);
	if (lastname) {
//		searchStr = "(?<![0-9A-Za-zА-Яа-яёЁ])("+san+lastname+"\\s+"+name+")(?![0-9A-Za-zА-Яа-яёЁ])";
		searchStr = "(?:[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ]|^)("+san+lastname+"\\s+"+name+")(?![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ])";
		findAndReplace(2, searchStr, replaceStr);
	}
	bg_bibrefs_progress2++;

	if (bg_bibrefs_progress2 < bg_bibrefs_data2.author.length) {
		setTimeout(doFindAuthors, 0);
	}
}
// Асинхронный поиск и подсветка ссылок на термины и определения
function doFindTerms() {
	var pattern = bg_bibrefs_data3.terms[bg_bibrefs_progress3].pattern;
	var title = bg_bibrefs_data3.terms[bg_bibrefs_progress3].title;
	var url = bg_bibrefs_data3.terms[bg_bibrefs_progress3].url;
	
//	searchStr = "(?<![0-9A-Za-zА-Яа-яёЁ])("+pattern+")(?![0-9A-Za-zА-Яа-яёЁ])";
	searchStr = "(?:[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ]|^)("+pattern+")(?![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ])";
	replaceStr = 'href="'+url+'" title="'+title+'"';
	findAndReplace(2, searchStr, replaceStr);
	bg_bibrefs_progress3++;

	if (bg_bibrefs_progress3 < bg_bibrefs_data3.terms.length) {
		setTimeout(doFindTerms, 0);
	}
}
// Ищем и заменяем ссылки на Библию
function findAndReplace(type, searchStr, replaceStr, searchNode) {

    if (!searchStr || typeof replaceStr === 'undefined') {
         return;
    }
//	if (type == 0) var template = "\\b((\\d{1,2})((([\\\/\\-\\.])(\\d{1,2})\\5)|(\\s+((янв(ар[ья])?)|(фев(ал[ья])?)|(мар(та?)?)|(апр(ел[ья])?)|(ма[йя])|(июн[ья]?)|(июл[ья]?)|(авг(уста?)?)|(сен(тябр[ья])?)|(окт(ябр[ья])?)|(ноя(бр[ья])?)|(дек(абр[ья])?))\\.?\\s*))(((19)|(20))?\\d{2})?)(\\s*г((ода)|\\.)?)?";
	if (type == 0) var template = "\\b(([0-3]?\\d)((([\\\/\\-\\.])([0-1]\\d)\\5)|(\\s+((янв((ар[ья])|\\.)?)|(фев((рал[ья])|\\.)?)|(мар((та?)|\\.)?)|(апр((ел[ья])|\\.)?)|(ма[йя])|(июн[ья\\.]?)|(июл[ья\\.]?)|(авг((уста?)|\\.)?)|(сен((тябр[ья])|\\.)?)|(окт((ябр[ья])|\\.)?)|(ноя((бр[ья])|\\.)?)|(дек((абр[ья])|\\.)?))(?![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ])))(\\s*(\\d{2})?\\d{2}\\b(\\s*г((ода)|\\.)?)?)?)";
//	else if (type == 1) var template = "(?<![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ])\\(?("+searchStr+")\\s*((\\d{1,3}(\\s*[\\u2010-\\u2015\\-:,\\.]\\s*\\d{1,3})*)(;\\s*(\\d{1,3}(\\s*[\\u2010-\\u2015\\-:,\\.]\\s*\\d{1,3})+))*)(?![0-9A-Za-zА-Яа-яёЁ\\u2010-\\u2015\\-:])\\)?";
	else if (type == 1) var template = "(?:[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ]|^)(?:\\(\\s*)?("+searchStr+")\\s*((\\d{1,3}(\\s*[\\u2010-\\u2015\\-:,\\.]\\s*\\d{1,3})*)(;\\s*(\\d{1,3}(\\s*[\\u2010-\\u2015\\-:,\\.]\\s*\\d{1,3})+))*)(?:\\s*\\))?(?![0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ\\u2010-\\u2015\\-:])";
	else var template = searchStr;
	var regex =  new RegExp(template, 'gm');
    var re =  new RegExp(template, '');

    var childNodes = (searchNode || document.body).childNodes;
    var cnLength = childNodes.length;
    excludes = ',html,head,style,title,link,script,object,iframe,textarea,input,button,select,a,';
	
    while (cnLength--) {
        var currentNode = childNodes[cnLength];

		if (type == 1 && bg_bibrefs_replace && currentNode.nodeType == 1 && currentNode.nodeName.toLowerCase() == 'a') {
			found = currentNode.textContent.match(re);
			if (found && found[0] == currentNode.textContent) {
				if (currentNode.parentNode.className.indexOf('bg_bibrefs') != -1) continue;
				ref = createRreference(replaceStr, found[2]);
				
				if (ref) {
					html = 
					'<span class="bg_data_title" data-title="'+ref[0]+'" data-langs="'+bg_bibrefs_langs+'"'+' title="'+ref[1]+'"'+'>'+
						'<span class="bg_data_tooltip"></span>'+
						'<a href="https://azbyka.ru/biblia/?'+ref[0]+bg_bibrefs_langs+'" target="_blank">'+found[0]+'</a>'+
					'</span>';
//					currentNode.outerHTML = html;
					setContent(currentNode, html, true);
					bg_bibrefs_count++;
				}
				continue;
			}
		}
		if (currentNode.nodeType === 1 && (excludes).indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {
           arguments.callee(type, searchStr, replaceStr, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }		

//
		var parent = currentNode.parentNode;
		var html = currentNode.data;
		html = html.replace(/&/g, '&amp;');
		html = html.replace(/</g, '&lt;');
		html = html.replace(/>/g, '&gt;');
		
		html = html.replace(regex, function (match, p1, p2, p3, offset, string) {
			if (newStyle) refStyle = ' style="'+newStyle+'"';
			else refStyle = '';
			if (type == 0) {
				var year = arguments[39];
				
				var month = arguments[6];
				if (month === undefined) {
					var m = arguments[8];
					if (m === undefined) return match;
					for (i=0; i<12; i++) {
						if (m.match(new RegExp(bg_bibrefs_month_name[i],'i'))) {
							month = i+1;
							break;
						}
					}
					if (month === undefined) return match;
				} else {
					if (year === undefined) return match;
					month = parseInt(month);
					if (month < 1 || month > 12) return match;
				}
				
				var day = parseInt(arguments[2]);
				if (day < 1 || day > bg_bibrefs_month_days[month-1]) return match;
				
				var today = new Date();
				var nextYear = (today.getFullYear()+1)%100;

				if (year === undefined) {
					year = today.getFullYear();
					today = new Date(year, today.getMonth(), today.getDate()).valueOf(); 
					var dd =  new Date(year, month-1, day).valueOf();
					if (dd+180*24*3600*1000 < today) year += 1;
				}
				else if (parseInt(year)<=nextYear) year = parseInt(year) + 2000;
				else if (parseInt(year)>nextYear && parseInt(year)<100) year = parseInt(year) + 1900;
				else year = parseInt(year);
				if (year<1901 || year>2100) return match;

				var title = ' title="'+day+' '+bg_bibrefs_month_fullname[month-1]+' '+year+' г."';
				month = (month>9)?(''+month):('0'+month);
				day = (day>9)?(''+day):('0'+day);
				return '<a href="https://azbyka.ru/days/'+year+'-'+month+'-'+day+'"'+title+refStyle+' target="_blank">'+match+'</a>';
				
			} else if (type == 1) {
				ref = createRreference(replaceStr, p2);
				if (ref) {
					bg_bibrefs_count++;
					smb = match.match(/^[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ(]/m);
					if (smb) match = match.slice(1);
					else smb = "";


					return smb+
					'<span class="bg_data_title" data-title="'+ref[0]+'"'+'" data-langs="'+bg_bibrefs_langs+'" title="'+ref[1]+'"'+'>'+
						'<span class="bg_data_tooltip"></span>'+
						'<a href="https://azbyka.ru/biblia/?'+ref[0]+bg_bibrefs_langs+'"'+refStyle+' target="_blank">'+match+'</a>'+
					'</span>';
				} else return match;
			} else if (type == 2) {
				smb = match.match(/^[^0-9A-zА-яёіїєґўЁІЇЄҐЎЈјЋћЂђЊњЉљЏџ]/m);
				if (smb) match = match.slice(1);
				else smb = "";
				return smb+'<a '+replaceStr+refStyle+' target="_blank">'+match+'</a>';
			}
		});
		
		frag = (function(){
			wrap = document.createElement('div'),
			frag = document.createDocumentFragment();
//			wrap.innerHTML = html;
			setContent(wrap, html);
			while (wrap.firstChild) {
				frag.appendChild(wrap.firstChild);
			}
			return frag;
		})();
		parent.insertBefore(frag, currentNode);
		parent.removeChild(currentNode);
	}
}

// Создаем ссылку и текст всплывающей подсказки 
function createRreference(book, ch){
	
	// Полное наименование книги и кол-во глав
	var title="";
	var chapters = 0;
	for (i=0; i<bg_bibrefs_bookTitle.length; i++) {
		var the_book = bg_bibrefs_bookTitle[i];
		if (book == the_book['sign']){
			title = the_book['title'];
			chapters = the_book['chapters'];
			break;
		}
	}
	if (parseInt(ch) > chapters) {
		// В книгах с одной главой, допускается указывать только номер стиха
		if (chapters==1 && ch.indexOf(':')==-1) {
			ch = "1:"+ch;
		} else return false; // Номер главы больше максимального
	}
	// Убираем пробелы
	ch = ch.replace(/\s+/g,'');
	// Преобразуем все тире к стандартному виду
	ch = ch.replace(/[\u2010-\u2015]/g, '-');

	// Проверяем, не примеяется ли западная нотация?
	if (isWesternNotation (ch, chapters)) {
		// Заменяем запятую на двоеточие, оставляя запятые как разделители глав
		var prevDelimeter=',';
		ch = ch.replace(/[-:,\\.;]/g,function (match, p1, offset, string) {
			if (match == ',' && (prevDelimeter == ',' || prevDelimeter == ';')) match = ':';
			prevDelimeter = match;
			return match;
		});		
	}
	// Заменяем точку на запятую
	ch = ch.replace(/\./g,',');		
   return [book+'.'+ch, title+' '+ch];
}
// Проверяем, является ли запись западной нотацией
function isWesternNotation (ch, chapters) {
	if (ch.match(/^(\d{1,3}),/m)) {							// Если после первой цифры идет запятая 
		if (ch.match(/[.\-]/g)) return true;				// и при этом выражение содержит точку или тире
		// Особый случай: два числа, разделенных запятой
		if (ch.match(/^\d{1,3},\d{1,3}$/m)) {
			var arr = ch.split(',');
			// Западная нотация всегда если:
			if (parseInt(arr[0]) >= parseInt(arr[1]) ||		// Первая цифра больше или равна второй
				parseInt(arr[1]) > chapters)				// Вторая цифра больше кол-ва глав в книге
				return true;
			if (!bg_bibrefs_collision) return true;			// Опция отключена - западная нотация
		}
	}
	return false;
}


/* ============================================================================================== */


// Хранилище для заданных значений ширины, максимальной высоты и вертикального положения подсказки
var bg_bibrefs_tipWidth;
var bg_bibrefs_tipMaxHeight;	
var bg_bibrefs_tipTop;	

/*******************************************************************************
   При создании страницы для всех элементов 'a.bg_data_title' 
   запрашивает текст Библии и заполняет всплывающую подсказку
*******************************************************************************/  
function bg_bibrefs_start(){
	
	if (!bg_bibrefs_popup) return;

	// Сохраняем заданные значения ширины, максимальной высоты и вертикального положения подсказки
	var tooltip = jQuery('span.bg_data_tooltip:first');	
	bg_bibrefs_tipWidth = parseInt(tooltip.css('width'));
	bg_bibrefs_tipMaxHeight = parseInt(tooltip.css('max-height'));	
	bg_bibrefs_tipTop = parseInt(tooltip.css('top'));	
	
	jQuery('span.bg_data_title').each (function(){
		var el = jQuery(this);
		var tooltip = el.children('span.bg_data_tooltip');	
		if (tooltip.css('position')=='fixed') return;
		var ref = el.attr('data-title');
		var langs = el.attr('data-langs');

		if (ref != "") {						// Книга задана
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
					if (bg_bibrefs_interpretation) interpret = the_book['interpret'];
					break;
				}
			}

			if (filename) {
				// Текст Библии
				var verses = "";
				var mark = "";
				var xhr = new XMLHttpRequest();
//				xhr.open("GET", "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/bible/"+filename, true);
				xhr.open("GET", chrome.extension.getURL("bible/"+filename), true);
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						verses = bg_bibrefs_parseRefs(JSON.parse(xhr.responseText), chapter, interpret);
						verses = "<span class='bg_data_verses'>"+verses+"</span>";
						fn = filename.split ('/'); 
						if (bg_bibrefs_BibleLanguage != fn[0]) mark = "<sup>["+fn[0]+"]</sup>";
						var book_title = "<table><tr><td width='24px'><img src='"+chrome.extension.getURL("img/expand.png")+"' class='bg_expand_button' width=16 height=16 data-title1='Развернуть' data-title2='Скрыть' /></td>"+
							"<td><strong><a href='https://azbyka.ru/biblia/?"+ref+langs+"' title='"+chrome.i18n.getMessage("extBookTitle")+"' target='_blank'>"+title+"</a></strong>"+mark+"</td></tr></table>";
						// Добавляем стихи в подсказку
//						tooltip.html(book_title + verses);		
						setContent(tooltip.get(0), book_title + verses);
						el.attr('data-title', "");
						el.attr('title', "");
					}
						
				}
				xhr.send();	
			}
		}
	});

/*******************************************************************************
   При наведении мыши на ссылку, если подсказка не пуста, 
   отображает подсказку на экране
*******************************************************************************/  
var bg_bibrefs_intervalID;

jQuery('span.bg_data_title')
	.mouseenter(function(e){
		var el = jQuery(this);
		var tooltip = el.children('span.bg_data_tooltip');	
		if (tooltip.css('position')=='fixed') return;

	// Выводим подсказку на экран
		tooltip_mini(tooltip, el, e);
	})
/*******************************************************************************
   При удалении мыши от ссылки, удаляет подсказку с экрана
*******************************************************************************/  
	.mouseleave (function(e){
		clearInterval(bg_bibrefs_intervalID);
		var tooltip = jQuery(this).children('span.bg_data_tooltip');
		if (tooltip.css('position')=='fixed') return;
		tooltip.css('display', "none");
	});
} 

/*******************************************************************************
   Отображение подсказки под ссылкой
*******************************************************************************/  
function tooltip_mini(tooltip, el, e) {	
	if (!tooltip.html()) return;
	// Восстанавливаем заданные значения ширины, максимальной высоты и вертикального положения подсказки 
	tooltip.css({
		'width': bg_bibrefs_tipWidth+"px",		// Восстанавливаем заданную ширину подсказки
		'max-height': bg_bibrefs_tipMaxHeight+"px",	// Восстанавливаем заданную максимальную высоту подсказки
		'top': bg_bibrefs_tipTop+"px",			// Восстанавливаем вертикальное положение подсказки
		'position':'absolute',					// Абсолютная позиция
		'display': "block"						// Строчно-блочный элемент 
	});
	tooltip.children('span').css({
		'margin':  '5px -5px -5px -10px',		// Отступ
		'padding': '5px 5px 5px 10px',			// Поля 
		'overflow-y': 'auto', 					// Разрешить при необходимости скроллинг по вертикали 
		'overflow-x': 'hidden', 				// Запретить скроллинг по горизонтали 
		'border-top': "1px solid #767676" 		// Параметры рамки 
	});

	var padding = parseInt(tooltip.css('paddingLeft'))+parseInt(tooltip.css('paddingRight'))+parseInt(tooltip.css('border-Left-Width'))+parseInt(tooltip.css('border-Right-Width'));
	// Координаты контейнера, внутри которого будут отображаться подсказки. Например для <div id="content">, это "#content"
	var content = jQuery('#content1');
	if (content.length < 1) content = jQuery('body');	// Если тема не содержит, указанный контейнер, то определяем положение body
	var c_left = content.position().left+parseInt(content.css('paddingLeft'))+parseInt(content.css('marginLeft'))+parseInt(content.css('border-Left-Width'));
	var c_right =c_left+content.width();
//	alert(c_left+" "+c_right);
	
	var tipWidth = parseInt(tooltip.css('width'));	// Заданная ширина подсказки

	var pos = el.offset();						// Позиция родительского элемента
	var x = e.pageX-(el.offset().left-pos.left)-12;	// Получаем координаты по оси X - 12
	
	var y =  pos.top+el.height(); 					// Получаем координаты по оси Y
	tooltip.css('height', "auto");					// Высота определяется автоматически
	var tipHeight = tooltip.height(); 				// Вычисляем высоту подсказки

	// Подсказка не должна выходить за пределы контейнера
	if (tipWidth+padding > content.width()) tipWidth = content.width()-padding;
	if (x < c_left) x = c_left;
	if (x+tipWidth+padding > c_right) x = c_right-tipWidth-padding-1;

	// Задаем размеры контейнера с текстом
	container = tooltip.children('span');
	var padding_w = parseInt(container.css('marginLeft'))+parseInt(container.css('marginRight'))+parseInt(container.css('paddingLeft'))+parseInt(container.css('paddingRight'))+parseInt(container.css('border-Left-Width'))+parseInt(container.css('border-Right-Width'));
	var divWidth = tipWidth - padding_w;
	var padding_h = parseInt(container.css('paddingTop'))+parseInt(container.css('paddingBottom'))+parseInt(container.css('border-Top-Width'))+parseInt(container.css('border-Bottom-Width'));
	var divHeight = parseInt(tooltip.css('max-height')) - container.position().top - padding_h;
	container.css({
		'width': divWidth+"px",
		'max-height': divHeight+"px"
	});
	
	// Определяем дистанцию от ниждего края окна браузера до блока, содержащего подсказку        
	tipHeight = tooltip.height(); 				// Вычисляем высоту подсказки
	var tipVisY = jQuery(window).scrollTop()+jQuery(window).height() - (y + tipHeight+(pos.top-el.position().top));
	if ( tipVisY < 20 ) { // Если высота подсказки превышает расстояние от нижнего края окна браузера до курсора,
		y = pos.top-tipHeight-el.height()/2;  		// то распологаем область с подсказкой над курсором
	} 
	//Присваиваем найденные координаты области, содержащей подсказку
	x = Math.round(x);							
	y = Math.round(y);

	tooltip.css({
		'width': tipWidth+"px",
//		'left': x+"px",
		'position':'absolute',					// Абсолютная позиция
		'display': "block"						// Строчно-блочный элемент 
	});	
	tooltip.offset({top:y, left:x});
	// Назначаем название и действие кнопке
	var img = jQuery('span.bg_data_tooltip img');
	img.unbind();								// Удаляем все обработчики событий
	img.attr('title', img.attr('data-title1'));		//  Название 1
	img.click (function () {
		var tooltip = jQuery(this).closest('span.bg_data_tooltip');	
		tooltip.css({
			'position': 'absolute',				// Абсолютная позиция
			'display': "none"					// Скрыть подсказку
		});
		tooltip_maxi(tooltip);					// Развернуть подсказку			
	});
	// Выделение текста по щелчку
	tooltip.children('span').click(function() {
		var e=this; 
		if(window.getSelection){ 
			var s=window.getSelection(); 
			if(s.setBaseAndExtent){ 
				s.setBaseAndExtent(e,0,e,e.childNodes.length-1); 
			}else{ 
				var r=document.createRange(); 
				r.selectNodeContents(e); 
				s.removeAllRanges(); 
				s.addRange(r);
			} 
		}else if(document.getSelection){ 
			var s=document.getSelection(); 
			var r=document.createRange(); 
			r.selectNodeContents(e); 
			s.removeAllRanges(); 
			s.addRange(r); 
		}else if(document.selection){ 
			var r=document.body.createTextRange(); 
			r.moveToElementText(e); 
			r.select();
		}
	});
}	
/*******************************************************************************
   Отображение подсказки посередине экрана
*******************************************************************************/  
function tooltip_maxi(tooltip) {

	// Создаем блок для затемнения фона в том же контексте, при этом z-index должен быть меньше чем у tooltip
	var data_title=jQuery(tooltip).parent();
	jQuery("<div/>", { "id": "bg_BG_overlay" }).appendTo(data_title);
	// Восстанавливаем заданные значения ширины, максимальной высоты и вертикального положения подсказки 
	tooltip.css({
		'width': bg_bibrefs_tipWidth+"px",			// Восстанавливаем заданную ширину подсказки
		'max-height': bg_bibrefs_tipMaxHeight+"px",	// Восстанавливаем заданную максимальную высоту подсказки
		'top': bg_bibrefs_tipTop+"px",				// Восстанавливаем вертикальное положение подсказки
		'position':'fixed',						// Фиксированная позиция
		'display': "block"						// Строчно-блочный элемент 
	});
	var padding = parseInt(tooltip.css('paddingLeft'))+parseInt(tooltip.css('paddingRight'))+parseInt(tooltip.css('border-Left-Width'))+parseInt(tooltip.css('border-Right-Width'));
	// Координаты body (размещаем по центру экрана)
	var content = jQuery('body');
	var cc_left = content.offset().left+parseInt(content.css('paddingLeft'))+parseInt(content.css('border-Left-Width'));

	var tipWidth = content.width()-padding-40;
	var tipWidthMax = parseInt(tooltip.css('max-width'));
	if (tipWidth > tipWidthMax) tipWidth = tipWidthMax;
	var tipHeight = jQuery(window).height() - 2*bg_bibrefs_tipTop;
	tooltip.css({
		'width': tipWidth+"px",
		'max-height': tipHeight+"px",
		'height': "auto"
	});
	tipWidth = tooltip.width();
	var x = cc_left+(content.width() - tipWidth-padding)/2;

	// Задаем размеры контейнера с текстом
	container = tooltip.children('span');
	var padding_w = parseInt(container.css('marginLeft'))+parseInt(container.css('marginRight'))+parseInt(container.css('paddingLeft'))+parseInt(container.css('paddingRight'))+parseInt(container.css('border-Left-Width'))+parseInt(container.css('border-Right-Width'));
	var divWidth = tipWidth - padding_w;
	var padding_h = parseInt(container.css('paddingTop'))+parseInt(container.css('paddingBottom'))+parseInt(container.css('border-Top-Width'))+parseInt(container.css('border-Bottom-Width'));
	var divHeight = tipHeight - container.position().top - padding_h;
	container.css({
		'width': divWidth+"px",
		'max-height': divHeight+"px"
	});
	tipHeight = tooltip.height();
	var y = (jQuery(window).height() - tipHeight)/2;
	

	//Присваиваем найденные координаты области, содержащей подсказку
	x = Math.round(x);							
	y = Math.round(y);
	tooltip.css({
		'width': tipWidth+"px",
		'top': y+"px",
		'left': x+"px",
		'position':'fixed',						// Фиксированная позиция
		'display': "block"						// Строчно-блочный элемент 
	});	
	// Назначаем название и действие кнопке
	var img = jQuery('span.bg_data_tooltip img');
	img.unbind();								// Удаляем все обработчики событий
	img.attr('title', img.attr('data-title2'));		//  Название 2
	img.click (function () {					// Щелчок по кнопке
		jQuery(this).closest('span.bg_data_tooltip').css({
			'position': 'absolute',				// Абсолютная позиция
			'display': "none"					// Скрыть подсказку
		});
		jQuery( "div" ).remove( "#bg_BG_overlay" );	// Удаляем блок затемнения фона
	});
	jQuery(document).unbind();
	jQuery(document).click(function(event) {	// Щелчок за пределами подсказки
		if (jQuery(event.target).closest("span.bg_data_tooltip").length) return;
		jQuery('span.bg_data_tooltip').css({
			'position': 'absolute',				// Абсолютная позиция
			'display': "none"					// Скрыть подсказку
		});
		jQuery( "div" ).remove( "#bg_BG_overlay" );	// Удаляем блок затемнения фона
	});
}
