function Hh2phonetic_H(){ 
    this.istr = this.istr.replaceAll(
      /H/g, "h").replaceAll(
      /(\s)h/g, "$1H").replaceAll(
      /([^kgcꞇćjztdpbswटडपबसԃᴛ])h/ig, "$1H");
}
//////// ñṅ ꟈԃ[ɦꟈđꞇṅᴀ]ɦԃćńàᴀ
function Nn2phonetic_N(){
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
function Ww2vv(){
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
function Aa2phonetic_Aa(){
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
function e2i(){
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
module.exports = { e2i , Hh2phonetic_H, Aa2phonetic_Aa, Ww2vv, Nn2phonetic_N}

/*
 * ********************* others
 * compart.com/en/unicode/block/
 * https://www.compart.com/en/unicode/U+03B1
 * (U+00A3 £) (U+00A2 ¢) (U+00E0 à) (U+00E1 á) (U+0103 ă) (U+0127 ħ) (U+0144 ń)
 * (U+0253 ɓ) (U+0256 ɖ) (U+0257 ɗ) (U+0266 ɦ) (U+0267 ɧ) (U+0271 ɱ) (U+029c small ʜ)
 * (U+03B1 α) (U+03C4 τ)
 * (U+043D small_н) (U+0442 small_т) (U+045B ћ)
 * (U+0502 Ԃ) (U+0503 ԃ) (U+050F ԏ)
**********************
**********************
**********************
********************** most liked ADHTN
 * ɦ(small_0266) (U+0144 ń) (U+03B1 α) 
 * (U+03C4 τ) (U+0442 small_т) (U+0503 ԃ) 
 * ɧ(small_0267) (U+00A2 ¢) (U+0256 ɖ) (U+0257 ɗ)
**********************
**********************

********************** most liked others
 * ɓ(small_0253) ɱ(small_0271) (U+00A3 £) (U+00A2 ¢)
**********************
**********************
**********************/
