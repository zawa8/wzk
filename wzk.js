const duztr = require('./duztr.js');
class wzk {
  transliterate_dom_node(node_arg, a2b="u2i") {
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

    switch(a2b) {
      case "u2i" :
        for (let i = 0; i < ztred_span_list.length; ++i)
        {
          nekst_ztred_span = ztred_span_list[i];
          let ioz = { i: nekst_ztred_span.textContent , o: "" , z: "u2i" } ;
          duztr(ioz);
          nekst_ztred_span.textContent = ioz.o;
        }
        break;
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
  transliterate(engloutfstr,a2b="u2i") {
    let ioz = { i: engloutfstr , o: "" , z: a2b } ;
    duztr(ioz);
    return(ioz.o);
  }
}
module.exports = wzk
