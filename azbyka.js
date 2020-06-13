chrome.runtime.sendMessage({method: "highlightBibleReferences"}, function(response){
	var bgBibrefsButtons = document.getElementsByClassName("bgBibrefsExtension");
	for (var i = 0; i < bgBibrefsButtons.length; i++) {
		bgBibrefsButtons[i].style.display='none';
	}
	
});

/************************************************************
	Этот скрипт размещен на сайте Отечника
*************************************************************
var pathname = window.location.pathname;
var hash = window.location.hash;
if(pathname.indexOf('otechnik/Lopuhin/tolkov') + 1) {
	bgGoToBibleVerse(pathname, hash);
}
function bgGoToBibleVerse(pathname, hash) {
	var the_verse = hash.substr(3);
	var bgBibleVerse = document.getElementsByClassName("h5");
	
	// Расставляем якори 
	for (var i = 0; i < bgBibleVerse.length; i++) {
		if (bgBibleVerse[i].hasAttribute('id')) {
			if (bgBibleVerse[i].getAttribute('id') == the_verse) return;
			continue;
		}
		var elems = bgBibleVerse[i].getElementsByTagName('a');
		if (elems && elems[0]) {
			var href = elems[0].getAttribute('href');
			var verses = href.match(/:(\d+(-\d+)?)/);
			if (verses && verses[1]) bgBibleVerse[i].setAttribute('id', 'v_'+verses[1]);
		}
	}
	// Переход на толкование стиха
	for (var i = 0; i < bgBibleVerse.length; i++) {
		if (bgBibleVerse[i].hasAttribute('id')) {
			verses = bgBibleVerse[i].getAttribute('id');
			var verse = verses.match(/(\d+)-?(\d+)?/);
			if (verse) {
				if (verse[2] && the_verse >= verse[1] && the_verse <= verse[2]) window.location.href=pathname+"#"+verses;
				else if (verse[1]&& the_verse == verse[1]) window.location.href=pathname+"#"+verses;
			}
		}
	}
	return;
}
*/	
