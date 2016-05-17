var MenuItem = function() {
    app.apply(arguments[0], this);
	app.apply({
		compile: function() {
			if (this.icon != null) {
				this.icon = app.aggregate('background-position: center; background-repeat: no-repeat;background-image: url(',
					this.icon,
				'); ');
			}
			if (this.color != null) {
				this.color = app.aggregate('color: ',
					this.color,
				'; ');
			}
			return app.aggregate(
				'<tr><td class="menuItem', this.name, '" ', app.register(this), ' style="', (this.color || ''), (this.icon || ''),
					'width:', this.width, 'px; height: ', this.height, 'px">', this.text,
				'</td></tr>'
			);
		}
	}, this);
}