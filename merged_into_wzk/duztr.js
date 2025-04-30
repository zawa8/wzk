const u2i = require('./u2i.js');
const e2i = require('./e2i.js');
// const eu2i = require('./eu2i.js');
const i2l = require('./i2l.js');

// const duztr = function  (ioft){
function  duztr(){
	switch (this.tostr) {
		case "english": this.e2i(); break;
		case "indik":	this.u2i(); break;
		case "both":
			this.e2i();
			this.istr=this.odikt["inglish"];
			//console.log("duztr switch both after calling e2i this.odikt.inglish is: \n" + this.odikt.inglish + "\n"); 
			this.u2i();
			//console.log("duztr switch both after calling u2i this.odikt.inglish is: \n" + this.odikt.inglish + "\n"); 
		break;
	}
	this.istr=this.odikt["inglish"];
	this.i2l();
	//console.log("duztr after calling i2l this.odikt.inglish is: \n" + this.odikt.inglish + "\n"); 
}
module.exports = duztr
//1. 1. सvтṅтर बhαरт kα सबसe सफल oर सkसम परदhαन मṅтरi ɦei मoदi zi. iनke बαरe मe kuch बoलनe oर लikhनe सe पɦलe बɦuт सoćनα सoꞇनα पडтα ɦei. eसα kरiसhमαi vयkтiтv नɦi दekhα kiसi vयkтi यα नeтα मe. मαтरबhuमi ke लie पuरन रuप सe समरपiт iस मɦαन vयkтi ko koटi koटi परनαम. #vowelहiनदi

