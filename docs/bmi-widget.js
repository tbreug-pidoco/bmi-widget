var k=Object.defineProperty;var y=(e,n,g)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:g}):e[n]=g;var l=(e,n,g)=>y(e,typeof n!="symbol"?n+"":n,g);(function(){"use strict";const e="bmi-widget",n=(a,t)=>{const r=document.createElement(a);return t&&(r.className=t),r},g=(a,t,r,s,o,i)=>{const d=n("label");return d.innerHTML=`<input type="radio" id="${t}" name="${r}" value="${s}" ${o?"checked":""}/>${i}`,a.appendChild(d),d.getElementsByTagName("input")[0]};class u{constructor(t,r,s,o){l(this,"units");l(this,"listener");l(this,"element");this.units=r,this.listener=o,this.element=n("input"),this.element.placeholder=s,this.element.onkeydown=i=>{i.keyCode>=65&&i.preventDefault()},this.element.onchange=()=>{const i=this.parse;this.element.value=isNaN(i)?"":i.toString()+" "+this.units},this.element.oninput=()=>this.listener.changed(this),t.appendChild(this.element)}get parse(){return parseInt(this.element.value)}get isValid(){const t=this.parse;return!isNaN(t)&&t>0}get html(){return this.element}}const w=`
	.${e} * {
		box-sizing: border-box;
	}
	.${e} {
		position: relative;
		padding: 40px;
		color: #FFFFFF;
		background-color: #0A3152;
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
		margin: 15px 0;
		color: #FFFFFF;
	}
	.${e} h1,h2,h3 {
		margin: 0 0 30px;
	}
	.${e}_dlg-info--button {
		position: absolute;
		top: 10px;
		right: 10px;
		background-color: transparent !important;
   	width: 40px;
		height: 40px;
		margin: 0 !important;
		padding: 0 !important;
	}
	.${e}_dlg-info--button > svg {	
		width: 100%;
		height: 100%;
		filter: invert(1);
	}
	.${e}_dlg-info {
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
	.${e}_dlg-info p {
		text-align: left;
	}
	.${e} input[type="radio"] {
		margin-right: 10px;
		transform: scale(1.5);
		accent-color: #0A3152;
		vertical-align: top;
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
`,m={de:{calculator:"BMI-Rechner",years:"Jahre",kg:"kg",cm:"cm",age:"Alter (Jahre)",weight:"Gewicht (kg)",size:"Größe (cm)",female:"Weiblich",male:"Männlich",calculate:"Berechnen",close:"Schließen",info:"Infos zur Berechnung",infoText:`Der Body-Mass-Index (BMI) ist eine einfache Methode zur Bewertung des Körpergewichts in Bezug auf die Körpergröße. Er dient als grober Indikator, um festzustellen, ob eine Person unter-, normal- oder übergewichtig ist. Der BMI wird berechnet, indem das Körpergewicht in Kilogramm durch das Quadrat der Körpergröße in Metern geteilt wird.

Obwohl der BMI weit verbreitet ist und nützlich für eine schnelle Einschätzung des Gewichtsstatus in großen Bevölkerungsgruppen sein kann, hat er mehrere Schwächen.
So unterscheidet der BMI nicht zwischen Fett- und Muskelmasse. Daher kann eine muskulöse Person einen hohen BMI haben, obwohl ihr Körperfettanteil niedrig ist. Umgekehrt kann eine Person mit normalem BMI dennoch einen hohen Körperfettanteil und damit gesundheitliche Risiken haben.
Ebenso liefert der BMI gibt keine Informationen über die Fettverteilung. Fett im Bauchbereich (viszerales Fett) ist mit einem höheren Risiko für Herz-Kreislauf-Erkrankungen und Stoffwechselstörungen verbunden, während Fett an Hüften und Oberschenkeln weniger gefährlich sein kann. Der BMI kann dieses Risiko nicht genau abbilden.

Der BMI sollte nicht als alleiniges Maß für die Gesundheit einer Person verwendet werden, sondern in Kombination mit anderen Methoden und Messungen.`,bmi:"Ihr BMI",errorSize:"Bitte geben Sie Ihre Größe in Zentimetern in Form einer Zahl zwischen 50 und 250 an!",errorWeight:"Bitte geben Sie Ihr Gewicht in Kilogramm in Form einer Zahl zwischen 20 und 350 an!",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",obese:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arztes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age (years)",weight:"Weight (kg)",size:"Size (cm)",female:"Female",male:"Male",calculate:"Calculate",close:"Close",info:"Calculation Infos",infoText:`The body mass index (BMI) is a simple way to assess body weight relative to height. It serves as a rough indicator to determine whether a person is underweight, normal weight or overweight. The BMI is calculated by dividing body weight in kilograms by the square of height in meters.

Although the BMI is widely used and can be useful for a quick assessment of weight status in large populations, it has several weaknesses.
For example, the BMI does not distinguish between fat and muscle mass. Therefore, a muscular person may have a high BMI even though their body fat percentage is low. Conversely, a person with a normal BMI may still have a high body fat percentage and therefore health risks.
Likewise, the BMI does not provide information about fat distribution. Fat in the abdominal area (visceral fat) is associated with a higher risk of cardiovascular disease and metabolic disorders, while fat on the hips and thighs may be less dangerous. The BMI cannot accurately reflect this risk.

BMI should not be used as the sole measure of a person's health, but in combination with other methods and measurements.`,bmi:"Your BMI",errorSize:"Please enter your height in centimetres as a number between 50 and 250!",errorWeight:"Please enter your weight in kilograms as a number between 20 and 350!",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
Weight alone is not a decisive factor for health status. Your doctor will evaluate the weight of your child best and thereby take into account his/her personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. When in doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You clearly value nutrition and exercise. Keep at it!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You can reduce your weight with regular exercise as well as a healthy and balanced diet.",obese:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may pose a risk to your health. We recommend you consult your doctor for further information."}},h=(a,t)=>(m[t]||m.de)[a]||m.de[a],v=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
`;class I{constructor(t,r){l(this,"dialog");this.dialog=n("div",`${e}_dlg-info`),this.dialog.hidden=!0;const s=n("p"),o=n("button");s.innerText=h("infoText",r),o.innerText=h("close",r),this.dialog.appendChild(s),this.dialog.appendChild(o);const i=n("button",`${e}_dlg-info--button`);i.innerHTML=v,t.appendChild(i),t.appendChild(this.dialog),i.onclick=()=>{this.dialog.hidden&&setTimeout(()=>this.dialog.hidden=!1,0)},o.onclick=()=>this.dialog.hidden=!0,this.dialog.onclick=d=>d.stopPropagation(),document.addEventListener("click",()=>this.dialog.hidden=!0)}}var p=(a=>(a[a.female=0]="female",a[a.male=1]="male",a))(p||{});const b=[[{age:19,normal:[18,23],over:[19,24]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],c=(a,t,r)=>{const s=h(a,t);return r?s.replace(/%BMI_FROM%/g,r[0].toString()).replace(/%BMI_TO%/g,r[1].toString()):s},M=(a,t,r,s)=>{for(let o=b[a].length-1;o>=0;o--){const i=b[a][o];if(r>=i.age)return t<i.normal[0]?c("underweight",s,i.normal):t<=i.normal[1]?c("normalweight",s,i.normal):t<=i.over[1]?c("overweight",s,i.normal):c("obese",s,i.normal)}return c("young",s)};class x{constructor(t){l(this,"language");l(this,"container");l(this,"female");l(this,"male");l(this,"age");l(this,"weight");l(this,"size");l(this,"calc");l(this,"result");l(this,"bmi");l(this,"note");l(this,"info");this.language=(t.getAttribute("data-language")||"de").toLowerCase();const r=document.createElement("style");r.innerHTML=w.replace(/^\s+|\n/gm,""),t.before(r),this.container=n("div",e);const s=n("h2");s.innerText=h("calculator",this.language),this.container.appendChild(s);const o=n("form"),i=n("div",`${e}_gender`);this.female=g(i,"female","gender","0",!0,h("female",this.language)),this.male=g(i,"male","gender","1",!1,h("male",this.language)),this.female.onchange=()=>this.calculate(),this.male.onchange=()=>this.calculate(),o.appendChild(i);const d=n("div",`${e}_values`);this.age=new u(d,h("years",this.language),h("age",this.language),this),this.weight=new u(d,h("kg",this.language),h("weight",this.language),this),this.size=new u(d,h("cm",this.language),h("size",this.language),this),this.calc=n("button",`${e}_calc`),this.calc.type="submit",this.calc.disabled=!0,this.calc.innerText=h("calculate",this.language),d.appendChild(this.calc),o.onsubmit=B=>{B.preventDefault(),this.calculate()},o.appendChild(d),this.container.appendChild(o),this.result=n("div",`${e}_result`),this.result.hidden=!0;const f=n("p",`${e}_bmi`);f.innerHTML=`${h("bmi",this.language)}: <span></span>`,this.bmi=f.getElementsByTagName("span")[0],this.result.appendChild(f),this.note=n("p",`${e}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),t.replaceWith(this.container),this.info=new I(this.container,this.language)}changed(t){this.result.hidden=!0,this.calc.disabled=!this.valid,this.age.html.classList.remove("error"),this.weight.html.classList.remove("error"),this.size.html.classList.remove("error")}calculate(){if(this.valid){const t=this.age.parse,r=this.weight.parse,s=this.size.parse;if(r<20||r>350)this.result.classList.add("error"),this.weight.html.classList.add("error"),this.note.innerText=h("errorWeight",this.language);else if(s<50||s>250)this.result.classList.add("error"),this.size.html.classList.add("error"),this.note.innerText=h("errorSize",this.language);else{const o=this.female.checked?p.female:p.male,i=Math.round(r/Math.pow(s/100,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(i),this.note.innerHTML=M(o,i,t,this.language),this.result.classList.remove("error")}this.result.hidden=!1,this.calc.disabled=!0}}get valid(){return this.age.isValid&&this.weight.isValid&&this.size.isValid}}(function(){const a=document.getElementsByTagName("script");for(const t of a)t.src.indexOf("bmi-widget")>=0&&new x(t)})()})();
