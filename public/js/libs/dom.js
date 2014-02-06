var DOM = {
	get : function(el) {
		var nodeList = document.querySelectorAll(el);
		if ( nodeList.length === 1 ) {
			return nodeList[0];
		}else {
			return nodeList;
		}
	},

	on : function($el, event, cb) {
		if ( $el ) {

			if ( $el instanceof HTMLElement ) {
				$el.addEventListener(event, cb);
			} else {
				throw Error ($el + ' is not an HTMLelement');	
			}

		} else {
			throw Error ('Must have an element');	
		}
	}
}


module.exports = DOM;