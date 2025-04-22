const duztr = require('./duztr.js');
class wzk {
  itr(inputstr,from,tu) { // console.log("wzk::itr" + "\n"); 
    let ioft = { i: inputstr , o: {} , f: from, t:tu } ;
    	const tu_langs = [
		"inglish", "hindi", "bangla", "gurmukhi", "guzrati",
		"oriya", "telugu", "kannada", "malayalam",
		"sinhala", "tamil", "korean", "russian"
	];
    if (tu_langs.includes(tu)) {
		ioft = {i:inputstr, o:{}, f:from, t:tu}
		// console.log("yes includes calling duztr" + "\n"); 
		duztr(ioft);
		return(ioft.o[tu]);
	}
    else { return inputstr; }    
  }
  /////////////////
  ioft_tr(ioft) { duztr(ioft); }
  /////////////////
		
  transliterate_dom_node(node_arg,tu) {
    let dikt_pair_list = [];
    let curr_dikt_pair = null;
    let curr_node_text = "";
    let text = "";
    let nekst_node = null;
    let ztred_span_list = null;
    let nekst_ztred_span = null;
    let nodeIterator = node_arg.ownerDocument.createNodeIterator(
        node_arg,
        NodeFilter.SHOW_TEXT,
        { acceptNode: (node) => { if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; } } },
        false
    );

    nekst_node = nodeIterator.nextNode() ;
    while (nekst_node) {
      dikt_pair_list.push({ tekstNode: nekst_node, start: text.length });
      text += nekst_node.nodeValue;
      nekst_node = nodeIterator.nextNode()
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
	  nekst_ztred_span.textContent = this.itr(nekst_ztred_span.textContent,from,tu);
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
}
module.exports = wzk
