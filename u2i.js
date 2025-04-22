const usinhl2idict = require('./usinhl2idict.js');
const u2idict = require('./u2idict.js');

const u2i_pre = (ioft) => {
    ioft.i = ioft.i.toLowerCase();
    ioft.i = ioft.i.replaceAll(/([\s\b])क्ष/g, "$1sh").replaceAll(/^क्ष/g, 'sh').replaceAll('ज्ञ', 'gy');
}
/*
 * // .replaceAll(/([kgcztdTDpbs])___h/g, "$1_h").replaceAll(/___h/g, "h").replaceAll(/\b_/g, "")  
*/
const u2i_post = (ioft) => {
	// wowel_chr at boundary/in_between
	//nई ई कई uई eई oई iई  αई Aई  aई Nई
    ioft.o["inglish"] = ioft.o["inglish"].replaceAll(
		/^A([IUEO])/g, "$1").replaceAll(
		/([^kgcztdjqpbshɦyrlwmnf])A([IUEO])/g, "$1$2").replaceAll(
		/([IUEO])/g, function(v) { return v.toLowerCase(); }
	);
    ioft.o["inglish"] = ioft.o["inglish"].replaceAll(
        /([a-zԃɦńᴛ])Aa/g,"$1a").replaceAll(
        /([iueo])A([αIUEO])/g,"$1$2").replaceAll(
        /wN\b/g,"wm").replaceAll(
        /([Aaαiueo])N\b/g,"$1").replaceAll(
        /N([w])/g,"$1").replaceAll( //gaNw nhi gaw
        /(^r)N$/g,"$1").replaceAll(
        /N([),\'\s\.!\?naeiuhwv\b])/g,"$1").replaceAll(
        /N([bBpf])/g,"m$1").replaceAll(
        /N([^kgKG])/g,"n$1").replaceAll(
        /N/g,"n");
    //ioft.o["inglish"] = ioft.o["inglish"].replaceAll( /chch/ig,"cch");
    //ioft.o["inglish"] = ioft.o["inglish"].replaceAll( /([kgcztdjqpbs])ɦ/g,"$1ah");//.replaceAll("ɦ","h");
    //ioft.o["inglish"] = ioft.o["inglish"].replaceAll( /([kgcztdjqpbs])ɦ/ig,"$1ah");//.replaceAll("ɦ","h");
}
/*
 * function is_in_it(list: Array<number> | Record<string, unknown>, val: number): boolean {
        if (!Array.isArray(list)) { list = Object.keys(list).map(Number); }
        return list.indexOf(val) !== -1;
}
*/

const u2i = (ioft) => {
    u2i_pre(ioft);
    const inputLength = ioft.i.length;
    let indeks = 0;
    ioft.o["inglish"] = '';
    let curr_char = ''; let nekst_char = '';
    let curr_char_code = 0;
    let curr_lang_code = 0;
    let curr_char_modulo = 0;
    while (indeks < inputLength) {
        if (indeks === 0) { curr_char = ioft.i[indeks]; } else { curr_char = nekst_char; }
        curr_char_code = curr_char.charCodeAt(0);
        curr_lang_code = (curr_char_code / 0x80) >> 0;
        curr_char_modulo = curr_char_code % 0x80;        
        nekst_char = ioft.i[indeks + 1];
        if (curr_lang_code > 0x11 && curr_lang_code < 0x1B) {
			ioft.o["inglish"] += u2idict.all_phoniks_list[curr_char_modulo]; 
        } else if (curr_lang_code === 0x1B) {
			ioft.o["inglish"] += usinhl2idict.all_phoniks_list[curr_char_modulo]; 
        } else { ioft.o["inglish"] += curr_char; }
		indeks++;
    }
    u2i_post(ioft);
    // console.log("u2i::u2i ioft.o[inglish] is: \n" + ioft.o["inglish"] + "\n"); 
}
module.exports = u2i
