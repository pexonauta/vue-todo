(function(){"use strict";var e={7177:function(e,t,a){var n=a(9242),o=a(3396),r=a(4870),l=a(1723),i=a(5503);const u={class:"mt-5"};function s(e,t,a,r,s,d){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(l.D,{cols:"12",sm:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.h,{clearable:"",label:"Qual sua Tarefa ?",variant:"outlined",modelValue:e.campoInput,"onUpdate:modelValue":t[0]||(t[0]=t=>e.campoInput=t),onKeyup:(0,n.D2)(d.handleAddTask,["enter"])},null,8,["modelValue","onKeyup"])])),_:1})])}var d={name:"TaskPage",data:()=>({campoInput:null}),mounted(){this.$store.commit("searchTasks")},methods:{handleAddTask(){this.$store.dispatch("newTask",this.campoInput),this.campoInput=null}}},c=a(89);const m=(0,c.Z)(d,[["render",s]]);var f=m,p=a(7718),h=a(6281),k=a(9156),v=a(1556),w=a(652),g=a(4075),b=a(8694),_=a(9457),T=a(3140),W=a(9657);const y={class:"pt-5"},j={components:{InputTask:f},data:()=>({drawer:null})};var x=Object.assign(j,{__name:"App",setup(e){const t=(0,r.iH)(null);return(e,a)=>{const n=(0,o.up)("center"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(p.q,{id:"inspire"},{default:(0,o.w5)((()=>[(0,o.Wm)(W.V,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),width:250},{default:(0,o.w5)((()=>[(0,o.Wm)(b.f,{src:"https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg",gradient:"to left top, rgba(19,84,122,.4), rgba(128,208,199,.5)",theme:"dark",class:"text-center"},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o.Wm)(w.V,{size:"100"},{default:(0,o.w5)((()=>[(0,o.Wm)(b.f,{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"})])),_:1}),(0,o.Wm)(_.l,{class:"text-white",title:"Lista de Tarefas",subtitle:"Vuetify"})])])),_:1}),(0,o.Wm)(g.J),(0,o.Wm)(_.l,{link:"",to:"/","prepend-icon":"mdi-view-dashboard",title:"Tarefas",value:"tasks"}),(0,o.Wm)(_.l,{link:"",to:"/sobre","prepend-icon":"mdi-forum",title:"Sobre",value:"about"})])),_:1},8,["modelValue"]),(0,o.Wm)(h.L,{color:"teal-darken-4",image:"https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg",density:"prominent",height:"130"},{image:(0,o.w5)((()=>[(0,o.Wm)(b.f,{gradient:"to left top, rgba(19,84,122,.4), rgba(128,208,199,.5)"})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(k.g,{onClick:a[1]||(a[1]=e=>t.value=!t.value)})])),default:(0,o.w5)((()=>[(0,o.Wm)(v.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1})])),_:1})}}});const C=x;var O=C,D=a(2483),E=a(3289);const V={class:"mt-2"},U={key:0,class:"mt-10 animate__animated animate__bounce"},M=(0,o._)("div",{class:"text-h5 primary--text"}," Nenhuma Tarefa ",-1);function $(e,t,a,n,r,l){const i=(0,o.up)("ListTasks"),u=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("div",V,[(0,o.Wm)(i),e.$store.state.tasks.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",U,[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E.t,{size:"100",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" mdi-check ")])),_:1}),M])),_:1})]))])}var P=a(7139);function I(e,t,a,n,r,l){const i=(0,o.up)("Task"),u=(0,o.up)("drag"),s=(0,o.up)("v-skeleton-loader"),d=(0,o.up)("drop-list");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(d,{items:l.tasksComputeds,onReorder:t[0]||(t[0]=e=>e.apply(l.tasksComputeds))},{item:(0,o.w5)((({item:e,reorder:t})=>[((0,o.wg)(),(0,o.j4)(u,{key:e.id,data:e},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{style:(0,P.j5)([{"background-color":"white"},t?{borderLeft:"2px solid #1976D2",marginLeft:"-2px"}:{}]),tarefa:e},null,8,["style","tarefa"]),(0,o.Wm)(g.J)])),_:2},1032,["data"]))])),feedback:(0,o.w5)((({item:e})=>[((0,o.wg)(),(0,o.j4)(s,{type:"list-item-avatar-three-line",key:e.titulo,style:{"border-left":"2px solid #1976D2","margin-left":"-2px"}}))])),_:1},8,["items"])])}var Z=a(1503),A=a(1550),L=a(8389),S=a(2127);function q(e,t,a,n,r,l){const i=(0,o.up)("TarefaMenu");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(_.l,{value:a.tarefa.titulo,class:(0,P.C_)({"bg-blue-lighten-4":a.tarefa.feito}),onClick:t[0]||(t[0]=t=>e.$store.dispatch("completedTask",a.tarefa))},{prepend:(0,o.w5)((({})=>[(0,o.Wm)(L.m,{start:""},{default:(0,o.w5)((()=>[(0,o.Wm)(A.p,{color:"blue","model-value":a.tarefa.feito},null,8,["model-value"])])),_:1})])),append:(0,o.w5)((()=>[(0,o.Wm)(i,{tarefa:a.tarefa},null,8,["tarefa"])])),default:(0,o.w5)((()=>[(0,o.Wm)(S.V,{class:(0,P.C_)({"text-decoration-line-through":a.tarefa.feito})},{default:(0,o.w5)((()=>[(0,o.Uk)((0,P.zw)(a.tarefa.titulo),1)])),_:1},8,["class"])])),_:1},8,["value","class"])])}var z=a(702),J=a(6613),N=a(4193);function R(e,t,a,n,r,l){const i=(0,o.up)("ModalEdit"),u=(0,o.up)("ModalDelete");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(N.T,{left:""},{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(z.T,(0,o.dG)({icon:"mdi-dots-vertical"},e),null,16)])),default:(0,o.w5)((()=>[(0,o.Wm)(J.i,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,((e,t)=>((0,o.wg)(),(0,o.j4)(_.l,{key:t,value:t,onClick:t=>e.click()},{default:(0,o.w5)((()=>[(0,o.Wm)(S.V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E.t,{left:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,P.zw)(e.icon),1)])),_:2},1024),(0,o.Uk)((0,P.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["value","onClick"])))),128))])),_:1})])),_:1}),e.items[0].modal?((0,o.wg)(),(0,o.j4)(i,{key:0,onFecharModal:t[0]||(t[0]=t=>e.items[0].modal=!1),tarefa:a.tarefa},null,8,["tarefa"])):(0,o.kq)("",!0),e.items[1].modal?((0,o.wg)(),(0,o.j4)(u,{key:1,onFecharModal:t[1]||(t[1]=t=>e.items[1].modal=!1),tarefa:a.tarefa},null,8,["tarefa"])):(0,o.kq)("",!0)])}var F=a(11),B=a(6572),K=a(1888),H=a(1334),G=a(3601),Q=a(9234);function Y(e,t,a,n,r,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(G.B,{modelValue:r.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>r.dialog=e),persistent:"",width:"300"},{default:(0,o.w5)((()=>[(0,o.Wm)(F._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B.E,{class:"text-h5"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Editar ")])),_:1}),(0,o.Wm)(g.J),(0,o.Wm)(K.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Informe um novo título")])),_:1}),(0,o.Wm)(i.h,{class:"px-3",clearable:"",label:"Título",variant:"outlined",modelValue:r.titulo,"onUpdate:modelValue":t[0]||(t[0]=e=>r.titulo=e)},null,8,["modelValue"]),(0,o.Wm)(H.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q.C),(0,o.Wm)(z.T,{color:"red-darken-2",variant:"text",onClick:t[1]||(t[1]=e=>this.$emit("fecharModal"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1}),(0,o.Wm)(z.T,{color:"blue-darken-2",variant:"text",onClick:t[2]||(t[2]=e=>l.handleEdit())},{default:(0,o.w5)((()=>[(0,o.Uk)(" Editar ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var X={props:["tarefa"],data(){return{titulo:null,dialog:!0}},mounted(){this.titulo=this.tarefa.titulo},methods:{handleEdit(){let e={titulo:this.titulo,id:this.tarefa.id};this.$store.dispatch("editTask",e),this.$emit("fecharModal")}}};const ee=(0,c.Z)(X,[["render",Y]]);var te=ee;function ae(e,t,a,n,r,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(G.B,{modelValue:r.dialog,"onUpdate:modelValue":t[2]||(t[2]=e=>r.dialog=e),persistent:"",width:"300"},{default:(0,o.w5)((()=>[(0,o.Wm)(F._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(B.E,{class:"text-h5"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Excluir ")])),_:1}),(0,o.Wm)(g.J),(0,o.Wm)(K.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Tem Certeza que Deseja Excluir a tarefa?")])),_:1}),(0,o.Wm)(H.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q.C),(0,o.Wm)(z.T,{color:"red-darken-2",variant:"text",onClick:t[0]||(t[0]=e=>this.$emit("fecharModal"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1}),(0,o.Wm)(z.T,{color:"blue-darken-2",variant:"text",onClick:t[1]||(t[1]=e=>l.handleDelete())},{default:(0,o.w5)((()=>[(0,o.Uk)(" Excluir ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var ne={props:["tarefa"],data(){return{dialog:!0}},mounted(){this.titulo=this.tarefa.titulo},methods:{handleDelete(){this.$store.dispatch("removeTask",this.tarefa.id),this.$emit("fecharModal")}}};const oe=(0,c.Z)(ne,[["render",ae]]);var re=oe,le={props:["tarefa"],components:{ModalEdit:te,ModalDelete:re},data:()=>({items:[{icon:"mdi-pencil",title:"Editar",modal:!1,click(){this.modal=!0}},{icon:"mdi-delete-circle",title:"Excluir",modal:!1,click(){this.modal=!0}}]})};const ie=(0,c.Z)(le,[["render",R]]);var ue=ie,se={components:{TarefaMenu:ue},name:"TaskComponent",props:["tarefa"],methods:{changeTask(){this.tarefaUp.feito=!this.tarefaUp.feito},handleRemoveTask(e){this.$store.commit("removeTask",e)}}};const de=(0,c.Z)(se,[["render",q]]);var ce=de,me={name:"App",components:{Drag:Z.nc,DropList:Z.Rr,Task:ce},computed:{tasksComputeds(){return this.$store.state.tasks}}};const fe=(0,c.Z)(me,[["render",I]]);var pe=fe,he={name:"TaskPage",components:{ListTasks:pe},data:()=>({campoInput:null}),mounted(){this.$store.commit("searchTasks")},methods:{handleAddTask(){this.$store.dispatch("newTask",this.campoInput),this.campoInput=null}}};const ke=(0,c.Z)(he,[["render",$]]);var ve=ke;const we=[{path:"/",name:"Tarefas",component:ve},{path:"/sobre",name:"Sobre",component:()=>a.e(589).then(a.bind(a,6589))}],ge=(0,D.p7)({history:(0,D.PO)("/"),routes:we});var be=ge,_e=a(65),Te={tasks:[]},We=a(4912);let ye=new We.Z("db");var je=ye,xe={searchTasks(e){je.collection("tasks").get().then((t=>{e.tasks=t}))},newTask(e,t){je.collection("tasks").add({id:(new Date).getTime(),titulo:t,feito:!1})}},Ce={async newTask({commit:e},t){await e("newTask",t),await e("searchTasks")},editTask({commit:e},t){je.collection("tasks").doc({id:t.id}).update({titulo:t.titulo}).then((()=>{e("searchTasks")}))},completedTask({commit:e},t){je.collection("tasks").doc({id:t.id}).update({feito:!t.feito}).then((()=>{e("searchTasks")}))},removeTask({commit:e},t){je.collection("tasks").doc({id:t}).delete().then((()=>{e("searchTasks")}))}},Oe=(0,_e.MT)({state:Te,getters:{},mutations:xe,actions:Ce,modules:{}}),De=(a(9773),a(8727)),Ee=(0,De.Rd)();async function Ve(){const e=await a.e(461).then(a.t.bind(a,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ve(),(0,n.ri)(O).use(be).use(Oe).use(Ee).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var r=Object.create(null);a.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){l[e]=function(){return n[e]}}));return l["default"]=function(){return n},a.d(r,l),r}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{461:"3760e82e",589:"318acb0e"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="todotify:";a.l=function(n,o,r,l){if(e[n])e[n].push(o);else{var i,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+r){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[o];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var l=a.p+a.u(t),i=new Error,u=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,o[1](i)}};a.l(l,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,l=n[0],i=n[1],u=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(u)var d=u(a)}for(t&&t(n);s<l.length;s++)r=l[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunktodotify"]=self["webpackChunktodotify"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7177)}));n=a.O(n)})();
//# sourceMappingURL=app.83f2c211.js.map