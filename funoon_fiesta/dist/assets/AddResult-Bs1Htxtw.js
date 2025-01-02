import{j as e}from"./animations-BL9nLNs_.js";import{a as r,f as t,u as o}from"./vendor-DOVO1ENQ.js";import{c as s,u as n,C as a,U as l,a as i}from"./index-CTKj3B4h.js";import{S as d,T as c}from"./trophy-Cafu67Wm.js";import{A as p}from"./award-GBwA_qvs.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]),m=s("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]),b=s("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function g(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=g(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const f=e=>{const r=v(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{const t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),h(t,r)||y(e)},getConflictingClassGroupIds:(e,r)=>{const s=t[e]||[];return r&&o[e]?[...s,...o[e]]:s}}},h=(e,r)=>{var t;if(0===e.length)return r.classGroupId;const o=e[0],s=r.nextPart.get(o),n=s?h(e.slice(1),s):void 0;if(n)return n;if(0===r.validators.length)return;const a=e.join("-");return null==(t=r.validators.find((({validator:e})=>e(a))))?void 0:t.classGroupId},x=/^\[(.+)\]$/,y=e=>{if(x.test(e)){const r=x.exec(e)[1],t=null==r?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},v=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return j(Object.entries(e.classGroups),t).forEach((([e,t])=>{w(t,o,e,r)})),o},w=(e,r,t,o)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return N(e)?void w(e(o),r,t,o):void r.validators.push({validator:e,classGroupId:t});Object.entries(e).forEach((([e,s])=>{w(s,k(r,e),t,o)}))}else{(""===e?r:k(r,e)).classGroupId=t}}))},k=(e,r)=>{let t=e;return r.split("-").forEach((e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)})),t},N=e=>e.isThemeGetter,j=(e,r)=>r?e.map((([e,t])=>[e,t.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,t])=>[r+e,t]))):e))])):e,C=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(s,n)=>{t.set(s,n),r++,r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(s(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):s(e,r)}}},z=e=>{const{separator:r,experimentalParseClassName:t}=e,o=1===r.length,s=r[0],n=r.length,a=e=>{const t=[];let a,l=0,i=0;for(let p=0;p<e.length;p++){let d=e[p];if(0===l){if(d===s&&(o||e.slice(p,p+n)===r)){t.push(e.slice(i,p)),i=p+n;continue}if("/"===d){a=p;continue}}"["===d?l++:"]"===d&&l--}const d=0===t.length?e:e.substring(i),c=d.startsWith("!");return{modifiers:t,hasImportantModifier:c,baseClassName:c?d.substring(1):d,maybePostfixModifierPosition:a&&a>i?a-i:void 0}};return t?e=>t({className:e,parseClassName:a}):a},A=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach((e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)})),r.push(...t.sort()),r},S=/\s+/;function I(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=G(e))&&(o&&(o+=" "),o+=r);return o}const G=e=>{if("string"==typeof e)return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=G(e[o]))&&(t&&(t+=" "),t+=r);return t};function R(e,...r){let t,o,s,n=function(l){const i=r.reduce(((e,r)=>r(e)),e());return t=(e=>({cache:C(e.cacheSize),parseClassName:z(e),...f(e)}))(i),o=t.cache.get,s=t.cache.set,n=a,a(l)};function a(e){const r=o(e);if(r)return r;const n=((e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],a=e.trim().split(S);let l="";for(let i=a.length-1;i>=0;i-=1){const e=a[i],{modifiers:r,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:p}=t(e);let u=Boolean(p),m=o(u?c.substring(0,p):c);if(!m){if(!u){l=e+(l.length>0?" "+l:l);continue}if(m=o(c),!m){l=e+(l.length>0?" "+l:l);continue}u=!1}const b=A(r).join(":"),g=d?b+"!":b,f=g+m;if(n.includes(f))continue;n.push(f);const h=s(m,u);for(let t=0;t<h.length;++t){const e=h[t];n.push(g+e)}l=e+(l.length>0?" "+l:l)}return l})(e,t);return s(e,n),n}return function(){return n(I.apply(null,arguments))}}const M=e=>{const r=r=>r[e]||[];return r.isThemeGetter=!0,r},E=/^\[(?:([a-z-]+):)?(.+)\]$/i,P=/^\d+\/\d+$/,T=new Set(["px","full","screen"]),B=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,O=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,D=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,L=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,H=e=>_(e)||T.has(e)||P.test(e),Y=e=>te(e,"length",oe),_=e=>Boolean(e)&&!Number.isNaN(Number(e)),q=e=>te(e,"number",_),U=e=>Boolean(e)&&Number.isInteger(Number(e)),W=e=>e.endsWith("%")&&_(e.slice(0,-1)),F=e=>E.test(e),Z=e=>B.test(e),J=new Set(["length","size","percentage"]),K=e=>te(e,J,se),V=e=>te(e,"position",se),X=new Set(["image","url"]),Q=e=>te(e,X,ae),ee=e=>te(e,"",ne),re=()=>!0,te=(e,r,t)=>{const o=E.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},oe=e=>O.test(e)&&!D.test(e),se=()=>!1,ne=e=>L.test(e),ae=e=>$.test(e),le=R((()=>{const e=M("colors"),r=M("spacing"),t=M("blur"),o=M("brightness"),s=M("borderColor"),n=M("borderRadius"),a=M("borderSpacing"),l=M("borderWidth"),i=M("contrast"),d=M("grayscale"),c=M("hueRotate"),p=M("invert"),u=M("gap"),m=M("gradientColorStops"),b=M("gradientColorStopPositions"),g=M("inset"),f=M("margin"),h=M("opacity"),x=M("padding"),y=M("saturate"),v=M("scale"),w=M("sepia"),k=M("skew"),N=M("space"),j=M("translate"),C=()=>["auto",F,r],z=()=>[F,r],A=()=>["",H,Y],S=()=>["auto",_,F],I=()=>["","0",F],G=()=>[_,F];return{cacheSize:500,separator:":",theme:{colors:[re],spacing:[H,Y],blur:["none","",Z,F],brightness:G(),borderColor:[e],borderRadius:["none","","full",Z,F],borderSpacing:z(),borderWidth:A(),contrast:G(),grayscale:I(),hueRotate:G(),invert:I(),gap:z(),gradientColorStops:[e],gradientColorStopPositions:[W,Y],inset:C(),margin:C(),opacity:G(),padding:z(),saturate:G(),scale:G(),sepia:I(),skew:G(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[Z]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",F]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",U,F]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",U,F]}],"grid-cols":[{"grid-cols":[re]}],"col-start-end":[{col:["auto",{span:["full",U,F]},F]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[re]}],"row-start-end":[{row:["auto",{span:[U,F]},F]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,r]}],"min-w":[{"min-w":[F,r,"min","max","fit"]}],"max-w":[{"max-w":[F,r,"none","full","min","max","fit","prose",{screen:[Z]},Z]}],h:[{h:[F,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Z,Y]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",q]}],"font-family":[{font:[re]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",_,q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",H,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",H,Y]}],"underline-offset":[{"underline-offset":["auto",H,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",V]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",K]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[H,F]}],"outline-w":[{outline:[H,Y]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[H,Y]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Z,ee]}],"shadow-color":[{shadow:[re]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",Z,F]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:G()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:G()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[U,F]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[H,Y,q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}));function ie(...e){return le(function(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=g(e))&&(o&&(o+=" "),o+=r);return o}(e))}const de=r.forwardRef((({className:r,variant:t,...o},s)=>e.jsx("div",{ref:s,role:"alert",className:ie("relative w-full rounded-lg border border-gray-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 dark:border-gray-800 dark:text-gray-50",r),...o})));de.displayName="Alert";r.forwardRef((({className:r,...t},o)=>e.jsx("h5",{ref:o,className:ie("mb-1 font-medium leading-none tracking-tight",r),...t}))).displayName="AlertTitle";const ce=r.forwardRef((({className:r,...t},o)=>e.jsx("div",{ref:o,className:ie("text-sm [&_p]:leading-relaxed",r),...t})));ce.displayName="AlertDescription";const pe={GROUP:{FIRST:{A:25,B:23,C:21},SECOND:{A:22,B:20,C:18},THIRD:{A:20,B:18,C:16}},SINGLE:{FIRST:{A:10,B:8,C:6},SECOND:{A:8,B:6,C:4},THIRD:{A:6,B:4,C:2}},GENERAL:{FIRST:{A:15,B:13,C:11},SECOND:{A:13,B:11,C:9},THIRD:{A:11,B:9,C:7}}},ue={studentName:"",programName:"",teamName:"",category:"",stage:"",prize:"",grade:"",points:""},me=()=>{var s;const{addResult:g,results:f}=n(),{state:h}=t(),[x,y]=r.useState(ue),[v,w]=r.useState(null),[k,N]=r.useState(!1),[j,C]=r.useState(!1),z=o(),A=r.useMemo((()=>[{name:"teamName",icon:e.jsx(m,{className:"w-5 h-5 text-gray-400"}),options:["ALEXANDRIA","SHATIBIYA","MADIYA","SHAMIYA","IJAZIYYA","KAZIMIYYA"]},{name:"category",icon:e.jsx(b,{className:"w-5 h-5 text-gray-400"}),options:["SINGLE","GROUP","GENERAL"]},{name:"stage",icon:e.jsx(d,{className:"w-5 h-5 text-gray-400"}),options:["STAGE","NON-STAGE"]},{name:"prize",icon:e.jsx(c,{className:"w-5 h-5 text-gray-400"}),options:["FIRST","SECOND","THIRD"]},{name:"grade",icon:e.jsx(d,{className:"w-5 h-5 text-gray-400"}),options:["A","B","C"]}]),[]);r.useEffect((()=>{(null==h?void 0:h.result)&&y(h.result)}),[h]),r.useEffect((()=>{const e=((e,r,t)=>{var o,s;return e&&r&&t&&(null==(s=null==(o=pe[e])?void 0:o[r])?void 0:s[t])||""})(x.category,x.prize,x.grade).toString();e!==x.points&&y((r=>({...r,points:e})))}),[x.category,x.prize,x.grade]);const S=r.useCallback((e=>{const r=f.some((r=>{var t;return r._id!==(null==(t=null==h?void 0:h.result)?void 0:t._id)&&r.studentName.toLowerCase()===e.studentName.toLowerCase()&&r.programName.toLowerCase()===e.programName.toLowerCase()&&r.category===e.category}));C(r)}),[f,null==(s=null==h?void 0:h.result)?void 0:s._id]),I=r.useCallback((e=>{const{name:r,value:t}=e.target;y((e=>{const o={...e,[r]:t};return["studentName","programName","category"].includes(r)&&setTimeout((()=>S(o)),300),o})),w(null)}),[S]);return e.jsx("div",{className:"min-h-screen px-4 py-8 sm:px-6 md:px-12",children:e.jsxs("div",{className:"max-w-lg mx-auto bg-white/40 dark:bg-transparent shadow-lg rounded-lg p-6 md:p-8",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx(p,{className:"w-12 h-12 mx-auto text-blue-500",strokeWidth:1.5}),e.jsx("h2",{className:"text-2xl font-bold text-gray-700 dark:text-white mt-2",children:(null==h?void 0:h.result)?"Edit Result":"Add Result"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Manage and submit student results"})]}),v&&e.jsxs(de,{variant:"destructive",className:"mb-4",children:[e.jsx(a,{className:"h-4 w-4"}),e.jsx(ce,{children:v})]}),j&&e.jsxs(de,{variant:"warning",className:"mb-4",children:[e.jsx(a,{className:"h-4 w-4"}),e.jsx(ce,{children:"Potential duplicate entry detected. Please verify the details."})]}),e.jsxs("form",{onSubmit:async e=>{var r,t;if(e.preventDefault(),j)w("This result appears to be a duplicate. Please verify the details.");else{N(!0),w(null);try{(null==h?void 0:h.result)?await i.put(`https://server-sigma-opal-60.vercel.app/api/result/${h.result._id}`,x):await g(x),z("/cart")}catch(o){w((null==(t=null==(r=o.response)?void 0:r.data)?void 0:t.message)||"An error occurred while submitting the form")}finally{N(!1)}}},className:"space-y-4",children:[["studentName","programName"].map((r=>e.jsxs("div",{className:"relative",children:["studentName"===r?e.jsx(l,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}):e.jsx(u,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),e.jsx("input",{type:"text",name:r,placeholder:"studentName"===r?"Student Name":"Program Name",value:x[r],onChange:I,required:!0,className:"w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"})]},r))),A.map((r=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-3 top-3",children:r.icon}),e.jsxs("select",{name:r.name,value:x[r.name],onChange:I,required:!0,className:"w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none",children:[e.jsx("option",{value:"",children:`Select ${r.name.charAt(0).toUpperCase()+r.name.slice(1)}`}),r.options.map((r=>e.jsx("option",{value:r,children:r},r)))]})]},r.name))),e.jsxs("div",{className:"relative",children:[e.jsx(d,{className:"absolute left-3 top-3 w-5 h-5 text-gray-400"}),e.jsx("input",{type:"text",name:"points",placeholder:"Points",value:x.points,readOnly:!0,className:"w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"})]}),e.jsx("button",{type:"submit",disabled:k||j,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-md transition duration-300 "+(k||j?"opacity-50 cursor-not-allowed":"hover:-translate-y-1"),children:k?"Submitting...":(null==h?void 0:h.result)?"Update Result":"Add Result"})]})]})})},be=()=>e.jsx("section",{children:e.jsx(me,{})});export{be as default};