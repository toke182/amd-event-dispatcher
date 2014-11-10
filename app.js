require(["./dispatcher"], function(evt) {
	evt.subscribe('on/append', function (){
		var p, text;

		for(var i = 0; i < arguments.length; i++) {
			var p = document.createElement("p");
			p.innerHTML = arguments[i];
			this.appendChild(p);
		}
	});
	evt.subscribe('on/append', function (){
		alert("Second listener for the same event triggered");
	});

	evt.trigger("on/append", ["First Paragraph", "Second Paragraph", "Third Paragraph"], document.getElementById("test"));
});