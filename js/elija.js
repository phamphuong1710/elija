
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
$(document).ready(function(){
	// add scroll navbar
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
	// Add scrolly header
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
	// add scrolly Botton
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
});
// Add tooptip 
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip()
})