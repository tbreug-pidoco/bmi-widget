var x=Object.defineProperty;var y=(r,e,i)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var s=(r,e,i)=>y(r,typeof e!="symbol"?e+"":e,i);const t="bmi-widget",h=(r,e=void 0)=>{const i=document.createElement(r);return e&&(i.className=e),i},f=(r,e,i,a,o,n)=>{const c=h("label");return c.innerHTML=`<input type="radio" id="${e}" name="${i}" value="${a}" ${o?"checked":""}/>${n}`,r.appendChild(c),c.getElementsByTagName("input")[0]};class d{constructor(e,i,a,o){s(this,"units");s(this,"listener");s(this,"element");this.units=i,this.listener=o,this.element=h("input"),this.element.placeholder=a,this.element.onkeydown=n=>{n.keyCode>=65&&n.preventDefault()},this.element.onchange=()=>{const n=this.parse;this.element.value=isNaN(n)?"":n.toString()+" "+this.units},this.element.oninput=()=>this.listener.changed(this),e.appendChild(this.element)}get parse(){return parseInt(this.element.value)}get isValid(){const e=this.parse;return!isNaN(e)&&e>0}get html(){return this.element}}const I=`
	.${t} * {
		box-sizing: border-box;
	}
	.${t} p {
		margin: 10px 0 0;
	}
	.${t} {
		padding: 40px;
		color: #FFFFFF;
		background-color: #0A3152;
		font-family: "Fira Sans Extra Condensed", sans-serif;
		border-radius: 20px;
	}
	.${t} h1,h2,h3 {
		margin: 0 0 30px;
	}
	.${t} input[type="radio"] {
		margin-right: 10px;
		transform: scale(1.5);
		accent-color: #0A3152;
	}
	.${t}_gender {
		font-weight: 700;
		font-size: 14pt;
		margin-bottom: 15px;
	}
	.${t}_gender label {
		margin-right: 20px;
	}
	.${t}_values {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.${t}_values > input,button {
		font-weight: 700;
		font-size: 14pt;
		margin: 10px 0;
	}
	.${t}_values > input {
		border-radius: 20px;
		padding: 15px;
		margin-right: 20px;
		width: 150px;
	}
	.${t}_values > input.error {
		border: 3px solid #C20114;
	}
	.${t}_calc {
		border-radius: 24px;
		padding: 15px 30px;
		margin: 15px 0;
		color: #FFFFFF;
		background-color: #0082C9;
		cursor: pointer;
		border: none;
	}
	.${t}_calc:disabled {
		color: #CCCCCC;
		background-color: #005f92;
		cursor: default;
	}
	.${t}_info {
		margin-top: 10px;
		font-weight: 700;
		font-size: 12pt;
		position: relative;
		width: fit-content;
	}
	.${t}_info:after {
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
	.${t}_result {
		color: #000000;
		background-color: #FFFFFF;
		padding: 20px;
		margin: 20px 0 0;
		border-radius: 20px;
	}
	.${t}_bmi {
		font-weight: 700;
		font-size: 14pt;
		color: #FFFFFF;
		background-color: #0A3152;
		padding: 15px 20px;
		margin: 0 !important;
		border-radius: 20px;
		width: fit-content;
	}
	.${t}_result.error .${t}_bmi {
		display: none;
	}
	.${t}_note {
		font-size: 12pt;
	}
	.${t}_result.error .${t}_note {
		color: #C20114;
		margin-top: 0;
	}
`,m={de:{calculator:"BMI-Rechner",years:"Jahre",kg:"kg",cm:"cm",age:"Alter (Jahre)",weight:"Gewicht (kg)",size:"Größe (cm)",female:"Weiblich",male:"Männlich",calculate:"Berechnen",bmi:"Ihr BMI",errorSize:"Bitte geben Sie Ihre Größe in Zentimetern in Form einer Zahl zwischen 50 und 250 an!",errorWeight:"Bitte geben Sie Ihr Gewicht in Kilogramm in Form einer Zahl zwischen 20 und 350 an!",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",heavyweight:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arzes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age (years)",weight:"Weight (kg)",size:"Size (cm)",female:"Female",male:"Male",calculate:"Calculate",bmi:"Your BMI",errorSize:"Please enter your height in centimeters as a number between 50 and 250!",errorWeight:"Please enter your weight in kilogramm as a number between 20 and 350!",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
The weight alone is not decisivefor the health status. Your doctor will evaluate the weight of your child best and thereby take into account its personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. In case of doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You seem to regard nutrition and exercise. Keep it that way!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You may reduce your weight with regular exercises as well as healthy and balanced diet.",heavyweight:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may become a risk for your health. We recommend you to consult your doctor."}},l=(r,e)=>(m[e]||m.de)[r]||m.de[r];var p=(r=>(r[r.female=0]="female",r[r.male=1]="male",r))(p||{});const w=[[{age:19,normal:[18,23],over:[19,24]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],g=(r,e,i=void 0)=>{const a=l(r,e);return i?a.replace(/%BMI_FROM%/g,i[0].toString()).replace(/%BMI_TO%/g,i[1].toString()):a},_=(r,e,i,a)=>{for(let o=w[r].length-1;o>=0;o--){const n=w[r][o];if(i>=n.age)return e<n.normal[0]?g("underweight",a,n.normal):e<=n.normal[1]?g("normalweight",a,n.normal):e<=n.over[1]?g("overweight",a,n.normal):g("heavyweight",a,n.normal)}return g("young",a)};class M{constructor(e){s(this,"language");s(this,"container");s(this,"female");s(this,"male");s(this,"age");s(this,"weight");s(this,"size");s(this,"calc");s(this,"result");s(this,"bmi");s(this,"note");this.language=(e.getAttribute("data-language")||"de").toLowerCase();const i=document.createElement("style");i.innerHTML=I.replace(/^\s+|\n/gm,""),e.before(i),this.container=h("div",t);const a=h("h2");a.innerText=l("calculator",this.language),this.container.appendChild(a);const o=h("form"),n=h("div",`${t}_gender`);this.female=f(n,"female","gender","0",!0,l("female",this.language)),this.male=f(n,"male","gender","1",!1,l("male",this.language)),this.female.onchange=()=>this.calculate(),this.male.onchange=()=>this.calculate(),o.appendChild(n);const c=h("div",`${t}_values`);this.age=new d(c,l("years",this.language),l("age",this.language),this),this.weight=new d(c,l("kg",this.language),l("weight",this.language),this),this.size=new d(c,l("cm",this.language),l("size",this.language),this),this.calc=h("button",`${t}_calc`),this.calc.type="submit",this.calc.disabled=!0,this.calc.innerText=l("calculate",this.language),c.appendChild(this.calc),o.onsubmit=v=>{v.preventDefault(),this.calculate()},o.appendChild(c),this.container.appendChild(o);const b=h("p",`${t}_info`);b.innerText="Infos zur Berechnung",this.container.appendChild(b),this.result=h("div",`${t}_result`),this.result.hidden=!0;const u=h("p",`${t}_bmi`);u.innerHTML=`${l("bmi",this.language)}: <span></span>`,this.bmi=u.getElementsByTagName("span")[0],this.result.appendChild(u),this.note=h("p",`${t}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),e.replaceWith(this.container)}changed(e){this.result.hidden=!0,this.calc.disabled=!this.valid,this.age.html.classList.remove("error"),this.weight.html.classList.remove("error"),this.size.html.classList.remove("error")}calculate(){if(this.valid){const e=this.age.parse,i=this.weight.parse,a=this.size.parse;if(i<20||i>350)this.result.classList.add("error"),this.weight.html.classList.add("error"),this.note.innerText=l("errorWeight",this.language);else if(a<50||a>250)this.result.classList.add("error"),this.size.html.classList.add("error"),this.note.innerText=l("errorSize",this.language);else{const o=this.female.checked?p.female:p.male,n=Math.round(i/Math.pow(a/100,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(n),this.note.innerHTML=_(o,n,e,this.language),this.result.classList.remove("error")}this.result.hidden=!1,this.calc.disabled=!0}}get valid(){return this.age.isValid&&this.weight.isValid&&this.size.isValid}}(function(){const r=document.getElementsByTagName("script");for(const e of r)e.src.indexOf("bmi-widget")>=0&&new M(e)})();
