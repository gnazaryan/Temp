var MenuBar = function() {
    app.apply(arguments[0], this);
	app.apply({
		render: function() {
			if (this.target != null) {
				var menuIrems = [];
				for (var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					menuIrems.push(item.compile());
				}
				app.update(this.target, app.aggregate.apply(this, menuIrems));
			}
		}
	}, this);
	this.render();
}