var DockStation = function() {
    app.apply(arguments[0], this);
	app.apply({
		group: 'mainMenu',
		colorSchemDelay: 700,
		render: function() {
			var me = this;
			var appWidth = app.getWidth();
			var appHeight = app.getHeight();
			this.statusWidth = appWidth;
			this.statusHeight = 25;
			this.menuWidth = 70;
			this.menuHeight = appHeight - this.statusHeight;
			this.contentWidth = appWidth - this.menuWidth + 1 - 2;
			this.contentHeight = appHeight - this.statusHeight;
			this.colorSchemTask = new DelayedTask({
							method: this.setSchemColor,
							scope: this
						});
			var html = app.aggregate(
				'<div class="main" ', app.register(this), '>',
				    '<div id="mainStatus" style="width: ',this.statusWidth,'px; height: ',this.statusHeight,'px;" class="mainStatus">',
					'</div>',
					'<div id="mainMenu" style="width: ',this.menuWidth,'px; height: ',this.menuHeight,'px;" class="mainMenu">',
					'</div>',
					'<div id="mainContent" style="width: ',this.contentWidth,'px; height: ',this.contentHeight,'px;" class="mainContent">',
					'</div>',
				'</div>'
				);
			app.update(this.target, html);

			this.mainMenuEl = document.getElementById('mainMenu');
			this.mainStatusEl = document.getElementById('mainStatus');
			this.spaceship = new MenuItem({
				text: 'Space',
				name: 'spaceship',
				group: 'mainMenu',
				selected: true,
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/space_ship_32x32.png',
				color: '#FF681C',
				activeColor: '#FABEA0',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.social = new MenuItem({
				text: 'Social',
				name: 'social',
				group: 'mainMenu',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/social_32x32.png',
				color: '#545454',
				activeColor: '#B5B5B5',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.skies = new MenuItem({
				text: 'Skies',
				name: 'skies',
				group: 'mainMenu',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/skies_32x32.png',
				color: '#4AACF0',
				activeColor: '#A2CBE8',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.calendar = new MenuItem({
				text: 'Calendar',
				name: 'calendar',
				group: 'mainMenu',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/calendar_32x32.png',
				color: '#18B51A',
				activeColor: '#7BD17C',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.xmail = new MenuItem({
				text: 'X-mail',
				name: 'xmail',
				group: 'mainMenu',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/mail_32x32.png',
				color: '#FC2B47',
				activeColor: '#FCB3BD',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.media = new MenuItem({
				text: 'Media',
				name: 'media',
				group: 'mainMenu',
				width: this.menuWidth,
				height: this.menuWidth,
				icon: './images/media_32x32.png',
				color: '#08232B',
				activeColor: '#497F8F',
				listeners: {
					onmouseover: function(obj) {
						me.colorSchemTask.delay(me.colorSchemDelay, this.activeColor);
					},
					onclick: function(obj) {
						this.setSelected(true);
					}
				}
			});
			this.menuBar = new MenuBar({
				target: this.mainMenuEl,
				width: this.menuWidth,
				height: this.menuHeight,
				items: [
				    this.spaceship,
					this.social,
					this.skies,
					this.calendar,
					this.xmail,
					this.media
				]
			});
		},
		messanger: function(message, origin) {
			switch(message) {
				case 'menuSelect':
					this.setSchemColor(origin.activeColor);
					break;
				case '':
					break;
				default:	
			}
		},
		setFrameColor: function(color) {
			this.getMenuBarEl().style.backgroundColor = color;
		},
		getMenuBar: function() {
			return this.menuBar;
		},
		getMenuBarEl: function() {
			return this.mainMenuEl;
		},
		setSchemColor: function(color) {
			this.mainStatusEl.style.borderColor = color;
			this.mainMenuEl.style.borderColor = color;
			
		}
	}, this);
	this.render();
}