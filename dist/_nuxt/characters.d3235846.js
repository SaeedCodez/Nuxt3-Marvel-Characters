import{o as H,c as U,a as _,H as I,I as C,J as M}from"./entry.4334a8c8.js";const O={class:"py-[15px] px-[20px] bg-white text-black text-[17px] font-[400] rounded relative overflow-hidden"},R={class:"flex items-center justify-between"},$={__name:"M-alert",emits:["tryAgain"],setup(c,{emit:h}){return(s,i)=>(H(),U("div",O,[_("div",R,[_("p",null,[I(s.$slots,"default")]),_("button",{onClick:i[0]||(i[0]=u=>h("tryAgain")),class:"bg-gray-100 hover:bg-gray-200 transition-all h-full px-[30px] absolute right-0"}," try again ")])]))}},q=$;function K(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var B={exports:{}},S={exports:{}};(function(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h={rotl:function(s,i){return s<<i|s>>>32-i},rotr:function(s,i){return s<<32-i|s>>>i},endian:function(s){if(s.constructor==Number)return h.rotl(s,8)&16711935|h.rotl(s,24)&4278255360;for(var i=0;i<s.length;i++)s[i]=h.endian(s[i]);return s},randomBytes:function(s){for(var i=[];s>0;s--)i.push(Math.floor(Math.random()*256));return i},bytesToWords:function(s){for(var i=[],u=0,f=0;u<s.length;u++,f+=8)i[f>>>5]|=s[u]<<24-f%32;return i},wordsToBytes:function(s){for(var i=[],u=0;u<s.length*32;u+=8)i.push(s[u>>>5]>>>24-u%32&255);return i},bytesToHex:function(s){for(var i=[],u=0;u<s.length;u++)i.push((s[u]>>>4).toString(16)),i.push((s[u]&15).toString(16));return i.join("")},hexToBytes:function(s){for(var i=[],u=0;u<s.length;u+=2)i.push(parseInt(s.substr(u,2),16));return i},bytesToBase64:function(s){for(var i=[],u=0;u<s.length;u+=3)for(var f=s[u]<<16|s[u+1]<<8|s[u+2],l=0;l<4;l++)u*8+l*6<=s.length*8?i.push(c.charAt(f>>>6*(3-l)&63)):i.push("=");return i.join("")},base64ToBytes:function(s){s=s.replace(/[^A-Z0-9+\/]/ig,"");for(var i=[],u=0,f=0;u<s.length;f=++u%4)f!=0&&i.push((c.indexOf(s.charAt(u-1))&Math.pow(2,-2*f+8)-1)<<f*2|c.indexOf(s.charAt(u))>>>6-f*2);return i}};S.exports=h})();var L=S.exports,x={utf8:{stringToBytes:function(c){return x.bin.stringToBytes(unescape(encodeURIComponent(c)))},bytesToString:function(c){return decodeURIComponent(escape(x.bin.bytesToString(c)))}},bin:{stringToBytes:function(c){for(var h=[],s=0;s<c.length;s++)h.push(c.charCodeAt(s)&255);return h},bytesToString:function(c){for(var h=[],s=0;s<c.length;s++)h.push(String.fromCharCode(c[s]));return h.join("")}}},F=x;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var W=function(c){return c!=null&&(T(c)||z(c)||!!c._isBuffer)};function T(c){return!!c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c)}function z(c){return typeof c.readFloatLE=="function"&&typeof c.slice=="function"&&T(c.slice(0,0))}(function(){var c=L,h=F.utf8,s=W,i=F.bin,u=function(f,l){f.constructor==String?l&&l.encoding==="binary"?f=i.stringToBytes(f):f=h.stringToBytes(f):s(f)?f=Array.prototype.slice.call(f,0):!Array.isArray(f)&&f.constructor!==Uint8Array&&(f=f.toString());for(var o=c.bytesToWords(f),p=f.length*8,r=1732584193,t=-271733879,n=-1732584194,e=271733878,a=0;a<o.length;a++)o[a]=(o[a]<<8|o[a]>>>24)&16711935|(o[a]<<24|o[a]>>>8)&4278255360;o[p>>>5]|=128<<p%32,o[(p+64>>>9<<4)+14]=p;for(var g=u._ff,v=u._gg,y=u._hh,d=u._ii,a=0;a<o.length;a+=16){var m=r,w=t,k=n,E=e;r=g(r,t,n,e,o[a+0],7,-680876936),e=g(e,r,t,n,o[a+1],12,-389564586),n=g(n,e,r,t,o[a+2],17,606105819),t=g(t,n,e,r,o[a+3],22,-1044525330),r=g(r,t,n,e,o[a+4],7,-176418897),e=g(e,r,t,n,o[a+5],12,1200080426),n=g(n,e,r,t,o[a+6],17,-1473231341),t=g(t,n,e,r,o[a+7],22,-45705983),r=g(r,t,n,e,o[a+8],7,1770035416),e=g(e,r,t,n,o[a+9],12,-1958414417),n=g(n,e,r,t,o[a+10],17,-42063),t=g(t,n,e,r,o[a+11],22,-1990404162),r=g(r,t,n,e,o[a+12],7,1804603682),e=g(e,r,t,n,o[a+13],12,-40341101),n=g(n,e,r,t,o[a+14],17,-1502002290),t=g(t,n,e,r,o[a+15],22,1236535329),r=v(r,t,n,e,o[a+1],5,-165796510),e=v(e,r,t,n,o[a+6],9,-1069501632),n=v(n,e,r,t,o[a+11],14,643717713),t=v(t,n,e,r,o[a+0],20,-373897302),r=v(r,t,n,e,o[a+5],5,-701558691),e=v(e,r,t,n,o[a+10],9,38016083),n=v(n,e,r,t,o[a+15],14,-660478335),t=v(t,n,e,r,o[a+4],20,-405537848),r=v(r,t,n,e,o[a+9],5,568446438),e=v(e,r,t,n,o[a+14],9,-1019803690),n=v(n,e,r,t,o[a+3],14,-187363961),t=v(t,n,e,r,o[a+8],20,1163531501),r=v(r,t,n,e,o[a+13],5,-1444681467),e=v(e,r,t,n,o[a+2],9,-51403784),n=v(n,e,r,t,o[a+7],14,1735328473),t=v(t,n,e,r,o[a+12],20,-1926607734),r=y(r,t,n,e,o[a+5],4,-378558),e=y(e,r,t,n,o[a+8],11,-2022574463),n=y(n,e,r,t,o[a+11],16,1839030562),t=y(t,n,e,r,o[a+14],23,-35309556),r=y(r,t,n,e,o[a+1],4,-1530992060),e=y(e,r,t,n,o[a+4],11,1272893353),n=y(n,e,r,t,o[a+7],16,-155497632),t=y(t,n,e,r,o[a+10],23,-1094730640),r=y(r,t,n,e,o[a+13],4,681279174),e=y(e,r,t,n,o[a+0],11,-358537222),n=y(n,e,r,t,o[a+3],16,-722521979),t=y(t,n,e,r,o[a+6],23,76029189),r=y(r,t,n,e,o[a+9],4,-640364487),e=y(e,r,t,n,o[a+12],11,-421815835),n=y(n,e,r,t,o[a+15],16,530742520),t=y(t,n,e,r,o[a+2],23,-995338651),r=d(r,t,n,e,o[a+0],6,-198630844),e=d(e,r,t,n,o[a+7],10,1126891415),n=d(n,e,r,t,o[a+14],15,-1416354905),t=d(t,n,e,r,o[a+5],21,-57434055),r=d(r,t,n,e,o[a+12],6,1700485571),e=d(e,r,t,n,o[a+3],10,-1894986606),n=d(n,e,r,t,o[a+10],15,-1051523),t=d(t,n,e,r,o[a+1],21,-2054922799),r=d(r,t,n,e,o[a+8],6,1873313359),e=d(e,r,t,n,o[a+15],10,-30611744),n=d(n,e,r,t,o[a+6],15,-1560198380),t=d(t,n,e,r,o[a+13],21,1309151649),r=d(r,t,n,e,o[a+4],6,-145523070),e=d(e,r,t,n,o[a+11],10,-1120210379),n=d(n,e,r,t,o[a+2],15,718787259),t=d(t,n,e,r,o[a+9],21,-343485551),r=r+m>>>0,t=t+w>>>0,n=n+k>>>0,e=e+E>>>0}return c.endian([r,t,n,e])};u._ff=function(f,l,o,p,r,t,n){var e=f+(l&o|~l&p)+(r>>>0)+n;return(e<<t|e>>>32-t)+l},u._gg=function(f,l,o,p,r,t,n){var e=f+(l&p|o&~p)+(r>>>0)+n;return(e<<t|e>>>32-t)+l},u._hh=function(f,l,o,p,r,t,n){var e=f+(l^o^p)+(r>>>0)+n;return(e<<t|e>>>32-t)+l},u._ii=function(f,l,o,p,r,t,n){var e=f+(o^(l|~p))+(r>>>0)+n;return(e<<t|e>>>32-t)+l},u._blocksize=16,u._digestsize=16,B.exports=function(f,l){if(f==null)throw new Error("Illegal argument "+f);var o=c.wordsToBytes(u(f,l));return l&&l.asBytes?o:l&&l.asString?i.bytesToString(o):c.bytesToHex(o)}})();var G=B.exports;const J=K(G),A=()=>{const c=C(),{privateKey:h,publicKey:s,ts:i}=c.app,u=J(i+h+s);return{ts:i,publicKey:s,hashApi:u}},P=M("charactersStore",()=>{const c={};let s=0;const i=[],u=r=>i.includes(r),f=r=>{c[r.id]=r};return{setPageCharacters:(r,t=1)=>{s=r.total,u(t)||(r.results.forEach(n=>{n.page=t,f(n)}),i.push(t))},getPageCharacters:(r=1)=>{if(!u(r))return!1;let t=[];return Object.values(c).some(e=>{if(t.length>=20)return!0;(e==null?void 0:e.page)==r&&t.push(e)}),{limit:20,total:s,results:t}},singleCharacters:c,setSignleCharacter:f,getSingleCharacter:r=>String(r)in c?c[r]:!1}});async function Q(c,h=1){const s=P(),{setPageCharacters:i,getPageCharacters:u}=s,f=u(h);if(!c&&f)return f;const l=C(),{ts:o,publicKey:p,hashApi:r}=A(),t={params:{limit:20,offset:0,ts:o,apikey:p,hash:r},baseURL:l.public.apiBaseUrl};return h>1&&(t.params.offset=(h-1)*t.params.limit),c&&(t.params.nameStartsWith=c),await $fetch("/characters",t).then(({data:n})=>(i(n,h),n))}async function X(c){const h=P(),{getSingleCharacter:s,setSignleCharacter:i}=h,u=s(c);if(u)return u;const f=C(),{ts:l,publicKey:o,hashApi:p}=A(),r={params:{ts:l,apikey:o,hash:p},baseURL:f.public.apiBaseUrl};return await $fetch("/characters/"+c,r).then(({data:t})=>{let n=t.results[0];return i(n),n})}export{q as _,Q as a,X as g};