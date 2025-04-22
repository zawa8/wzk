const u2i = require('./u2i.js');
const e2i = require('./e2i.js');
// const eu2i = require('./eu2i.js');
const i2l = require('./i2l.js');

const duztr = function  (ioft){
	switch (ioft.f) {
		case "english": e2i(ioft); break;
		case "indik":	u2i(ioft); break;
		case "both":
			e2i(ioft);
			ioft.i=ioft.o["inglish"];
			// console.log("duztr switch both after calling e2i ioft.o.inglish is: \n" + ioft.o.inglish + "\n"); 
			u2i(ioft);
			// console.log("duztr switch both after calling u2i ioft.o.inglish is: \n" + ioft.o.inglish + "\n"); 
		break;
	}
	i2l(ioft);
	// console.log("duztr after calling i2l ioft.o.inglish is: \n" + ioft.o.inglish + "\n"); 
}
module.exports = duztr
//1. 1. सvтṅтर बhαरт kα सबसe सफल oर सkसम परदhαन मṅтरi ɦei मoदi zi. iनke बαरe मe kuch बoलनe oर लikhनe सe पɦलe बɦuт सoćनα सoꞇनα पडтα ɦei. eसα kरiसhमαi vयkтiтv नɦi दekhα kiसi vयkтi यα नeтα मe. मαтरबhuमi ke लie पuरन रuप सe समरपiт iस मɦαन vयkтi ko koटi koटi परनαम. #vowelहiनदi

