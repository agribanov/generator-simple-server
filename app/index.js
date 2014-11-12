var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function() {
		this.log('\n \t \t [ Welcome to Simple Server Generator ] \n');
	},
	prompting: function(){
		var done = this.async();
		this.prompt([{
			type: 'input',
			name: 'dirname',
			message : 'Directory name for static files',
			default : 'public'
		},{
			type: 'input',
			name: 'port',
			message : 'Port for running http server',
			default : 8080
		}], function (answers) {
			this.answers = answers;
			done();
		}.bind(this));
	},
	writing: function(){
		this.src.copy('package.json', 'package.json');
		this.src.copy('server.js', 'server.js');
		this.src.copy('index.html', 'public/index.html');
		this.write('config.json', JSON.stringify(this.answers, null, 2));
	},
	install: function(){
		var done = this.async();
		this.npmInstall([], done);
	},
	end: function(){
		this.log("\n All is done. type 'node server' to start Simple Server \n");
	}
});
