;(function(window) {

	'use strict';

	var searchContainer = document.querySelector('.search');
	var inputSearch = searchContainer.querySelector('.search__input');
	var searchInfo = searchContainer.querySelector('.search__info');
	inputSearch.focus();
	var timestamp = new Date();

	$(".search__form").submit(function(event) {

	    //stop form from submitting normally
	    event.preventDefault();
    
	    var queryString = $(this).find('input[name="search"]').val();
	        
	    $.ajax({
		  method: "PUT",
		  url: "http://127.0.0.1:9200/questions/question/test",
		  contentType: "application/json",
		  data: JSON.stringify({ 
		  	"query-string": queryString,
		  	"date": timestamp
		  })
		})
	    .done(function( msg ) {
	 	   console.log( "Data Saved: " + msg );
	 	   searchInfo.innerHTML = "Frage wurde verschickt.";
	 	   $('.search__info').css("color", "#8e225c")
	 	   	 	   
	 	   setTimeout(function() {
	 	   	searchInfo.innerHTML = "Drücke Enter zum absenden.";
	 	   	$('.search__info').css("color", "#3f6e87")
	 	   }, 2000);

	 	   // clear input form
	 	   $(':input','.search__form')
			  .not(':button, :submit, :reset, :hidden')
			  .val('')
			  .removeAttr('checked')
			  .removeAttr('selected');
		});

    });
	
})(window);