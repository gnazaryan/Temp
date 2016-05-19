var Application = function() {
	this.pool = {};
	this.notificationPool = {};
	this.getUniqeId = function(target) {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					 s4() + '-' + s4() + s4() + s4();
	}
	this.apply = function(config, target) {
		var id = this.getUniqeId(target);
		target['id'] = id;
		this.pool[id] = target;
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
            /*this.menuSelector = new DelayedTask({
                method: this.selectMenu,
				scope: this
		    });
			this.menuSelector.delay(300);*/
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
		},
		register: function(target) {
			//register notification
			if (target.group != null) {
				if (this.notificationPool[target.group] == null) {
					this.notificationPool[target.group] = [];
				}
				this.notificationPool[target.group].push(target);
			}
			//register listeners
			var result = [];
			if (target.listeners != null) {
				for (var listener in target.listeners) {
					result.push(this.aggregate(listener, '="app.fire(this, \'', 
					listener, '\', \'',target.id, '\');" '));
				}
			}
			return this.aggregate.apply(this, result);
		},
		notify: function(name, message, origin) {
			var group = this.notificationPool[name];
			if (group != null) {
				for (var i = 0; i < group.length; i++) {
					if (group[i].messanger != null) {
						group[i].messanger(message, origin);
					}
				}
			}
		},
		fire: function(obj, listener, id) {
			var target = this.pool[id];
			if (target.listeners[listener] != null) {
				target.listeners[listener].apply(target, [obj]);
			}
		},
		selectMenu: function() {
			this.dockStation.selectMenu('spaceship');
		}
	}, this);
}

window.onload = function() {
	window.application = window.app = new Application({
		target: document.body
	});
	app.lunch();
}