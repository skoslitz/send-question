;(function(window) {

	'use strict';

	var searchContainer = document.querySelector('.search');
	var inputSearch = searchContainer.querySelector('.search__input');
	var searchInfo = searchContainer.querySelector('.search__info');
	inputSearch.focus();
	var timestamp = new Date();

	String.prototype.hashCode = function() {
	  var hash = 0, i, chr, len;
	  if (this.length === 0) return hash;
	  for (i = 0, len = this.length; i < len; i++) {
	    chr   = this.charCodeAt(i);
	    hash  = ((hash << 5) - hash) + chr;
	    hash |= 0; // Convert to 32bit integer
	  }
	  return hash;
	};

	$(".search__form").submit(function(event) {

	    //stop form from submitting normally
	    event.preventDefault();
    
	    var queryString = $(this).find('input[name="search"]').val();

	    var _id = queryString.hashCode();
	        
	    $.ajax({
		  method: "PUT",
		  url: "https://frag.nimirum.de/es/questions/question/" + _id,
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
