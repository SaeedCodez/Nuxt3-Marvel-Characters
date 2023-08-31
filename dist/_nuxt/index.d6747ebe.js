import{_ as E,o as r,c as d,a as s,s as l,w as y,t as v,b as t,B as h,z as f,F as S,q as $,v as M,C as T,n as L,D as q,p as F,e as z,u as H,A as G,E as U,r as m,k as i,G as D,T as Z,d as B,x as J,y as K}from"./entry.4334a8c8.js";import{a as O,_ as Q}from"./characters.d3235846.js";import{_ as W}from"./nuxt-link.fec55e3f.js";const X={},Y={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ee=s("path",{d:"M19.6915 18.2571L18.2571 19.6915L21.8484 23.2828C22.2445 23.6789 22.8867 23.6789 23.2828 23.2828C23.6789 22.8867 23.6789 22.2445 23.2828 21.8484L19.6915 18.2571Z","fill-opacity":"0.47"},null,-1),te=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 11C0 19.5 3 22 11 22C19 22 22 19.5 22 11C22 2.5 19 0 11 0C3 0 0 2.5 0 11ZM2 11C2 15.1211 2.75081 17.151 3.88827 18.2478C5.04294 19.3612 7.09172 20 11 20C14.9083 20 16.9571 19.3612 18.1117 18.2478C19.2492 17.151 20 15.1211 20 11C20 6.87885 19.2492 4.84902 18.1117 3.75219C16.9571 2.63876 14.9083 2 11 2C7.09172 2 5.04294 2.63876 3.88827 3.75219C2.75081 4.84902 2 6.87885 2 11Z"},null,-1),ae=[ee,te];function se(e,a){return r(),d("svg",Y,ae)}const re=E(X,[["render",se]]);const ne={class:"relative w-[152px] h-[201px] overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-200"},oe=["src"],le={class:"w-full absolute bottom-[17px] text-center z-20"},ie={class:"text-[16px] text-white font-[500]"},ce=s("div",null,[s("div",{class:"border-[2.7px] p-[2.7px] overflow-hidden border-[rgba(255,255,255,0.3)] absolute top-0 left-0 w-full h-full z-10"},[s("span",{class:"w-[50px] h-[50px] bg-white opacity-[0.15] absolute -top-[25px] -left-[25px] group-hover:-top-[45px] rotate-45 transition-all duration-300"}),s("span",{class:"w-[50px] h-[50px] bg-white opacity-[0.3] absolute -bottom-[25px] -right-[25px] rotate-45 group-hover:-bottom-[45px] transition-all duration-300"})]),s("span",{class:"character-cover absolute top-0 left-0 w-full h-full"})],-1),ue={__name:"marvelCharacter",props:{id:Number,name:String,imageUrl:String},setup(e){return(a,w)=>{const c=W;return r(),l(c,{to:"/character/"+e.id},{default:y(()=>[s("section",ne,[s("div",null,[s("img",{loading:"lazy",src:e.imageUrl,class:"h-[201px] group-hover:h-[260px] transition-all duration-300 object-cover"},null,8,oe),s("div",le,[s("p",ie,v(e.name),1)])]),ce])]),_:1},8,["to"])}}},de=ue;var j=L({name:"Vue Tailwind Pagination",props:{current:{type:Number,default:1},total:{type:Number,default:0},perPage:{type:Number,default:9},pageRange:{type:Number,default:2},textBeforeInput:{type:String,default:"Go to page"},textAfterInput:{type:String,default:"Go"}},data:()=>({input:""}),methods:{hasFirst:function(){return this.rangeStart!==1},hasLast:function(){return this.rangeEnd<this.totalPages},hasPrev:function(){return this.current>1},hasNext:function(){return this.current<this.totalPages},changePage:function(e){e>0&&e<=this.totalPages&&this.$emit("page-changed",e)}},computed:{pages:function(){for(var e=[],a=this.rangeStart;a<=this.rangeEnd;a++)e.push(a);return e},rangeStart:function(){var e=this.current-this.pageRange;return e>0?e:1},rangeEnd:function(){var e=this.current+this.pageRange;return e<this.totalPages?e:this.totalPages},totalPages:function(){return Math.ceil(this.total/this.perPage)},nextPage:function(){return this.current+1},prevPage:function(){return this.current-1}}});const pe=q();F("data-v-00d7790c");const ge={class:"min-w-max"},he={class:"flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat"},fe={class:"flex items-center"},me={key:0,class:"pr-6"},xe=t("div",{class:"flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6"},[t("div",{class:"transform -rotate-45"},[t("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})])])],-1),_e={key:1,class:"pr-6"},ve=t("div",{class:"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"},[t("span",{class:"transform -rotate-45"}," 1 ")],-1),we={key:2,class:"pr-6"},ye={class:"pr-6"},be={class:"transform -rotate-45"},Ce={key:3,class:"pr-6"},ke={key:4,class:"pr-6"},Pe={class:"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"},Se={class:"transform -rotate-45"},$e={key:5,class:"pr-6"},Me=t("div",{class:"flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6"},[t("div",{class:"transform -rotate-45"},[t("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])])],-1),je={class:"flex items-center"},Ne={class:"pr-2 text-gray-400 font-medium"},Be={id:"text-before-input"},Te={class:"w-14 rounded-md border border-indigo-400 px-1 py-1"},Ae={id:"text-after-input"},Ie=t("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);z();const Re=pe((e,a,w,c,x,b)=>(r(),l("div",ge,[t("section",he,[t("ul",fe,[e.hasPrev()?(r(),l("li",me,[t("a",{href:"#",onClick:a[1]||(a[1]=h(n=>e.changePage(e.prevPage),["prevent"]))},[xe])])):f("",!0),e.hasFirst()?(r(),l("li",_e,[t("a",{href:"#",onClick:a[2]||(a[2]=h(n=>e.changePage(1),["prevent"]))},[ve])])):f("",!0),e.hasFirst()?(r(),l("li",we,"...")):f("",!0),(r(!0),l(S,null,$(e.pages,n=>(r(),l("li",ye,[t("a",{href:"#",onClick:h(g=>e.changePage(n),["prevent"])},[t("div",{class:[{"bg-gradient-to-r from-blue-400 to-indigo-400":e.current==n},"flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"]},[t("span",be,v(n),1)],2)],8,["onClick"])]))),256)),e.hasLast()?(r(),l("li",Ce,"...")):f("",!0),e.hasLast()?(r(),l("li",ke,[t("a",{href:"#",onClick:a[3]||(a[3]=h(n=>e.changePage(e.totalPages),["prevent"]))},[t("div",Pe,[t("span",Se,v(e.totalPages),1)])])])):f("",!0),e.hasNext()?(r(),l("li",$e,[t("a",{href:"#",onClick:a[4]||(a[4]=h(n=>e.changePage(e.nextPage),["prevent"]))},[Me])])):f("",!0)]),t("div",je,[t("div",Ne,[t("span",Be,v(e.textBeforeInput),1)]),t("div",Te,[M(t("input",{"onUpdate:modelValue":a[5]||(a[5]=n=>e.input=n),class:"w-12 focus:outline-none px-2",type:"text"},null,512),[[T,e.input,void 0,{number:!0}]])]),t("div",{onClick:a[6]||(a[6]=h(n=>e.changePage(e.input),["prevent"])),class:"flex items-center pl-4 font-medium cursor-pointer"},[t("span",Ae,v(e.textAfterInput),1),Ie])])])])));j.render=Re,j.__scopeId="data-v-00d7790c";const Ve={class:"lg:pt-[100px] pt-[50px] pb-14 lg:px-0 px-[20px]"},Ee={class:"flex lg:gap-0 gap-6 lg:flex-row flex-col justify-between items-center"},Le=s("div",null,[s("h1",{class:"lg:text-[43px] text-[35px] font-[500] uppercase text-center"}," Marvel Characters ")],-1),qe={class:"relative flex items-center"},Fe={key:0,class:"w-fit m-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-14 gap-[25px]"},ze={class:"animate-pulse bg-[#ffffff2f] w-[152px] h-[201px] rounded-[5px] relative flex items-center justify-center"},He=s("span",{class:"block bg-[#ffffff2c] w-[80px] h-[15px] absolute bottom-[20px] rounded-lg"},null,-1),Ge=[He],Ue={key:1},De={key:2},Ze={key:3},Je={class:"w-fit m-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-14 gap-[25px]"},We={__name:"index",setup(e){H({title:"MARVEL CHARACTERS 🔥"});const a=G(),w=U(),c=m(a.query.search?a.query.search:""),x=m(a.query.page?Number(a.query.page):1),b=m(0),n=m(null),g=m(!1),C=m(!1);async function k(){g.value=!0,C.value=!1,await O(c.value,x.value).then(o=>{console.log(o),b.value=o.total,n.value=o.results}).catch(o=>{console.log(o),C.value=o}).finally(()=>{g.value=!1})}k();let P=null;function A(){P!==null&&clearTimeout(P),P=setTimeout(()=>{x.value=1,w.replace({query:{search:c.value}}),k()},1e3)}function I(o){x.value=o,w.replace({query:{page:o}}),k()}return(o,u)=>{const R=re,N=Q,V=de;return r(),d("section",Ve,[s("div",Ee,[Le,s("div",qe,[M(s("input",{"onUpdate:modelValue":u[0]||(u[0]=_=>D(c)?c.value=_:null),onInput:u[1]||(u[1]=_=>A()),class:"py-[16px] px-[53px] bg-[rgba(255,255,255,0.16)] placeholder:text-[rgba(255,255,255,0.63)] rounded-[10px] lg:w-[220px] lg:focus:w-[300px] w-full transition-all",type:"text",placeholder:"SEARCH..."},null,544),[[T,i(c)]]),t(R,{class:"w-[18px] fill-white absolute left-[20px]"})])]),s("div",null,[t(Z,{name:"fade",mode:"out-in"},{default:y(()=>{var _;return[i(g)?(r(),d("div",Fe,[(r(),d(S,null,$(5,p=>s("div",ze,Ge)),64))])):i(C)?(r(),d("div",Ue,[t(N,{class:"mt-14",onTryAgain:u[2]||(u[2]=p=>o.refresh())},{default:y(()=>[B(" An error occurred. Please try again :( ")]),_:1})])):((_=i(n))==null?void 0:_.length)==0?(r(),d("div",De,[t(N,{class:"mt-14",onTryAgain:u[3]||(u[3]=p=>o.refresh())},{default:y(()=>[B(" Character not found :( ")]),_:1})])):(r(),d("div",Ze,[s("div",Je,[(r(!0),d(S,null,$(i(n),p=>(r(),l(V,{id:p.id,name:p.name,"image-url":p.thumbnail.path+"."+p.thumbnail.extension},null,8,["id","name","image-url"]))),256))]),M(t(i(j),{class:K([[i(g)&&"opacity-50"],"pagination text-black mt-10 transition-all"]),current:i(x),total:i(b),"per-page":20,onPageChanged:I},null,8,["class","current","total"]),[[J,!i(g)]])]))]}),_:1})])])}}};export{We as default};
