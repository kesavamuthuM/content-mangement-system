/**
 * 
 */

$(document).ready(function(){
	$('h3').append(" "+ localStorage.getItem('name'));	
	$("#submit").on('click', function(){
		var Username = $('#username').val();
		localStorage.setItem('username', Username);
		var jsonData = new Object();
		jsonData.username = Username;
		jsonData.email = $('#exampleInputEmail1').val();
		jsonData.organisation = $('#organisation').val();
		jsonData.contact_no = $('#contact').val();
		jsonData.gender = $('input[name="gender"]:checked').val();
		
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