const wzk = require('../wzk')
const assert = require('assert')
let t = new wzk();
////// test 0
unicode_str = 'ऋषि';// सुनक , महर्षि वाल्मीकि , संस्कृत रामायण के प्रथम रचयिता हैं जो आदिकवि के रूप में प्रसिद्ध हैं ' ;
ioft={
	i:unicode_str,
	f:"both",
	t:"all",
	o:{
			inglish:"",hindi:"",bangla:"",gurmukhi:"",guzrati:"",oriya:"",
			telugu:"",kannada:"",malayalam:"",sinhala:"",tamil:"",korean:"",
			russian:""
	},
};
console.log("unicode_str is:\n" + unicode_str + "\n"); 
t.ioft_tr(ioft);
console.log("ioft.o.bangla is:\n" + ioft.o["bangla"] + "\n");
return;
////// test 1
let istr = 'हिन्दी ज्ञ संस्कृत दुर्लभ श्रृंगार ज्ञानवापी कौआ विकिपीडिया ' ;
let estr = 'ɦinqi gy snskrij qurlB Srringαr gyαnwαpi koα wikipidiyα'
console.log("istr: \n" + istr + "\nestr is:\n" + estr + "\n"); 
let tstr = t.itr(istr,"both","inglish");
console.log("tstr is: " + tstr + "\n"); 
//return ;
////// test 2
istr = 'अ अ अ\nआ आ आ\nक प म' ;
estr = 'A A A\nAα Aα Aα\nk p m'
console.log("istr: \n" + istr + "\nestr is:\n" + estr + "\n"); 
tstr = t.itr(istr,"both","inglish");
console.log("tstr is:\n" + tstr); 
////// test 3
istr = 'मां संस्कृत ऋषि पिता कौआ बल्ला जंगल मुखपृष्ठ हिन्दी विकिपीडिया' ;
estr = 'mα snskrij risi pijα koα bllα zngl muKprisT ɦinqi wikipidiyα'
console.log("istr: \n" + istr + "\nestr is:\n" + estr + "\n"); 
tstr = t.itr(istr,"both","inglish");
console.log("tstr is:\n" + tstr + "\n"); 
////// test 4
let cases = { अ: 'A', आ: 'Aα', क: 'k', प: 'p', म: 'm' }
for (const k in cases) { assert.equal(t.itr(k,"both","inglish"), cases[k]) }
////// test 5
cases = { मां: 'mα', संस्कृत: 'snskrij', ऋषि: 'risi',
    पिता: 'pijα', कौआ: 'koα', बल्ला: 'bllα', जंगल: 'zngl', मुखपृष्ठ: 'muKprisT',
    'हिन्दी विकिपीडिया': 'ɦinqi wikipidiyα'
  };
for (const k in cases) { assert.equal(t.itr(k,"both","inglish"), cases[k]) }
////// test 3
unicode_str = 'हिन्दू धर्म के सभी धार्मिक अनुष्ठानों में रक्षासूत्र बाँधते समय कर्मकाण्डी पण्डित या आचार्य संस्कृत में एक श्लोक का उच्चारण करते हैं' ;
console.log("unicode_str is:\n" + unicode_str + "\n"); 
ing31str = t.itr(unicode_str,"both","inglish");
console.log("ing31str is:\n" + ing31str + "\n"); 
////// test 3
unicode_str = 'जिसमें रक्षाबन्धन का सम्बन्ध राजा बलि से स्पष्ट रूप से दृष्टिगोचर होता है' ;
console.log("unicode_str is:\n" + unicode_str + "\n"); 
ing31str = t.itr(unicode_str,"both","inglish");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है।' ;
console.log("unicode_str is:\n" + unicode_str + "\n"); 
ing31str = t.itr(unicode_str,"both","inglish");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है।' ;
console.log("unicode_str is:\n" + unicode_str + "\n"); 
ing31str = t.itr(unicode_str,"both","inglish");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'ऋषि सुनक , महर्षि वाल्मीकि , संस्कृत रामायण के प्रथम रचयिता हैं जो आदिकवि के रूप में प्रसिद्ध हैं ' ;
console.log("unicode_str is:\n" + unicode_str + "\n"); 
ing31str = t.itr(unicode_str,"both","inglish");
console.log("ing31str is:\n" + ing31str) + "\n";
////// test 3
unicode_str = 'ऋषि सुनक , महर्षि वाल्मीकि , संस्कृत रामायण के प्रथम रचयिता हैं जो आदिकवि के रूप में प्रसिद्ध हैं ' ;
ioft={i:unicode_str,o:{},f:"both",t:"all"};
console.log("unicode_str is:\n" + unicode_str + "\n"); 
t.ioft_tr(ioft);
console.log("ioft.o.bangla is:\n" + ioft.o["bangla"] + "\n");
