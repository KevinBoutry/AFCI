"use strict";

import EasyDom from "./EasyDom.js";

const e1 = new EasyDom()
const e2 = new EasyDom()

const div = e1.tag("div","Ceci est le contenu de ma div");
const div2 = e2.tag("div", "Ceci est une 2eme div")
const sel = e1.select("div",true);
e1.event(sel, "click", function(){this.style.backgroundColor = "blue"})
