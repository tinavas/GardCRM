$( document ).ready(function() {
    lookupPostcode();
});

function lookupPostcode() {
	
	if ( $("#getlatlong").length ) {
		$("#getlatlong").click(function (event) {
			event.preventDefault();
			
			var postcode = $( "#postcode" ).val();
			if ( postcode ) {
	
				var postcodeIOapi = "//api.postcodes.io/postcodes/" + postcode
				
				$.getJSON(postcodeIOapi)
					.done(function (data) {
						$("#lat").val( data.result.latitude );
						$("#lon").val( data.result.longitude );
						alert('good postcode');
					})
					.fail(function (error) {
						alert( JSON.stringify(error.responseJSON.error, null, 4) )
					});
			
			} else {
				
				alert('Enter a postcode man');
				
			}
		});
	}
}