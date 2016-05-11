var Application = function() {
	this.apply = function(config, target) {
		for (var key in config) {
			if (config.hasOwnProperty(key)) {
				target[key] = config[key]
			}
		}	
	}
	this.apply(arguments[0], this);
	this.apply({
		logEnd: 'alert',//console or alert
		lunch: function () {
			this.dockStation = new DockStation({
				target: this.target
			});
		},
		aggregate: function() {
			var result = "";
			for (var i = 0; i < arguments.length; i++) {
				result+=arguments[i];
			}
			return result;
		},
		update: function(target, html) {
			if (target != null) {
				target.innerHTML = html;
			} else {
				this.log()
			}
		},
		log: function(msg) {
			if (this.logEnd != null) {
				var stackTrace;
				try {
					throw new Error('');
				} catch (error) {
					stackTrace = error.stack || '';
				}
				if (this.logEnd === 'console') {
					console.log(stackTrace);
				} else {
					alert(stackTrace);
				}
			}
		},
		getHeight: function() {
			return Math.max(
				window.innerHeight,
				document.body.offsetHeight,
				document.documentElement.clientHeight
			);
		},
		getWidth: function() {
			return Math.max(
				window.innerWidth,
				document.body.offsetWidth,
				document.documentElement.clientWidth
			);
		}
	}, this);
}

window.onload = function() {
	window.application = window.app = new Application({
		target: document.body
	});
	app.lunch();
}