function refreshSidebar(current) {
	$(".file").remove();
	for (var i = 0; i < localStorage.length; i++) {
		var title = localStorage.key(i);
		var html;
		if (title === current) {
			html = "<div class=\"file current\">";
		} else {
			html = "<div class=\"file\">";
		}
		html += title + "</div>";
		$(".sidebar").append(html);
	}
}

function open(title) {
	$("#title").val(title);
	$("#textarea").val(localStorage.getItem(title));
	$(".current").removeClass("current");
	refreshSidebar(title);
}

$(document).ready(function() {
	refreshSidebar();
});

$("#saveButton").click(function() {
	var title = $("#title").val();
	var text = $("#textarea").val();
	localStorage.setItem(title, text);
	refreshSidebar(title);
});

function clear() {
	$("#title").val("");
	$("#textarea").val("");
	$(".current").removeClass("current");
	refreshSidebar();
}

$("#newButton").click(function() {
	clear();
});

$("#delButton").click(function() {
	localStorage.removeItem($("#title").val());
	clear();
});

$(".sidebar").on('click', '.file', function() {
	open($(this).text());
});