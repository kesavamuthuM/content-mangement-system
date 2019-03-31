/**
 * 
 */

$(document).ready(function(){
			$(".btn").mouseenter(function(){
				$(this).append(" <span> <a id=\"hai\" href=\"#\" class=\"glyphicon glyphicon-trash \" style=\"float : right;\"></a></span>");
				$(".btn").mouseleave(function(){
					$("#hai").remove();
				})
			})
		});