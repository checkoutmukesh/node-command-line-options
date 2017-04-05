exports.getOptions = function() {
						
						var args = process.argv.slice(2);

						var options = {};
						for(var i in args) {
						    if(args[i].indexOf("--") == 0 ) {
						        var key = args[i].substr(2);
						        res = key.split(/=(.+)?/);
						        options[res[0]]=res[1];
						    }
						}

						return options;
					}

