/**
 * 
 */

$(document)
		.ready(
				function() {
					var i = 4;

					$("#submit")
							.click(
									function() {
										$("#contactsId")
												.append(
														"<a href=\"#\" class=\"btn btn-default btn-block linkBtn\">contact 8 </a>	");

									});
					$(".subJumbo")
							.on(
									"mouseenter",
									".linkBtn",
									function() {
										$(this)
												.append(
														" <span> <a id=\"hai\" href=\"#\" class=\"glyphicon glyphicon-trash \" style=\"float : right;\"></a></span>");

										$(".linkBtn").mouseleave(function() {
											$("#hai").remove();

										})
									});
				});
