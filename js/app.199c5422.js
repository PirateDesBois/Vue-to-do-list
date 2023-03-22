(function(){"use strict";var e={1151:function(e,t,l){var o=l(9242),a=l(3396),i=l(7139),n=l(7718),d=l(8233),r=l(702),u=l(11),s=l(6572),c=l(1888),m=l(1334),k=l(6887),f=l(3849),w=l(4075),p=l(6422),g=l(3369),_=l(6824),h=l(8521),y=l(3289),b=l(5016),W=l(4846),v=l(1275),U=l(5869),V=l(5030);const D=e=>((0,a.dD)("data-v-433548ec"),e=e(),(0,a.Cn)(),e),T={class:"font-weight-bold text-subtitle-1 text-white text-center"},j={class:"font-weight-bold text-subtitle-1 text-white text-center"},C={class:"font-weight-bold text-subtitle-1 text-white text-center"},x={key:0},P=D((()=>(0,a._)("br",null,null,-1))),O={key:0},L=D((()=>(0,a._)("br",null,null,-1))),z={key:0},S=D((()=>(0,a._)("br",null,null,-1)));function q(e,t,l,o,D,q){return(0,a.wg)(),(0,a.j4)(n.q,{id:"app"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.L,{app:"",color:"primary",dark:""},{default:(0,a.w5)((()=>[(0,a.Wm)(V.q,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" My Todo List ")])),_:1}),(0,a.Wm)(r.T,{color:"orange",onClick:t[0]||(t[0]=e=>q.clearHistory())},{default:(0,a.w5)((()=>[(0,a.Uk)("Clear")])),_:1})])),_:1}),(0,a.Wm)(g.K,{class:"my-15"},{default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.E,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" New Task ")])),_:1}),(0,a.Wm)(c.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U.hw,{modelValue:D.newTask,"onUpdate:modelValue":t[1]||(t[1]=e=>D.newTask=e),label:"Task Name"},null,8,["modelValue"]),(0,a.Wm)(U.hw,{modelValue:D.newTaskDescription,"onUpdate:modelValue":t[2]||(t[2]=e=>D.newTaskDescription=e),label:"Task Description"},null,8,["modelValue"]),(0,a.Wm)(r.T,{color:"primary",onClick:q.addTask},{default:(0,a.w5)((()=>[(0,a.Uk)("Add")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(w.J,{class:"my-4"}),(0,a.Wm)(_.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{cols:"4",class:"waitlist"},{default:(0,a.w5)((()=>[(0,a._)("div",T,[(0,a.Wm)(y.t,{color:"white",class:"mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-progress-check")])),_:1}),(0,a.Uk)(" Waitlist")])])),_:1}),(0,a.Wm)(h.D,{cols:"4",class:"progress"},{default:(0,a.w5)((()=>[(0,a._)("div",j,[(0,a.Wm)(y.t,{color:"white",class:"mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-progress-check")])),_:1}),(0,a.Uk)(" Progress")])])),_:1}),(0,a.Wm)(h.D,{cols:"4",class:"done"},{default:(0,a.w5)((()=>[(0,a._)("div",C,[(0,a.Wm)(y.t,{color:"white",class:"mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-progress-check")])),_:1}),(0,a.Uk)(" Done")])])),_:1})])),_:1}),(0,a.Wm)(_.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{cols:"4",class:"glass"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.taskList,((e,t)=>((0,a.wg)(),(0,a.j4)(h.D,{key:t},{default:(0,a.w5)((()=>["to do"===e.status?((0,a.wg)(),(0,a.iD)("div",x,[(0,a.Wm)(u._,{class:"rounded-shaped",style:(0,i.j5)({backgroundColor:e.color})},{default:(0,a.w5)((()=>[(0,a.Wm)(s.E,null,{default:(0,a.w5)((()=>[e.date&&e.time?((0,a.wg)(),(0,a.j4)(b.l,{key:0,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"primary mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-clock-time-eight-outline")])),_:1}),(0,a.Uk)((0,i.zw)(e.date)+" "+(0,i.zw)(e.time),1)])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(w.J,{thickness:2}),P,e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:2,modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:"Task Name"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:4,modelValue:e.description,"onUpdate:modelValue":t=>e.description=t,label:"Task Description"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:3,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.description),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(v.r,{key:5,modelValue:e.status,"onUpdate:modelValue":t=>e.status=t},{default:(0,a.w5)((()=>[(0,a.Wm)(W.R,{label:"waitlist",value:"to do"}),(0,a.Wm)(W.R,{label:"Progress",value:"progress"}),(0,a.Wm)(W.R,{label:"Done",value:"done"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,a.kq)("",!0)])),_:2},1024),(0,a.Wm)(m.h,{class:"justify-end text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"red",onClick:e=>q.deleteTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-delete")])),_:2},1032,["onClick"]),e.editable?((0,a.wg)(),(0,a.j4)(y.t,{key:1,color:"primary",onClick:e=>q.updateTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-check")])),_:2},1032,["onClick"])):((0,a.wg)(),(0,a.j4)(y.t,{key:0,color:"primary",onClick:e=>q.editTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-pencil")])),_:2},1032,["onClick"])),(0,a.Wm)(f.B,{modelValue:e.colorPickerDialog,"onUpdate:modelValue":t=>e.colorPickerDialog=t,width:"auto"},{activator:(0,a.w5)((({props:t})=>[(0,a.Wm)(m.h,(0,a.dG)({color:"primary px-0"},t,{onClick:t=>e.colorPickerDialog=!0}),{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"orange-darken-2 ",size:"25"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-palette")])),_:1})])),_:2},1040,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k.J,{modelValue:e.color,"onUpdate:modelValue":t=>e.color=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(m.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.T,{color:"primary",block:"",onClick:l=>(e.colorPickerDialog=!1,q.updateTask(t))},{default:(0,a.w5)((()=>[(0,a.Uk)("Save changes")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1032,["style"])])):(0,a.kq)("",!0)])),_:2},1024)))),128))])),_:1}),(0,a.Wm)(h.D,{cols:"4",class:"glass"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.taskList,((e,t)=>((0,a.wg)(),(0,a.j4)(h.D,{key:t},{default:(0,a.w5)((()=>["progress"===e.status?((0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(u._,{class:"rounded-shaped",style:(0,i.j5)({backgroundColor:e.color})},{default:(0,a.w5)((()=>[(0,a.Wm)(s.E,null,{default:(0,a.w5)((()=>[e.date&&e.time?((0,a.wg)(),(0,a.j4)(b.l,{key:0,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"primary mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-clock-time-eight-outline")])),_:1}),(0,a.Uk)((0,i.zw)(e.date)+" "+(0,i.zw)(e.time),1)])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(w.J,{thickness:2}),L,e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:2,modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:"Task Name"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:4,modelValue:e.description,"onUpdate:modelValue":t=>e.description=t,label:"Task Description"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:3,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.description),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(v.r,{key:5,modelValue:e.status,"onUpdate:modelValue":t=>e.status=t},{default:(0,a.w5)((()=>[(0,a.Wm)(W.R,{label:"To Do",value:"to do"}),(0,a.Wm)(W.R,{label:"Progress",value:"progress"}),(0,a.Wm)(W.R,{label:"Done",value:"done"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,a.kq)("",!0)])),_:2},1024),(0,a.Wm)(m.h,{class:"justify-end text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"red",onClick:e=>q.deleteTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-delete")])),_:2},1032,["onClick"]),e.editable?((0,a.wg)(),(0,a.j4)(y.t,{key:1,color:"primary",onClick:e=>q.updateTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-check")])),_:2},1032,["onClick"])):((0,a.wg)(),(0,a.j4)(y.t,{key:0,color:"primary",onClick:e=>q.editTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-pencil")])),_:2},1032,["onClick"])),(0,a.Wm)(f.B,{modelValue:e.colorPickerDialog,"onUpdate:modelValue":t=>e.colorPickerDialog=t,width:"auto"},{activator:(0,a.w5)((({props:t})=>[(0,a.Wm)(m.h,(0,a.dG)({color:"primary px-0"},t,{onClick:t=>e.colorPickerDialog=!0}),{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"orange-darken-2 ",size:"25"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-palette")])),_:1})])),_:2},1040,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k.J,{modelValue:e.color,"onUpdate:modelValue":t=>e.color=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(m.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.T,{color:"primary",block:"",onClick:l=>(e.colorPickerDialog=!1,q.updateTask(t))},{default:(0,a.w5)((()=>[(0,a.Uk)("Save changes")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1032,["style"])])):(0,a.kq)("",!0)])),_:2},1024)))),128))])),_:1}),(0,a.Wm)(h.D,{cols:"4",class:"glass"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.taskList,((e,t)=>((0,a.wg)(),(0,a.j4)(h.D,{key:t},{default:(0,a.w5)((()=>["done"===e.status?((0,a.wg)(),(0,a.iD)("div",z,[(0,a.Wm)(u._,{class:"rounded-shaped",style:(0,i.j5)({backgroundColor:e.color})},{default:(0,a.w5)((()=>[(0,a.Wm)(s.E,null,{default:(0,a.w5)((()=>[e.date&&e.time?((0,a.wg)(),(0,a.j4)(b.l,{key:0,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"primary mx-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-clock-time-eight-outline")])),_:1}),(0,a.Uk)((0,i.zw)(e.date)+" "+(0,i.zw)(e.time),1)])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(w.J,{thickness:2}),S,e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:2,modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:"Task Name"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(U.hw,{key:4,modelValue:e.description,"onUpdate:modelValue":t=>e.description=t,label:"Task Description"},null,8,["modelValue","onUpdate:modelValue"])):((0,a.wg)(),(0,a.j4)(b.l,{key:3,class:"text-subtitle-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.description),1)])),_:2},1024)),e.editable?((0,a.wg)(),(0,a.j4)(v.r,{key:5,modelValue:e.status,"onUpdate:modelValue":t=>e.status=t},{default:(0,a.w5)((()=>[(0,a.Wm)(W.R,{label:"To Do",value:"to do"}),(0,a.Wm)(W.R,{label:"Progress",value:"progress"}),(0,a.Wm)(W.R,{label:"Done",value:"done"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,a.kq)("",!0)])),_:2},1024),(0,a.Wm)(m.h,{class:"justify-end text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"red",onClick:e=>q.deleteTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-delete")])),_:2},1032,["onClick"]),e.editable?((0,a.wg)(),(0,a.j4)(y.t,{key:1,color:"primary",onClick:e=>q.updateTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-check")])),_:2},1032,["onClick"])):((0,a.wg)(),(0,a.j4)(y.t,{key:0,color:"primary",onClick:e=>q.editTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-pencil")])),_:2},1032,["onClick"])),(0,a.Wm)(f.B,{modelValue:e.colorPickerDialog,"onUpdate:modelValue":t=>e.colorPickerDialog=t,width:"auto"},{activator:(0,a.w5)((({props:t})=>[(0,a.Wm)(m.h,(0,a.dG)({color:"primary px-0"},t,{onClick:t=>e.colorPickerDialog=!0}),{default:(0,a.w5)((()=>[(0,a.Wm)(y.t,{color:"orange-darken-2 ",size:"25"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-palette")])),_:1})])),_:2},1040,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k.J,{modelValue:e.color,"onUpdate:modelValue":t=>e.color=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(m.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.T,{color:"primary",block:"",onClick:l=>(e.colorPickerDialog=!1,q.updateTask(t))},{default:(0,a.w5)((()=>[(0,a.Uk)("Save changes")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1032,["style"])])):(0,a.kq)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}l(7658);var E={data(){return{taskList:this.getData(),newTask:"",newTaskDescription:"",tasks:[],dialog:!1}},methods:{clearHistory(){localStorage.clear(),location.reload()},getData(){const e=localStorage.getItem("todoList");return JSON.parse(e)||[]},saveData(e){localStorage.setItem("todoList",JSON.stringify(e))},addTask(){if(""!=this.newTask){const e=new Date;console.log(e),this.taskList.push({title:this.newTask,description:this.newTaskDescription,done:!1,color:"#ffffff",colorPickerDialog:!1,status:"to do",date:`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`,time:`${e.getHours()}:${e.getMinutes()}`}),this.newTask="",this.newTaskDescription="",this.saveData(this.taskList)}else alert("Please write a task")},deleteTask(e){this.taskList.splice(e,1),this.saveData(this.taskList)},editTask(e){this.taskList[e].editable=!0},updateTask(e){this.taskList[e].editable=!1,this.saveData(this.taskList)},toggleTask(e){this.taskList[e].done=!this.taskList[e].done,this.saveData(this.taskList)}}},N=l(89);const R=(0,N.Z)(E,[["render",q],["__scopeId","data-v-433548ec"]]);var J=R,M=(l(9773),l(8957)),H=(0,M.Rd)();async function A(){const e=await l.e(461).then(l.t.bind(l,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}A(),(0,o.ri)(J).use(H).mount("#app")}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,o,a,i){if(!o){var n=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],i=e[s][2];for(var d=!0,r=0;r<o.length;r++)(!1&i||n>=i)&&Object.keys(l.O).every((function(e){return l.O[e](o[r])}))?o.splice(r--,1):(d=!1,i<n&&(n=i));if(d){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,a,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var i=Object.create(null);l.r(i);var n={};e=e||[null,t({}),t([]),t(t)];for(var d=2&a&&o;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(e){n[e]=function(){return o[e]}}));return n["default"]=function(){return o},l.d(i,n),i}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,o){return l.f[o](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/webfontloader.e91bb783.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-todo-list:";l.l=function(o,a,i,n){if(e[o])e[o].push(a);else{var d,r;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+i){d=c;break}}d||(r=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.setAttribute("data-webpack",t+i),d.src=o),e[o]=[a];var m=function(t,l){d.onerror=d.onload=null,clearTimeout(k);var a=e[o];if(delete e[o],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((function(e){return e(l)})),t)return t(l)},k=setTimeout(m.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=m.bind(null,d.onerror),d.onload=m.bind(null,d.onload),r&&document.head.appendChild(d)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/Vue-to-do-list/"}(),function(){var e={143:0};l.f.j=function(t,o){var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(l,o){a=e[t]=[l,o]}));o.push(a[2]=i);var n=l.p+l.u(t),d=new Error,r=function(o){if(l.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,a[1](d)}};l.l(n,r,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,n=o[0],d=o[1],r=o[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(a in d)l.o(d,a)&&(l.m[a]=d[a]);if(r)var s=r(l)}for(t&&t(o);u<n.length;u++)i=n[u],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(s)},o=self["webpackChunkmy_todo_list"]=self["webpackChunkmy_todo_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(1151)}));o=l.O(o)})();
//# sourceMappingURL=app.199c5422.js.map