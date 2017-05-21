/* Exercise 1: Wish list */
function addToList(item) {
	$('#items').append('<li>' + item + '</li>');
}

$(document).on('click', '#add-to-list', function() {
	addToList($('#item').val());
	$('#item').val('');
	
	$('#item').focus();

});

$(document).on('keypress', function(e) {
	if(e.which == 13) {
		e.preventDefault();
		$('#add-to-list').click();
	}
});

