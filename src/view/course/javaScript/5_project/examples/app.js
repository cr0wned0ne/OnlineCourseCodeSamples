/**
 * 
 */


jQuery("#login").click(function() {
	var loginGreeter = G$("John", "Doe");
	$('#logindiv').hide();
	loginGreeter.setLanguage($('#lang').val()).setGreeting("#greeting", false).log();
}
)