$(document).ready(function(){

	// Autoresize du textarea
	var txt = $('#message'),
	    hiddenDiv = $(document.createElement('div')),
	    content = null;

	txt.addClass('txtstuff');
	hiddenDiv.addClass('hiddendiv');

	$('body').append(hiddenDiv);

	txt.on('keyup', function () {

	    content = $(this).val();

	    content = content.replace(/\n/g, '<br>');
	    hiddenDiv.html(content + '<div class="lbr">');

	    $(this).css('height', hiddenDiv.height());
	});

	// placeholder
	$('input, textarea').placeholder();
	
});