<?php
	$bg_bibrefs_lang_name = 'Српски језик';									// Название языка (перевода Библии)
	$bg_bibrefs_book_lang = 'sr';														// Обозначение языка
	$bg_bibrefs_book_letters = 'ЈјЋћЂђЊњЉљЏџ';											// Дополнительные символы языка
	$bg_bibrefs_book_length = 15;														// Максимальная длина обозначения книг Библии
	$bg_bibrefs_chapter = 'Поглавље';													// Перевод слова "Глава"
	$bg_bibrefs_ch = 'гл.';																// Сокращение от слова "Глава"
	$bg_bibrefs_psalm = 'Псалам';														// Перевод слова "Псалом"
	$bg_bibrefs_ps = 'пс.';																// Сокращение от слова "Псалом"
	$bg_bibrefs_lang_folder = substr(strrchr(__DIR__, "/"), 1);							// Путь к текущей папке
	
	$bg_bibrefs_url = array(		// Допустимые обозначения книг Священного Писания
		// Ветхий Завет
		// Пятикнижие Моисея															
		'Gen'		=>'Gen',		//'Книга Бытия', 	
		'Бытие'		=>'Gen',					
		'Быт'		=>'Gen',					
		'1Мој'		=>'Gen',
		'Ex'		=>'Ex',	 		//'Книга Исход', 			
		'Исх'		=>'Ex',	 					
		'2Мој'		=>'Ex',		
		'Lev'		=>'Lev', 		//'Книга Левит',	
		'Левит'		=>'Lev', 							
		'Лев'		=>'Lev', 							
		'Лв'		=>'Lev', 							
		'3Мој'		=>'Lev', 		
		'Num'		=>'Num', 		//'Книга Числа',	
		'Числа'		=>'Num', 						
		'Числ'		=>'Num', 						
		'Чис'		=>'Num', 						
		'Чс'		=>'Num', 						
		'4Мој'		=>'Num',
		'Deut'		=>'Deut',		//'Второзаконие',		
		'Втор'		=>'Deut',							
		'5Мој'		=>'Deut',
		// «Пророки» (Невиим) 
		'Nav'		=>'Nav', 		//'Книга Иисуса Навина',	
		'Нав'		=>'Nav', 						
		'ИсНав'		=>'Nav', 						
		'ИсН'		=>'Nav',
		'Judg'		=>'Judg', 		//'Книга Судей Израилевых', 	
		'Судей'		=>'Judg', 						
		'Суд'		=>'Judg', 						
		'Сд'		=>'Judg', 						
		'Rth'		=>'Rth',		//'Книга Руфь',	
		'Руфь'		=>'Rth',						
		'Руф'		=>'Rth',						
		'Рута'		=>'Rth',
		'1Sam'		=>'1Sam',		//'Первая книга Царств (Первая книга Самуила)', 	
		'1Царей'		=>'1Sam',						
		'1Сам'		=>'1Sam',						
		'1См'		=>'1Sam',						
		'2Sam'		=>'2Sam',		//'Вторая книга Царств (Вторая книга Самуила)', 	
		'2Царей'		=>'2Sam',						
		'2Сам'		=>'2Sam',						
		'2См'		=>'2Sam',						
		'1King'		=>'1King', 		//'Третья книга Царств (Первая книга Царей)', 
		'3Царей'		=>'1King', 					
		'3Цар'		=>'1King', 					
		'1Цар'	=>'1King', 					
		'2King'		=>'2King', 		//'Четвертая книга Царств (Вторая книга Царей)', 
		'4Царей'		=>'2King', 					
		'4Цар'		=>'2King', 					
		'2Цар'	=>'2King', 					
		'1Chron'	=>'1Chron',		//'Первая книга Паралипоменон (Первая книга Хроник, Первая Летопись)', 
		'1Пар'		=>'1Chron',		
		'1Хрон'		=>'1Chron',		
		'1Хр'		=>'1Chron',		
		'1Лет'		=>'1Chron',		
		'1Дн'		=>'1Chron',
		'2Chron'	=>'2Chron',		//'Вторая книга Паралипоменон (Вторая книга Хроник, Вторая Летопись)', 
		'2Пар'		=>'2Chron',		
		'2Хрон'		=>'2Chron',		
		'2Хр'		=>'2Chron',		
		'2Лет'		=>'2Chron',		
		'2Дн'		=>'2Chron',
		'Ezr'		=>'Ezr', 		//'Книга Ездры (Первая книга Ездры)', 
		'1Ездр'		=>'Ezr', 				
		'1Езд'		=>'Ezr', 				
		'Ездр'		=>'Ezr', 				
		'Езд'		=>'Ezr', 				
		'Ез'		=>'Ezr', 				
		'Језд'		=>'Ezr',
		'Nehem'		=>'Nehem', 		//'Книга Неемии',	
		'Неем'		=>'Nehem', 						
		'Нм'		=>'Nehem', 						
		'Нем'		=>'Nehem',
		'Est'		=>'Est', 		//'Книга Есфири',  
		'Есф'		=>'Est', 							
		'Эсф'		=>'Est', 							
		'Јест'		=>'Est',
		// «Писания» (Ктувим)		
		'Job'		=>'Job', 		//'Книга Иова',			
		'Иов'		=>'Job', 								
		'Јов'		=>'Job',
		'Ps'		=>'Ps',			//'Псалтирь', 	
		'Псалт'		=>'Ps',							
		'Псал'		=>'Ps',							
		'Пс'		=>'Ps',							
		'Prov'		=>'Prov', 		//'Книга Притчей Соломоновых', 
		'Притчи'	=>'Prov', 					
		'Притч'		=>'Prov', 					
		'Прит'		=>'Prov', 					
		'Приче'		=>'Prov',
		'Eccl'		=>'Eccl', 		//'Книга Екклезиаста, или Проповедника', 		
		'Еккл'		=>'Eccl', 							
		'Екк'		=>'Eccl', 							
		'Екл'		=>'Eccl', 							
		'Ек'		=>'Eccl', 							
		'Проп'		=>'Eccl',
		'Song'		=>'Song',		//'Песнь песней Соломона',		
		'Песня'		=>'Song',							
		'Песн'		=>'Song',							
		'Пес'		=>'Song',
		'Is'		=>'Is', 		//'Книга пророка Исайи',		
		'Исайи'		=>'Is', 							
		'Исаи'		=>'Is', 							
		'Иса'		=>'Is',
		'Ис'		=>'Is', 							
		'Jer'		=>'Jer',		//'Книга пророка Иеремии',			
		'Иер'		=>'Jer',								
		'Јер'		=>'Jer',
		'Lam'		=>'Lam', 		//'Книга Плач Иеремии', 	
		'Плч'		=>'Lam', 						
		'Плач'		=>'Lam', 						
		'Ezek'		=>'Ezek',		//'Книга пророка Иезекииля',		
		'Иез'		=>'Ezek',							
		'Језек'		=>'Ezek',
		'Dan'		=>'Dan', 		//'Книга пророка Даниила',			
		'Дан'		=>'Dan', 								
		'Днл'		=>'Dan', 								
		// Двенадцать малых пророков 
		'Hos'		=>'Hos',  		//'Книга пророка Осии', 		
		'Осии'		=>'Hos',  							
		'Ос'		=>'Hos',  							
		'Joel'		=>'Joel', 		//'Книга пророка Иоиля',
		'Иоиль'		=>'Joel', 					
		'Иоил'		=>'Joel', 					
		'Јоило'		=>'Joel',
		'Am'		=>'Am',			//'Книга пророка Амоса',	
		'Амос'		=>'Am',							
		'Амс'		=>'Am',							
		'Ам'		=>'Am',							
		'Avd'		=>'Avd', 		//'Книга пророка Авдия',			
		'Авд'		=>'Avd', 								
		'Авдија'	=>'Avd',
		'Jona'		=>'Jona', 		//'Книга пророка Ионы',	
		'Иона'		=>'Jona', 						
		'Ион'		=>'Jona', 						
		'Јона'		=>'Jona',
		'Mic'		=>'Mic', 		//'Книга пророка Михея',			
		'Михей'		=>'Mic', 								
		'Мих'		=>'Mic', 								
		'Мх'		=>'Mic', 								
		'Naum'		=>'Naum', 		//'Книга пророка Наума',		
		'Наум'		=>'Naum', 							
		'Habak'		=>'Habak', 		//'Книга пророка Аввакума',		
		'Аввак'		=>'Habak', 							
		'Авв'		=>'Habak', 							
		'Авак'		=>'Habak',
		'Ав'		=>'Habak', 							
		'Sofon'		=>'Sofon', 		//'Книга пророка Софонии',					
		'Софон'		=>'Sofon', 							
		'Соф'		=>'Sofon', 							
		'Hag'		=>'Hag', 		//'Книга пророка Аггея',					
		'Агг'		=>'Hag', 							
		'Аг'		=>'Hag', 							
		'Агеј'		=>'Hag', 		//'Книга пророка Аггея',					
		'Zah'		=>'Zah',		//'Книга пророка Захарии',						
		'Захар'		=>'Zah',								
		'Зах'		=>'Zah',								
		'Зхр'		=>'Zah',								
		'Mal'		=>'Mal',		//'Книга пророка Малахии',						
		'Малах'		=>'Mal',								
		'Мал'		=>'Mal',								
		// Второканонические книги
		'1Mac'		=>'1Mac',		//'Первая книга Маккавейская',					
		'1Мак'		=>'1Mac',							
		'2Mac'		=>'2Mac', 		//'Вторая книга Маккавейская',					
		'2Мак'		=>'2Mac', 							
		'3Mac'		=>'3Mac', 		//'Третья книга Маккавейская',					
		'3Мак'		=>'3Mac', 							
		'Bar'		=>'Bar', 		//'Книга пророка Варуха',						
		'Варух'		=>'Bar', 								
		'Вар'		=>'Bar', 								
		'2Ezr'		=>'2Ezr',		//'Вторая книга Ездры', 				
		'2Ездр'		=>'2Ezr',						
		'2Езд'		=>'2Ezr',						
		'3Ezr'		=>'3Ezr',		//'Третья книга Ездры',				
		'3Ездр'		=>'3Ezr',						
		'3Езд'		=>'3Ezr',						
		'Judf'		=>'Judf', 		//'Книга Иудифи',			
		'Иудифь'	=>'Judf', 					
		'Иудиф'		=>'Judf', 					
		'pJer'		=>'pJer', 		//'Послание Иеремии',	
		'ПослИер'	=>'pJer', 			
		'Solom'		=>'Solom', 		//'Книга Премудрости Соломона',		
		'Прем'		=>'Solom', 				
		'ПремСол'	=>'Solom', 				
		'Sir'		=>'Sir', 		//'Книга Премудрости Иисуса, сына Сирахова', 				
		'Сирах'		=>'Sir', 						
		'Сир'		=>'Sir', 						
		'Tov'		=>'Tov', 		//'Книга Товита',				
		'Товит'		=>'Tov', 						
		'Тов'		=>'Tov', 						
		// Новый Завет
		// Евангилие
		'Mt'		=>'Mt', 		//'Евангелие от Матфея',				
		'Мф'		=>'Mt', 						
		'Мт'		=>'Mt', 						
		'Матфея'	=>'Mt', 						
		'Матф'		=>'Mt', 						
		'Мат'		=>'Mt',			
		'Mk'		=>'Mk', 		//'Евангелие от Марка',			
		'Марка'		=>'Mk', 					
		'Марк'		=>'Mk', 					
		'Мар'		=>'Mk', 					
		'Мр'		=>'Mk', 					
		'Мк'		=>'Mk', 					
		'Lk'		=>'Lk',			//'Евангелие от Луки',			
		'Луки'		=>'Lk',						
		'Лука'		=>'Lk',
		'Лук'		=>'Lk',						
		'Лк'		=>'Lk',						
		'Jn'		=>'Jn',			//'Евангелие от Иоанна',				
		'Иоанна'	=>'Jn',							
		'Иоан'		=>'Jn',							
		'Ин'		=>'Jn',							
		'Јован'		=>'Jn',
		// Деяния и послания Апостолов
		'Act'		=>'Act', 		//'Деяния святых Апостолов',				
		'Деяния'	=>'Act', 						
		'Деян'		=>'Act', 						
		'Дела'		=>'Act',
		'Jac'		=>'Jac', 		//'Послание Иакова',						
		'Иакова'	=>'Jac', 								
		'Иаков'		=>'Jac', 								
		'Иак'		=>'Jac', 								
		'Јаков'		=>'Jac',
		'1Pet'		=>'1Pet',		//'Первое послание Петра', 			
		'1Петра'	=>'1Pet',					
		'1Петр'		=>'1Pet',					
		'1Пет'		=>'1Pet',					
		'2Pet'		=>'2Pet',		//'Второе послание Петра',			
		'2Петра'	=>'2Pet',					
		'2Петр'		=>'2Pet',					
		'2Пет'		=>'2Pet',					
		'1Jn'		=>'1Jn', 		//'Первое послание Иоанна'				
		'1Иоанна'	=>'1Jn', 						
		'1Иоан'		=>'1Jn', 						
		'1Ин'		=>'1Jn', 						
		'1Јов'		=>'1Jn',
		'2Jn'		=>'2Jn', 		//'Второе послание Иоанна',				
		'2Иоанна'	=>'2Jn', 						
		'2Иоан'		=>'2Jn', 						
		'2Ин'		=>'2Jn', 						
		'2Јов'		=>'2Jn',
		'3Jn'		=>'3Jn', 		//'Третье послание Иоанна',				
		'3Иоанна'	=>'3Jn', 						
		'3Иоан'		=>'3Jn', 						
		'3Ин'		=>'3Jn', 						
		'3Јов'		=>'3Jn',
		'Juda'		=>'Juda', 		//'Послание Иуды',					
		'Иуды'		=>'Juda', 							
		'Иуда'		=>'Juda', 							
		'Иуд'		=>'Juda', 							
		'Јуда'		=>'Juda',
		// Послания апостола Павла
		'Rom'		=>'Rom', 		//'Послание апостола Павла к Римлянам',				
		'Римл'		=>'Rom', 						
		'Рим'		=>'Rom', 						
		'1Cor'		=>'1Cor', 		//'Первое послание апостола Павла к Коринфянам',					
		'1Кор'		=>'1Cor', 							
		'2Cor'		=>'2Cor',		//'Второе послание апостола Павла к Коринфянам',					
		'2Кор'		=>'2Cor',							
		'Gal'		=>'Gal', 		//'Послание апостола Павла к Галатам',						
		'Галат'		=>'Gal', 								
		'Гал'		=>'Gal', 								
		'Eph'		=>'Eph', 		//'Послание апостола Павла к Ефесянам'					
		'Ефесян'	=>'Eph', 							
		'Ефес'		=>'Eph', 							
		'Еф'		=>'Eph', 							
		'Phil'		=>'Phil',  		//'Послание апостола Павла к Филиппийцам',		
		'Филип'		=>'Phil',  				
		'Филиб'		=>'Phil',
		'Фил'		=>'Phil',  				
		'Флп'		=>'Phil',  				
		'Col'		=>'Col',		//'Послание апостола Павла к Колоссянам',						
		'Колос'		=>'Col',								
		'Кол'		=>'Col',								
		'1Thes'		=>'1Thes', 		//'Первое послание апостола Павла к Фессалоникийцам (Солунянам)',			
		'1Солун'	=>'1Thes', 					
		'1Сол'		=>'1Thes', 					
		'1Фес'		=>'1Thes', 					
		'2Thes'		=>'2Thes', 		//'Второе послание апостола Павла к Фессалоникийцам (Солунянам)',			
		'2Солун'	=>'2Thes', 					
		'2Сол'		=>'2Thes', 					
		'2Фес'		=>'2Thes', 					
		'1Tim'		=>'1Tim', 		//'Первое послание апостола Павла к Тимофею', 					
		'1Тимоф'	=>'1Tim', 							
		'1Тим'		=>'1Tim', 							
		'2Tim'		=>'2Tim',		//'Второе послание апостола Павла к Тимофею',					
		'2Тимоф'	=>'2Tim',							
		'2Тим'		=>'2Tim',							
		'Tit'		=>'Tit', 		//'Послание апостола Павла к Титу', 						
		'Титу'		=>'Tit', 								
		'Тита'		=>'Tit', 								
		'Тит'		=>'Tit', 								
		'Phlm'		=>'Phlm', 		//'Послание апостола Павла к Филимону', 				
		'Филим'		=>'Phlm', 						
		'Флм'		=>'Phlm', 						
		'Hebr'		=>'Hebr', 		//'Послание апостола Павла к Евреям',					
		'Евреям'	=>'Hebr', 							
		'Евр'		=>'Hebr', 							
		'Јевр'		=>'Hebr',
		'Apok'		=>'Apok',		//'Откровение Иоанна Богослова (Апокалипсис)'				
		'Откр'		=>'Apok',					
		'Отк'		=>'Apok',					
		'Апок'		=>'Apok'
	);				


	$bg_bibrefs_bookTitle = array(			// Полные названия Книг Священного Писания
		// Ветхий Завет
		// Пятикнижие Моисея
		'Gen' 		=>'Прва књига Мојсијева (која се зове Постање)', 
		'Ex' 		=>'Друга књига Мојсијева (која се зове Излазак)', 
		'Lev' 		=>'Трећа књига Мојсијева (која се зове Левитска)', 
		'Num' 		=>'Четврта књига Мојсијева (која се зове Бројеви)', 
		'Deut' 		=>'Пета књига Мојсијева (која се зове Закони поновљени)',
		// «Пророки» (Невиим) 
		'Nav' 		=>'Књига Исуса Навина',
		'Judg'		=>'Књига о судијама', 
		'Rth' 		=>'Књига о Рути',
		'1Sam' 		=>'Прва књига Самуилова (која се зове и Прва књига о царевима )', 
		'2Sam' 		=>'Друга књига Самуилова (која се зове и Друга књига о царевима )', 
		'1King' 	=>'Прва књига о царевима (која се зове и Трећа књига о царевима )', 
		'2King' 	=>'Друга књига о царевима (која се зове и Четврта књига о царевима )',
		'1Chron' 	=>'Прва књига дневника', 
		'2Chron' 	=>'Друга књига дневника', 
		'Ezr' 		=>'Књига Јездрина', 
		'Nehem' 	=>'Књига Немијина', 
		'Est' 		=>'Књига о Јестири',  
		// «Писания» (Ктувим)
		'Job' 		=>'Књига о Јову',
		'Ps' 		=>'Псалми Давидови', 
		'Prov' 		=>'Приче Соломунове', 
		'Eccl' 		=>'Књига Проповједникова', 
		'Song' 		=>'Пјесма над пјесмама',
		'Is' 		=>'Књига пророка Исаије', 
		'Jer' 		=>'Књига пророка Јеремије',
		'Lam' 		=>'Плач Јеремијин', 
		'Ezek'	 	=>'Књига пророка Језекиља',
		'Dan' 		=>'Књига пророка Данила', 
		// Двенадцать малых пророков 
		'Hos' 		=>'Књига пророка Осије', 
		'Joel'	 	=>'Књига пророка Јоила',
		'Am' 		=>'Књига пророка Амоса', 
		'Avd' 		=>'Књига пророка Авдија', 
		'Jona' 		=>'Књига пророка Јоне',
		'Mic' 		=>'Књига пророка Михеја', 
		'Naum' 		=>'Књига пророка Наума',
		'Habak' 	=>'Књига пророка Авакума', 
		'Sofon' 	=>'Књига пророка Софоније', 
		'Hag' 		=>'Књига пророка Агеја', 
		'Zah' 		=>'Књига пророка Захарије',
		'Mal' 		=>'Књига пророка Малахије',
/*		// Второканонические книги
		'1Mac' 		=>'Первая книга Маккавейская',
		'2Mac' 		=>'Вторая книга Маккавейская', 
		'3Mac' 		=>'Третья книга Маккавейская', 
		'Bar' 		=>'Книга пророка Варуха', 
		'2Ezr' 		=>'Вторая книга Ездры', 
		'3Ezr' 		=>'Третья книга Ездры',
		'Judf' 		=>'Книга Иудифи', 
		'pJer' 		=>'Послание Иеремии', 
		'Solom' 	=>'Книга Премудрости Соломона',
		'Sir' 		=>'Книга Премудрости Иисуса, сына Сирахова', 
		'Tov' 		=>'Книга Товита',
*/		// Новый Завет
		// Евангилие
		'Mt' 		=>'Свето Јеванђеље по Матеју',
		'Mk' 		=>'Свето Јеванђеље по Марку', 
		'Lk' 		=>'Свето Јеванђеље по Луки', 
		'Jn' 		=>'Свето Јеванђеље по Јовану', 
		// Деяния и послания Апостолов
		'Act' 		=>'Дјела светих апостола', 
		'Jac' 		=>'Саборна посланица (светог апостола Јакова)', 
		'1Pet'	 	=>'Прва саборна посланица (светог апостола Петра)', 
		'2Pet'	 	=>'Друга саборна посланица (светог апостола Петра)',	
		'1Jn' 		=>'Прва саборна посланица (светог апостола Јована Богослова)', 
		'2Jn' 		=>'Друга саборна посланица (светог апостола Јована Богослова)', 
		'3Jn' 		=>'Трећа саборна посланица (светог апостола Јована Богослова)',
		'Juda'	 	=>'Саборна посланица (светог апостола Јуде)', 
		// Послания апостола Павла
		'Rom' 		=>'Римљанима посланица (светог апостола Павла)', 
		'1Cor' 		=>'Коринћанима посланица прва (светог апостола Павла)', 
		'2Cor' 		=>'Коринћанима посланица друга (светог апостола Павла)',
		'Gal'	 	=>'Галатима посланица (светог апостола Павла)', 
		'Eph' 		=>'Ефесцима посланица (светог апостола Павла)', 
		'Phil' 		=>'Филибљанима посланица (светог апостола Павла)', 
		'Col' 		=>'Колошанима посланица (светог апостола Павла)',
		'1Thes' 	=>'Солуњанима посланица прва (светог апостола Павла)',
		'2Thes' 	=>'Солуњанима посланица друга (светог апостола Павла)',  
		'1Tim' 		=>'Тимотију посланица прва (светог апостола Павла)', 
		'2Tim'	 	=>'Тимотију посланица друга (светог апостола Павла)',
		'Tit' 		=>'Титу посланица (светог апостола Павла)', 
		'Phlm'	 	=>'Филимону посланица (светог апостола Павла)', 
		'Hebr'	 	=>'Јеврејима посланица (светог апостола Павла)', 
		'Apok' 		=>'Откривење (светог Јована Богослова)');

	$bg_bibrefs_shortTitle = array(		// Стандартные обозначение книг Священного Писания
		// Ветхий Завет
		// Пятикнижие Моисея															
		'Gen'		=>"1Мој.", 
		'Ex'		=>"2Мој.", 
		'Lev'		=>"3Мој.",
		'Num'		=>"4Мој.",
		'Deut'		=>"5Мој.",
		// «Пророки» (Невиим) 
		'Nav'		=>"ИсН.",
		'Judg'		=>"Суд.",
		'Rth'		=>"Рута.",
		'1Sam'		=>"1Сам.",
		'2Sam'		=>"2Сам.",
		'1King'		=>"1Цар.",
		'2King'		=>"2Цар.",
		'1Chron'	=>"1Дн.",
		'2Chron'	=>"2Дн.",
		'Ezr'		=>"Језд.",
		'Nehem'		=>"Нем.",
		'Est'		=>"Јест.",
		// «Писания» (Ктувим)
		'Job'		=>"Јов.",
		'Ps'		=>"Псал.",
		'Prov'		=>"Приче.", 
		'Eccl'		=>"Проп.",
		'Song'		=>"Пес.",
		'Is'		=>"Иса.",
		'Jer'		=>"Јер.",
		'Lam'		=>"Плач.",
		'Ezek'		=>"Језек.",
		'Dan'		=>"Дан.",	
		// Двенадцать малых пророков 
		'Hos'		=>"Ос.",
		'Joel'		=>"Јоило.",
		'Am'		=>"Амос.",
		'Avd'		=>"Авдија.",
		'Jona'		=>"Јона.",
		'Mic'		=>"Мих.",
		'Naum'		=>"Наум.",
		'Habak'		=>"Авак.",
		'Sofon'		=>"Соф.",
		'Hag'		=>"Агеј.",
		'Zah'		=>"Зах.",
		'Mal'		=>"Мал.",
		// Второканонические книги
		'1Mac'		=>"1Мак.",
		'2Mac'		=>"2Мак.",
		'3Mac'		=>"3Мак.",
		'Bar'		=>"Вар.",
		'2Ezr'		=>"2Езд.",
		'3Ezr'		=>"3Езд.",
		'Judf'		=>"Иудиф.",
		'pJer'		=>"ПослИер.",
		'Solom'		=>"Прем.",
		'Sir'		=>"Сир.",
		'Tov'		=>"Тов.",
		// Новый Завет
		// Евангилие
		'Mt'		=>"Мат.",
		'Mk'		=>"Мар.",
		'Lk'		=>"Лука.",
		'Jn'		=>"Јован.",
		// Деяния и послания Апостолов
		'Act'		=>"Дела.",
		'Jac'		=>"Јаков.",
		'1Pet'		=>"1Пет.",
		'2Pet'		=>"2Пет.",
		'1Jn'		=>"1Јов.", 
		'2Jn'		=>"2Јов.",
		'3Jn'		=>"3Јов.",
		'Juda'		=>"Јуда.",
		// Послания апостола Павла
		'Rom'		=>"Рим.",
		'1Cor'		=>"1Кор.",
		'2Cor'		=>"2Кор.",
		'Gal'		=>"Гал.",
		'Eph'		=>"Ефес.",
		'Phil'		=>"Филиб.",
		'Col'		=>"Кол.",
		'1Thes'		=>"1Сол.",
		'2Thes'		=>"2Сол.",
		'1Tim'		=>"1Тим.",
		'2Tim'		=>"2Тим.",
		'Tit'		=>"Титу.",
		'Phlm'		=>"Филим.",
		'Hebr'		=>"Јевр.",
		'Apok'		=>"Откр.");

	$bg_bibrefs_bookFile = array(						// Таблица названий файлов книг
		// Ветхий Завет
		// Пятикнижие Моисея
		'Gen'	 	=>$bg_bibrefs_lang_folder.'/gen',						//'Книга Бытия', 
		'Ex'	 	=>$bg_bibrefs_lang_folder.'/ex',						//'Книга Исход', 
		'Lev'	 	=>$bg_bibrefs_lang_folder.'/lev',						//'Книга Левит', 
		'Num'	 	=>$bg_bibrefs_lang_folder.'/num',						//'Книга Числа', 
		'Deut'	 	=>$bg_bibrefs_lang_folder.'/deu',						//'Второзаконие',
		// «Пророки» (Невиим) 
		'Nav'	 	=>$bg_bibrefs_lang_folder.'/nav',						//'Книга Иисуса Навина',
		'Judg'		=>$bg_bibrefs_lang_folder.'/sud',						//'Книга Судей Израилевых', 
		'Rth'	 	=>$bg_bibrefs_lang_folder.'/ruf',						//'Книга Руфь',
		'1Sam'	 	=>$bg_bibrefs_lang_folder.'/king1',						//'Первая книга Царств (Первая книга Самуила)', 
		'2Sam'	 	=>$bg_bibrefs_lang_folder.'/king2',						//'Вторая книга Царств (Вторая книга Самуила)', 
		'1King' 	=>$bg_bibrefs_lang_folder.'/king3',						//'Третья книга Царств (Первая книга Царей)', 
		'2King' 	=>$bg_bibrefs_lang_folder.'/king4',						//'Четвёртая книга Царств (Вторая книга Царей)',
		'1Chron' 	=>$bg_bibrefs_lang_folder.'/para1',						//'Первая книга Паралипоменон (Первая книга Хроник, Первая Летопись)', 
		'2Chron' 	=>$bg_bibrefs_lang_folder.'/para2',						//'Вторая книга Паралипоменон (Вторая книга Хроник, Вторая Летопись)', 
		'Ezr'	 	=>$bg_bibrefs_lang_folder.'/ezr1',						//'Книга Ездры (Первая книга Ездры)', 
		'Nehem' 	=>$bg_bibrefs_lang_folder.'/nee',						//'Книга Неемии', 
		'Est'	 	=>$bg_bibrefs_lang_folder.'/esf',						//'Книга Есфири',  
		// «Писания» (Ктувим)
		'Job'	 	=>$bg_bibrefs_lang_folder.'/iov',						//'Книга Иова',
		'Ps' 		=>$bg_bibrefs_lang_folder.'/ps',						//'Псалтирь', 
		'Prov'	 	=>$bg_bibrefs_lang_folder.'/prov',						//'Книга Притчей Соломоновых', 
		'Eccl'	 	=>$bg_bibrefs_lang_folder.'/eccl',						//'Книга Екклезиаста, или Проповедника', 
		'Song'	 	=>$bg_bibrefs_lang_folder.'/song',						//'Песнь песней Соломона',

		'Is' 		=>$bg_bibrefs_lang_folder.'/isa',						//'Книга пророка Исайи', 
		'Jer' 		=>$bg_bibrefs_lang_folder.'/jer',						//'Книга пророка Иеремии',
		'Lam' 		=>$bg_bibrefs_lang_folder.'/lam',						//'Книга Плач Иеремии', 
		'Ezek'	 	=>$bg_bibrefs_lang_folder.'/eze',						//'Книга пророка Иезекииля',
		'Dan' 		=>$bg_bibrefs_lang_folder.'/dan',						//'Книга пророка Даниила', 
		// Двенадцать малых пророков 
		'Hos' 		=>$bg_bibrefs_lang_folder.'/hos',						//'Книга пророка Осии', 
		'Joel'	 	=>$bg_bibrefs_lang_folder.'/joe',						//'Книга пророка Иоиля',
		'Am' 		=>$bg_bibrefs_lang_folder.'/am',						//'Книга пророка Амоса', 
		'Avd' 		=>$bg_bibrefs_lang_folder.'/avd',						//'Книга пророка Авдия', 
		'Jona'	 	=>$bg_bibrefs_lang_folder.'/jona',						//'Книга пророка Ионы',
		'Mic' 		=>$bg_bibrefs_lang_folder.'/mih',						//'Книга пророка Михея', 
		'Naum' 		=>$bg_bibrefs_lang_folder.'/nau',						//'Книга пророка Наума',
		'Habak' 	=>$bg_bibrefs_lang_folder.'/avv',						//'Книга пророка Аввакума', 
		'Sofon' 	=>$bg_bibrefs_lang_folder.'/sof',						//'Книга пророка Софонии', 
		'Hag' 		=>$bg_bibrefs_lang_folder.'/agg',						//'Книга пророка Аггея', 
		'Zah' 		=>$bg_bibrefs_lang_folder.'/zah',						//'Книга пророка Захарии',
		'Mal' 		=>$bg_bibrefs_lang_folder.'/mal',						//'Книга пророка Малахии',

		// Новый Завет
		// Евангилие
		'Mt' 		=>$bg_bibrefs_lang_folder.'/mf',						//'Евангелие от Матфея',
		'Mk' 		=>$bg_bibrefs_lang_folder.'/mk',						//'Евангелие от Марка', 
		'Lk' 		=>$bg_bibrefs_lang_folder.'/lk',						//'Евангелие от Луки', 
		'Jn' 		=>$bg_bibrefs_lang_folder.'/jn',						//'Евангелие от Иоанна', 
		// Деяния и послания Апостолов
		'Act' 		=>$bg_bibrefs_lang_folder.'/act',						//'Деяния святых Апостолов', 
		'Jac'	 	=>$bg_bibrefs_lang_folder.'/jak',						//'Послание Иакова', 
		'1Pet'	 	=>$bg_bibrefs_lang_folder.'/pe1',						//'Первое послание Петра', 
		'2Pet'	 	=>$bg_bibrefs_lang_folder.'/pe2',						//'Второе послание Петра',	
		'1Jn'	 	=>$bg_bibrefs_lang_folder.'/jn1',						//'Первое послание Иоанна', 
		'2Jn'	 	=>$bg_bibrefs_lang_folder.'/jn2',						//'Второе послание Иоанна', 
		'3Jn'	 	=>$bg_bibrefs_lang_folder.'/jn3',						//'Третье послание Иоанна',
		'Juda'	 	=>$bg_bibrefs_lang_folder.'/jud',						//'Послание Иуды', 
		// Послания апостола Павла
		'Rom' 		=>$bg_bibrefs_lang_folder.'/rom',						//'Послание апостола Павла к Римлянам', 
		'1Cor'	 	=>$bg_bibrefs_lang_folder.'/co1',						//'Первое послание апостола Павла к Коринфянам', 
		'2Cor'	 	=>$bg_bibrefs_lang_folder.'/co2',						//'Второе послание апостола Павла к Коринфянам',
		'Gal' 		=>$bg_bibrefs_lang_folder.'/gal',						//'Послание апостола Павла к Галатам', 
		'Eph' 		=>$bg_bibrefs_lang_folder.'/eph',						//'Послание апостола Павла к Ефесянам', 
		'Phil'	 	=>$bg_bibrefs_lang_folder.'/flp',						//'Послание апостола Павла к Филиппийцам', 
		'Col' 		=>$bg_bibrefs_lang_folder.'/col',						//'Послание апостола Павла к Колоссянам',
		'1Thes' 	=>$bg_bibrefs_lang_folder.'/fe1',						//'Первое послание апостола Павла к Фессалоникийцам (Солунянам)',
		'2Thes' 	=>$bg_bibrefs_lang_folder.'/fe2',						//'Второе послание апостола Павла к Фессалоникийцам (Солунянам)',  
		'1Tim' 		=>$bg_bibrefs_lang_folder.'/ti1',						//'Первое послание апостола Павла к Тимофею', 
		'2Tim' 		=>$bg_bibrefs_lang_folder.'/ti2',						//'Второе послание апостола Павла к Тимофею',
		'Tit' 		=>$bg_bibrefs_lang_folder.'/tit',						//'Послание апостола Павла к Титу', 
		'Phlm'	 	=>$bg_bibrefs_lang_folder.'/flm',						//'Послание апостола Павла к Филимону', 
		'Hebr'	 	=>$bg_bibrefs_lang_folder.'/heb',						//'Послание апостола Павла к Евреям', 
		'Apok'	 	=>$bg_bibrefs_lang_folder.'/rev');						//'Откровение Иоанна Богослова (Апокалипсис)'
		