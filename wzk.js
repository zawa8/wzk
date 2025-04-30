  //const duztr = require('./duztr.js');
  //const u2i = require('./u2i.js');
  //const e2i = require('./e2i.js');
  //const usinhl2idict_src = require('./usinhl2idict.js');
  //const u2idict_src = require('./u2idict.js');

  // const eu2i = require('./eu2i.js');
  //const i2l = require('./i2l.js');
  //	constructor(i="",fromstr="both",tostr="inglish",o={
  //    inglish: "", korean: "", russian: "", hindi: "", bangla: "", gurmukhi: "", guzrati: "",
  //    oriya: "", tamil: "", kannada: "", telugu: "", malayalam:"", sinhala:"",
  //  }) {
  class wzk {
    static  allowedfromstr = ['english', 'indik', 'both'];
    static  allowedtostr = [
      "all", "inglish", "korean", "russian", "hindi", "bangla", "gurmukhi", "guzrati",
      "oriya", "tamil", "kannada", "telugu", "malayalam", "sinhala"
    ];

    constructor(istr="", fromstr="both", tostr="inglish") {
    if (wzk.allowedfromstr.includes(fromstr)) { this.fromstr = fromstr; }
    else {
      throw new Error(`inwalid fromstr: ${fromstr}. allowed fromstr are: ${wzk.allowedfromstr.join(', ')}`);
    }
    if (wzk.allowedtostr.includes(tostr)) { this.tostr = tostr; }
    else {
      throw new Error(`inwalid tostr: ${tostr}. allowed tostr are: ${wzk.allowedtostr.join(', ')}`);
    }
    
    this.istr = istr;
    this.odikt = {
      inglish: "", korean: "", russian: "", hindi: "", bangla: "", gurmukhi: "", guzrati: "",
      oriya: "", tamil: "", kannada: "", telugu: "", malayalam:"", sinhala:"",
    };
    // this.odikt = o;
    };
    duztr(){
      console.log(`duztr: this.fromstr is ${this.fromstr} xnd this.tostr is ${this.tostr}`); 
      switch (this.fromstr) {
        case "english": this.e2i(); break;
        case "indik":	this.u2i(); break;
        case "both":
          this.e2i();
          this.istr=this.odikt["inglish"];
          console.log(`duztr: switch_case_both: after calling e2i this.odikt.inglish is: \n${this.odikt.inglish}. \n`); 
          this.u2i();
          console.log(`duztr: switch_case_both: after calling u2i this.odikt.inglish is: \n${this.odikt.inglish}. \n`); 
        break;
      }
      this.istr=this.odikt["inglish"];
      this.i2l();
      //console.log("duztr after calling i2l this.odikt.inglish is: \n" + this.odikt.inglish + "\n"); 
    }
    Hh2phonetic_H(){ 
      this.istr = this.istr.replaceAll(
        /H/g, "h").replaceAll(
        /(\s)h/g, "$1H").replaceAll(
        /([^kgcꞇćjztdpbswटडपबसԃᴛ])h/ig, "$1H");
  }
  //////// ñṅ ꟈԃ[ɦꟈđꞇṅᴀ]ɦԃćńàᴀ
    Nn2phonetic_N(){
      this.istr = this.istr.replaceAll(
      /N/g,"n").replaceAll(
      /n([cgk])\b/ig,"ṅ$1").replaceAll(/\bn/ig,"ñ").replaceAll(
      /([a-z])nk/ig,"$1ṅk").replaceAll(/oung/ig,"ouṅg").replaceAll(
      /ginge/ig,"giñge").replaceAll(/([ht])inge/ig,"$1iñge").replaceAll(/([fyc])ring/ig,"$1riñg").replaceAll(
      /engin/ig,"eñgin").replaceAll(/ngth/ig,"ñgth").replaceAll(
      /ange([^dr])/ig,"añge$1").replaceAll(
      /\bt([ai])ng([ei])/ig,"t$1ñg$2").replaceAll(/\bangi/ig,"añgi").replaceAll(
      /inge/ig,"iñge").replaceAll(/ing/ig,"iṅg").replaceAll(
      /nge\b/ig,"ñge").replaceAll(
      /ngel/ig,"ñgel").replaceAll(/([dr])ang([ei])/ig,"$1añg$2").replaceAll(
      /([lv])eng/ig,"$1eñg").replaceAll(/chang([ei])/ig,"chañg$1").replaceAll(/sseng/ig,"sseñg").replaceAll(
      /nger/ig,"ṅger").replaceAll(
      /([a-z])ng/ig,"$1ṅg").replaceAll(
      /sync/ig,"syṅc").replaceAll(/anchor/ig,"aṅchor").replaceAll(/linco/ig,"liṅco").replaceAll(
      /sincl/ig,"siṅcl").replaceAll(
      /\buncle(s?)\b/ig,"uṅcle$1").replaceAll(/menco/ig,"meṅco").replaceAll(/([iu])nct/ig,"$1ṅct").replaceAll(
      /nc([hyei])/ig,"ñc$1").replaceAll(
      /inc([^hueioay])/ig,"iṅc$1").replaceAll(
      /inc([aeiou])/ig,"iñc$1").replaceAll(
      /([a-z])unc([^hyei])/ig,"$1uṅc$2").replaceAll(
      /enc([^eiyh])/ig,"eñc$1").replaceAll(
      /([ao])nc([^hyei])/ig,"$1ṅc$2").replaceAll(
      /ṅ/g,"N").replaceAll(
      /ñ/g,"n");
  }
  // à
    Ww2vv(){
      this.istr = this.istr.replaceAll(
      /W/g,"w").replaceAll(
      /away/ig,"àⱱày").replaceAll(/war([ey])/ig,"ⱱàr$1").replaceAll(/wa([nrs])/ig,"ⱱα$1").replaceAll(
      /who/ig,"ẃहo").replaceAll(/wr/ig,"ẃr").replaceAll(/\bw/ig,"ⱱ").replaceAll(
      /w\b/ig,"ẃ").replaceAll(
      /swer/ig,"sẃer").replaceAll(/two/ig,"tẃo").replaceAll(/([^aeo])w/ig,"$1ⱱ").replaceAll(
      /\baw([^efknr])/ig,"àⱱ$1").replaceAll(
      /aw([efknr])/ig,"αẃ$1").replaceAll(
      /([a-z])aw/ig,"$1αẃ").replaceAll(
      /([eo])w/ig,"$1ẃ").replaceAll(
      /ẃ/g,"w").replaceAll(/ⱱ/g,"W");
  }
  // àα
    Aa2phonetic_Aa(){
    this.istr = this.istr.replaceAll(
      /A/g,"a").replaceAll(
      /aft/ig,"αft").replaceAll(/aw([kf\s])/ig,"αw$1").replaceAll(
      /\bar([cekmst])\b/ig,"αr$1").replaceAll(/guar/ig,"guαr").replaceAll(
      /ijab/ig,"ijαb").replaceAll(/ebab/ig,"ebαb").replaceAll(
      /ihad/ig,"iHαԃ").replaceAll(
      /ia([ck])/ig,"iα$1").replaceAll(
      /\ba/ig,"à").replaceAll(
      /ai\b/g,"αi").replaceAll(
      /uar([bce-su-z])/ig,"uàr$1").replaceAll(
      /([a-z])a\b/ig,"$1α").replaceAll(
      /a([w])\b/ig,"α$1").replaceAll(
      /\ba([ntsmd])\b/ig,"à$1").replaceAll(
      /ar([aiey])/ig,"àr$1").replaceAll(
      /([^uheio\s])arre([^lasn])/ig,"$1αrre$2").replaceAll(
      /([eio\s])ar/ig,"$1àr").replaceAll(
      /i([lgn])ar([^y])/ig,"i$1αr$2").replaceAll(
      ///////
      /([^beiuohlgn])ar([^y])/ig,"$1αr$2").replaceAll(
      /bar([^oiuer])/ig,"bαr$1").replaceAll(
      ///////
      /era([\b\s])/ig,"erα$1").replaceAll(
      /([bcdfह\b\s])all([^yo])/ig,"$1αll$2").replaceAll(
      /ava/ig,"αvα").replaceAll(
      /([^\b\soe])ard/ig,"$1αrd").replaceAll(
      /([ag])raph/ig,"$1rαph").replaceAll(
    /las([skmt])/ig,'lαs$1');
  }
  // ɦ ⱱ
    e2i(){
      //Hh2phonetic_H(ioft);
      //Nn2phonetic_N(ioft); 
      //Ww_to_vv(ioft);	
      //Aa2phonetic_Aa(ioft);
      //this.istr.value = this.istr.value.replaceAll(/c/ig,'ć'); ///ꞇ
      // ɦHɦĥ
      //this.istr = this.istr.replaceAll(/H/g,'ɦ').replaceAll(/N/g,'ń').replaceAll(/à/g,'a'); //α/g,'A').replaceAll();
      this.istr = this.istr.toLowerCase();
      this.istr = this.istr.replaceAll(/j/g,'z').replaceAll(/q/g,'k').replaceAll(
      /v/g,'w').replaceAll(/([a-wyz])x/g,"$1ks").replaceAll(
      /xi/g,'zi').replaceAll(/xmas/g,"chritmas").replaceAll(
        /xr/g,'Aksr').replaceAll(/\bx/g,"Aks"); //α/g,'A').replaceAll();
      this.odikt["inglish"] = this.istr ;
      console.log("e2i::e2i this.odikt[inglish] is: \n" + this.odikt["inglish"] + "\n"); 
    }		
    u2i_pre(){
      this.istr = this.istr.toLowerCase();
      this.istr = this.istr.replaceAll(/([\s\b])क्ष/g, "$1sh").replaceAll(/^क्ष/g, 'sh').replaceAll('ज्ञ', 'gy');
    }
    u2i_post(){ // wowel_chr at boundary/in_between //nई ई कई uई eई oई iई  αई Aई  aई Nई
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
    u2i(){
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
          this.odikt["inglish"] += wzk.u2idict.all_phoniks_list[curr_char_modulo]; 
        } else if (curr_lang_code === 0x1B) {
          this.odikt["inglish"] += wzk.usinhl2idict.all_phoniks_list[curr_char_modulo]; 
        } else { this.odikt["inglish"] += curr_char; }
        indeks++;
      }
      this.u2i_post();
      console.log("u2i::u2i this.odikt[inglish] is: \n" + this.odikt["inglish"] + "\n"); 
    }
    i2l() { //alert("in i2l");
      const inputLength = this.istr.length;
      let indeks = 0; 
      let curr_chr = ''; 
      //const i2il_dikt_keys = Object.keys(i2l_dikt);
      //for (const key in myObject) {
      while (indeks < inputLength) {
        curr_chr = this.istr[indeks];
        const chr_indeks = wzk.hinchars.indexOf(curr_chr); 
        //for (let i = 0; i < i2l_dikt.length; i++) {
        switch(this.tostr)
        {
          case "inglish":				
          break;
          case "all":
          //console.log(`i2l.js case all i2il_dikt_keys is ${i2il_dikt_keys}: \n`); 
            //i2il_dikt_keys.forEach(key => {
            for (const key in wzk.i2l_dikt) {
              //console.log(`i2l.js case all: indeks is ${indeks} curr_chr is ${curr_chr}\n`); 
              //console.log(`i2l.js case all: key is ${key} chr_indeks is ${chr_indeks}\n`); 
              if (chr_indeks > -1) {
                this.odikt[key] += wzk.i2l_dikt[key][chr_indeks];
                //console.log("key is " + key + " and this.odikt[key] is " + this.odikt[key] + "\n"); 
              }
              else { this.odikt[key] += curr_chr; }
            };						
          break;
          default:
            if (this.tostr in wzk.i2l_dikt) {
              if (chr_indeks > -1) { this.odikt[this.tostr] += i2l_dikt[this.tostr][chr_indeks]; }
              else { this.odikt[this.tostr] += curr_chr; }					
            }
        }
        indeks++;
      }
    }

    transliterate_dom_node(node_arg) {
      let dikt_pair_list = []; let curr_dikt_pair = null;
      let curr_node_text = ""; let text = "";
    let nekst_node = null; let ztred_span_list = null; let nekst_ztred_span = null;
    this.fromstr = "both"; this.tostr = "inglish";
      let nodeIterator = node_arg.ownerDocument.createNodeIterator(node_arg, NodeFilter.SHOW_TEXT,
          { acceptNode: (node) => {
        if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; }
      }}
      );
  /*    let nodeIterator = node_arg.ownerDocument.createNodeIterator(node_arg, NodeFilter.SHOW_TEXT,
          { acceptNode: (node) => {
        if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; }
      }},
          false
      );*/

      //nekst_node = nodeIterator.nextNode() ;
      while ( nekst_node = nodeIterator.nextNode() ) {
        dikt_pair_list.push({ tekstNode: nekst_node, start: text.length });
        text += nekst_node.nodeValue;
        //nekst_node = nodeIterator.nextNode()
      }
      if (!dikt_pair_list.length) return;
      for (let i = 0; i < dikt_pair_list.length; ++i) { curr_dikt_pair = dikt_pair_list[i];
        curr_node_text = curr_dikt_pair.tekstNode.textContent;
        var spanNode = document.createElement("span");
        spanNode.className = "ztred";
        spanNode.dataset.oldtekst = curr_node_text;
        curr_dikt_pair.tekstNode.parentNode.replaceChild(spanNode, curr_dikt_pair.tekstNode);
        spanNode.appendChild(curr_dikt_pair.tekstNode);
      }
      ztred_span_list = node_arg.getElementsByClassName('ztred');
    for (let i = 0; i < ztred_span_list.length; ++i)
    {
      nekst_ztred_span = ztred_span_list[i];
      this.istr = nekst_ztred_span.textContent;
      this.itr();
      nekst_ztred_span.textContent = this.odikt["inglish"]; /// wery wery important
    }
    }
    untransliterate_dom_node() {
      let nodes = document.getElementsByClassName('ztred');
      let node = null;
      for (let i = 0;i < nodes.length;i++) {
        node = nodes[i];
        if(node.innerText.charCodeAt(0) != node.innerText.charCodeAt(0)) continue ;
        node.innerText = node.dataset.oldtekst;
      }
    }
    static hinchars = "kKzZtTdDjJqQnpfbBmyrlSsɦA"; // ɦa";
    static i2l_dikt = {
      hindi: "कखजझटठडढतथदधनपफबभमयरलशसहअव",
      bangla: "কখজঝটঠডঢতথদধনপফবভমযরলশসহঅw",
      gurmukhi: "ਕਖਜਝਟਠਡਢਤਥਦਧਨਪਫਬਭਮਯਰਲਸ਼ਸਹਅਵ",
      guzrati: "કખજઝટઠડઢતથદધનપફબભમયરલશસહઅવ",
      oriya: "କଖଜଝଟTଡଢତଥଦଧନପଫବଭମଯରଲଶସହଅଵ",
      telugu: "కఖజఝటఠడఢతథదధనపఫబభమయరలశసహఅవ",
      kannada: "ಕಖಜಝಟಠಡಢತಥದಧನಪಫಬಭಮಯರಲಶಸಹಅವ",
      malayalam: "കഖജഝടഠഡഢതഥദധനപഫബഭമയരലശസഹഅവ",
      sinhala: "කඛජඣටඨඩඪතථදධනපඵබභමයරලශසහඅව",
      tamil: "கKஜZடTdDதJqQநபfbBமயரலஶஸஹஅவ",
      korean: "ㅋKㅈZㅌT다DjJqQㄴㅍf바Bㅁㅑ라lSㅅㅎㅏ봐",
      russian: "kKzZtTдДtTдДнпфбБмйрлщшɦa",
    };
    static xvjqK2hindi(i) {
      return i.replaceAll(
      "q", "द").replaceAll("j", "त").replaceAll(
      "Q", "ध").replaceAll("J", "थ").replaceAll(
      "K", "ख").replaceAll("Z", "झ").replaceAll("T", "ठ").replaceAll("D", "ढ").replaceAll(
      "B", "भ").replaceAll("S", "श").replaceAll(
      "x", "अ").replaceAll("v", "ह");
    }
    static kh2hindiK(i) {
      return i.replaceAll(
      /([kztdjqbs])h/g, "$1___").replaceAll(
      "q___", "ध").replaceAll("j___", "थ").replaceAll(
      "k___", "ख").replaceAll("z___", "झ").replaceAll("t___", "ठ").replaceAll("d___", "ढ").replaceAll(
      "b___", "भ").replaceAll("s___", "श");
    }
    static usinhl2idict = {
      /////[ɦꟈđꞇćṅᴀ]ɦćԃďńàᴀ	//kKzZtTdDjJqQnpfbBmyrlwSsɦ
        all_phoniks_list: [
          '', // 	d80
          'N', // d81 CANDRABINDU
          'N', // d82 nbindu
          ':', // d83 visarga
          'e', // d84
          'A', // d85 letter a
          'Aα', // d86 letter aa
          'Ae', // d87  letter ae
          'αe', // d88  letter aae
          'AI', // d89  letter i
          'AI', // d8a letter ii
          'AU', // d8b= sinhala letter u
          'AU', // d8c= sinhala letter uu
          'r', // 	d8d volalic r
          'ri', // 	d8e vocalic rr
          'l', // 	d8f volalic l
          'li', // 	d90 volalic ll
          'AE', // 	d91 letter e
          'AE', // 	d92 letter ee
          'AE', // 	d93= sinhala letter ai
          'AO', // 	d94= sinhala letter o
          'AO', // 	d95= sinhala letter oo
          'AO', // 	d96= sinhala letter au
          '', // 	d97 null
          '', // 	d98 null
          '', // 	d99 null
          'k', // 	d9a ka
          'K', // 	d9b kha
          'g', // 	d9c ga
          'Gh', // 	d9d gha
          'N', // 	d9e nga
          'N', // 	d9f nnga
          'c', // 	da0 ch
          'Ch', // 	da1 chh
          'z', // 	da2 za
          'Z', // 	da3 zha
          'n', // 	da4= sinhala letter nya
          'n', // 	da5= sinhala letter jnya
          'n', // 	da6= sinhala letter nyja
          't', // 	da7= sinhala letter tta
          'T', // 	da8= sinhala letter ttha
          'd', // 	da9= sinhala letter dda
          'D', // 	daa= sinhala letter ddha
          'n', // 	dab= sinhala letter nna
          'n', // 	dac= sinhala letter nndda
          'j', // 	dad= sinhala letter тa
          'J', // 	dae= sinhala letter тha
          'q', // 	daf= sinhala letter ԃa
          'Q', // 	db0= sinhala letter ԃha
          'n', // 	db1= sinhala letter na
          '', // 	db2=null
          'nq', // 	db3= sinhala letter nԃa
          'p', // 	db4= sinhala letter pa
          'f', // 	db5= sinhala letter pha
          'b', // 	db6= sinhala letter ba
          'B', // 	db7= sinhala letter bha
          'm', // 	db8= sinhala letter ma
          'mb', // 	db9= sinhala letter mba
          'y', // 	dba= sinhala letter ya
          'r', // 	dbb= sinhala letter ra
          '', // 	dbc=null
          'l', // 	dbd= sinhala letter la (dental)
          '', // 	dbe=null
          '', // dbf=null
          'w', // 	dc0= sinhala letter va
          'S', // 	dc1= sinhala letter sha
          's', // 	dc2= sinhala letter ssa
          's', // 	dc3= sinhala letter sa (dental)
          'ɦ', // 	dc4= sinhala letter ha
          'l', // 	dc5= sinhala letter lla
          'f', // 	dc6= sinhala letter fa
          '', // 	dc7=null
          '', // dc8=null
          '', // dc9=null
          '', // 	dca= virama
          '', // 	dcb=null
          '', // 	dcc=null
          '', // 	dcd=null
          '', // 	dce=null
          'α', // dcf= sinhala vowel sign aa
          'e', // dd0= sinhala vowel sign ae
          'Ae', // 	dd1= sinhala vowel sign aae
          'i', // 	dd2= sinhala vowel sign i
          'i', // 	dd3= sinhala vowel sign ii
          'u', // dd4= sinhala vowel sign u
          '', // dd5=null
          'u', // dd6= sinhala vowel sign uu
          '', // dd7=null
          'ri', // dd8= sinhala vowel sign vocalic r
          'e', // dd9= sinhala vowel sign e
          'e', // dda= sinhala vowel sign ee
          'ei', // ddb= sinhala vowel sign ai
          'o', // ddc= sinhala vowel sign o
          'o', // ddd= sinhala vowel sign oo
          'o', // dde= sinhala vowel sign au
          'l', // ddf= sinhala vowel sign vocalic l
          '', // de0=null
          '', // de1=null
          '', // de2=null
          '', // de3=null
          '', // de4=null
          '', // de5=null
          '0', // de6
          '1', // 	de7
          '2', // de8
          '3', // de9
          '4', // dea
          '5', // deb
          '6', // dec
          '7', // ded
          '8', // dee
          '9', // def
          '', // df0=null
          '', // df1=null
          'ri', // df2= sinhala vowel sign vocalic rr
          'li', // df3= sinhala vowel sign vocalic ll
          '.', // df4 eotext
          '', // df5
          '', // df6
          '', // df7
          '', // df8
          '', // df9
          '', // dfa
          '', // dfb
          '', // dfc
          '', // dfd
          '', // dfe
          '', // dff
      ],
      // consonants_modulo_range : [ 0x15, 0x39 ],
      hard_consonants_modulo_list : [
      0x1A, 0x1C, 0x20, 0x22, 0x27, 0x29, 0x2D, 0x2F, 0x33, 0x34, 0x36, 0x39, 0x42, 0x43,
      ],
      vovli_modulo_list : [
      0x6, 0x8, 0x9, 0xA, 0xB, 0xC, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16,
      ],
  };
    static u2idict = {
      all_phoniks_list: [
          '', // 	ऀ	900	2304		inverted candrabindu
          'N', // 	ँ	901	2305		anunasika(candrabindu)
          'N', // 	ं ń	902	2306	anuswara	anusvara bindu
          ':', // 	ः	903	2307		visarga
          'AE', // 	ऄ à	904	2308		short a ,  e in awadh
          'A', // 	अ	905	2309	vovls
          'Aα', // 	आ  àα α	906	2310	vovls
          'AI', // 	इ	907	2311	vovls
          'AI', // 	ई	908	2312	vovls
          'AU', // 	उ	909	2313	vovls
          'AU', // 	ऊ	90A	2314	vovls
          'ri', // 	ऋ	90B	2315	vovls
          'li', // 	ऌ	90C	2316	vovls
          'AE', // 	ऍ	90D	2317	no	candra e
          'AE', // 	ऎ	90E	2318	no	short e
          'AE', // 	ए	90F	2319	vovls
          'AE', // 	ऐ	910	2320	vovls
          'AO', // 	ऑ	911	2321		candra o
          'AO', // 	ऒ	912	2322		short o
          'AO', // 	ओ	913	2323
          'AO', // 	औ	914	2324
          'k', // 	क	915	2325
          'K', // 	ख	916	2326
          'g', // 	ग	917	2327
          'Gh', // 	घ	918	2328
          'ng', // 	ङ	919	2329
          'c', // 	चꞆꞇćċ	91A	2330
          'Ch', // 	छ	91B	2331
          'z', // 	ज	91C	2332
          'Z', // 	झ	91D	2333
          'n', // 	ञ	91E	2334		nya
          't', // 	ट	91F	2335
          'T', // 	ठ	920	2336
          'd', // 	ड	921	2337
          'D', // 	ढ	922	2338
          'n', // 	ण	923	2339		nna
          'j', // 	तтτ	924	2340
          'J', // 	थ	925	2341
          'q', // 	द ꟈđԃ	926	2342
          'Q', // 	ध	927	2343 Ԁh dh ԃh
          'n', // 	न	928	2344
          'n', // 	ऩ	929	2345		nnna
          'p', // 	प	92A	2346
          'f', // 	फ	92B	2347
          'b', // 	ब	92C	2348
          'B', // 	भ	92D	2349
          'm', // 	म	92E	2350
          'y', // 	य	92F	2351
          'r', // 	र	930	2352
          'r', // 	ऱ	931	2353		rra
          'l', // 	ल	932	2354
          'l', // 	ळ	933	2355		lla
          'l', // 	ऴ	934	2356		llla
          'w', // 	व	935	2357
          'S', // 	श	936	2358
          's', // 	ष	937	2359
          's', // 	स	938	2360
          'ɦ', // 	हɦɦHɦĥ	939	2361
          'oe', // 	ऺ	93A	2362		oe
          'ui', // 	ऻ	93B	2363		ooe
          '', // 	़	93C	2364		nukta for extending the alphabet to new letters
          '!', // 	ऽ	93D	2365		Avagraha
          'α', // 	ा α	93E	2366	vvs
          'i', // 	ि	93F	2367	vvs
          'i', // 	ी	940	2368	vvs
          'u', // 	ु	941	2369	vvs
          'u', // 	ू	942	2370	vvs
          'ri', // 	ृ	943	2371	vvs
          'ri', // 	ॄ	944	2372
          'e', // 	ॅ	945	2373		candra e
          'ei', // 	ॆ	946	2374		short e
          'e', // 	े	947	2375
          'ei', // 	ै	948	2376
          'o', // 	ॉ	949	2377		candra o
          'oe', // 	ॊ	94A	2378		short o
          'o', // 	ो	94B	2379	vvs
          'o', // 	ौ	94C	2380	vvs
          '', // 	्	94D	2381	virama	VIRAMA halant suppresses inherent vowel
          '', // 	ॎ	94E	2382		prishthamatra e , combines with e to form ai, with aa to form o,and with o to form au
          'o', // 	ॏ	94F	2383		aw
          'om', // 	ॐ	950	2384
          '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
          '', // 	॒	952	2386		anudatta
          '`', // 	॓	953	2387		grave accent
          '\'', // 	॔	954	2388		acute accent
          'eei', // 	ॕ	955	2389		vowel sign candra long e
          'ui', // 	ॖ	956	2390		vowel sign ue
          'uui', // 	ॗ	957	2391		vowel sign uue
          'k', // 	क़	958	2392
          'K', // 	ख़	959	2393
          'g', // 	ग़	95A	2394
          'z', // 	ज़	95B	2395
          'rr', // 	ड़	95C	2396
          'D', // 	ढ़	95D	2397
          'f', // 	फ़	95E	2398
          'y', // 	य़	95F	2399
          'ri', // 	ॠ	960	2400
          'li', // 	ॡ	961	2401
          'li', // 	ॢ	962	2402
          'li', // 	ॣ	963	2403
          '.', // 	।	964	2404
          '.', // 	॥	965	2405
          '0', // 	०	966	2406
          '1', // 	१	967	2407
          '2', // 	२	968	2408
          '3', // 	३	969	2409
          '4', // 	४	96A	2410
          '5', // 	५	96B	2411
          '6', // 	६	96C	2412
          '7', // 	७	96D	2413
          '8', // 	८	96E	2414
          '9', // 	९	96F	2415
          '_', // 	॰	970	2416		abbreviation sign
          '__', // 	ॱ	971	2417		high spacing dot
          'A', // 	ॲ	972	2418		A
          'AO', // 	ॳ	973	2419		o
          'AO', // 	ॴ	974	2420		oe
          'AO', // 	ॵ	975	2421		ao
          'ui', // 	ॶ	976	2422		ui
          'ui', // 	ॷ	977	2423		uui
          'q', // 	ॸ	978	2424		d
          'Z', // 	ॹ	979	2425		z
          'y', // 	ॺ	97A	2426		y
          'n', // 	ॻ	97B	2427		n
          'z', // 	ॼ	97C	2428		z
          '?', // 	ॽ	97D	2429		?
          'd', // 	ॾ	97E	2430		d
          'b', // 	ॿ	97F	2431		b
      ],
      hard_consonants_modulo_list : [
          0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
      ],
      vovli_modulo_list : [
      0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
    ],
  };

  }
  module.exports = wzk
