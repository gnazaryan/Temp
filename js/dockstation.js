var DockStation = function() {
    app.apply(arguments[0], this);
	app.apply({
		render: function() {
			var appWidth = app.getWidth();
			var appHeight = app.getHeight();
			this.statusWidth = appWidth;
			this.statusHeight = 25;
			this.menuWidth = Math.ceil(appWidth*0.06);
			this.menuHeight = appHeight - this.statusHeight;
			this.contentWidth = appWidth - this.menuWidth + 1 - 4;
			this.contentHeight = appHeight - this.statusHeight;

			var html = app.aggregate(
				'<div class="main">',
				    '<div id="mainStatus" style="width: ',this.statusWidth,'px; height: ',this.statusHeight,'px;" class="mainStatus">',
					'</div>',
					'<div id="mainMenu" style="width: ',this.menuWidth,'px; height: ',this.menuHeight,'px;" class="mainMenu">',
					'</div>',
					'<div id="mainContent" style="width: ',this.contentWidth,'px; height: ',this.contentHeight,'px;" class="mainContent">',
					'</div>',
				'</div>'
				);
			app.update(this.target, html);

			this.menuBarEl = document.getElementById('mainMenu');
			this.spaceShip = new MenuItem({
				text: 'Spaceship',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/space_ship_64x64.png',
				color: '#FF681C',
				listeners: {
					onmouseover: function(obj) {
						//debugger;
					}
				}
			});
			this.social = new MenuItem({
				text: 'Social',
				width: this.menuWidth,
				height: this.menuWidth,
				color: '#545454',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.skies = new MenuItem({
				text: 'Skies',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/skies_64x64.png',
				color: '#7ec0ee',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.calendar = new MenuItem({
				text: 'Calendar',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/calendar_64x64.png',
				color: '#18B51A',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.mail = new MenuItem({
				text: 'X-mail',
				width: this.menuWidth,
				height: this.menuWidth,
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.media = new MenuItem({
				text: 'Media',
				width: this.menuWidth,
				height: this.menuWidth,
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.menuBar = new MenuBar({
				target: this.menuBarEl,
				width: this.menuWidth,
				height: this.menuHeight,
				items: [
				    this.spaceShip,
					this.social,
					this.skies,
					this.calendar,
					this.mail,
					this.media
				]
			});
		},
		setFrameColor: function(color) {
			this.getMenuBarEl().style.backgroundColor = color;
		},
		getMenuBar: function() {
			return this.menuBar;
		},
		getMenuBarEl: function() {
			return this.menuBarEl;
		}
	}, this);
	this.render();
}