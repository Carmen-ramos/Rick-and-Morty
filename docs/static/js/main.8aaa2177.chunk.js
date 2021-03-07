(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(139),n=a.n(s),i=(a(146),a(59)),r=(a(147),a(4)),l=function(){return fetch("//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e}))},j=function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,gender:e.gender,origin:e.origin.name,image:e.image,status:e.status,location:e.location.name,episode:e.episode}}))},o=a(31),m=a(1);var d=function(e){return Object(m.jsxs)(o.b,{to:"/character/".concat(e.item.id),children:[Object(m.jsx)("h3",{className:"card__title",children:e.item.name}),Object(m.jsx)("img",{className:"card__img",src:e.item.image,alt:e.item.name}),Object(m.jsxs)("div",{className:"card__itemContainer",children:[Object(m.jsxs)("div",{className:"card__itemContainer--species",children:[Object(m.jsx)("p",{children:e.item.species}),Object(m.jsx)("span",{children:"Alien"===e.item.species?Object(m.jsx)("i",{className:"fas fa-pastafarianism"}):"Human"===e.item.species?Object(m.jsx)("i",{className:"fas fa-user-alt"}):void 0})]}),Object(m.jsxs)("div",{className:"card__itemContainer--status",children:[Object(m.jsx)("p",{children:e.item.status}),Object(m.jsx)("span",{children:"Alive"===e.item.status?Object(m.jsx)("i",{className:"far fa-laugh"}):"Dead"===e.item.status?Object(m.jsx)("i",{className:"far fa-dizzy"}):Object(m.jsx)("i",{className:"fas fa-question"})})]})]})]})},u=(a.p,a.p+"static/media/imgfy.054c9186.png");a(90);var h=function(){return Object(m.jsxs)("div",{className:"chacNot",children:[Object(m.jsx)("p",{className:"chacNot",children:"Character not found"}),Object(m.jsx)("img",{className:"chacNot__img",src:u})]})};var b=function(e){console.log(e.name);var t=e.characters.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e){return Object(m.jsx)("li",{className:"card",children:Object(m.jsx)(d,{item:e})},e.id)}));return Object(m.jsx)("ul",{className:"main__container",children:t.length>0?t:Object(m.jsx)(h,{})})};var x=function(e){return Object(m.jsxs)("label",{htmlFor:"name",id:"name",className:"main__form--inputText",children:["Introduce your favourite character name:",Object(m.jsx)("input",{className:"input",type:"text",name:"name",value:e.name,onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})};var O=function(e){return Object(m.jsxs)("label",{htmlFor:"species",className:"main__form--select",children:["Species:",Object(m.jsxs)("select",{className:"block",name:"species",id:"species",value:e.species,onChange:function(t){e.handleFilter({key:"species",value:t.target.value})},children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"Human",children:"Human"}),Object(m.jsx)("option",{value:"Alien",children:"Alien"})]})]})};var p=function(e){return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"main__form",children:[Object(m.jsx)(x,{handleFilter:e.handleFilter,name:e.name}),Object(m.jsx)(O,{handleFilter:e.handleFilter,species:e.species}),Object(m.jsx)("input",{type:"buton",value:"Reset",onClick:function(){e.resetButton()},className:"main__form--reset"})]})},f=(a(153),a.p+"static/media/scary.0d9267f2.gif"),_=a.p+"static/media/retturn.52a16baf.png";var N=function(e){if(void 0===e.character)return Object(m.jsx)("div",{className:"secNot",children:Object(m.jsxs)("section",{children:[Object(m.jsx)("p",{className:"secNot__title",children:"Character not found"}),Object(m.jsx)("img",{className:"secNot__img",src:f}),Object(m.jsx)("p",{children:"The url is wrong, bitch check it"})]})});var t=e.character.episode.length;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("section",{className:"secDetail",children:[Object(m.jsxs)(o.b,{to:"/",children:[Object(m.jsx)("img",{src:_,alt:"logo return home page",className:"secDetail__logo"}),Object(m.jsx)("p",{children:" Back"})]}),Object(m.jsxs)("div",{className:"secDetail__titleContainer",children:[Object(m.jsx)("img",{className:"secDetail__titleContainer--img",src:e.character.image,alt:e.character.name}),Object(m.jsx)("h3",{className:"secDetail__titleContainer--title",children:e.character.name})]}),Object(m.jsxs)("div",{className:"secDetail__container",children:[Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Gender: ",Object(m.jsx)("span",{children:e.character.gender})]}),Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Status: ",e.character.status]}),Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Specie: ",e.character.species]}),Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Origin: ",e.character.origin]}),Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Location: ",e.character.location]}),Object(m.jsxs)("p",{className:"secDetail__container--text",children:["Episodes: ",t]})]})]})})},g=a.p+"static/media/logo1.e5d5c523.png";a(154);var v=function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("img",{className:"header__img",src:g,alt:"Ricky and Morty header image"})})};a(155);var y=function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)("small",{className:"footer__advise",children:"*"}),Object(m.jsx)("small",{className:"footer__advise",children:"Esta p\xe1gina puede tener contenido sensible basado en la serie Rick and Morty calificada para mayores de 18 a\xf1os."}),Object(m.jsx)("small",{className:"footer__copyright",children:"Carmen Ramos Mart\xednez"}),Object(m.jsx)("small",{className:"footer__copyright",children:" \xa9 2021 "})]})};a(156);var k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),o=Object(i.a)(n,2),d=o[0],u=o[1],h=Object(c.useState)("all"),x=Object(i.a)(h,2),O=x[0],f=x[1];Object(c.useEffect)((function(){l().then((function(e){return j(e)})).then((function(e){return s(e)}))}),[]);var _=a.filter((function(e){return e.name.toLowerCase().includes(d)})).filter((function(e){return"all"===O||e.species===O}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"container-body",children:[Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(p,{handleFilter:function(e){"name"===e.key?u(e.value):"species"===e.key&&f(e.value)},name:d,species:O,resetButton:function(){u(""),f("all")}}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/",children:Object(m.jsx)(b,{characters:_,name:d})}),Object(m.jsx)(r.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),c=a.find((function(e){return e.id===t}));return Object(m.jsx)(N,{character:c})}})]})]}),Object(m.jsx)(y,{})]})]})};n.a.render(Object(m.jsx)(o.a,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},90:function(e,t,a){}},[[462,1,2]]]);
//# sourceMappingURL=main.8aaa2177.chunk.js.map