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
	    //купить яйца
		$("#buy").click(function() {
		 if (sold) {
	   //меняем картинку инкубатора
	   $("#ink").attr("src", "../img/2.png");
	    $("#ink1").attr("href", "../img/3.png");
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
		
	   //продать яйца
	   $("#sell").click(function() {
		   if (sold==false) {
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
		   }
         })
		 var checkTurn=0
       //переворот
 	   $("#turn").click(function() {		   
	   if (sold==false)  {
		   if (checkTurn<7) {
		   perc+=5;
		   checkTurn+=1;
	        if (ff) {
	   $("#ink").attr("src", "../img/66.png");
	    ff=false;
	     } else {
	   $("#ink").attr("src", "../img/2.png");
	    ff=true;
	       }} else {
			   alert("Оптимальное кол-во переворачиваний достигнуто!")
		    }
		   }  else alert("Закупите яйца для инкубации!");
       })
     //if 
   })
   
   
       // Конец имитация
	   	  $("#finish").click(function() {
	   $(this).hide();
	   $("#start").show();
	   //скрываем элементы имитациии
	    $('#imit').hide();
       // обнуляем данные
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
	    
		
		//Индикаторы
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
		document.getElementById("temp").innerText="Температура: "+parseFloat(tem[Math.floor(Math.random() * tem.length)]+parseFloat(tt.toFixed(2)))+" C";
		//влажность
		document.getElementById("hum").innerText="Влажность: "+humid[Math.floor(Math.random() * humid.length)]+" %";
	
		var t = setTimeout(function(){ idfic() }, 1000); 
		}
		idfic();
        // затраты на электроэнергию

     
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
		
		var percF=60
		var checkFinish=true;
		//прогресс яиц
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
						alert("Яйца вылупились! Необоходимо продать");
						checkFinish=false;
					}
				}       
		    }
		}
		
		chicken();

   });