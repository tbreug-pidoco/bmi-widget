var k=Object.defineProperty;var x=(c,n,e)=>n in c?k(c,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[n]=e;var h=(c,n,e)=>x(c,typeof n!="symbol"?n+"":n,e);(function(){"use strict";const c={de:{calculator:"BMI-Rechner",female:"Weiblich",male:"Männlich",years:"Jahre",age:"Alter",weight:"Gewicht",size:"Größe",kg:"kg",cm:"cm",calculate:"Berechnen",close:"Schließen",info:`Der Body-Mass-Index (BMI) ist eine einfache Methode zur Bewertung des Körpergewichts in Bezug auf die Körpergröße. Er dient als grober Indikator um festzustellen, ob eine Person unter-, normal- oder übergewichtig ist. Der BMI wird berechnet, indem das Körpergewicht in Kilogramm durch das Quadrat der Körpergröße in Metern geteilt wird.

Obwohl der BMI weit verbreitet ist und nützlich für eine schnelle Einschätzung des Gewichtsstatus in großen Bevölkerungsgruppen sein kann, hat er mehrere Schwächen.
So unterscheidet der BMI nicht zwischen Fett- und Muskelmasse. Daher kann eine muskulöse Person einen hohen BMI haben, obwohl ihr Körperfettanteil niedrig ist. Umgekehrt kann eine Person mit normalem BMI dennoch einen hohen Körperfettanteil und damit gesundheitliche Risiken haben.
Ebenso liefert der BMI keine Informationen über die Fettverteilung. Fett im Bauchbereich (viszerales Fett) ist mit einem höheren Risiko für Herz-Kreislauf-Erkrankungen und Stoffwechselstörungen verbunden, während Fett an Hüften und Oberschenkeln weniger gefährlich sein kann. Der BMI kann dieses Risiko nicht genau abbilden.

Der BMI sollte nicht als alleiniges Maß für die Gesundheit einer Person verwendet werden, sondern in Kombination mit anderen Methoden und Messungen.`,bmi:"Ihr BMI",errorSize:"Bitte geben Sie Ihre Größe in Zentimetern in Form einer Zahl zwischen 50 und 250 an!",errorWeight:"Bitte geben Sie Ihr Gewicht in Kilogramm in Form einer Zahl zwischen 20 und 350 an!",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",obese:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arztes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age",weight:"Weight",size:"Size",female:"Female",male:"Male",calculate:"Calculate",close:"Close",info:`The body mass index (BMI) is a simple way to assess body weight relative to height. It serves as a rough indicator to determine whether a person is underweight, normal weight or overweight. The BMI is calculated by dividing body weight in kilograms by the square of height in meters.

Although the BMI is widely used and can be useful for a quick assessment of weight status in large populations, it has several weaknesses.
For example, the BMI does not distinguish between fat and muscle mass. Therefore, a muscular person may have a high BMI even though their body fat percentage is low. Conversely, a person with a normal BMI may still have a high body fat percentage and therefore health risks.
Likewise, the BMI does not provide information about fat distribution. Fat in the abdominal area (visceral fat) is associated with a higher risk of cardiovascular disease and metabolic disorders, while fat on the hips and thighs may be less dangerous. The BMI cannot accurately reflect this risk.

BMI should not be used as the sole measure of a person's health, but in combination with other methods and measurements.`,bmi:"Your BMI",errorSize:"Please enter your height in centimetres as a number between 50 and 250!",errorWeight:"Please enter your weight in kilograms as a number between 20 and 350!",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
Weight alone is not a decisive factor for health status. Your doctor will evaluate the weight of your child best and thereby take into account his/her personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. When in doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You clearly value nutrition and exercise. Keep at it!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You can reduce your weight with regular exercise as well as a healthy and balanced diet.",obese:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may pose a risk to your health. We recommend you consult your doctor for further information."}},n=(o,t)=>(c[t]||c.de)[o]||c.de[o],e="bmi-widget",l=(o,t)=>{const r=document.createElement(o);return t&&(r.className=t),r},f=(o,t,r,a,s,i)=>{const d=l("label");return d.innerHTML=`<input type="radio" id="${t}" name="${r}" value="${a}" ${s?"checked":""}/>${i}`,o.appendChild(d),d.getElementsByTagName("input")[0]};class m{constructor(t,r,a,s){h(this,"units");h(this,"listener");h(this,"element");this.units=a,this.listener=s;const i=l("div",`${e}_value`),d=l("label");d.innerText=r,i.appendChild(d),this.element=l("input"),this.element.type="text",this.element.inputMode="numeric",this.element.placeholder=a,this.element.title=r+" ("+a+")",this.element.onkeydown=u=>{u.keyCode>=65&&u.preventDefault()},this.element.onchange=()=>{const u=this.parse;this.element.value=isNaN(u)?"":u.toString()+" "+this.units},this.element.oninput=()=>this.listener.changed(this),i.appendChild(this.element),t.appendChild(i)}get parse(){return parseInt(this.element.value)}get valid(){const t=this.parse;return!isNaN(t)&&t>0}set valid(t){t?this.element.classList.remove("invalid"):(this.element.classList.add("invalid"),this.element.setSelectionRange(0,-1),this.element.focus())}}const w=`
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
	}
	.${e} h1,h2,h3 {
		margin: 0 0 20px;
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
		margin-right: 5px;
	}
	.${e}_gender label {
		margin-right: 20px;
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
`;class M{constructor(t,r){h(this,"dialog");this.dialog=l("div",`${e}_info`),this.dialog.hidden=!0;const a=l("p"),s=l("button");a.innerText=n("info",r),s.innerText=n("close",r),this.dialog.appendChild(a),this.dialog.appendChild(s);const i=l("button",`${e}_info-button`);i.title="Info",i.innerHTML=v,t.appendChild(i),t.appendChild(this.dialog),i.onclick=()=>{this.dialog.hidden&&setTimeout(()=>this.dialog.hidden=!1,0)},s.onclick=()=>this.dialog.hidden=!0,this.dialog.onclick=d=>d.stopPropagation(),document.addEventListener("click",()=>this.dialog.hidden=!0)}}var p=(o=>(o[o.female=0]="female",o[o.male=1]="male",o))(p||{});const b=[[{age:19,normal:[18,23],over:[24,29]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],g=(o,t,r)=>{const a=n(o,t);return r?a.replace(/%BMI_FROM%/g,r[0].toString()).replace(/%BMI_TO%/g,r[1].toString()):a},I=(o,t,r,a)=>{for(let s=b[o].length-1;s>=0;s--){const i=b[o][s];if(r>=i.age)return t<i.normal[0]?g("underweight",a,i.normal):t<=i.normal[1]?g("normalweight",a,i.normal):t<=i.over[1]?g("overweight",a,i.normal):g("obese",a,i.normal)}return g("young",a)};class B{constructor(t){h(this,"language");h(this,"container");h(this,"female");h(this,"male");h(this,"age");h(this,"weight");h(this,"size");h(this,"calc");h(this,"result");h(this,"bmi");h(this,"note");this.language=(t.getAttribute("data-language")||"de").toLowerCase();const r=document.createElement("style");r.innerHTML=w.replace(/^\s+|\n/gm,""),t.before(r),this.container=l("div",e);const a=l("h2");a.innerText=n("calculator",this.language),this.container.appendChild(a);const s=l("form"),i=l("div",`${e}_gender`);this.female=f(i,"female","gender","0",!0,n("female",this.language)),this.male=f(i,"male","gender","1",!1,n("male",this.language)),this.female.onchange=()=>this.calculate(),this.male.onchange=()=>this.calculate(),s.appendChild(i);const d=l("div",`${e}_values`);this.age=new m(d,n("age",this.language),n("years",this.language),this),this.weight=new m(d,n("weight",this.language),n("kg",this.language),this),this.size=new m(d,n("size",this.language),n("cm",this.language),this),this.calc=l("button",`${e}_calc`),this.calc.type="submit",this.calc.disabled=!0,this.calc.innerText=this.calc.title=n("calculate",this.language),d.appendChild(this.calc),s.onsubmit=y=>{y.preventDefault(),this.calculate()},s.appendChild(d),this.container.appendChild(s),this.result=l("div",`${e}_result`),this.result.hidden=!0;const u=l("p",`${e}_bmi`);u.innerHTML=`${n("bmi",this.language)}: <span></span>`,this.bmi=u.getElementsByTagName("span")[0],this.result.appendChild(u),this.note=l("p",`${e}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),t.replaceWith(this.container),new M(this.container,this.language)}changed(t){this.result.hidden=!0,this.calc.disabled=!this.valid,this.age.valid=!0,this.weight.valid=!0,this.size.valid=!0}calculate(){if(this.valid){const t=this.age.parse,r=this.weight.parse,a=this.size.parse;if(r<20||r>350)this.result.classList.add("error"),this.weight.valid=!1,this.note.innerText=n("errorWeight",this.language);else if(a<50||a>250)this.result.classList.add("error"),this.size.valid=!1,this.note.innerText=n("errorSize",this.language);else{const s=this.female.checked?p.female:p.male,i=Math.round(r/Math.pow(a/100,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(i),this.note.innerHTML=I(s,i,t,this.language),this.result.classList.remove("error")}this.result.hidden=!1,this.calc.disabled=!0,setTimeout(()=>{const s=this.result.getBoundingClientRect();(s.top<0||s.left<0||s.bottom>window.innerHeight||s.right>window.innerWidth)&&this.result.scrollIntoView({block:"end",behavior:"smooth"})},100)}}get valid(){return this.age.valid&&this.weight.valid&&this.size.valid}}(function(){const o=document.getElementsByTagName("script");for(const t of o)t.src.indexOf("bmi-widget")>=0&&new B(t)})()})();
