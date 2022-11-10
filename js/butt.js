   var sold=false;
   var ff=true;
   var checkStart=false;

      $(document).ready(function() {
	   $("#finish").hide();
	   $("a.fancy").fancyZoom();
	  // начало имитации
	  $("#start").click(function() {
    //   $(this).css("backgroundColor","brown");
	   $(this).hide();
	   // показать кнопку финиша
	   $("#finish").show();
	   checkStart=true;
	   if (checkStart) {
	   //продать яйца
	   $("#sell").click(function() {
	 $("#ink").attr("src", "../img/5.png");
	 $("#ink1").attr("href", "../img/4.png");
	   sold=true;
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
   } //if 
   })
       // Конец имитация
	   	  $("#finish").click(function() {
	   $(this).hide();
	   $("#start").show();
	   })
   }); 