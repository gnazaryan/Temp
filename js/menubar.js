var MenuBar = function() {
    app.apply(arguments[0], this);
	app.apply({
		render: function() {
			if (this.target != null) {
				var menuIrems = ['<table>'];
				for (var i = 0; i < this.items.length; i++) {
					var item = this.items[i];
					menuIrems.push(item.compile());
				}
				menuIrems.push('</table>');
				app.update(this.target, app.aggregate.apply(app, menuIrems));
			}
		}
	}, this);
	this.render();
}