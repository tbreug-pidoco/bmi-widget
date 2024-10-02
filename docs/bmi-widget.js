var B=Object.defineProperty;var k=(u,r,e)=>r in u?B(u,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[r]=e;var h=(u,r,e)=>k(u,typeof r!="symbol"?r+"":r,e);(function(){"use strict";const u={de:{calculator:"BMI-Rechner",female:"Weiblich",male:"Männlich",years:"Jahre",age:"Alter",weight:"Gewicht",size:"Größe",kg:"kg",cm:"cm",calculate:"Berechnen",close:"Schließen",info:`Der Body-Mass-Index (BMI) ist eine einfache Methode zur Bewertung des Körpergewichts in Bezug auf die Körpergröße. Er dient als grober Indikator um festzustellen, ob eine Person unter-, normal- oder übergewichtig ist. Der BMI wird berechnet, indem das Körpergewicht in Kilogramm durch das Quadrat der Körpergröße in Metern geteilt wird.

Obwohl der BMI weit verbreitet ist und nützlich für eine schnelle Einschätzung des Gewichtsstatus in großen Bevölkerungsgruppen sein kann, hat er mehrere Schwächen.
So unterscheidet der BMI nicht zwischen Fett- und Muskelmasse. Daher kann eine muskulöse Person einen hohen BMI haben, obwohl ihr Körperfettanteil niedrig ist. Umgekehrt kann eine Person mit normalem BMI dennoch einen hohen Körperfettanteil und damit gesundheitliche Risiken haben.
Ebenso liefert der BMI keine Informationen über die Fettverteilung. Fett im Bauchbereich (viszerales Fett) ist mit einem höheren Risiko für Herz-Kreislauf-Erkrankungen und Stoffwechselstörungen verbunden, während Fett an Hüften und Oberschenkeln weniger gefährlich sein kann. Der BMI kann dieses Risiko nicht genau abbilden.

Der BMI sollte nicht als alleiniges Maß für die Gesundheit einer Person verwendet werden, sondern in Kombination mit anderen Methoden und Messungen.`,bmi:"Ihr BMI",errorAge:"Bitte geben Sie Ihr Alter in Jahren ein!",errorSize:"Bitte geben Sie Ihre Größe in Zentimetern in Form einer Zahl zwischen 50 und 250 an!",errorWeight:"Bitte geben Sie Ihr Gewicht in Kilogramm in Form einer Zahl zwischen 20 und 350 an!",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",obese:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arztes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age",weight:"Weight",size:"Size",female:"Female",male:"Male",calculate:"Calculate",close:"Close",info:`The body mass index (BMI) is a simple way to assess body weight relative to height. It serves as a rough indicator to determine whether a person is underweight, normal weight or overweight. The BMI is calculated by dividing body weight in kilograms by the square of height in meters.

Although the BMI is widely used and can be useful for a quick assessment of weight status in large populations, it has several weaknesses.
For example, the BMI does not distinguish between fat and muscle mass. Therefore, a muscular person may have a high BMI even though their body fat percentage is low. Conversely, a person with a normal BMI may still have a high body fat percentage and therefore health risks.
Likewise, the BMI does not provide information about fat distribution. Fat in the abdominal area (visceral fat) is associated with a higher risk of cardiovascular disease and metabolic disorders, while fat on the hips and thighs may be less dangerous. The BMI cannot accurately reflect this risk.

BMI should not be used as the sole measure of a person's health, but in combination with other methods and measurements.`,bmi:"Your BMI",errorAge:"Please enter your age in years!",errorSize:"Please enter your height in centimetres as a number between 50 and 250!",errorWeight:"Please enter your weight in kilograms as a number between 20 and 350!",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
Weight alone is not a decisive factor for health status. Your doctor will evaluate the weight of your child best and thereby take into account his/her personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. When in doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You clearly value nutrition and exercise. Keep at it!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You can reduce your weight with regular exercise as well as a healthy and balanced diet.",obese:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may pose a risk to your health. We recommend you consult your doctor for further information."}},r=(o,t)=>(u[t]||u.de)[o]||u.de[o],e="bmi-widget",l=(o,t)=>{const i=document.createElement(o);return t&&(i.className=t),i},f=(o,t,i,a,s,n)=>{const d=l("label");return d.innerHTML=`<input type="radio" id="${t}" name="${i}" value="${a}" ${s?"checked":""}/>${n}`,o.appendChild(d),d.getElementsByTagName("input")[0]};class m{constructor(t,i,a,s){h(this,"units");h(this,"listener");h(this,"element");this.units=a,this.listener=s;const n=l("div",`${e}_value`),d=l("label");d.innerText=i,n.appendChild(d),this.element=l("input"),this.element.type="text",this.element.inputMode="numeric",this.element.placeholder=a,this.element.title=i+" ("+a+")",this.element.onkeydown=c=>{c.keyCode>=65&&c.preventDefault()},this.element.onfocus=()=>this.update(!1),this.element.onblur=()=>this.update(!0),this.element.oninput=()=>this.listener.changed(this),n.appendChild(this.element),t.appendChild(n)}update(t){const i=this.parse;this.element.value=isNaN(i)?"":i.toString()+(t?" "+this.units:"")}get parse(){return parseInt(this.element.value)}get valid(){const t=this.parse;return!isNaN(t)&&t>0}set valid(t){t?this.element.classList.remove("invalid"):(this.element.classList.add("invalid"),this.element.setSelectionRange(0,-1),this.element.focus(),this.update(!1))}}const w=`
	.${e} * {
		box-sizing: border-box;
	}
	.${e} {
		position: relative;
		padding: 25px;
		color: #FFFFFF;
		background-color: #004165;
		font-family: "Fira Sans Extra Condensed", sans-serif;
		border-radius: 20px;
	}
	.${e} p {
		margin: 10px 0 0;
	}
	.${e} button {
		background-color: #0082C9;
		cursor: pointer;
		border: none;
		border-radius: 24px;
		padding: 15px 30px;
		color: #FFFFFF;
		font-weight: 700;
		font-size: 12pt;
		font-family: "Fira Sans Condensed", sans-serif;
	}
	.${e} h1,h2,h3 {
		margin: 0 0 10px;
	}
	.${e} form {
		font-weight: 700;
		font-size: 12pt;
	}
	.${e}_info-button {
		position: absolute;
		top: 15px;
		right: 15px;
		background-color: transparent !important;
   	width: 40px;
		height: 40px;
		margin: 0 !important;
		padding: 0 !important;
	}
	.${e}_info-button > svg {	
		width: 100%;
		height: 100%;
		filter: invert(1);
	}
	.${e}_info {
		z-index: 1;
		position: absolute;
		top: 0;
    	left: 0;
    	width: 100%;
		text-align: center;
		padding: 20px;
		border-radius: 20px;
		color: #000000;
		background-color: #FFFFFF;
    	border-style: outset;
	}
	.${e}_info p {
		text-align: left;
	}
	.${e} input[type="radio"] {
		margin: 5px 5px 0 0;
	}
	.${e}_gender label {
		display: inline-block;
		margin: 10px 20px 0 0;
	}
	.${e}_values {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
	}
	.${e}_value {
		display: flex;
		flex-direction: column;
	}
	.${e}_value,button {
		margin: 20px 20px 0 0;
	}
	.${e}_values input {
		font-weight: 700;
		font-size: 12pt;
		padding: 10px;
		width: 130px;
		margin-top: 5px;
		font-family: "Fira Sans Condensed", sans-serif;
	}
	.${e}_values input.invalid {
		border: 3px solid #C20114;
	}
	.${e}_calc {
		margin-right: 0;
	}
	.${e}_calc:disabled {
		color: #CCCCCC;
		background-color: #005f92;
		cursor: default;
	}
	.${e}_result {
		color: #000000;
		background-color: #FFFFFF;
		padding: 20px;
		margin: 25px 0 0;
		border-radius: 20px;
	}
	.${e}_bmi {
		font-weight: 700;
		font-size: 14pt;
		color: #FFFFFF;
		background-color: #004165;
		padding: 15px 20px;
		margin: 0 !important;
		border-radius: 20px;
		width: fit-content;
	}
	.${e}_note {
		font-size: 12pt;
	}
	.${e}_result.error .${e}_bmi {
		display: none;
	}
	.${e}_result.error .${e}_note {
		color: #C20114;
		margin-top: 0;
	}
`,v=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
`;class I{constructor(t,i){h(this,"dialog");this.dialog=l("div",`${e}_info`),this.dialog.hidden=!0;const a=l("p"),s=l("button");a.innerText=r("info",i),s.innerText=r("close",i),this.dialog.appendChild(a),this.dialog.appendChild(s);const n=l("button",`${e}_info-button`);n.title="Info",n.innerHTML=v,t.appendChild(n),t.appendChild(this.dialog),n.onclick=()=>{this.dialog.hidden&&setTimeout(()=>this.dialog.hidden=!1,0)},s.onclick=()=>this.dialog.hidden=!0,this.dialog.onclick=d=>d.stopPropagation(),document.addEventListener("click",()=>this.dialog.hidden=!0)}}var p=(o=>(o[o.female=0]="female",o[o.male=1]="male",o))(p||{});const b=[[{age:19,normal:[18,23],over:[24,29]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],g=(o,t,i)=>{const a=r(o,t);return i?a.replace(/%BMI_FROM%/g,i[0].toString()).replace(/%BMI_TO%/g,i[1].toString()):a},M=(o,t,i,a)=>{for(let s=b[o].length-1;s>=0;s--){const n=b[o][s];if(i>=n.age)return t<n.normal[0]?g("underweight",a,n.normal):t<=n.normal[1]?g("normalweight",a,n.normal):t<=n.over[1]?g("overweight",a,n.normal):g("obese",a,n.normal)}return g("young",a)};class y{constructor(t){h(this,"language");h(this,"container");h(this,"female");h(this,"male");h(this,"age");h(this,"weight");h(this,"size");h(this,"calc");h(this,"result");h(this,"bmi");h(this,"note");this.language=(t.getAttribute("data-language")||"de").toLowerCase();const i=document.createElement("style");i.innerHTML=w.replace(/^\s+|\n/gm,""),t.before(i),this.container=l("div",e);const a=l("h2");a.innerText=r("calculator",this.language),this.container.appendChild(a);const s=l("form"),n=l("div",`${e}_gender`);this.female=f(n,"female","gender","0",!0,r("female",this.language)),this.male=f(n,"male","gender","1",!1,r("male",this.language)),this.female.onchange=this.male.onchange=()=>{this.age.valid&&this.weight.valid&&this.size.valid&&this.calculate()},s.appendChild(n);const d=l("div",`${e}_values`);this.age=new m(d,r("age",this.language),r("years",this.language),this),this.weight=new m(d,r("weight",this.language),r("kg",this.language),this),this.size=new m(d,r("size",this.language),r("cm",this.language),this),this.calc=l("button",`${e}_calc`),this.calc.type="submit",this.calc.innerText=this.calc.title=r("calculate",this.language),d.appendChild(this.calc),s.onsubmit=x=>{x.preventDefault(),this.calculate()},s.appendChild(d),this.container.appendChild(s),this.result=l("div",`${e}_result`),this.result.hidden=!0;const c=l("p",`${e}_bmi`);c.innerHTML=`${r("bmi",this.language)}: <span></span>`,this.bmi=c.getElementsByTagName("span")[0],this.result.appendChild(c),this.note=l("p",`${e}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),t.replaceWith(this.container),new I(this.container,this.language)}changed(t){this.result.hidden=!0,this.age.valid=!0,this.weight.valid=!0,this.size.valid=!0}calculate(){const t=this.age.parse,i=this.weight.parse,a=this.size.parse;if(isNaN(t)||t<=0)this.result.classList.add("error"),this.age.valid=!1,this.note.innerText=r("errorAge",this.language);else if(isNaN(i)||i<20||i>350)this.result.classList.add("error"),this.weight.valid=!1,this.note.innerText=r("errorWeight",this.language);else if(isNaN(a)||a<50||a>250)this.result.classList.add("error"),this.size.valid=!1,this.note.innerText=r("errorSize",this.language);else{const s=this.female.checked?p.female:p.male,n=Math.round(i/Math.pow(a/100,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(n),this.note.innerHTML=M(s,n,t,this.language),this.result.classList.remove("error")}this.result.hidden=!1,setTimeout(()=>{const s=this.result.getBoundingClientRect();(s.top<0||s.left<0||s.bottom>window.innerHeight||s.right>window.innerWidth)&&this.result.scrollIntoView({block:"end",behavior:"smooth"})},100)}}(function(){const o=document.getElementsByTagName("script");for(const t of o)t.src.indexOf("bmi-widget")>=0&&new y(t)})()})();
