/**
 * 
 */

$(document).ready(function(){
	$('h3').append(" "+ localStorage.getItem('name'));	
	$("#submit").on('click', function(){
		var jsonData = new Object();
		jsonData.username = $('#username').val();
		jsonData.email = $('#exampleInputEmail1').val();
		jsonData.organisation = $('#organisation').val();
		jsonData.contactNO = $('#contact').val();
		jsonData.gender = $('input[name="gender"]:checked').val();
		
		/*alert(JSON.stringify({username: _username,
			email: _email,
			organisation: _organisation,
			contact_no: _contact_no,
			gender: _gender}));
		
		var allData = JSON.stringify({username: _username,
			email: _email,
			organisation: _organisation,
			contact_no: _contact_no,
			gender: _gender});*/
		/*var tmp = {username: 'something',
				age: 23};
		var converterData = JSON.stringify(tmp);
		
		alert(converterData);*/
		
			$('#image-submitter').submit();
		/*alert($('#image-submitter').attr('action'));
		
		$.ajax({
			url: $('#image-submitter').attr('action'),
			type: post
		})
		*/
		$.ajax({
			url: '/data',
			type: 'post',
			data: jsonData,
			contentType: 'application/json',
			success: function(data, status){
				if(status === 'success')
					alert(data);
				else
					alert('data not received');
			}
		})
		
	})
	
});