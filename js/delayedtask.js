var DelayedTask = function() {
    app.apply(arguments[0], this);
	app.apply({
		delay: function(time) {
			var me = this;
			this.time = time || this.time;
			if (this.timer) {
				clearTimeout(this.timer);
			}
			if (this.method) {
				var args = Array.prototype.slice.call(arguments, 1, arguments.length);
				this.timer = setTimeout(function() {
					me.method.apply((me.scope || me), args);
				}, this.time);
			}
		},
		time: 500
	}, this);
}