// ==UserScript==
// @name         Heet Bhimani
// @namespace    MAhaK6al
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://freebitco.in/?op=home
// @grant        none
// ==/UserScript==

(function(){
	var freebitcoin = {
		init: function() {
			this.checkBox = $('#play_without_captchas_button');
			this.rollBtn = $('#free_play_form_button');
			this.checkBoxVisible = this.checkBox.is(':visible');
			this.rollBtnVisible = this.rollBtn.is(':visible');

			if(this.checkBoxVisible) {
				this.handleClick(this.checkBox);
				this.handleClick(this.rollBtn);
			} else if(this.rollBtnVisible) {
				this.handleClick(this.rollBtn);
			}
		},
		handleClick: function(elem) {
			setTimeout(function(){
				elem.click();
			}, 1000);
		}
	};

	setTimeout(function(){
		freebitcoin.init();
	}, 5000);
})();