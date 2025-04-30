const usinhl2idict = require('./usinhl2idict.js');
const u2idict = require('./u2idict.js');

function u2i_pre(){
    this.istr = this.istr.toLowerCase();
    this.istr = this.istr.replaceAll(/([\s\b])क्ष/g, "$1sh").replaceAll(/^क्ष/g, 'sh').replaceAll('ज्ञ', 'gy');
}

function u2i_post(){ // wowel_chr at boundary/in_between //nई ई कई uई eई oई iई  αई Aई  aई Nई
    this.odikt["inglish"] = this.odikt["inglish"].replaceAll(
		/^A([IUEO])/g, "$1").replaceAll(
		/([^kgcztdjqpbshɦyrlwmnf])A([IUEO])/g, "$1$2").replaceAll(
		/([IUEO])/g, function(v) { return v.toLowerCase(); }
	);
    this.odikt["inglish"] = this.odikt["inglish"].replaceAll(
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
}

function u2i(){
    this.u2i_pre();
    const inputLength = this.istr.length;
    let indeks = 0;
    this.odikt["inglish"] = '';
    let curr_char = ''; let nekst_char = '';
    let curr_char_code = 0;
    let curr_lang_code = 0;
    let curr_char_modulo = 0;
    while (indeks < inputLength) {
        if (indeks === 0) { curr_char = this.istr[indeks]; } else { curr_char = nekst_char; }
        curr_char_code = curr_char.charCodeAt(0);
        curr_lang_code = (curr_char_code / 0x80) >> 0;
        curr_char_modulo = curr_char_code % 0x80;        
        nekst_char = this.istr[indeks + 1];
        if (curr_lang_code > 0x11 && curr_lang_code < 0x1B) {
			this.odikt["inglish"] += u2idict.all_phoniks_list[curr_char_modulo]; 
        } else if (curr_lang_code === 0x1B) {
			this.odikt["inglish"] += usinhl2idict.all_phoniks_list[curr_char_modulo]; 
        } else { this.odikt["inglish"] += curr_char; }
		indeks++;
    }
    this.u2i_post();
    console.log("u2i::u2i this.odikt[inglish] is: \n" + this.odikt["inglish"] + "\n"); 
}
module.exports = u2i
