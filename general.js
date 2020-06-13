var bg_bibrefs_url = [		// Допустимые обозначения книг Священного Писания
		// Ветхий Завет
		// Пятикнижие Моисея															
	{name:'Gen\\.', sign:'Gen'},		//'Книга Бытия' 	
	{name:'Бытие\\.?', sign:'Gen'},					
	{name:'Быт\\.', sign:'Gen'},					
	{name:'1\\s*Мој\\.', sign:'Gen'},					
	{name:'1\\s*Мојс\\.', sign:'Gen'},					
	{name:'Ex\\.', sign:'Ex'},	 		//'Книга Исход' 			
	{name:'Исх\\.', sign:'Ex'},	 					
	{name:'2\\s*Мој\\.', sign:'Ex'},					
	{name:'2\\s*Мојс\\.', sign:'Ex'},					
	{name:'Lev\\.', sign:'Lev'}, 		//'Книга Левит' 		
	{name:'Левит\\.?', sign:'Lev'}, 							
	{name:'Лев\\.', sign:'Lev'}, 							
	{name:'Лв\\.', sign:'Lev'}, 							
	{name:'3\\s*Мој\\.', sign:'Lev'},					
	{name:'3\\s*Мојс\\.', sign:'Lev'},					
	{name:'Num\\.', sign:'Num'}, 		//'Книга Числа'	
	{name:'Числа\\.?', sign:'Num'}, 						
	{name:'Числ\\.', sign:'Num'}, 						
	{name:'Чис\\.', sign:'Num'}, 						
	{name:'Чс\\.', sign:'Num'}, 						
	{name:'4\\s*Мој\\.', sign:'Num'},					
	{name:'4\\s*Мојс\\.', sign:'Num'},					
	{name:'Deut\\.', sign:'Deut'},		//'Второзаконие'		
	{name:'Втор\\.', sign:'Deut'},							
	{name:'5\\s*Мој\\.', sign:'Deut'},					
	{name:'5\\s*Мојс\\.', sign:'Deut'},					
		// «Пророки» (Невиим) 
	{name:'Nav\\.', sign:'Nav'}, 		//'Книга Иисуса Навина'	
	{name:'Нав\\.', sign:'Nav'}, 						
	{name:'ИсНав\\.', sign:'Nav'}, 						
	{name:'ИсН\\.', sign:'Nav'}, 						
	{name:'Judg\\.', sign:'Judg'}, 	//'Книга Судей Израилевых' 	
	{name:'Судей\\.?', sign:'Judg'}, 						
	{name:'Суд\\.', sign:'Judg'}, 						
	{name:'Сд\\.', sign:'Judg'}, 						
	{name:'Rth\\.', sign:'Rth'},		//'Книга Руфь'	
	{name:'Руфь\\.?', sign:'Rth'},						
	{name:'Рута\\.?', sign:'Rth'},						
	{name:'Руф\\.', sign:'Rth'},						
	{name:'1\\s*Sam\\.', sign:'1Sam'},		//'Первая книга Царств (Первая книга Самуила)' 	
	{name:'1\\s*Цар\\.', sign:'1Sam'},						
	{name:'1\\s*Сам\\.', sign:'1Sam'},						
	{name:'1\\s*См\\.', sign:'1Sam'},						
	{name:'2\\s*Sam\\.', sign:'2Sam'},		//'Вторая книга Царств (Вторая книга Самуила)' 	
	{name:'2\\s*Цар\\.', sign:'2Sam'},						
	{name:'2\\s*Сам\\.', sign:'2Sam'},						
	{name:'2\\s*См\\.', sign:'2Sam'},						
	{name:'1\\s*King\\.?', sign:'1King'}, 	//'Третья книга Царств (Первая книга Царей)' 
	{name:'3\\s*Цар\\.', sign:'1King'}, 					
	{name:'1\\s*Царев\\.?', sign:'1King'}, 					
	{name:'1\\s*Царей\\.?', sign:'1King'}, 					
	{name:'2\\s*King\\.?', sign:'2King'}, 	//'Четвертая книга Царств (Вторая книга Царей)' 
	{name:'4\\s*Цар\\.', sign:'2King'}, 					
	{name:'2\\s*Царев\\.?', sign:'2King'}, 					
	{name:'2\\s*Царей\\.?', sign:'2King'}, 					
	{name:'1\\s*Chron\\.', sign:'1Chron'},	//'Первая книга Паралипоменон (Первая книга Хроник, Первая Летопись)' 
	{name:'1\\s*Пар\\.', sign:'1Chron'},		
	{name:'1\\s*Хрон\\.', sign:'1Chron'},		
	{name:'1\\s*Хр\\.', sign:'1Chron'},		
	{name:'1\\s*Лет\\.', sign:'1Chron'},		
	{name:'1\\s*Дн\\.', sign:'1Chron'},		
	{name:'2\\s*Chron\\.', sign:'2Chron'},	//'Вторая книга Паралипоменон (Вторая книга Хроник, Вторая Летопись)' 
	{name:'2\\s*Пар\\.', sign:'2Chron'},		
	{name:'2\\s*Хрон\\.', sign:'2Chron'},		
	{name:'2\\s*Хр\\.', sign:'2Chron'},		
	{name:'2\\s*Лет\\.', sign:'2Chron'},		
	{name:'2\\s*Дн\\.', sign:'2Chron'},		
	{name:'Ezr\\.', sign:'Ezr'}, 		//'Книга Ездры (Первая книга Ездры)' 
	{name:'1\\s*Ездр\\.', sign:'Ezr'}, 				
	{name:'1\\s*Езд\\.', sign:'Ezr'}, 				
	{name:'Ездр\\.', sign:'Ezr'}, 				
	{name:'Езд\\.', sign:'Ezr'}, 				
	{name:'Ез\\.', sign:'Ezr'}, 				
	{name:'Језд\\.', sign:'Ezr'}, 				
	{name:'Nehem\\.', sign:'Nehem'}, 	//'Книга Неемии'	
	{name:'Неем\\.', sign:'Nehem'}, 						
	{name:'Нем\\.', sign:'Nehem'}, 						
	{name:'Нм\\.', sign:'Nehem'}, 						
	{name:'Est\\.', sign:'Est'}, 		//'Книга Есфири'  
	{name:'Есф\\.', sign:'Est'}, 							
	{name:'Эсф\\.', sign:'Est'}, 							
	{name:'Јест\\.', sign:'Est'}, 							
		// «Писания» (Ктувим)		
	{name:'Job\\.?', sign:'Job'}, 		//'Книга Иова'			
	{name:'Иов\\.?', sign:'Job'}, 								
	{name:'Јов\\.?', sign:'Job'}, 								
	{name:'Ps\\.', sign:'Ps'},			//'Псалтирь' 	
	{name:'Псалт\\.', sign:'Ps'},							
	{name:'Псал\\.', sign:'Ps'},							
	{name:'Пс\\.', sign:'Ps'},							
	{name:'Prov\\.', sign:'Prov'}, 	//'Книга Притчей Соломоновых' 
	{name:'Притчи\\.?', sign:'Prov'}, 					
	{name:'Притч\\.', sign:'Prov'}, 					
	{name:'Прит\\.', sign:'Prov'}, 					
	{name:'Приче\\.', sign:'Prov'}, 					
	{name:'Прич\\.', sign:'Prov'}, 					
	{name:'Eccl\\.', sign:'Eccl'}, 	//'Книга Екклезиаста, или Проповедника' 		
	{name:'Еккл\\.', sign:'Eccl'}, 							
	{name:'Екк\\.', sign:'Eccl'}, 							
	{name:'Екл\\.', sign:'Eccl'}, 							
	{name:'Ек\\.', sign:'Eccl'}, 							
	{name:'Проп\\.', sign:'Eccl'}, 							
	{name:'Song\\.?', sign:'Song'},		//'Песнь песней Соломона'		
	{name:'Песня\\.?', sign:'Song'},							
	{name:'Песн\\.', sign:'Song'},							
	{name:'Пес\\.', sign:'Song'},							
	{name:'Is\\.', sign:'Is'}, 		//'Книга пророка Исайи'		
	{name:'Исайи\\.?', sign:'Is'}, 							
	{name:'Исаи\\.?', sign:'Is'}, 							
	{name:'Ис\\.', sign:'Is'}, 							
	{name:'Jer\\.', sign:'Jer'},		//'Книга пророка Иеремии'			
	{name:'Иер\\.', sign:'Jer'},								
	{name:'Јер\\.', sign:'Jer'},								
	{name:'Lam\\.', sign:'Lam'}, 		//'Книга Плач Иеремии' 	
	{name:'Плч\\.', sign:'Lam'}, 						
	{name:'Плач\\.', sign:'Lam'}, 						
	{name:'Ezek\\.', sign:'Ezek'},		//'Книга пророка Иезекииля'		
	{name:'Иез\\.', sign:'Ezek'},							
	{name:'Језек\\.', sign:'Ezek'},							
	{name:'Јез\\.', sign:'Ezek'},							
	{name:'Dan\\.', sign:'Dan'}, 		//'Книга пророка Даниила'			
	{name:'Дан\\.', sign:'Dan'}, 								
	{name:'Днл\\.', sign:'Dan'}, 
	{name:'Данило\\.?', sign:'Dan'}, 	
		// Двенадцать малых пророков 
	{name:'Hos\\.', sign:'Hos'},  		//'Книга пророка Осии' 		
	{name:'Осии\\.?', sign:'Hos'},  							
	{name:'Ос\\.', sign:'Hos'},  							
	{name:'Joel\\.?', sign:'Joel'}, 	//'Книга пророка Иоиля'
	{name:'Иоиль\\.?', sign:'Joel'}, 					
	{name:'Иоил\\.', sign:'Joel'}, 					
	{name:'Јоило\\.?', sign:'Joel'}, 					
	{name:'Јоил\\.', sign:'Joel'}, 					
	{name:'Am\\.', sign:'Am'},			//'Книга пророка Амоса'	
	{name:'Амос\\.?', sign:'Am'},							
	{name:'Амс\\.', sign:'Am'},							
	{name:'Ам\\.', sign:'Am'},							
	{name:'Avd\\.', sign:'Avd'}, 		//'Книга пророка Авдия'			
	{name:'Авд\\.', sign:'Avd'}, 								
	{name:'Авдија\\.?', sign:'Avd'}, 								
	{name:'Jona\\.?', sign:'Jona'}, 	//'Книга пророка Ионы'	
	{name:'Иона\\.?', sign:'Jona'}, 						
	{name:'Ион\\.', sign:'Jona'}, 						
	{name:'Јона\\.?', sign:'Jona'}, 						
	{name:'Mic\\.', sign:'Mic'}, 		//'Книга пророка Михея'			
	{name:'Михей\\.?', sign:'Mic'}, 								
	{name:'Мих\\.', sign:'Mic'}, 								
	{name:'Мх\\.', sign:'Mic'}, 								
	{name:'Naum\\.', sign:'Naum'}, 	//'Книга пророка Наума'		
	{name:'Наум\\.?', sign:'Naum'}, 							
	{name:'Habak\\.', sign:'Habak'}, 	//'Книга пророка Аввакума'		
	{name:'Аввак\\.', sign:'Habak'}, 							
	{name:'Авак\\.', sign:'Habak'}, 							
	{name:'Авв\\.', sign:'Habak'}, 							
	{name:'Ав\\.', sign:'Habak'}, 							
	{name:'Sofon\\.', sign:'Sofon'}, 	//'Книга пророка Софонии'					
	{name:'Софон\\.', sign:'Sofon'}, 							
	{name:'Соф\\.', sign:'Sofon'}, 							
	{name:'Hag\\.', sign:'Hag'}, 		//'Книга пророка Аггея'					
	{name:'Агг\\.', sign:'Hag'}, 							
	{name:'Аг\\.', sign:'Hag'}, 							
	{name:'Агеј\\.?', sign:'Hag'}, 							
	{name:'Zah\\.', sign:'Zah'},		//'Книга пророка Захарии'						
	{name:'Захар\\.', sign:'Zah'},								
	{name:'Зах\\.', sign:'Zah'},								
	{name:'Зхр\\.', sign:'Zah'},								
	{name:'Mal\\.', sign:'Mal'},		//'Книга пророка Малахии'						
	{name:'Малах\\.', sign:'Mal'},								
	{name:'Мал\\.', sign:'Mal'},								
		// Второканонические книги
	{name:'1\\s*Mac\\.', sign:'1Mac'},		//'Первая книга Маккавейская'					
	{name:'1\\s*Мак\\.', sign:'1Mac'},							
	{name:'2\\s*Mac\\.', sign:'2Mac'}, 	//'Вторая книга Маккавейская'					
	{name:'2\\s*Мак\\.', sign:'2Mac'}, 							
	{name:'3\\s*Mac\\.', sign:'3Mac'}, 	//'Третья книга Маккавейская'					
	{name:'3\\s*Мак\\.', sign:'3Mac'}, 							
	{name:'Bar\\.', sign:'Bar'}, 		//'Книга пророка Варуха'						
	{name:'Варух\\.?', sign:'Bar'}, 								
	{name:'Вар\\.', sign:'Bar'}, 								
	{name:'2\\s*Ezr\\.', sign:'2Ezr'},		//'Вторая книга Ездры' 				
	{name:'2\\s*Ездр\\.', sign:'2Ezr'},						
	{name:'2\\s*Езд\\.', sign:'2Ezr'},						
	{name:'3\\s*Ezr\\.', sign:'3Ezr'},		//'Третья книга Ездры'				
	{name:'3\\s*Ездр\\.', sign:'3Ezr'},						
	{name:'3\\s*Езд\\.', sign:'3Ezr'},						
	{name:'Judf\\.?', sign:'Judf'}, 	//'Книга Иудифи'			
	{name:'Иудифь\\.?', sign:'Judf'}, 					
	{name:'Иудиф\\.', sign:'Judf'}, 					
	{name:'pJer\\.', sign:'pJer'}, 	//'Послание Иеремии'	
	{name:'ПослИер\\.', sign:'pJer'}, 			
	{name:'Solom\\.', sign:'Solom'}, 	//'Книга Премудрости Соломона'		
	{name:'Прем\\.', sign:'Solom'}, 				
	{name:'ПремСол\\.', sign:'Solom'}, 				
	{name:'Sir\\.', sign:'Sir'}, 		//'Книга Премудрости Иисуса, сына Сирахова' 				
	{name:'Сирах\\.?', sign:'Sir'}, 						
	{name:'Сир\\.', sign:'Sir'}, 						
	{name:'Tov\\.', sign:'Tov'}, 		//'Книга Товита'				
	{name:'Товит\\.?', sign:'Tov'}, 						
	{name:'Тов\\.', sign:'Tov'}, 						
		// Новый Завет
			// Евангилие
	{name:'Mt\\.', sign:'Mt'}, 		//'Евангелие от Матфея'				
	{name:'Мф\\.', sign:'Mt'}, 						
	{name:'Мт\\.', sign:'Mt'}, 						
	{name:'Матфея\\.?', sign:'Mt'}, 						
	{name:'Матф\\.', sign:'Mt'}, 						
	{name:'Мат\\.', sign:'Mt'}, 						
	{name:'Mk\\.', sign:'Mk'}, 		//'Евангелие от Марка'			
	{name:'Марка\\.?', sign:'Mk'}, 					
	{name:'Марк\\.?', sign:'Mk'}, 					
	{name:'Мар\\.', sign:'Mk'}, 					
	{name:'Мр\\.', sign:'Mk'}, 					
	{name:'Мк\\.', sign:'Mk'}, 					
	{name:'Lk\\.', sign:'Lk'},			//'Евангелие от Луки'			
	{name:'Луки\\.?', sign:'Lk'},						
	{name:'Лука\\.?', sign:'Lk'},						
	{name:'Лук\\.', sign:'Lk'},						
	{name:'Лк\\.', sign:'Lk'},						
//	{name:'(?<!\\b[1-3]\\s*)Jn\\.', sign:'Jn'},			//'Евангелие от Иоанна'				
//	{name:'(?<!\\b[1-3]\\s*)Иоанна\\.?', sign:'Jn'},							
//	{name:'(?<!\\b[1-3]\\s*)Иоан\\.', sign:'Jn'},							
//	{name:'(?<!\\b[1-3]\\s*)Ин\\.', sign:'Jn'},
		// Деяния и послания Апостолов
	{name:'Act\\.', sign:'Act'}, 		//'Деяния святых Апостолов'				
	{name:'Деяния\\.?', sign:'Act'}, 						
	{name:'Деян\\.', sign:'Act'}, 						
	{name:'Дела\\.?', sign:'Act'}, 						
	{name:'Jac\\.', sign:'Jac'}, 		//'Послание Иакова'						
	{name:'Иакова\\.?', sign:'Jac'}, 								
	{name:'Иаков\\.?', sign:'Jac'}, 								
	{name:'Иак\\.', sign:'Jac'}, 								
	{name:'Јаков\\.?', sign:'Jac'}, 								
	{name:'Јак\\.', sign:'Jac'}, 								
	{name:'1\\s*Pet\\.', sign:'1Pet'},		//'Первое послание Петра' 			
	{name:'1\\s*Петра\\.?', sign:'1Pet'},					
	{name:'1\\s*Петр\\.?', sign:'1Pet'},					
	{name:'1\\s*Пет\\.', sign:'1Pet'},					
	{name:'2\\s*Pet\\.', sign:'2Pet'},		//'Второе послание Петра'			
	{name:'2\\s*Петра\\.?', sign:'2Pet'},					
	{name:'2\\s*Петр\\.?', sign:'2Pet'},					
	{name:'2\\s*Пет\\.', sign:'2Pet'},					
	{name:'1\\s*Jn\\.', sign:'1Jn'}, 		//'Первое послание Иоанна'				
	{name:'1\\s*Иоанна\\.?', sign:'1Jn'}, 						
	{name:'1\\s*Иоан\\.', sign:'1Jn'}, 						
	{name:'1\\s*Ин\\.', sign:'1Jn'}, 						
	{name:'1\\s*Јов\\.', sign:'1Jn'}, 						
	{name:'1\\s*Јн\\.', sign:'1Jn'}, 						
	{name:'2\\s*Jn\\.', sign:'2Jn'}, 		//'Второе послание Иоанна'				
	{name:'2\\s*Иоанна\\.?', sign:'2Jn'}, 						
	{name:'2\\s*Иоан\\.', sign:'2Jn'}, 						
	{name:'2\\s*Ин\\.', sign:'2Jn'}, 						
	{name:'2\\s*Јов\\.', sign:'2Jn'}, 						
	{name:'2\\s*Јн\\.', sign:'2Jn'}, 						
	{name:'3\\s*Jn\\.', sign:'3Jn'}, 		//'Третье послание Иоанна'				
	{name:'3\\s*Иоанна\\.?', sign:'3Jn'}, 						
	{name:'3\\s*Иоан\\.', sign:'3Jn'}, 						
	{name:'3\\s*Ин\\.', sign:'3Jn'}, 						
	{name:'3\\s*Јов\\.', sign:'3Jn'}, 						
	{name:'3\\s*Јн\\.', sign:'3Jn'}, 						
	{name:'Jn\\.', sign:'Jn'},			//'Евангелие от Иоанна'				
	{name:'Иоанна\\.?', sign:'Jn'},							
	{name:'Иоан\\.', sign:'Jn'},							
	{name:'Ин\\.', sign:'Jn'},
	{name:'Јован\\.?', sign:'Jn'}, 
	{name:'Јов\\.', sign:'Jn'}, 						
	{name:'Јн\\.', sign:'Jn'}, 						
	{name:'Juda\\.?', sign:'Juda'}, 	//'Послание Иуды'					
	{name:'Иуды\\.?', sign:'Juda'}, 							
	{name:'Иуда\\.?', sign:'Juda'}, 							
	{name:'Иуд\\.', sign:'Juda'}, 							
	{name:'Јуда\\.?', sign:'Juda'}, 							
		// Послания апостола Павла
	{name:'Rom\\.', sign:'Rom'}, 		//'Послание апостола Павла к Римлянам'				
	{name:'Римл\\.', sign:'Rom'}, 						
	{name:'Рим\\.', sign:'Rom'}, 						
	{name:'1\\s*Cor\\.', sign:'1Cor'}, 	//'Первое послание апостола Павла к Коринфянам'					
	{name:'1\\s*Кор\\.', sign:'1Cor'}, 							
	{name:'2\\s*Cor\\.', sign:'2Cor'},		//'Второе послание апостола Павла к Коринфянам'					
	{name:'2\\s*Кор\\.', sign:'2Cor'},							
	{name:'Gal\\.', sign:'Gal'}, 		//'Послание апостола Павла к Галатам'						
	{name:'Галат\\.', sign:'Gal'}, 								
	{name:'Гал\\.', sign:'Gal'}, 								
	{name:'Eph\\.', sign:'Eph'}, 		//'Послание апостола Павла к Ефесянам'					
	{name:'Ефесян\\.', sign:'Eph'}, 							
	{name:'Ефес\\.', sign:'Eph'}, 							
	{name:'Еф\\.', sign:'Eph'}, 							
	{name:'Phil\\.', sign:'Phil'},  	//'Послание апостола Павла к Филиппийцам'		
	{name:'Филип\\.', sign:'Phil'},  				
	{name:'Филиб\\.', sign:'Phil'},  				
	{name:'Фил\\.', sign:'Phil'},  				
	{name:'Флп\\.', sign:'Phil'},  				
	{name:'Col\\.', sign:'Col'},		//'Послание апостола Павла к Колоссянам'						
	{name:'Колос\\.', sign:'Col'},								
	{name:'Кол\\.', sign:'Col'},								
	{name:'1\\s*Thes\\.', sign:'1Thes'}, 	//'Первое послание апостола Павла к Фессалоникийцам (Солунянам)'			
	{name:'1\\s*Солун\\.', sign:'1Thes'}, 					
	{name:'1\\s*Сол\\.', sign:'1Thes'}, 					
	{name:'1\\s*Фес\\.', sign:'1Thes'}, 					
	{name:'2\\s*Thes\\.', sign:'2Thes'}, 	//'Второе послание апостола Павла к Фессалоникийцам (Солунянам)'			
	{name:'2\\s*Солун\\.', sign:'2Thes'}, 					
	{name:'2\\s*Сол\\.', sign:'2Thes'}, 					
	{name:'2\\s*Фес\\.', sign:'2Thes'}, 					
	{name:'1\\s*Tim\\.', sign:'1Tim'}, 	//'Первое послание апостола Павла к Тимофею' 					
	{name:'1\\s*Тимоф\\.', sign:'1Tim'}, 							
	{name:'1\\s*Тим\\.', sign:'1Tim'}, 							
	{name:'2\\s*Tim\\.', sign:'2Tim'},		//'Второе послание апостола Павла к Тимофею'					
	{name:'2\\s*Тимоф\\.', sign:'2Tim'},							
	{name:'2\\s*Тим\\.', sign:'2Tim'},							
	{name:'Tit\\.', sign:'Tit'}, 		//'Послание апостола Павла к Титу' 						
	{name:'Титу\\.?', sign:'Tit'}, 								
	{name:'Тита\\.?', sign:'Tit'}, 								
	{name:'Тит\\.?', sign:'Tit'}, 								
	{name:'Phlm\\.', sign:'Phlm'}, 	//'Послание апостола Павла к Филимону' 				
	{name:'Филим\\.', sign:'Phlm'}, 						
	{name:'Флм\\.', sign:'Phlm'}, 						
	{name:'Hebr\\.', sign:'Hebr'}, 	//'Послание апостола Павла к Евреям'					
	{name:'Евреям\\.?', sign:'Hebr'}, 							
	{name:'Евр\\.', sign:'Hebr'}, 							
	{name:'Ев\\.', sign:'Hebr'}, 							
	{name:'Јевр\\.', sign:'Hebr'}, 							
	{name:'Apok\\.', sign:'Apok'},		//'Откровение Иоанна Богослова (Апокалипсис)'				
	{name:'Откр\\.', sign:'Apok'},					
	{name:'Отк\\.', sign:'Apok'},					
	{name:'Апок\\.', sign:'Apok'}];

var bg_bibrefs_bookTitle = [			// Полные названия Книг Священного Писания
	// Ветхий Завет
	// Пятикнижие Моисея
	{sign:'Gen', chapters: 50, title:'Книга Бытия', file:'ru/gen', interpret:'tolkovaja_biblija_01'},						
	{sign:'Ex', chapters: 40, title:'Книга Исход', file:'ru/ex', interpret:'tolkovaja_biblija_02'},						
	{sign:'Lev', chapters: 27, title:'Книга Левит', file:'ru/lev', interpret:'tolkovaja_biblija_03'},						
	{sign:'Num', chapters: 36, title:'Книга Числа', file:'ru/num', interpret:'tolkovaja_biblija_04'},						
	{sign:'Deut', chapters: 34, title:'Второзаконие', file:'ru/deu', interpret:'tolkovaja_biblija_05'},						
	// «Пророки» (Невиим) 
	{sign:'Nav', chapters: 24, title:'Книга Иисуса Навина', file:'ru/nav', interpret:'tolkovaja_biblija_06'},						
	{sign:'Judg', chapters: 21, title:'Книга Судей Израилевых', file:'ru/sud', interpret:'tolkovaja_biblija_07'},						
	{sign:'Rth', chapters: 4, title:'Книга Руфь', file:'ru/ruf', interpret:'tolkovaja_biblija_08'},						
	{sign:'1Sam', chapters: 31, title:'Первая книга Царств (Первая книга Самуила)', file:'ru/king1', interpret:'tolkovaja_biblija_09'},						
	{sign:'2Sam', chapters: 24, title:'Вторая книга Царств (Вторая книга Самуила)', file:'ru/king2', interpret:'tolkovaja_biblija_10'},						
	{sign:'1King', chapters: 22, title:'Третья книга Царств (Первая книга Царей)', file:'ru/king3', interpret:'tolkovaja_biblija_11'},						
	{sign:'2King', chapters: 25, title:'Четвёртая книга Царств (Вторая книга Царей)', file:'ru/king4', interpret:'tolkovaja_biblija_12'},						
	{sign:'1Chron', chapters: 29, title:'Первая книга Паралипоменон (Первая книга Хроник, Первая Летопись)', file:'ru/para1', interpret:'tolkovaja_biblija_13'},						
	{sign:'2Chron', chapters: 37, title:'Вторая книга Паралипоменон (Вторая книга Хроник, Вторая Летопись)', file:'ru/para2', interpret:'tolkovaja_biblija_14'},						
	{sign:'Ezr', chapters: 10, title:'Книга Ездры (Первая книга Ездры)', file:'ru/ezr1', interpret:'tolkovaja_biblija_15'},						
	{sign:'Nehem', chapters: 13, title:'Книга Неемии', file:'ru/nee', interpret:'tolkovaja_biblija_16'},						
	{sign:'Est', chapters: 10, title:'Книга Есфири', file:'ru/esf', interpret:'tolkovaja_biblija_20'},						
	// «Писания» (Ктувим)
	{sign:'Job', chapters: 42, title:'Книга Иова', file:'ru/iov', interpret:'tolkovaja_biblija_21'},						
	{sign:'Ps', chapters: 151, title:'Псалтирь', file:'ru/ps', interpret:'tolkovaja_biblija_22'},						
	{sign:'Prov', chapters: 31, title:'Книга Притчей Соломоновых', file:'ru/prov', interpret:'tolkovaja_biblija_23'},						
	{sign:'Eccl', chapters: 12, title:'Книга Екклезиаста, или Проповедника', file:'ru/eccl', interpret:'tolkovaja_biblija_24'},						
	{sign:'Song', chapters: 8, title:'Песнь песней Соломона', file:'ru/song', interpret:'tolkovaja_biblija_25'},						

	{sign:'Is', chapters: 66, title:'Книга пророка Исайи', file:'ru/isa', interpret:'tolkovaja_biblija_28'},						
	{sign:'Jer', chapters: 52, title:'Книга пророка Иеремии', file:'ru/jer', interpret:'tolkovaja_biblija_29'},						
	{sign:'Lam', chapters: 5, title:'Книга Плач Иеремии', file:'ru/lam', interpret:'tolkovaja_biblija_30'},						
	{sign:'Ezek', chapters: 48, title:'Книга пророка Иезекииля', file:'ru/eze', interpret:'tolkovaja_biblija_33'},						
	{sign:'Dan', chapters: 14, title:'Книга пророка Даниила', file:'ru/dan', interpret:'tolkovaja_biblija_34'},						
	// Двенадцать малых пророков 
	{sign:'Hos', chapters: 14, title:'Книга пророка Осии', file:'ru/hos', interpret:'tolkovaja_biblija_35'},						
	{sign:'Joel', chapters: 3, title:'Книга пророка Иоиля', file:'ru/joe', interpret:'tolkovaja_biblija_36'},						
	{sign:'Am', chapters: 9, title:'Книга пророка Амоса', file:'ru/am', interpret:'tolkovaja_biblija_37'},						
	{sign:'Avd', chapters: 1, title:'Книга пророка Авдия', file:'ru/avd', interpret:'tolkovaja_biblija_38'},						
	{sign:'Jona', chapters: 4, title:'Книга пророка Ионы', file:'ru/jona', interpret:'tolkovaja_biblija_39'},						
	{sign:'Mic', chapters: 7, title:'Книга пророка Михея', file:'ru/mih', interpret:'tolkovaja_biblija_40'},						
	{sign:'Naum', chapters: 3, title:'Книга пророка Наума', file:'ru/nau', interpret:'tolkovaja_biblija_41'},						
	{sign:'Habak', chapters: 3, title:'Книга пророка Аввакума', file:'ru/avv', interpret:'tolkovaja_biblija_42'},						
	{sign:'Sofon', chapters: 3, title:'Книга пророка Софонии', file:'ru/sof', interpret:'tolkovaja_biblija_43'},						
	{sign:'Hag', chapters: 2, title:'Книга пророка Аггея', file:'ru/agg', interpret:'tolkovaja_biblija_44'},						
	{sign:'Zah', chapters: 14, title:'Книга пророка Захарии', file:'ru/zah', interpret:'tolkovaja_biblija_45'},						
	{sign:'Mal', chapters: 4, title:'Книга пророка Малахии', file:'ru/mal', interpret:'tolkovaja_biblija_46'},						
	// Второканонические книги
	{sign:'1Mac', chapters: 16, title:'Первая книга Маккавейская', file:'ru/mak1', interpret:'tolkovanie-na-pervuyu-knigu-makkavejskuyu'},						
	{sign:'2Mac', chapters: 15, title:'Вторая книга Маккавейская', file:'ru/mak2', interpret:'tolkovanie-na-pervuyu-knigu-makkavejskuyu'},						
	{sign:'3Mac', chapters: 7, title:'Третья книга Маккавейская', file:'ru/mak3', interpret:'tolkovanie-na-pervuyu-knigu-makkavejskuyu'},						
	{sign:'Bar', chapters: 5, title:'Книга пророка Варуха', file:'ru/varuh', interpret:'tolkovanie-na-knigu-proroka-varuha'},						
	{sign:'2Ezr', chapters: 9, title:'Вторая книга Ездры', file:'ru/ezr2', interpret:'tolkovanie-na-vtoruyu-knigu-ezdry'},						
	{sign:'3Ezr', chapters: 16, title:'Третья книга Ездры', file:'ru/ezr3', interpret:'tolkovanie-na-tretyu-knigu-ezdry'},						
	{sign:'Judf', chapters: 16, title:'Книга Иудифи', file:'ru/jdi', interpret:'tolkovanie-na-knigu-iudifi'},						
	{sign:'pJer', chapters: 1, title:'Послание Иеремии', file:'ru/posjer', interpret:'tolkovanie-na-poslanie-ieremii'},						
	{sign:'Solom', chapters: 19, title:'Книга Премудрости Соломона', file:'ru/prem', interpret:'tolkovanie-na-knigu-premudrosti-solomona'},						
	{sign:'Sir', chapters: 51, title:'Книга Премудрости Иисуса, сына Сирахова', file:'ru/sir', interpret:'tolkovanie-na-knigu-premudrosti-iisusa-syna-sirahova'},						
	{sign:'Tov', chapters: 14, title:'Книга Товита', file:'ru/tov', interpret:'tolkovanie-na-knigu-tovita'},						
	// Новый Завет
	// Евангилие
	{sign:'Mt', chapters: 28, title:'Евангелие от Матфея', file:'ru/mf', interpret:'tolkovaja_biblija_51'},						
	{sign:'Mk', chapters: 16, title:'Евангелие от Марка', file:'ru/mk', interpret:'tolkovaja_biblija_52'},						
	{sign:'Lk', chapters: 24, title:'Евангелие от Луки', file:'ru/lk', interpret:'tolkovaja_biblija_53'},						
	{sign:'Jn', chapters: 21, title:'Евангелие от Иоанна', file:'ru/jn', interpret:'tolkovaja_biblija_54'},						
	// Деяния и послания Апостолов
	{sign:'Act', chapters: 28, title:'Деяния святых Апостолов', file:'ru/act', interpret:'tolkovaja_biblija_55'},						
	{sign:'Jac', chapters: 5, title:'Послание Иакова', file:'ru/jak', interpret:'tolkovaja_biblija_56'},						
	{sign:'1Pet', chapters: 5, title:'Первое послание Петра', file:'ru/pe1', interpret:'tolkovaja_biblija_57'},						
	{sign:'2Pet', chapters: 3, title:'Второе послание Петра', file:'ru/pe2', interpret:'tolkovaja_biblija_58'},						
	{sign:'1Jn', chapters: 5, title:'Первое послание Иоанна', file:'ru/jn1', interpret:'tolkovaja_biblija_59'},						
	{sign:'2Jn', chapters: 1, title:'Второе послание Иоанна', file:'ru/jn2', interpret:'tolkovaja_biblija_60'},						
	{sign:'3Jn', chapters: 1, title:'Третье послание Иоанна', file:'ru/jn3', interpret:'tolkovaja_biblija_61'},						
	{sign:'Juda', chapters: 1, title:'Послание Иуды', file:'ru/jud', interpret:'tolkovaja_biblija_62'},						
	// Послания апостола Павла
	{sign:'Rom', chapters: 16, title:'Послание апостола Павла к Римлянам', file:'ru/rom', interpret:'tolkovaja_biblija_63'},						
	{sign:'1Cor', chapters: 16, title:'Первое послание апостола Павла к Коринфянам', file:'ru/co1', interpret:'tolkovaja_biblija_64'},						
	{sign:'2Cor', chapters: 13, title:'Второе послание апостола Павла к Коринфянам', file:'ru/co2', interpret:'tolkovaja_biblija_65'},						
	{sign:'Gal', chapters: 6, title:'Послание апостола Павла к Галатам', file:'ru/gal', interpret:'tolkovaja_biblija_66'},						
	{sign:'Eph', chapters: 6, title:'Послание апостола Павла к Ефесянам', file:'ru/eph', interpret:'tolkovaja_biblija_67'},						
	{sign:'Phil', chapters: 4, title:'Послание апостола Павла к Филиппийцам', file:'ru/flp', interpret:'tolkovaja_biblija_68'},						
	{sign:'Col', chapters: 4, title:'Послание апостола Павла к Колоссянам', file:'ru/col', interpret:'tolkovaja_biblija_69'},						
	{sign:'1Thes', chapters: 5, title:'Первое послание апостола Павла к Фессалоникийцам (Солунянам)', file:'ru/fe1', interpret:'tolkovaja_biblija_70'},						
	{sign:'2Thes', chapters: 3, title:'Второе послание апостола Павла к Фессалоникийцам (Солунянам)', file:'ru/fe2', interpret:'tolkovaja_biblija_71'},						
	{sign:'1Tim', chapters: 6, title:'Первое послание апостола Павла к Тимофею', file:'ru/ti1', interpret:'tolkovaja_biblija_72'},						
	{sign:'2Tim', chapters: 4, title:'Второе послание апостола Павла к Тимофею', file:'ru/ti2', interpret:'tolkovaja_biblija_73'},						
	{sign:'Tit', chapters: 3, title:'Послание апостола Павла к Титу', file:'ru/tit', interpret:'tolkovaja_biblija_74'},						
	{sign:'Phlm', chapters: 1, title:'Послание апостола Павла к Филимону', file:'ru/flm', interpret:'tolkovaja_biblija_75'},						
	{sign:'Hebr', chapters: 13, title:'Послание апостола Павла к Евреям', file:'ru/heb', interpret:'tolkovaja_biblija_76'},						
	{sign:'Apok', chapters: 22, title:'Откровение Иоанна Богослова (Апокалипсис)', file:'ru/rev', interpret:'tolkovaja_biblija_77'}];
	
var bg_bibrefs_BibleLanguage = bg_bibrefs_getLanguage();	// Язык Библии
bg_bibrefs_getBibleTitle (bg_bibrefs_BibleLanguage);
bg_bibrefs_getBibleFile (bg_bibrefs_BibleLanguage);

/*******************************************************************************
    Парсинг ссылки на Библию и формирование отрывка 
   
*******************************************************************************/  
function bg_bibrefs_parseRefs(obj, chapter, interpret) {
	var txt = "";
	var el = chapter.split(/([:,;-])/);

	var j=0;
	do {
		var ch1 = el[j];
		var ch2 = ch1;
		var sp = el[j+1];
		var v1 = 1;
		var v2 = 999;
		if (sp == ":") {
			do {
				j=j+2;
				v1 = el[j];
				sp = el[j+1];
				if (sp == ":") break;
				else if (sp == "-") {
					j=j+2;
					sp = el[j+1];
					if (sp == ":") {
						ch2 = el[j];
						j=j+2;
						sp = el[j+1];
						v2 = el[j];
					} else {
						ch2 = ch1;
						v2 = el[j];
					}
				} else {
					ch2 = ch1;
					v2 = v1;
					if (sp == ";") j=j+2;
				}
				txt += bg_bibrefs_getVerses(obj, ch1, v1, ch2, v2, interpret);
			} while (sp == "," || sp == "-");
		} else {
			txt += bg_bibrefs_getVerses(obj, ch1, v1, ch2, v2, interpret);
			j=j+2;
		}
	} while (sp == ":" || sp == "," || sp == ";" || sp == "-");
	return txt;
} 

/*******************************************************************************
   Получить указанный отрывок из Библии
   
*******************************************************************************/  
function bg_bibrefs_getVerses(obj, ch1, v1, ch2, v2, interpret) {

	var txt = "";
	var start = parseInt(ch1)*1000 + parseInt(v1);
	var finish = parseInt(ch2)*1000 + parseInt(v2);
	for (i=0; i<obj.length; i++) {
		var text = obj[i].text;
		text = text.replace(/<\/?a[^>]*(>|$)/g, "");
		var pos = parseInt(obj[i].part)*1000 + parseInt(obj[i].stix);
		if (pos >= start && pos <= finish) {
			ref = obj[i].part+":"+obj[i].stix;
			if (obj[i].part > ch2) return txt;
			if (interpret) {
				txt += "<sup>"+ref+"</sup> <a href='http://azbyka.ru/otechnik/Lopuhin/"+interpret+"/"+obj[i].part+"#v_"+obj[i].stix+"' title='"+chrome.i18n.getMessage("extInterpretationTitle")+"' target='_blank'>"+text+"</a><br>";
			} else {	
				txt += "<sup>"+ref+"</sup> "+text+"<br>";
			}
		}
	}
	return txt;
}

/*******************************************************************************
   Получить язык Библии
   
*******************************************************************************/  
function bg_bibrefs_getLanguage() {
	// Язык Библии
	var lang = localStorage["langBible"];
	var langs = ['cu', 'ru', 'be', 'uk', 'en'];
	if (lang == undefined || lang == 'system') {
		lang = chrome.i18n.getMessage("@@ui_locale");
		if (langs.indexOf( lang ) == -1 ) lang = 'ru';
	}
	return lang;
}

/*******************************************************************************
   Получить названия книг Библии на текущем языке 
   и внести в глобальный массив
*******************************************************************************/  
function bg_bibrefs_getBibleTitle(lang) {
	// Названия книг Библии
	var list = "";
	var xhr = new XMLHttpRequest();
//	xhr.open("GET", "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/bible/"+lang+"/bookTitle.json", true);
	xhr.open("GET", chrome.extension.getURL("bible/"+lang+"/bookTitle.json"), true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			list =  JSON.parse(xhr.responseText);
			for (var i=0; i<bg_bibrefs_bookTitle.length; i++) {
				var the_book = bg_bibrefs_bookTitle[i];
				the_book['title'] = list[the_book['sign']];
				bg_bibrefs_bookTitle[i] = the_book;
			}
		}
			
	}
	xhr.send();	
}
/*******************************************************************************
   Получить имена файлов книг Библии на текущем языке 
   и внести в глобальный массив
*******************************************************************************/  
function bg_bibrefs_getBibleFile(lang) {
	// Названия книг Библии
	var list = "";
	var xhr = new XMLHttpRequest();
//	xhr.open("GET", "chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/bible/"+lang+"/bookFile.json", true);
	xhr.open("GET", chrome.extension.getURL("bible/"+lang+"/bookFile.json"), true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			list =  JSON.parse(xhr.responseText);
			for (var i=0; i<bg_bibrefs_bookTitle.length; i++) {
				var the_book = bg_bibrefs_bookTitle[i];
				the_book['file'] = list[the_book['sign']];
				bg_bibrefs_bookTitle[i] = the_book;
			}
		}
			
	}
	xhr.send();	
}

/*******************************************************************************
   Безопасное внедрение html 

*******************************************************************************/  
function setContent(target, data, outer=false) {
	target.innerText="";
	if (!data) return;

	//создаем объект DOMParser
	var parser = new DOMParser();  
	// data - это текст который мы хотим распарсить. 
	// Второй аргумент, это MIME-тип, для XML - "application/xml", для SVG - "image/svg+xml") 
	data = '<div class="extContent">'+data+'</div>';
	var node = parser.parseFromString(data, "text/html");

	// Очистим html от лишних тегов и атрибутов
	node = DOMSanitizer.clear(node);

	var parent = node.getElementsByClassName("extContent")[0];
	// Вставим в html в нужное место
	if (outer) {
		target.parentNode.insertBefore(parent.firstChild, target);
		target.parentNode.removeChild(target);
	} else target.appendChild(parent);
	
	// Удалим div class="extContent"
	while (parent.firstChild)	{
		parent.parentNode.insertBefore(parent.firstChild,	parent);
	}
	parent.parentNode.removeChild(parent);

}

/*******************************************************************************
	Based on JavaScript HTML Sanitizer, (c) Alexander Yumashev, Jitbit Software.
	homepage https://github.com/jitbit/HtmlSanitizer
	License: GNU GPL v3 https://github.com/jitbit/HtmlSanitizer/blob/master/LICENSE
*******************************************************************************/  

var DOMSanitizer = new (function () {

	var tagWhitelist_ = {
		'BODY': true, 'DIV': true, 'P': true, 'SPAN': true, 'LABEL': true, 
		'H1': true, 'H2': true, 'H3': true, 'H4': true, 'H5': true, 'H6': true, 
		'OL': true, 'UL': true, 'LI': true, 'HR': true, 'BR': true, 
		'A': true,  'IMG': true,
		'B': true, 'BLOCKQUOTE': true,'CENTER': true, 'CODE': true, 'EM': true, 'U': true, 'I': true, 'PRE': true, 'SMALL': true, 'STRONG': true, 'SUP': true, 'SUB': true,
		'SELECT': true, 'OPTION': true, 'INPUT': true, 'BUTTON': true,
		'TABLE': true, 'TBODY': true, 'TR': true, 'TD': true, 'TH': true, 'THEAD': true,
		'VIDEO': true, 'AUDIO': true
	};
	var contentTagWhiteList_ = { 'FORM': true }; //tags that will be converted to DIVs
	var attributeWhitelist_ = { 
		'id': true, 'name': true, 'type': true, 'class': true, 'value': true, 
		'style': true, 'align': true, 'color': true, 'height': true, 'width': true, 
		'href': true, 'src': true, 
		'target': true, 'controls': true, 
		'title': true, 'placeholder': true,
		'colspan': true, 'cellpadding': true,
		'data-url': true, 'data-ref': true, 'data-title': true, 'data-title1': true, 'data-title2': true, 'data-langs': true
	};
	var cssWhitelist_ = { 
		'color': true, 'background-color': true, 'font-size': true,  'text-decoration': true, 'font-weight': true,
		'vertical-align': true, 'text-align': true, 'width': true 
	};
	var schemaWhiteList_ = { 'http': true, 'https': true, 'chrome-extension': true}; //which "protocols" are allowed in "href", "src" etc
	var uriAttributes_ = { 'src': true, 'href': true, 'data-url': true };

	this.clear = function(input) {
		var clone = input.cloneNode(true);

		function makeSanitizedCopy(node) {
			if (node.nodeType == Node.TEXT_NODE) {
				var newNode = node.cloneNode(true);
			} else if (node.nodeType == Node.ELEMENT_NODE && (tagWhitelist_[node.tagName] || contentTagWhiteList_[node.tagName])) {

				if (contentTagWhiteList_[node.tagName])
					newNode = clone.createElement('DIV'); //convert to DIV
				else
					newNode = clone.createElement(node.tagName);

				for (var i = 0; i < node.attributes.length; i++) {
					var attr = node.attributes[i];
					if (attributeWhitelist_[attr.name]) {
						if (attr.name == "style") {
							for (s = 0; s < node.style.length; s++) {
								var styleName = node.style[s];
								if (cssWhitelist_[styleName])
									newNode.style.setProperty(styleName, node.style.getPropertyValue(styleName));
								else
									console.log("Removed Style: "+styleName+" from Attr: "+attr.name+" of Tag: "+node.tagName+" see > "+node.outerHTML);
							}
						}
						else {
							if (uriAttributes_[attr.name]) { //if this is a "uri" attribute, that can have "javascript:" or something
								var schema = attr.value.split(':')[0];
								var path = attr.value.split(':')[1];
								if (path && !schemaWhiteList_[schema]) {
									console.log("Not Allowed Schema: "+schema+" in Attr: "+attr.name+" of Tag: "+node.tagName+" see > "+node.outerHTML);
									continue;
								}
							}
							newNode.setAttribute(attr.name, attr.value);
						}
					} else {
						console.log("Removed Attr: "+attr.name+"="+attr.value+" from Tag: "+node.tagName+" see > "+node.outerHTML);
					} 
				}
				for (i = 0; i < node.childNodes.length; i++) {
					var subCopy = makeSanitizedCopy(node.childNodes[i]);
					newNode.appendChild(subCopy, false);
				}
			} else {
				newNode = document.createDocumentFragment();
				console.log("Removed Tag: "+node.tagName+" see > "+node.outerHTML);
			}
			return newNode;
		};

		var resultElement = makeSanitizedCopy(clone.body);
		return resultElement;
	}

	this.AllowedTags = tagWhitelist_;
	this.AllowedAttributes = attributeWhitelist_;
	this.AllowedCssStyles = cssWhitelist_;
	this.AllowedSchemas = schemaWhiteList_;
});


function bg_bibrefs_setIcon () {
	if (localStorage["extPlayer"]) {	// Включено радио
		var iconName = (localStorage["extActive"]) ? 'av16x16on_r.png' : 'av16x16off_r.png';
	} else {
		var iconName = (localStorage["extActive"]) ? 'av16x16on.png' : 'av16x16off.png';
	}
	chrome.browserAction.setIcon({path:"img/"+iconName}); //Устанавливает новую иконку
}