'use strict';
const file_stream = require('fs');
const jsonToSass = require('json-to-scss-or-sass').sass;
const jsonToScss = require('json-to-scss-or-sass').scss;

file_stream.readFile('variables.json', 'utf8', function(error, data) {
  var scss = jsonToScss(data);
  
  	if(scss !== undefined) {
  		file_stream.writeFile("../scss/variables.scss", scss, 'utf8');
  	}
});

alert('Hi Moonrafters');