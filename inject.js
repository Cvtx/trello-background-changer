chrome.extension.sendMessage({}, function(response) {
	
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {		
			paint();
		}
	}, 10);

	var readyStateCheckTimeout = setTimeout(function() {
		if (document.readyState === "complete") {		
			clearInterval(readyStateCheckInterval);
		}
	}, 10000);	
});

function paint() {
	let trello_root_element = document.getElementById('trello-root');	
	trello_root_element.style.background = 'none';
	trello_root_element.style.backgroundColor = "rgb(117, 116, 220)";
}