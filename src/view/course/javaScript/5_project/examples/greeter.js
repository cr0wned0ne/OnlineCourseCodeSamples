/**
 * Greeter Framework
 */
;// to make sure that other code that is executed before is finished.
(function(global, $){
	
	var Greeter = function(firstname, lastname, language) {
		return new Greeter.init(firstname, lastname, language);
		
	}
	//Closures: this is never shown outside, but available here!!
	//Hidden inside the SCOPE of the IIFE
	
	//supported languages
	var supportedLangs = ["en", "es"];
	
	// greetings
	var greetings = {
			en: "Hello",
			es: "Hola"
	};
	
	// formal greetings
	var formalGreetings = {
			en: "Greetings",
			es: "Saludos"
	};
	
	// log messages
	var logMessages = {
			en: "Logged in",
			es: "Inicio session"
	};
	
	// Prototype definition: holds methods to save memory 
	Greeter.prototype = {
			// get Full Name
			fullName : function() {
				return this.firstname + " " + this.lastname;
			},
			// validate language
			validate: function() {
				if (supportedLangs.indexOf(this.language) === -1) {
					if(console) {
						console.log("Language:" + this.language);
					}
					throw "Invalid language";
				};
			},
			// informal greeting
			greeting: function() {
				return greetings[this.language] + " " + this.firstname;
			},
			// formal greeting
			formalGreeting : function() {
				return formalGreetings[this.language] + " " + this.fullName();
			},
			// greeting function!
			greet: function(formal) {
				var msg;
				if(formal) {
					msg = this.formalGreeting();
				} else {
					msg = this.greeting();
				}
				if (console) {
					console.log(msg);
				}
				//make it chainable!
				return this;
			},
			// log login
			log: function() {
				if(console) {
					console.log(logMessages[this.language] + ": " + this.fullName());
				}
				return this;
			},
			// set the language
			setLanguage: function(newLanguage) {
				this.language = newLanguage;
				this.validate();
				return this;
			},
			// set greeting to selector element.
			setGreeting: function(selector, formal) {
				if(!jQuery) {
					throw "No Query!";
				}
				if (!selector) {
					throw "No Selector!"
				}
				jQuery(selector).text(!formal ? this.greeting() : this.formalGreeting());
				return this;
			}
	};
	
	// Initialization: the actual object is created here, aloowing us to 'new' an object without calling 'new'
	Greeter.init = function(firstname, lastname, language) {
		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";
		self.validate();
	}
	
	// trick borrowed from jQUery so we don't have to use the "new" keyword
	Greeter.init.prototype = Greeter.prototype;
	
	// attach Greeter to the global object, and provide a shorthand 
	global.Greeter = global.G$ = Greeter;
	
})(window, jQuery);