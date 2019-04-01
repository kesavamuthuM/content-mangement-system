/**
 * 
 */

$(document).ready(function(){
			$(".linkBtn").mouseenter(function(){
				$(this).append(" <span> <a id=\"hai\" href=\"#\" class=\"glyphicon glyphicon-trash \" style=\"float : right;\"></a></span>");
				$(".linkBtn").mouseleave(function(){
					$("#hai").remove();
				})
			})
		});