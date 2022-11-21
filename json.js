$(function () {
	$.ajax({
		url: 'json-server-exam/db.json',
		dataType: 'json',
		success: function (data) {
			console.log(data);
			alert('d');
		},
	});
});
