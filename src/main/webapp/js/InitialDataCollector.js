/**
 * 
 */

$(document).ready(function() {
 $('h3').append(" " + localStorage.getItem('name'));
 $("#submit").on('click', function() {
  var jsonData = new Object();
  jsonData.username = $('#username').val();
  jsonData.email = $('#exampleInputEmail1').val();
  jsonData.organisation = $('#organisation').val();
  jsonData.contactNO = $('#contact').val();
  jsonData.gender = $('input[name="gender"]:checked').val();

  //$('#image-submitter').submit();
  alert($('#image-submitter').attr('action'));

  $.ajax({
   url: $('#image-submitter').attr('action'),
   type: "post"
  })

  $.ajax({
   url: '/data',
   type: 'post',
   data: JSON.stringify(jsonData),
   contentType: 'application/json',
   success: function(data, status) {
    if (status === 'success')
     alert("Success" + data);
    else
     alert('data not received');
   }
  })

 })

});