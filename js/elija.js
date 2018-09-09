$(document).ready(function(){
// Isotope
	var $grid = $('.list').isotope({

		itemSelector: '.element-item',
		layoutMode: 'fitRows',
	});
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
	// add Stciky
	window.onscroll =function(){ fixMenu()} ;
	var navbar= document.getElementById('navbar');
	var home= document.getElementById('home');
	var sticky =navbar.offsetTop;
	function fixMenu(){
		if(window.pageYOffset >= sticky){
			navbar.classList.add("sticky");
		}
		else{
			navbar.classList.remove("sticky");
			home.classList.add("active");


		}
	}
	//  Add smooth scrolling
		// navbar
		$('body').scrollspy({target:".navbar", offset:50});
		$('#navbarSupportedContent a').on("click",function(event){
			if(this.hash !==""){
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop:$(hash).offset().top
				},800,function(){
					window.location.hash=hash;
				});
			}
		});
		//  header
		$('body').scrollspy({target:".bnt", offset:50});
		$('#btn a').on("click",function(event){
			if(this.hash !==""){
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop:$(hash).offset().top
				},800,function(){
					window.location.hash=hash;
				});
			}
		});
		//  Botton
		$('body').scrollspy({target:".copyright", offset:50});
		$('#top a').on("click",function(event){
			if(this.hash !==""){
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop:$(hash).offset().top
				},800,function(){
					window.location.hash=hash;
				});
			}
		});
	// Add tooptip 

	$('[data-toggle="tooltip"]').tooltip();

// 
	$('#pricing').each( function( i, pricing ) {
	  var $pricing = $( pricing );
	  $pricing.on( 'click', '.sing_up', function() {
	    $pricing.find('.acti').removeClass('acti');
	    $( this ).addClass('acti');
	  });
	});
})