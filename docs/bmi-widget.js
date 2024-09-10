var w=Object.defineProperty;var y=(t,e,a)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var s=(t,e,a)=>y(t,typeof e!="symbol"?e+"":e,a);const i="bmi-widget",h=(t,e=void 0)=>{const a=document.createElement(t);return e&&(a.className=e),a},b=(t,e,a,r,l,n)=>{const c=h("label");return c.innerHTML=`<input type="radio" id="${e}" name="${a}" value="${r}" ${l?"checked":""}/>${n}`,t.appendChild(c),c.getElementsByTagName("input")[0]};class d{constructor(e,a,r,l){s(this,"units");s(this,"listener");s(this,"element");this.units=a,this.listener=l,this.element=h("input"),this.element.placeholder=r,this.element.onkeydown=n=>{n.keyCode>=65&&n.preventDefault()},this.element.onchange=()=>{const n=this.parse;this.element.value=isNaN(n)?"":n.toString()+" "+this.units},this.element.oninput=()=>this.listener.changed(this),e.appendChild(this.element)}get parse(){return parseInt(this.element.value)}get isValid(){const e=this.parse;return!isNaN(e)&&e>0}}const I=`
	.${i} * {
		box-sizing: border-box;
	}
	.${i} {
		padding: 40px;
		color: #FFFFFF;
		background-color: #004165;
		font-family: 'Fira Sans Extra Condensed', sans-serif;
		border-radius: 20px;
	}
	.${i} h1,h2,h3 {
		margin: 0 0 30px;
	}
	.${i} p {
		margin-bottom: 0;
	}
	.${i} input[type="radio"] {
		margin-right: 10px;
		transform: scale(1.5);
		accent-color: #004165;
	}
	.${i}_gender {
		font-weight: 700;
		font-size: 14pt;
		margin-bottom: 15px;
	}
	.${i}_gender label {
		margin-right: 20px;
	}
	.${i}_values {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.${i}_values > input,button {
		font-weight: 700;
		font-size: 14pt;
		margin: 10px 0;
	}
	.${i}_values > input {
		border-radius: 20px;
		padding: 15px;
		margin-right: 20px;
		width: 150px;
	}
	.${i}_calc {
		border-radius: 24px;
		padding: 15px 30px;
		margin: 15px 0;
		color: #FFFFFF;
		background-color: #005f92;
		cursor: pointer;
	}
	.${i}_calc:disabled {
		color: #CCCCCC;
		cursor: default;
	}
	.${i}_result {
		color: #000000;
		background-color: #FFFFFF;
		padding: 20px;
		margin: 20px 0 0;
		border-radius: 20px;
	}
	.${i}_bmi {
		font-weight: 700;
		font-size: 14pt;
		color: #FFFFFF;
		background-color: #004165;
		padding: 15px 20px;
		margin: 0;
		border-radius: 20px;
		width: fit-content;
	}
	.${i}_note {
		font-size: 12pt;
	}
`,m={de:{calculator:"BMI-Rechner",years:"Jahre",kg:"kg",cm:"cm",age:"Alter (Jahre)",weight:"Gewicht (kg)",size:"Größe (cm)",female:"Weiblich",male:"Männlich",calculate:"Berechnen",bmi:"Ihr BMI",young:`Unser BMI-Rechner eignet sich nur für Erwachsene ab 19 Jahren.
Je nach Alter der Kinder oder Jugendlichen gelten ganz unterschiedliche Werte als normal.
Das Gewicht allein sagt nichts über den Gesundheitszustand aus. Ihr Arzt kann das Gewicht Ihres Kindes am besten beurteilen und dabei die persönliche Entwicklung berücksichtigen.`,underweight:"Dieser Wert liegt für Ihre Altersgruppe <b>unter dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Die Ursache dafür kann verschiedene Gründe haben. Im Zweifel suchen Sie bitte Rat bei Ihrem Arzt.",normalweight:"Sehr gut! Dieser Wert liegt für Ihre Altersgruppe im <b>Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Sie scheinen auf Ihre Ernährung und aussreichend Bewegung zu achten. Weiter so!",overweight:"Nicht ganz perfekt. Dieser Wert liegt für Ihre Altersgruppe leicht <b>über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Mit regelmäßiger Bewegung und einer gesunden, ausgewogenen Ernährung können Sie Ihr Gewicht langfristig reduzieren.",heavyweight:"Dieser Wert liegt für Ihre Altersgruppe <b>deutlich über dem Normalbereich</b> von [%BMI_FROM%-%BMI_TO%]. Ihr Gewicht kann zum gesundheitlichen Risiko werden. Wir empfehlen Ihnen, den Rat Ihres Arzes einzuholen."},en:{calculator:"BMI Calculator",years:"years",age:"Age (years)",weight:"Weight (kg)",size:"Size (cm)",female:"Female",male:"Male",calculate:"Calculate",bmi:"Your BMI",young:`This BMI Calculator is suitable for adults from 19 years old.
Depending on their age very different values are considered to be normal for adolescents.
The weight alone is not decisivefor the health status. Your doctor will evaluate the weight of your child best and thereby take into account its personal development.`,underweight:"This value is <b>below the average mark</b> of [%BMI_FROM%-%BMI_TO%]. There can be various reasons for this. In case of doubt please consult your doctor!",normalweight:"Very good! This value is <b>within the average range</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You seem to regard nutrition and exercise. Keep it that way!",overweight:"Not quite perfect. This value is <b>slightly above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. You may reduce your weight with regular exercises as well as healthy and balanced diet.",heavyweight:"This value is <b>well above the average mark</b> of [%BMI_FROM%-%BMI_TO%] for your age class. Your weight may become a risk for your health. We recommend you to consult your doctor."}},o=(t,e)=>(m[e]||m.de)[t]||m.de[t];var p=(t=>(t[t.female=0]="female",t[t.male=1]="male",t))(p||{});const f=[[{age:19,normal:[18,23],over:[19,24]},{age:25,normal:[19,24],over:[25,28]},{age:35,normal:[20,25],over:[26,30]},{age:45,normal:[21,26],over:[27,30]},{age:55,normal:[22,27],over:[28,31]},{age:65,normal:[23,28],over:[29,31]}],[{age:19,normal:[19,24],over:[25,29]},{age:25,normal:[20,25],over:[26,29]},{age:35,normal:[21,26],over:[27,29]},{age:45,normal:[22,27],over:[28,30]},{age:55,normal:[23,28],over:[29,31]},{age:65,normal:[24,29],over:[30,31]}]],g=(t,e,a=void 0)=>{const r=o(t,e);return a?r.replace(/%BMI_FROM%/g,a[0].toString()).replace(/%BMI_TO%/g,a[1].toString()):r},M=(t,e,a,r)=>{for(let l=f[t].length-1;l>=0;l--){const n=f[t][l];if(a>=n.age)return e<n.normal[0]?g("underweight",r,n.normal):e<=n.normal[1]?g("normalweight",r,n.normal):e<=n.over[1]?g("overweight",r,n.normal):g("heavyweight",r,n.normal)}return g("young",r)};class F{constructor(e){s(this,"language");s(this,"container");s(this,"female");s(this,"male");s(this,"age");s(this,"weight");s(this,"size");s(this,"calc");s(this,"result");s(this,"bmi");s(this,"note");this.language=(e.getAttribute("data-language")||"de").toLowerCase();const a=document.createElement("style");a.innerHTML=I.replace(/^\s+|\n/gm,""),e.before(a),this.container=h("div",i);const r=h("h2");r.innerText=o("calculator",this.language),this.container.appendChild(r);const l=h("form"),n=h("div",`${i}_gender`);this.female=b(n,"female","gender","0",!0,o("female",this.language)),this.male=b(n,"male","gender","1",!1,o("male",this.language)),this.female.onchange=()=>this.calculate(),this.male.onchange=()=>this.calculate(),l.appendChild(n);const c=h("div",`${i}_values`);this.age=new d(c,o("years",this.language),o("age",this.language),this),this.weight=new d(c,o("kg",this.language),o("weight",this.language),this),this.size=new d(c,o("cm",this.language),o("size",this.language),this),this.calc=h("button",`${i}_calc`),this.calc.type="submit",this.calc.disabled=!0,this.calc.innerText=o("calculate",this.language),c.appendChild(this.calc),l.onsubmit=v=>{v.preventDefault(),this.calculate()},l.appendChild(c),this.container.appendChild(l),this.result=h("div",`${i}_result`),this.result.hidden=!0;const u=h("p",`${i}_bmi`);u.innerHTML=`${o("bmi",this.language)}: <span></span>`,this.bmi=u.getElementsByTagName("span")[0],this.result.appendChild(u),this.note=h("p",`${i}_note`),this.result.appendChild(this.note),this.container.appendChild(this.result),e.replaceWith(this.container)}changed(e){this.result.hidden=!0,this.calc.disabled=!this.valid}calculate(){if(this.valid){const e=this.age.parse,a=this.weight.parse,r=this.size.parse/100;if(r){const l=this.female.checked?p.female:p.male,n=Math.round(a/Math.pow(r,2)*10)/10;this.bmi.innerText=new Intl.NumberFormat(this.language).format(n),this.note.innerHTML=M(l,n,e,this.language),this.result.hidden=!1,this.calc.disabled=!0}}}get valid(){return this.age.isValid&&this.weight.isValid&&this.size.isValid}}(function(){const t=document.getElementsByTagName("script");for(const e of t)e.src.indexOf("bmi-widget")>=0&&new F(e)})();
