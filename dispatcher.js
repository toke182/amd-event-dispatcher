define(function(){
	"use strict"

	var subscribedEvents = {};
	function subscribe (name, callback) {
		// Check if the event previously exists
		if(!subscribedEvents[name]) { subscribedEvents[name] = [] };
		// Add the event to the array
		subscribedEvents[name].push(callback);
	}

	function trigger (name, args, context) {
		context = context || this;
		// Check if the event has been subscribed
		if(!subscribedEvents[name]) {return;}

		// If the event exist start triggering all of his callbacks
		return subscribedEvents[name].forEach(function(evt) {
			evt.apply(context, args);
		});
	}

	return {
		trigger: function (name, args, context) {
			// Make sure arguments are an array
			args = args instanceof Array ? args : [args];
			
			return trigger(name, args, context);
		},
		subscribe: function (name, callback) {
			return subscribe(name, callback);
		}
	}
});