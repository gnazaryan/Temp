var DockStation = function() {
    app.apply(arguments[0], this);
	app.apply({
		render: function() {
			var appWidth = app.getWidth() - 10;
			var appHeight = app.getHeight() - 10;
			this.statusWidth = appWidth + 4;
			this.statusHeight = 30;
			this.menuWidth = Math.ceil(appWidth*0.06);
			this.menuHeight = appHeight - this.statusHeight;
			this.contentWidth = appWidth - this.menuWidth + 1;
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

			this.menuBarEl = this.target.getElementById('mainMenu');
			this.menuBar = new MenuBar({
				target: this.menuBarEl,
				items: [
				    
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