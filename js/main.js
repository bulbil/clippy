
var SLIDES = [
	'bee',
	'binder',
	'blur',
	'clippers',
	'erotic',
	'graffiti',
	'pin',
	'squint'
]

var bkgrnd_change = function () {
		$('div#wrapper div').css('backgroundImage',function(){
		var index = Math.floor(SLIDES.length * Math.random());
		var img_path = 'url(img/';
		img_path += SLIDES[index];
		img_path += '.jpg)';
		return img_path;
	});
}


$(function(){

    clippy.load('Clippy', function(agent){
        // do anything with the loaded agent
        agent.show();
	
		$('div.clippy').on('click', function() {
			agent.animate();
			bkgrnd_change();
		});
    });

});