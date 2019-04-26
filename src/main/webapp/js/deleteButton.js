/**
 * 
 */

$(document)
		.ready(
				function() {
					var i = 0;

					$("#submit").click(
							function() {
								$("#contactsId").append(
										"<a href=\"#\" class=\"btn btn-default btn-block linkBtn\">contact "
												+ `${i += 1}` + " </a>	");

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
//another comments