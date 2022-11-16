   var sold=true;
   var ff=true;
   var checkStart=false;
   
   var perc=0;
   
   var soldEggs=0;
   var soldSum=0;
   
   var boughtEggs=0;
   var boughtSum=0;
   // общее кол-во яиц
     var bEggs=100;
	 // электроэнергию
		var el2=0;
		var zEl=2;
		
		//переменные норм состояния
		var checkTemp=true;
   
      $(document).ready(function() {
	   $('#imit').hide();
	  // строки расходов доходов
	   document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	   document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
	   document.getElementById("z1").innerText="Закупка яиц: "+boughtEggs+" шт";
	   document.getElementById("sumZ1").innerText="Сумма закупки: "+boughtSum+" руб.";
	   //зартачено
		document.getElementById("z2").innerText="Затрачено: "+el2+" Квт*ч";
		//сумма
		document.getElementById("sumZ2").innerText="Сумма затрат: "+zEl*el2+" руб.";
	   // процент вылупления
	   document.getElementById("perc").innerText="Вероятность вылупления: "+perc+" %";
	   $("#finish").hide();
	   $("a.fancy").fancyZoom();
	  // начало имитации
	  $("#start").click(function() {
	   $(this).hide();
	        
	    //показываем кнопки управления и выхода
	   $("#finish").show();
	     //показываем инкубатор
	   $('#imit').show();
	 

	   checkStart=true;
	    //купить яйца-------------------------------------------------
		$("#buy").click(function() {
		 if (sold) {
			 kolAcc1=0;
			alert("Куплено 100 яиц"); 
	   //меняем картинку инкубатора
	   $("#ink").attr("src", "../img/2.png");
	    $("#ink1").attr("href", "../img/3.png");
		   setTimeout(accTemp,5000); //запуск аварии с температурой
		//расчет расхода на покупку
		boughtEggs+=bEggs;
		boughtSum=+boughtEggs*20;
	   document.getElementById("z1").innerText="Закупка яиц: "+boughtEggs+" шт";
	   document.getElementById("sumZ1").innerText="Сумма закупки: "+boughtSum+" руб.";	
	   sold=false;
	   perc=0.5;
	   checkTurn=0;
		 }
	})
		
	   //продать цыплят----------------------------------------------
	   $("#sell").click(function() {
		   if (sold==false) {
			    if (percF==-1) {
			   //меняем картинку инкубатора
	   	$("#ink").attr("src", "../img/5.png");
	   	$("#ink1").attr("href", "../img/4.png");
	   	//расчет дохода
	   	soldEggs+=Math.round(bEggs*perc/100);
	   	soldSum=soldSum+soldEggs*50;
		//сообщение пользователю
		alert("Продано яиц "+soldEggs+" шт. \nНа сумму "+soldSum+" рублей");
		//изменение ст
	   	document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	   	document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
	   	sold=true;
	   	perc=0;
		percF=60;
				} else {
					alert("Процесс инкубации не завершен! "+perc+"% завершения");
				}
		   } else alert("Закупите яйца для инкубации!", "Предупреждение!");
         })
		 var checkTurn=0;
		 
       //переворот------------------------------------------------------
 	   $("#turn").click(function() {		   
	   if (sold==false)  {
		   if (checkTurn<7) { //проверка кол-ва переворотов
		   perc+=5;
		   checkTurn+=1;
	        if (ff) {
	   $("#ink").attr("src", "../img/66.png"); //замена картинки 
	    ff=false;
		document.getElementById("perc").innerText="Вероятность вылупления: "+parseFloat(Math.round(perc))+" %";
	     } else {
	   $("#ink").attr("src", "../img/2.png"); //замена картинки 
	    ff=true;
		document.getElementById("perc").innerText="Вероятность вылупления: "+parseFloat(Math.round(perc))+" %";
	       }} else {
			   alert("Оптимальное кол-во переворачиваний достигнуто!")
		    }
		   }  else alert("Закупите яйца для инкубации!");
       })
     //if 
   })
   
   
       // Конец имитация---------------------------------------------------
	   	  $("#finish").click(function() {
	   $(this).hide();
	   $("#start").show();
	   //скрываем элементы имитациии
	    $('#imit').hide();
       // обнуляем данные
	      kolAcc1=0;
	      perc=0;
          soldEggs=0;
	      soldSum=0;
   
	      boughtEggs=0;
	      boughtSum=0;
	      // электроэнергию
	      el2=0;
        // "опустошаем инкубатор"
	   	$("#ink").attr("src", "../img/5.png");
	    $("#ink1").attr("href", "../img/4.png");
		// изменяем данные на стр)
	   	document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	   	document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
	   	document.getElementById("z1").innerText="Закупка яиц: "+boughtEggs+" шт";
	   	document.getElementById("sumZ1").innerText="Сумма закупки: "+boughtSum+" руб.";
	   //зартачено
	   	document.getElementById("z2").innerText="Затрачено: "+el2+" Квт*ч";
		//сумма
	   	document.getElementById("sumZ2").innerText="Сумма затрат: "+zEl*el2+" руб.";
	   // процент вылупления
	   	document.getElementById("perc").innerText="Вероятность вылупления: "+perc+" %";
	   })
		
		//функции ------------------------------------------------
		//Индикаторы------------------------------------------------------------------------------------
		function idfic() {
			
		//массив температур
		var tem= [37,38,39];
		// создание и заполнение массива влажности
		var humid=[];
		 for (var i=0;i<12;i++) {
			 humid[i]=50+i;
		 }
		var tt=Math.random();
		//температура
			document.getElementById("hum").innerText="Влажность: "+humid[Math.floor(Math.random() * humid.length)]+" %";
		
		//влажность
		if (checkTemp) {
		document.getElementById("temp").innerText="Температура: "+parseFloat(tem[Math.floor(Math.random() * tem.length)]+parseFloat(tt.toFixed(2)))+" C";
	    }
		var t = setTimeout(function(){ idfic() }, 1000); 
			}
		idfic(); 
		
        // затраты на электроэнергию------------------------------------------------------
      	function zatr() {
		//зартачено
		document.getElementById("z2").innerText="Затрачено: "+el2+" Квт*ч";
		//сумма
		document.getElementById("sumZ2").innerText="Сумма затрат: "+zEl*el2+" руб.";
		var t = setTimeout(function(){ zatr()}, 1000); 
        el2+=0.5;
		//пересчет прибыли
		document.getElementById("itog").innerText="Прибыль: "+parseFloat(soldSum-(boughtSum+zEl*el2-0))+" руб.";
           }
		zatr();
		
		
		//прогресс яиц---------------------------------------------------------------------------------
		var percF=60
		var checkFinish=true;
		function chicken() {
			var q = setTimeout(function(){ chicken()}, 1000); 
			if (perc>=0.5) {			
			    if (percF>=0) {
		perc+=1;
		percF=percF-1;
		//пересчет процента вылупления
		document.getElementById("perc").innerText="Вероятность вылупления: "+parseFloat(Math.round(perc))+" %";		
		        } else {
					if (checkFinish) {						
						alert("Цыплята вылупились! Необходимо продать");
						 var audio = new Audio(); // Создаём новый элемент Audio
                         audio.src = '../mp3/цыпа.mp3'; // Указываем путь к звуку "клика"
                         audio.autoplay = true; // Автоматически запускаем
						checkFinish=false;
					}
				}       
		    }
		}
		chicken();

		  var kolAcc1=0;	
		 //Аварийные ситуации
		 //accident 1 
		 function accTemp() { 

		 if  (kolAcc1<=1) {
			 checkTemp=false;
			 if (kolAcc1==0) {
				 alert("Опасно! Повышение температуры");
				    var highTemp=[];
					var hT=Math.random();
				  for (var i=0;i<12;i++) {
					  highTemp[i]=50+i;
				     }
				document.getElementById("temp").innerText="Температура: "+parseFloat(highTemp[Math.floor(Math.random() * highTemp.length)]+parseFloat(hT.toFixed(2)))+" C";
				kolAcc1+=1;
				tempColor();
				
			 } else {
				 alert("Опасно! Понижение температуры");
				 	var lowTemp=[];
					var lT=Math.random();
				     for (var i=0;i<12;i++) {
					  lowTemp[i]=20+i;
				     }
				document.getElementById("temp").innerText="Температура: "+parseFloat(lowTemp[Math.floor(Math.random() * lowTemp.length)]+parseFloat(lT.toFixed(2)))+" C";
			    kolAcc1+=1;
				tempColor2();
			 } 
		 } else {
			kolAcc1+=1;
          	$("#temp").css("color","black");
			checkTemp=true;
		 }
		  var q = setTimeout(function(){ accTemp()}, 10000); 
		 }
		 
		 var redD=true;
        function tempColor() {
			if ((!checkTemp)&& (kolAcc1==1)){
				if (redD) {
                     $("#temp").css("color","red");
		             redD=false;
			     } else {
			       $("#temp").css("color","black");
		            redD=true;
			      }
                perc-=0.3;
			 }
		var tC = setTimeout(function(){ tempColor()}, 500); 			 
		     }
			 
		 var blueD=true;
        function tempColor2() {
			if ((!checkTemp)&& (kolAcc1==2)) {
				if (blueD) {
                     $("#temp").css("color","blue");
		             blueD=false;
			     } else {
			       $("#temp").css("color","black");
		            blueD=true;
			      }
                 perc-=0.3;
			 }
		var tC2 = setTimeout(function(){ tempColor2()}, 500); 			 
		     }     
			 
			 function normalW ()
			 {
				 
			 }
   });