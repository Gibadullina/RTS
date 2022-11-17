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
		var checkEl=true;
		//кол-во аварий
         var avarii=0;
		 //расходы ремонт
			 var fixEL=0;
			 var fixELSum=0;		 
		 
		 
		 
      $(document).ready(function() {
	   $('#imit').hide();
	   $('#fix').hide();
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
	 
	 	        //зартачено на ремонты
		    document.getElementById("z3").innerText="Ремонтов: "+fixEL+" кол-во";
		    //сумма
		    document.getElementById("sumZ3").innerText="Сумма затрат: "+fixELSum+" руб.";
	 
	   $("#finish").hide();
	   $("a.fancy").fancyZoom();
	  // начало имитации
	  $("#start").click(function() {
	   $(this).hide();
	        
	    //показываем кнопки управления и выхода
	   $("#finish").show();
	     //показываем инкубатор
	   $('#imit').show();
	  $('#fix').show();

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
		   setTimeout(accEl,15000); //запуск аварии с электричестовом
		    setTimeout(accEl,48000);
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
		alert("Продано яиц "+Math.round(bEggs*perc/100)+" шт. \nНа сумму "+Math.round(bEggs*perc/100)*50+" рублей");
		//изменение ст
	   	document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	   	document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
	   	sold=true;
	   	perc=0;
		percF=60;
		checkFinish=true;
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
		 $('#fix').hide();
       // обнуляем данные
	      kolAcc1=0;
	      perc=0;
          soldEggs=0;
	      soldSum=0;
   
	      boughtEggs=0;
	      boughtSum=0;
		  avarii=0;
		  fixEL=0;
		  fixELSum=0;
		  
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
		document.getElementById("avar").innerText="Аварийные ситуации: "+parseFloat(avarii)+" шт";
	   })
		           
	        //зартачено на ремонты
		    document.getElementById("z3").innerText="Ремонтов: "+fixEL+" кол-во";
		    //сумма
		    document.getElementById("sumZ3").innerText="Сумма затрат: "+fixELSum+" руб.";
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

		
		if (checkEl) {
					   //влажность		
			document.getElementById("hum").innerText="Влажность: "+humid[Math.floor(Math.random() * humid.length)]+" %";
			if (checkTemp) {
			//температура
		document.getElementById("temp").innerText="Температура: "+parseFloat(tem[Math.floor(Math.random() * tem.length)]+parseFloat(tt.toFixed(2)))+" C";
	    }}
		
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
		document.getElementById("itog").innerText="Прибыль: "+parseFloat(soldSum-(boughtSum+zEl*el2-fixELSum))+" руб.";
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
            var q;
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
			clearTimeout(q);
		 }
		  q = setTimeout(function(){ accTemp()}, 25000); 
		 }
		 var scc1=0;
		 var scc2=0;
		 var redD=true;
        function tempColor() {
			if ((!checkTemp)&& (kolAcc1==1)&&(scc1<10)){
				if (redD) {
                     $("#temp").css("color","red");
		             redD=false;
			     } else {
			       $("#temp").css("color","black");
		            redD=true;
			      }
                perc-=0.3;
				scc1+=1;
			 }
		var tC = setTimeout(function(){ tempColor()}, 500); 			 
		     }
			 
		 var blueD=true;
        function tempColor2() {
			if ((!checkTemp)&& (kolAcc1==2)&&(scc2<10)) {
				if (blueD) {
                     $("#temp").css("color","blue");
		             blueD=false;
			     } else {
			       $("#temp").css("color","black");
		            blueD=true;
			      }
                 perc-=0.3;
				 scc2+=1;
			 }
		var tC2 = setTimeout(function(){ tempColor2()}, 500); 			 
		     }     
			 var avarii=0;
			$("#highT").click(function() { 
			  if ((!checkTemp)&&(kolAcc1==1)) {
			 $("#temp").css("color","blue");
              setTimeout(function(){
				   $("#temp").css("color","black");
			  },3000);			  
			 checkTemp=true;
			 alert("Ввод в оптимальный режим");
			 avarii+=1;
			 document.getElementById("avar").innerText="Аварийные ситуации: "+parseFloat(avarii)+" шт";
			  }
			 })
			 
			 
			 $("#lowT").click(function() { 
			  if ((!checkTemp)&&(kolAcc1==2)) {
			 $("#temp").css("color","red");
             setTimeout(function(){
				   $("#temp").css("color","black");
			 }
				 ,3000);	
            			 
			 checkTemp=true;
			 alert("Ввод в оптимальный режим");
			 kolAcc1+=1;
			 avarii+=1;
			 document.getElementById("avar").innerText="Аварийные ситуации: "+parseFloat(avarii)+" шт";
			  }
			 })
			 // авария номер 2

			 function accEl (){
				 if (checkEl) {
				 alert("Перебои с электричестовом")
	        $("#ink").attr("src", "../img/1.png");
	        $("#ink1").attr("href", "../img/3.png");
               checkEl=false;	
			   	//влажность		
				document.getElementById("hum").innerText="Влажность: "+50+" %";
			     $("#hum").css("color","red");  
			    //температура
		         document.getElementById("temp").innerText="Температура: "+10+" C"; 
				  $("#temp").css("color","red");
				  
            	setTimeout(function(){
					checkEl=true;
			 $("#temp").css("color","black");
			  $("#hum").css("color","black"); 					
			  },10000);		   
			 }
			 }
			 
			 
			 
			 $("#fix").click(function() { 
			  if (!checkEl) {
			  $("#temp").css("color","black");
			  $("#hum").css("color","black"); 
			 checkEl=true;
			 $("#ink").attr("src", "../img/2.png");
	         $("#ink1").attr("href", "../img/3.png");
			 
			avarii+=1;
			fixEL+=1;
			fixELSum=fixELSum+fixEL*300;
           
	        //зартачено на ремонты
		    document.getElementById("z3").innerText="Ремонтов: "+fixEL+" кол-во";
		    //сумма
		    document.getElementById("sumZ3").innerText="Сумма затрат: "+fixELSum+" руб.";
			document.getElementById("avar").innerText="Аварийные ситуации: "+parseFloat(avarii)+" шт";
			 }	
			 })
   });