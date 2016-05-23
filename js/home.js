jRes.addFunc([
	{
	    breakpoint: 'mobile',
	    enter: function() {        
	    	sidebar_mobile();
	    },
	    exit: function() {
	    }
	},
	{
	    breakpoint: 'small',
	    enter: function() {        
			sidebar_desktop();
	    },
	    exit: function() {   
	    }
	}
]);


function sidebar_mobile() {
	$('#sidebar').appendTo('#partners');	
}

function sidebar_desktop() {
	$('#sidebar').appendTo('#debut_contenu');	
}