var DOM = require('../libs/dom');

var nav = function(){

	this.ui = {
		login : '#login-btn'
	}

};

nav.prototype.render = function() {
	console.log('renders');

	this.initListeners();
};

nav.prototype.initListeners = function() {

	var loginBtn = DOM.get(this.ui.login);
	

	DOM.on(loginBtn, 'click', function(e) {
		console.log('sap ' + e);
	});
}


module.exports = nav;