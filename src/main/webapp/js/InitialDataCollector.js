/**
 * 
 */

$(document).ready(function(){
	$("#submit").on('click', function(){
		//var fd = new FormData();
		const _username = $('#username').val();
		const _email = $('#exampleInputEmail1').val();
		const _organisation = $('#organisation').val();
		const _contact_no = $('#contact').val();
		const _gender = $('input[name="gender"]:checked').val();
		
	/*	$.post("/dataCollector", {username: _username,
			email: _email,
			organisation: _organisation,
			contact_no: _contact_no,
			gender: _gender})*/
		
		var allData = JSON.stringify({username: _username,
			email: _email,
			organisation: _organisation,
			contact_no: _contact_no,
			gender: _gender});
		
		
		
		$.ajax({
			url: '/dataCollector',
			type: 'post',
			data: new FormData(exampleInputFile),
			contentType: false,
			cache: false,
			processData: false,
			success: function(data, status){
				if(status === 'success')
					alert(data);
				else
					alert('data not received');
			}
		})
		
	})
	
});