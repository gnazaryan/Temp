var MenuItem = function() {
    app.apply(arguments[0], this);
	app.apply({
		selected: (this.selected || false),
		compile: function() {
			if (this.icon != null) {
				this.icon = app.aggregate('background-position: center; background-repeat: no-repeat;background-image: url(',
					this.icon,
				'); ');
			}
			if (this.color != null) {
				this.colorStyle = app.aggregate('color: ',
					this.color,
				'; ');
			}
			return app.aggregate(
				'<tr id=', (this.id || this.name), '><td class="menuItem', this.name, '" ', app.register(this), ' style="', (this.colorStyle || ''), (this.icon || ''),
					'width:', this.width, 'px; height: ', this.height, 'px">', this.text,
				'</td></tr>'
			);
		},
		setSelected: function(selected, suspend) {
			if (this.menuItemEl != null) {
				this.menuItemEl.style.backgroundColor = (selected == true) ? this.activeColor : '#FFFFFF';
				this.selected = selected;
				if (suspend == null || suspend == false) {
					app.notify(this.group, 'menuSelect', this);
				}
			}
		},
		render: function() {
			this.menuItemEl = document.getElementById(this.id || this.name);
			this.setSelected(this.selected, true);
			if (this.selected == true) {
				app.notify(this.group, 'menuSelect', this);
			}
		},
		messanger: function(message, origin) {
			switch(message) {
				case 'menuSelect':
					if (this != origin) {
						this.setSelected(false, true);
					}
					break;
				case '':
					break;
				default:	
			}
		}
	}, this);
}