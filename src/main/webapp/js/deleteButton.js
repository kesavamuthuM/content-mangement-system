/**
 * 
 */

$(document).ready(function() {
 
 $("#submit").click(function() {
	 var username = $('#username').val();
	 if(username !== "")
  $("#contactsId").append(
   "<a href=\"#\" id='mine'	class=\"btn btn-default btn-block linkBtn\">" + username + 
    " </a>	");
 });

 $(".subJumbo").on("mouseenter", ".linkBtn", function() {
  $(this).append(" <span> <a id=\"hai\" href=\"#\" class=\"glyphicon glyphicon-trash \" " +
   "style=\"float : right;\"></a></span>");
  $(".linkBtn").mouseleave(function() {
   $("span").remove();
  })
 });
 
});