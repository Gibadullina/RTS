   var sold=false;
   var ff=true;
   var checkStart=false;

   var soldEggs=0;

   var soldSum=0;

   
      $(document).ready(function() {
	   $('#imit').hide();
	  
	   document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	   document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
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
	  
	   //продать яйца
	   $("#sell").click(function() {
		   if (sold==false) {
	 $("#ink").attr("src", "../img/5.png");
	 $("#ink1").attr("href", "../img/4.png");
	 soldEggs+=10;
	 soldSum=soldSum+soldEggs*50;
	 document.getElementById("soldT").innerText="Продано единиц продукции: "+soldEggs+" шт";
	 document.getElementById("sumT").innerText="Сумма продаж: "+soldSum+" руб.";
	   sold=true;
		   }
         })
		 
       //переворот
 	   $("#turn").click(function() {
		   
	   if (sold==false) {
	        if (ff) {
	   $("#ink").attr("src", "../img/66.png");
	    ff=false;
	     } else {
	   $("#ink").attr("src", "../img/2.png");
	    ff=true;
	     }}
       })
     //if 
   })
       // Конец имитация
	   	  $("#finish").click(function() {
	   $(this).hide();
	   $("#start").show();
	   //скрываем элементы имитациии
	    $('#imit').hide();
	   })
	    
		
		//Индикаторы
		function idfic() {
		var tem= [37,38,39];
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

   });