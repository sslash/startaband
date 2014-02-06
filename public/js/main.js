var Modal = require('./views/modal');
var NavView = require('./views/nav');

var app = function() {};
window.App = new app();


document.addEventListener('DOMContentLoaded', function(){
	var nav = new NavView();
	nav.render();
});
