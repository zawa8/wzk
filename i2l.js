// ㅋKㅈZㅌT다DjJqQㄴㅍf바Bㅁㅑ라l봐Sㅅㅎㅏ
// kKzZtTdDjJqQnpfbBmyrlwSsɦa
// कखजझटठडढतथदधनपफबभमयरलवशसहअ
// kKzZtTdDjJqQnpfbBmyrlSs
// কখজঝটঠডঢতথদধনপফবভমযরলwশসহঅ
// ਕਖਜਝਟਠਡਢਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸ਼ਸਹਅ
// કખજઝટઠડઢતથદધનપફબભમયરલવશસહઅ
// କଖଜଝଟTଡଢତଥଦଧନପଫବଭମଯରଲଵଶସହଅ
// కఖజఝటఠడఢతథదధనపఫబభమయరలవశసహఅ
// ಕಖಜಝಟಠಡಢತಥದಧನಪಫಬಭಮಯರಲವಶಸಹಅ
// കഖജഝടഠഡഢതഥദധനപഫബഭമയരലവശസഹഅ
// කඛජඣටඨඩඪතථදධනපඵබභමයරලවශසහඅ
// கKஜZடTdDதJqQநபfbBமயரலவஶஸஹஅ
///////[ɦꟈđꞇṅᴀ]ɦԃćńà
const i2l = (ioft) => {
	//alert("abc");
	const i2il_dikt = {
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
	/* https://tandem.net/blog/russian-alphabet
	 *  "kKzZtTдДtTдДнпфбБмйрлщшහඅව"
	 * К б_b ,  д_d  , з_z , й_y , k_k     л_l  м_m   р_r   п_p   
	 *   н_n в_w
	 * */
	const inputLength = ioft.i.length;
	//ioft.o = {}; 
	//const oarr = Array(11).fill("");
	let indeks = 0; 
	let curr_chr = ''; 
	// let nekst_char: string = '';
	const hinchars = "kKzZtTdDjJqQnpfbBmyrlSsɦA"; // ɦa"; 
	const i2il_dikt_keys = Object.keys(i2il_dikt);
//////////////////
//	const ing32: string = ioft.i.replace(
//		/([KZTDJQBS])/g, function(v) { return v.toLowerCase()+"h"; }
//		).replace(/j/g, 'т').replace(/q/g, 'ԃ');
//////////////////
	while (indeks < inputLength) {
		curr_chr = ioft.i[indeks];
		const chr_indeks = hinchars.indexOf(curr_chr); 
		//for (let i = 0; i < i2il_dikt.length; i++) {
		switch(ioft.t)
		{
			case "inglish":				
			break;
			case "all":
				i2il_dikt_keys.forEach(key => {
					if (chr_indeks > -1) { ioft.o[key] += i2il_dikt[key][chr_indeks]; }
					else { ioft.o[key] += curr_chr; }
				});						
			break;
			default:
				if (i2il_dikt_keys.includes(ioft.t)) {
					if (chr_indeks > -1) { ioft.o[ioft.t] += i2il_dikt[ioft.t][chr_indeks]; }
					else { ioft.o[ioft.t] += curr_chr; }					
				}
		}
    	indeks++;
  	}

}
module.exports = i2l

/*
 * αԃɦтń _TA
 * त_TA	ত_TA	ਤ_TA	ત_TA	ତ_TA	త_TA	ತ_TA	ത_TA	த_TA
 // द_DA	দ_DA	ਦ_DA	દ_DA	ଦ_DA	ద_DA	ದ_DA	ദ_DA	
//थ_THA
//_DA
 * // අ_a_अ
 * // ත_ta_त
 * // ද_da_द
 * const i_to_il_arr = ["टडपबसयरलमनफअदत","টডপবসযরলমনফঅদত","ਟਡਪਬਸਯਰਲਮਨਫਅਦਤ",
		"ટડપબસયરલમનફઅદત","ଟଡପବସଯରଲମନଫଅଦ","டdபbஸயரலமநfஅԃத","టడపబసయరలమనఫఅదత",
		"ಟಡಪಬಸಯರಲಮನಫಅದತ","tഡപബസയരലമനഫഅദത","ටඩපබසයරලමනඵඅදත","ㅌ다ㅍ바ㅅy라lㅁㄴfaԃт","тдпБсйрлмɦфaԃт"] ;
  const i_to_il_arr = ["टडपबसयरलमनफदअ","টডপবসযরলমনফদঅ","ਟਡਪਬਸਯਰਲਮਨਫਦਅ",
		"ટડપબસયરલમનફદઅ","ଟଡପବସଯରଲମନଫଦଅ","டdபbஸயரலமநfԃஅ","టడపబసయరలమనఫదఅ",
		"ಟಡಪಬಸಯರಲಮನಫದಅ","tഡപബസയരലമനഫദഅ","ටඩපබසයරලමනඵԃà","ㅌ다ㅍ바ㅅy라lㅁㄴfԃà","тдпБсйрлмɦфԃà"] ;
	const i_to_il_arr = ["टडपबसयरलमनफदअ","টডপবসযরলমনফদঅ","ਟਡਪਬਸਯਰਲਮਨਫਦਅ",
		"ટડપબસયરલમનફદઅ","ଟଡପବସଯରଲମନଫଦଅ","டdபbஸயரலமநfԃஅ","టడపబసయరలమనఫదఅ",
		"ಟಡಪಬಸಯರಲಮನಫದಅ","tഡപബസയരലമനഫദà","ටඩපබසයරලමනඵԃà","ㅌ다ㅍ바ㅅy라lㅁㄴfԃà","тдпБсйрлмɦфԃà"] ;
*/
///////[ɦꟈđꞇṅᴀ]ɦԃćńà
// export default i_to_il
// (अ)|(क)|(ज)|(ट)|(ड)|(त)|(द)|(न)|(प)|(फ)|(ब)|(म)|(य)|(र)|(ल)|(व)|(स)|(ह)
//(?1অ)(?2ক)(?3জ)(?4ট)(?5ড)(?6ত)(?7দ)(?8ন)(?9প)(?10ব)(?11ম)(?12য)(?13র)(?14ল)(?15v)(?16স)(?17হ)(?18)
//mlyalm
//(?1അ)(?2ക)(?3ജ)(?4t)(?5ഡ)(?6ത)(?7ദ)(?8ന)(?9പ)(?10ഫ)(?11ബ)(?12മ)(?13യ)(?14ര)(?15ല)(?16വ)(?17സ)(?18ഹ)
// odia
//(?1ଅ)(?2କ)(?3ଜ)(?4ଟ)(?5ଡ)(?6ତ)(?7ଦ)(?8ନ)(?9ପ)(?10ଫ)(?11ବ)(?12ମ)(?13ଯ)(?14ର)(?15ଲ)(?16ଵ)(?17ସ)(?18ହ)
// Telugu
//(?1అ)(?2క)(?3జ)(?4ట)(?5డ)(?6త)(?7ద)(?8న)(?9ప)(?10ఫ)(?11బ)(?12మ)(?13య)(?14ర)(?15ల)(?16వ)(?17స)(?18హ)
// guzrati
//(?1અ)(?2ક)(?3જ)(?4ટ)(?5ડ)(?6ત)(?7દ)(?8ન)(?9પ)(?10ફ)(?11બ)(?12મ)(?13ય)(?14ર)(?15લ)(?16વ)(?17સ)(?18હ)

//(?1A)(?2k)(?3z)(?4t)(?5d)(?6T)(?7D)(?8n)(?9p)(?10f)(?11b)(?12m)(?13y)(?14r)(?15L)(?16v)(?17s)(?18H)
//(?19)(?20)(?21)(?22)(?23)(?24)(?25)(?26)(?27)(?28)(?29)

// curr_chr = ioft.i.value[indeks];
// curr_char_code = curr_chr.charCodeAt();
// curr_lang_code = (curr_char_code/0x80)>>0 ;
// curr_char_modulo = curr_char_code % 0x80 ;
// if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
// 'A'.charCodeAt();  // 65
// "ર".charCodeAt(); 2736
// "ત".charCodeAt(); 2724
// String.fromCharCode(72, 69, 2736, 76, 2724); // HEરLત
// hin - 2304(128*18) - 0
// bng - 2432(128*19) - 1
// pnz - 2560(128*20) - 2
// guz - 2688(128*21) - 3
// odia - 2688(128*22) - 4
// tmil - 2688(128*23) - 5
// telugu - 2688(128*24) - 6 
// knrra - 2688(128*25) - 7
// mlyalm - 2688(128*26) - 8

/*ක_ka ඛ_kha ග_ga ඝ_gha ඞ_nga ඟ_nnga ච_ca ඡ_cha ජ_ja ඣ_jha ඤ_nya ඥ_jnya ඦ_nyja 
ට_tta ඨ_ttha ඩ_dda ඪ_ddha ණ_nna ඬ_nndda ත_ta ථ_tha
ද_da ධ_dha න_na ඳ_nda ප_pa ඵ_pha බ_ba භ_bha ම_ma ඹ_mba ය_ya ර_ra ල_la 
ව_va ශ_sha ෂ_ssa ස_sa හ_ha */

// क_k		ক_k		ਕ_k		ક_k		କ_k		క_k		ಕ_k		ക_k		க_k		ක_k
// ख_K		খ_K		ਖ_K		ખ_K		ଖ_K		ఖ_K		ಖ_K		ഖ_K		NOO		ඛ_K
// ज_z		জ_z		ਜ_z		જ_z		ଜ_z		జ_z		ಜ_z		ജ_z		ஜ_z		ජ_z
// झ_Z		ঝ_Z		ਝ_Z		ઝ_Z		ଝ_Z		ఝ_Z		ಝ_Z	ഝ_Z	NOO		ඣ_Z
// ट_t		ট_t		ਟ_t		ટ_t		ଟ_t		ట_t		ಟ_t		ട_t		ட_t		ට_t
// ठ_T		ঠ_T		ਠ_T		ઠ_T		ଠ_T		ఠ_T		ಠ_T		ഠ_T		NOO		ඨ_ttha
// ड_d		ড_d		ਡ_d		ડ_d		ଡ_d		డ_d		ಡ_d		ഡ_d		NOO		ඩ_dda
// ढ_D		ঢ_D		ਢ_D		ઢ_D		ଢ_D		ఢ_D		ಢ_D		ഢ_D		NOO		ඪ_ddha
// त_j		ত_j		ਤ_j		ત_j		ତ_j		త_j		ತ_j		ത_j		த_j		ත_ta
// थ_J		থ_J		ਥ_J		થ_J		ଥ_J		థ_J		ಥ_J		ഥ_J		NOO		ථ_tha
// द_q		দ_q		ਦ_q		દ_q		ଦ_q		ద_q		ದ_q		ദ_q		NOO		ද_q		
// ध_Q		ধ_Q		ਧ_Q		ધ_Q		ଧ_Q		ధ_Q		ಧ_Q		ധ_Q		NOO		ධ_Q		
// न_n		ন_n		ਨ_n		ન_n		ନ_n		న_n		ನ_n		ന_n		ந_n		න_n		
// प_p		প_p		ਪ_p		પ_p		ପ_p		ప_p		ಪ_p		പ_p		ப_p		ප_p		
// फ_f		ফ_f		ਫ_f		ફ_f		ଫ_f		ఫ_f		ಫ_f		ഫ_f		NOO		ඵ_f		
// ब_b		ব_b		ਬ_b		બ_b		ବ_b		బ_b		ಬ_b		ബ_b		NOO		බ_b		
// भ_B		ভ_B		ਭ_B		ભ_B		ଭ_B		భ_B		ಭ_B		ഭ_B		NOO		භ_B		
// म_m		ম_m		ਮ_m		મ_m		ମ_m		మ_m		ಮ_m	മ_m		ம_m		ම_m		
// य_y		য_y		ਯ_y		ય_y		ଯ_y		య_y	ಯ_y	യ_y		ய_y		ය_y		
// र_r		র_r		ਰ_r		ર_r		ର_r		ర_r		ರ_r		ര_r		ர_r		ර_r		
// ल_l		ল_l		ਲ_l		લ_l		ଲ_l		ల_l		ಲ_l		ല_l		ல_l		ල_l
// व_w		ਵ_w		વ_w		ଵ_w		వ_w		ವ_w		വ_w		வ_w		NOO		ව_w		
// श_S		শ_S		ਸ਼_S		શ_S		ଶ_S		శ_S		ಶ_S		ശ_S		ஶ_S		ශ_S		
// स_s		স_s		ਸ_s		સ_s		ସ_s		స_s		ಸ_s		സ_s		ஸ_s		ස_s		
// ह_ɦ		হ_ɦ		ਹ_ɦ		હ_ɦ		ହ_ɦ		హ_ɦ		ಹ_ɦ		ഹ_ɦ	ஹ_ɦ	හ_ɦ		
///////////////
// क		ক		ਕ		ક		କ		క		ಕ		ക		க			ක
// ख		খ		ਖ		ખ		ଖ		ఖ		ಖ		ഖ		NOO		ඛ
// ज		জ		ਜ		જ		ଜ		జ		ಜ		ജ		ஜ			ජ
// झ		ঝ		ਝ		ઝ		ଝ		ఝ	ಝ	ഝ	NOO		ඣ
// ट		ট		ਟ		ટ		ଟ		ట		ಟ		ട		ட			ට
// ठ		ঠ		ਠ		ઠ		ଠ		ఠ		ಠ		ഠ		NOO		ඨ
// ड		ড		ਡ		ડ		ଡ		డ		ಡ		ഡ	NOO		ඩ
// ढ		ঢ		ਢ		ઢ		ଢ		ఢ		ಢ		ഢ	NOO		ඪ
// त		ত		ਤ		ત		ତ		త		ತ		ത		த			ත
// थ		থ		ਥ		થ		ଥ		థ		ಥ		ഥ		NOO		ථ
// द		দ		ਦ		દ		ଦ		ద		ದ		ദ		NOO		ද		
// ध		ধ		ਧ		ધ		ଧ		ధ		ಧ		ധ		NOO		ධ		
// न		ন		ਨ		ન		ନ		న		ನ		ന		ந			න		
// प		প		ਪ		પ		ପ		ప		ಪ		പ		ப			ප		
// फ		ফ		ਫ		ફ		ଫ		ఫ		ಫ		ഫ		NOO		ඵ		
// ब		ব		ਬ		બ		ବ		బ		ಬ		ബ	NOO		බ		
// भ		ভ		ਭ		ભ		ଭ		భ		ಭ		ഭ		NOO		භ		
// म		ম		ਮ		મ		ମ		మ		ಮ	മ		ம			ම		
// य		য		ਯ		ય		ଯ		య	ಯ	യ		ய			ය		
// र		র		ਰ		ર		ର		ర		ರ		ര		ர			ර		
// ल		ল		ਲ		લ		ଲ		ల		ಲ		ല		ல			ල
// व		ਵ		વ		ଵ		వ		ವ		വ		வ		NOO		ව		
// श		শ		ਸ਼		શ		ଶ		శ		ಶ		ശ		ஶ		ශ		
// स		স		ਸ		સ		ସ		స		ಸ		സ	ஸ		ස		
// ह		হ		ਹ		હ		ହ		హ		ಹ		ഹ		ஹ		හ		
// अ		অ		ਅ		અ		ଅ		అ		ಅ		അ	அ		අ
///////////////bilo google sheet
///// https://docs.google.com/spreadsheets/d/1ybvAdQSnIU9hhxNY_VTY3PWEGqP5prY210G-wAH9Ey0/edit?usp=sharing
///////////////
