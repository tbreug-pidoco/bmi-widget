var M=Object.defineProperty;var y=(e,n,g)=>n in e?M(e,n,{enumerable:!0,configurable:!0,writable:!0,value:g}):e[n]=g;var l=(e,n,g)=>y(e,typeof n!="symbol"?n+"":n,g);(function(){"use strict";const e="bmi-widget",n=(i,t)=>{const a=document.createElement(i);return t&&(a.className=t),a},g=(i,t,a,s,h,r)=>{const c=n("label");return c.innerHTML=`<input type="radio" id="${t}" name="${a}" value="${s}" ${h?"checked":""}/>${r}`,i.appendChild(c),c.getElementsByTagName("input")[0]};class d{constructor(t,a,s,h){l(this,"units");l(this,"listener");l(this,"element");this.units=a,this.listener=h,this.element=n("input"),this.element.placeholder=s,this.element.onkeydown=r=>{r.keyCode>=65&&r.preventDefault()},this.element.onchange=()=>{const r=this.parse;this.element.value=isNaN(r)?"":r.toString()+" "+this.units},this.element.oninput=()=>this.listener.changed(this),t.appendChild(this.element)}get parse(){return parseInt(this.element.value)}get isValid(){const t=this.parse;return!isNaN(t)&&t>0}get html(){return this.element}}const v=`
	.${e} * {
		box-sizing: border-box;
	}
	.${e} p {
		margin: 10px 0 0;
	}
	.${e} {
		padding: 40px;
		color: #FFFFFF;
		background-color: #0A3152;
		font-family: "Fira Sans Extra Condensed", sans-serif;
		border-radius: 20px;
	}
	.${e} h1,h2,h3 {
		margin: 0 0 30px;
	}
	.${e} input[type="radio"] {
		margin-right: 10px;
		transform: scale(1.5);
		accent-color: #0A3152;
	}
	.${e}_gender {
		font-weight: 700;
		font-size: 14pt;
		margin-bottom: 15px;
	}
	.${e}_gender label {
		margin-right: 20px;
	}
	.${e}_values {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.${e}_values > input,button {
		font-weight: 700;
		font-size: 14pt;
		margin: 10px 0;
	}
	.${e}_values > input {
		border-radius: 20px;
		padding: 15px;
		margin-right: 20px;
		width: 150px;
	}
	.${e}_values > input.error {
		border: 3px solid #C20114;
	}
	.${e}_calc {
		border-radius: 24px;
		padding: 15px 30px;
		margin: 15px 0;
		color: #FFFFFF;
		background-color: #0082C9;
		cursor: pointer;
		border: none;
	}
	.${e}_calc:disabled {
		color: #CCCCCC;
		background-color: #005f92;
		cursor: default;
	}
	.${e}_info {
		margin-top: 10px;
		font-weight: 700;
		font-size: 12pt;
		position: relative;
		width: fit-content;
	}
	.${e}_info:after {
		content: ' ';
		position: absolute;
		right: -25px;
		top: 6px;
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-top: 8px solid white;		
	}
	.${e}_result {
		color: #000000;
		background-color: #FFFFFF;
		padding: 20px;
		margin: 20px 0 0;
		border-radius: 20px;
	}
	.${e}_bmi {
		font-weight: 700;
		font-size: 14pt;
		color: #FFFFFF;
		background-color: #0A3152;
		padding: 15px 20px;
		margin: 0 !important;
		border-radius: 20px;
		width: fit-content;
	}
	.${e}_result.error .${e}_bmi {
		display: none;
	}
	.${e}_note {
		font-size: 12pt;
	}
	.${e}_result.error .${e}_note {
		color: #C20114;
		margin-top: 0;
	}
`,m={de:{calculator:"BMI-Rechner",years:"Jahre",kg:"kg",cm:"cm",age:"Alter (Jahre)",weight:"Gewicht (kg)",size:"Größe (cm)",female:"Weiblich",male:"Männlich",calculate:"Berechnen",info:"Infos zur Berechnung",bmi:"Ihr BMI",errorSize:"Bitte geben Sie Ihre Größe in Zentimetern in Form einer Zahl zwischen 50 und 250 an!",errorWeight:"Bitte geben Sie Ihr Gewicht in Kilogramm in Form einer Zahl zwischen 20 und 350 an!",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",obese:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arzes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age (years)",weight:"Weight (kg)",size:"Size (cm)",female:"Female",male:"Male",calculate:"Calculate",info:"Calculation Infos",bmi:"Your BMI",errorSize:"Please enter your height in centimetres as a number between 50 and 250!",errorWeight:"Please enter your weight in kilograms as a number between 20 and 350!",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
Weight alone is not a decisive factor for health status. Your doctor will evaluate the weight of your child best and thereby take into account his/her personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. When in doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You clearly value nutrition and exercise. Keep at it!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You can reduce your weight with regular exercise as well as a healthy and balanced diet.",obese:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may pose a risk to your health. We recommend you consult your doctor for further information."}},o=(i,t)=>(m[t]||m.de)[i]||m.de[i];var p=(i=>(i[i.female=0]="female",i[i.male=1]="male",i))(p||{});const b=[[{age:19,normal:[18,23],over:[19,24]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],u=(i,t,a)=>{const s=o(i,t);return a?s.replace(/%BMI_FROM%/g,a[0].toString()).replace(/%BMI_TO%/g,a[1].toString()):s},x=(i,t,a,s)=>{for(let h=b[i].length-1;h>=0;h--){const r=b[i][h];if(a>=r.age)return t<r.normal[0]?u("underweight",s,r.normal):t<=r.normal[1]?u("normalweight",s,r.normal):t<=r.over[1]?u("overweight",s,r.normal):u("obese",s,r.normal)}return u("young",s)};class I{constructor(t){l(this,"language");l(this,"container");l(this,"female");l(this,"male");l(this,"age");l(this,"weight");l(this,"size");l(this,"calc");l(this,"result");l(this,"bmi");l(this,"note");this.language=(t.getAttribute("data-language")||"de").toLowerCase();const a=document.createElement("style");a.innerHTML=v.replace(/^\s+|\n/gm,""),t.before(a),this.container=n("div",e);const s=n("h2");s.innerText=o("calculator",this.language),this.container.appendChild(s);const h=n("form"),r=n("div",`${e}_gender`);this.female=g(r,"female","gender","0",!0,o("female",this.language)),this.male=g(r,"male","gender","1",!1,o("male",this.language)),this.female.onchange=()=>this.calculate(),this.male.onchange=()=>this.calculate(),h.appendChild(r);const c=n("div",`${e}_values`);this.age=new d(c,o("years",this.language),o("age",this.language),this),this.weight=new d(c,o("kg",this.language),o("weight",this.language),this),this.size=new d(c,o("cm",this.language),o("size",this.language),this),this.calc=n("button",`${e}_calc`),this.calc.type="submit",this.calc.disabled=!0,this.calc.innerText=o("calculate",this.language),c.appendChild(this.calc),h.onsubmit=_=>{_.preventDefault(),this.calculate()},h.appendChild(c),this.container.appendChild(h);const w=n("p",`${e}_info`);w.innerText=o("info",this.language),this.container.appendChild(w),this.result=n("div",`${e}_result`),this.result.hidden=!0;const f=n("p",`${e}_bmi`);f.innerHTML=`${o("bmi",this.language)}: <span></span>`,this.bmi=f.getElementsByTagName("span")[0],this.result.appendChild(f),this.note=n("p",`${e}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),t.replaceWith(this.container)}changed(t){this.result.hidden=!0,this.calc.disabled=!this.valid,this.age.html.classList.remove("error"),this.weight.html.classList.remove("error"),this.size.html.classList.remove("error")}calculate(){if(this.valid){const t=this.age.parse,a=this.weight.parse,s=this.size.parse;if(a<20||a>350)this.result.classList.add("error"),this.weight.html.classList.add("error"),this.note.innerText=o("errorWeight",this.language);else if(s<50||s>250)this.result.classList.add("error"),this.size.html.classList.add("error"),this.note.innerText=o("errorSize",this.language);else{const h=this.female.checked?p.female:p.male,r=Math.round(a/Math.pow(s/100,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(r),this.note.innerHTML=x(h,r,t,this.language),this.result.classList.remove("error")}this.result.hidden=!1,this.calc.disabled=!0}}get valid(){return this.age.isValid&&this.weight.isValid&&this.size.isValid}}(function(){const i=document.getElementsByTagName("script");for(const t of i)t.src.indexOf("bmi-widget")>=0&&new I(t)})()})();
