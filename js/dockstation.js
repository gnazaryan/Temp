var DockStation = function() {
    app.apply(arguments[0], this);
	app.apply({
		render: function() {
			var appWidth = app.getWidth();
			var appHeight = app.getHeight();
			this.statusWidth = appWidth;
			this.statusHeight = 25;
			this.menuWidth = 70;
			this.menuHeight = appHeight - this.statusHeight;
			this.contentWidth = appWidth - this.menuWidth + 1 - 2;
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
				text: 'Space',
				name: 'spaceship',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/space_ship_32x32.png',
				color: '#FF681C',
				listeners: {
					onmouseover: function(obj) {
						//debugger;
					}
				}
			});
			this.social = new MenuItem({
				text: 'Social',
				name: 'social',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/social_32x32.png',
				color: '#545454',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.skies = new MenuItem({
				text: 'Skies',
				name: 'skies',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/skies_32x32.png',
				color: '#4AACF0',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.calendar = new MenuItem({
				text: 'Calendar',
				name: 'calendar',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/calendar_32x32.png',
				color: '#18B51A',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.mail = new MenuItem({
				text: 'X-mail',
				name: 'xmail',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/mail_32x32.png',
				color: '#FC2B47',
				listeners: {
					onmouseover: function(obj) {
						
					}
				}
			});
			this.media = new MenuItem({
				text: 'Media',
				name: 'media',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/media_32x32.png',
				color: '#08232B',
				listeners: {
					onmouseover: function(obj) {
						var me = this;
						debugger;
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