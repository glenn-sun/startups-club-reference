function get_request(url, onload) {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', url);
	xhttp.onload = onload(xhttp);
	xhttp.send();
};

var maps_url = "https://maps.googleapis.com/maps/api/geocode/json?";
maps_url += "address=100+Technology+Drive,+Edison,+NJ";

get_request(maps_url, function (xhttp) {
	return function () {
		var response = JSON.parse(xhttp.responseText);
		var address = response.results[0].formatted_address;
		var lat = response.results[0].geometry.location.lat;
		var lng = response.results[0].geometry.location.lng;
		console.log("The full address is: " + address);
		console.log("The coordinates are: (" + lat + "," + lng + ").");
	};
});

// The following code was provided by Facebook
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		// Logged into your app and Facebook.
		onLogin();
	} else {
		// The person is not logged into your app or we are unable to tell.
		console.log("Not logged in.");
	}
};

window.fbAsyncInit = function() {
	FB.init({
		appId: '1441718222575878',
		cookie: true,
		xfbml: true,
		version: 'v2.10'
	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
};

function onLogin() {
	FB.api('me?fields=name,birthday,email', function(response) {
		console.log(response.name + ' is logged in!');
		console.log('Birthday: ' + response.birthday);
		console.log('Email: ' + response.email);
	});
};

function logout() {
	FB.api('me/permissions', 'DELETE', function(response) {
		console.log("Logged out and permissions revoked.");
	});
};