(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[376],{2376:(e,t,n)=>{"use strict";n.d(t,{g4:()=>dn});var r=n(168),o=n(184),a=n(2791);var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var c=n(9613),u=n.n(c),l="-ms-",d="-moz-",p="-webkit-",f="comm",h="rule",m="decl",v="@keyframes",g=Math.abs,S=String.fromCharCode,y=Object.assign;function _(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function T(e,t,n){return e.indexOf(t,n)}function C(e,t){return 0|e.charCodeAt(t)}function O(e,t,n){return e.slice(t,n)}function w(e){return e.length}function P(e){return e.length}function R(e,t){return t.push(e),e}function k(e,t){return e.filter((function(e){return!E(e,t)}))}var x=1,A=1,I=0,D=0,N=0,F="";function $(e,t,n,r,o,a,s,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:x,column:A,length:s,return:"",siblings:i}}function j(e,t){return y($("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function W(e){for(;e.root;)e=j(e.root,{children:[e]});R(e,e.siblings)}function H(){return N=D>0?C(F,--D):0,A--,10===N&&(A=1,x--),N}function L(){return N=D<I?C(F,D++):0,A++,10===N&&(A=1,x++),N}function K(){return C(F,D)}function B(){return D}function U(e,t){return O(F,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M(e){return x=A=1,I=w(F=e),D=0,[]}function G(e){return F="",e}function V(e){return _(U(D-1,q(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(N=K())&&N<33;)L();return z(e)>2||z(N)>3?"":" "}function Z(e,t){for(;--t&&L()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return U(e,B()+(t<6&&32==K()&&32==L()))}function q(e){for(;L();)switch(N){case e:return D;case 34:case 39:34!==e&&39!==e&&q(N);break;case 40:41===e&&q(e);break;case 92:L()}return D}function J(e,t){for(;L()&&e+N!==57&&(e+N!==84||47!==K()););return"/*"+U(t,D-1)+"*"+S(47===e?e:L())}function Q(e){for(;!z(K());)L();return U(e,D)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case m:return e.return=e.return||e.value;case f:return"";case v:return e.return=e.value+"{"+X(e.children,r)+"}";case h:if(!w(e.value=e.props.join(",")))return""}return w(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+d+e+l+e+e;case 5936:switch(C(e,t+11)){case 114:return p+e+l+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+l+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+l+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+l+e+e;case 6165:return p+e+l+"flex-"+e+e;case 5187:return p+e+b(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return p+e+l+"flex-item-"+b(e,/flex-|-self/g,"")+(E(e,/flex-|baseline/)?"":l+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return p+e+l+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+l+b(e,"shrink","negative")+e;case 5292:return p+e+l+b(e,"basis","preferred-size")+e;case 6060:return p+"box-"+b(e,"-grow","")+p+e+l+b(e,"grow","positive")+e;case 4554:return p+b(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4200:if(!E(e,/flex-|baseline/))return l+"grid-column-align"+O(e,t)+e;break;case 2592:case 3360:return l+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,E(e.props,/grid-\w+-end/)}))?~T(e+(n=n[t].value),"span",0)?e:l+b(e,"-start","")+e+l+"grid-row-span:"+(~T(n,"span",0)?E(n,/\d+/):+E(n,/\d+/)-+E(e,/\d+/))+";":l+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return E(e.props,/grid-\w+-start/)}))?e:l+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+d+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~T(e,"stretch",0)?te(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,s,i){return l+n+":"+r+i+(o?l+n+"-span:"+(a?s:+s-+r)+i:"")+e}));case 4949:if(121===C(e,t+6))return b(e,":",":"+p)+e;break;case 6444:switch(C(e,45===C(e,14)?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(45===C(e,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+l+"$2box$3")+e;case 100:return b(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case m:return void(e.return=te(e.value,e.length,n));case v:return X([j(e,{value:b(e.value,"@","@"+p)})],r);case h:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(j(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})),W(j(e,{props:[t]})),y(e,{props:k(n,r)});break;case"::placeholder":W(j(e,{props:[b(t,/:(plac\w+)/,":-webkit-input-$1")]})),W(j(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]})),W(j(e,{props:[b(t,/:(plac\w+)/,l+"input-$1")]})),W(j(e,{props:[t]})),y(e,{props:k(n,r)})}return""}))}}function re(e){return G(oe("",null,null,null,[""],e=M(e),0,[0],e))}function oe(e,t,n,r,o,a,s,i,c){for(var u=0,l=0,d=s,p=0,f=0,h=0,m=1,v=1,y=1,_=0,E="",O=o,P=a,k=r,x=E;v;)switch(h=_,_=L()){case 40:if(108!=h&&58==C(x,d-1)){-1!=T(x+=b(V(_),"&","&\f"),"&\f",g(u?i[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:x+=V(_);break;case 9:case 10:case 13:case 32:x+=Y(h);break;case 92:x+=Z(B()-1,7);continue;case 47:switch(K()){case 42:case 47:R(se(J(L(),B()),t,n,c),c);break;default:x+="/"}break;case 123*m:i[u++]=w(x)*y;case 125*m:case 59:case 0:switch(_){case 0:case 125:v=0;case 59+l:-1==y&&(x=b(x,/\f/g,"")),f>0&&w(x)-d&&R(f>32?ie(x+";",r,n,d-1,c):ie(b(x," ","")+";",r,n,d-2,c),c);break;case 59:x+=";";default:if(R(k=ae(x,t,n,u,l,o,i,E,O=[],P=[],d,a),a),123===_)if(0===l)oe(x,t,k,k,O,a,d,i,P);else switch(99===p&&110===C(x,3)?100:p){case 100:case 108:case 109:case 115:oe(e,k,k,r&&R(ae(e,k,k,0,0,o,i,E,o,O=[],d,P),P),o,P,d,i,r?O:P);break;default:oe(x,k,k,k,[""],P,0,i,P)}}u=l=f=0,m=y=1,E=x="",d=s;break;case 58:d=1+w(x),f=h;default:if(m<1)if(123==_)--m;else if(125==_&&0==m++&&125==H())continue;switch(x+=S(_),_*m){case 38:y=l>0?1:(x+="\f",-1);break;case 44:i[u++]=(w(x)-1)*y,y=1;break;case 64:45===K()&&(x+=V(L())),p=K(),l=d=w(E=x+=Q(B())),_++;break;case 45:45===h&&2==w(x)&&(m=0)}}return a}function ae(e,t,n,r,o,a,s,i,c,u,l,d){for(var p=o-1,f=0===o?a:[""],m=P(f),v=0,S=0,y=0;v<r;++v)for(var E=0,T=O(e,p+1,p=g(S=s[v])),C=e;E<m;++E)(C=_(S>0?f[E]+" "+T:b(T,/&\f/g,f[E])))&&(c[y++]=C);return $(e,t,n,0===o?h:i,c,u,l,d)}function se(e,t,n,r){return $(e,t,n,f,S(N),O(e,2,-2),0,r)}function ie(e,t,n,r,o){return $(e,t,n,m,O(e,0,r),O(e,r+1,-1),r,o)}var ce={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",de="data-styled-version",pe="6.1.11",fe="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/TaskPro-FrontEnd-Team12",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ve=(new Set,Object.freeze([])),ge=Object.freeze({});function Se(e,t,n){return void 0===n&&(n=ge),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_e=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ee=/(^-|-$)/g;function be(e){return e.replace(_e,"-").replace(Ee,"")}var Te=/(a)(d)/gi,Ce=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oe(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ce(t%52)+n;return(Ce(t%52)+n).replace(Te,"$1-$2")}var we,Pe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Re=function(e){return Pe(5381,e)};function ke(e){return Oe(Re(e)>>>0)}function xe(e){return e.displayName||e.name||"Component"}function Ae(e){return"string"==typeof e&&!0}var Ie="function"==typeof Symbol&&Symbol.for,De=Ie?Symbol.for("react.memo"):60115,Ne=Ie?Symbol.for("react.forward_ref"):60112,Fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},je={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},We=((we={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},we[De]=je,we);function He(e){return("type"in(t=e)&&t.type.$$typeof)===De?je:"$$typeof"in e?We[e.$$typeof]:Fe;var t}var Le=Object.defineProperty,Ke=Object.getOwnPropertyNames,Be=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,ze=Object.getPrototypeOf,Me=Object.prototype;function Ge(e,t,n){if("string"!=typeof t){if(Me){var r=ze(t);r&&r!==Me&&Ge(e,r,n)}var o=Ke(t);Be&&(o=o.concat(Be(t)));for(var a=He(e),s=He(t),i=0;i<o.length;++i){var c=o[i];if(!(c in $e||n&&n[c]||s&&c in s||a&&c in a)){var u=Ue(t,c);try{Le(e,c,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Ye(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Je(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qe(e[r],t[r]);else if(Je(t))for(var r in t)e[r]=Qe(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw et(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),nt=new Map,rt=new Map,ot=1,at=function(e){if(nt.has(e))return nt.get(e);for(;rt.has(ot);)ot++;var t=ot++;return nt.set(e,t),rt.set(t,e),t},st=function(e,t){ot=t+1,nt.set(e,t),rt.set(t,e)},it="style[".concat(ue,"][").concat(de,'="').concat(pe,'"]'),ct=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ut=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),o=[],a=0,s=r.length;a<s;a++){var i=r[a].trim();if(i){var c=i.match(ct);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(st(l,u),ut(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function dt(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(ue,le),r.setAttribute(de,pe);var s=dt();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},ft=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ht=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=he,gt={isServer:!he,useCSSOMInjection:!me},St=function(){function e(e,t,n){void 0===e&&(e=ge),void 0===t&&(t={});var r=this;this.options=s(s({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&he&&vt&&(vt=!1,function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ue)!==le&&(lt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Xe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return rt.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),s=t.getGroup(n);if(void 0===a||0===s.length)return"continue";var i="".concat(ue,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(i,'{content:"').concat(c,'"}').concat(fe)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return at(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(s(s({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new mt(n):t?new ft(n):new ht(n)}(this.options),new tt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(at(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(at(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(at(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yt=/&/g,_t=/^\s*\/\/.*$/gm;function Et(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Et(e.children,t)),e}))}function bt(e){var t,n,r,o=void 0===e?ge:e,a=o.options,s=void 0===a?ge:a,i=o.plugins,c=void 0===i?ve:i,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(yt,n).replace(r,u))})),s.prefix&&l.push(ne),l.push(ee);var d=function(e,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),t=i,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(_t,""),u=re(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);s.namespace&&(u=Et(u,s.namespace));var d,p=[];return X(u,function(e){var t=P(e);return function(n,r,o,a){for(var s="",i=0;i<t;i++)s+=e[i](n,r,o,a)||"";return s}}(l.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=c.length?c.reduce((function(e,t){return t.name||et(15),Pe(e,t.name)}),5381).toString():"",d}var Tt=new St,Ct=bt(),Ot=a.createContext({shouldForwardProp:void 0,styleSheet:Tt,stylis:Ct}),wt=(Ot.Consumer,a.createContext(void 0));function Pt(){return(0,a.useContext)(Ot)}function Rt(e){var t=(0,a.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Pt().styleSheet,s=(0,a.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),i=(0,a.useMemo)((function(){return bt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,a.useEffect)((function(){u()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,a.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:i}}),[e.shouldForwardProp,s,i]);return a.createElement(Ot.Provider,{value:c},a.createElement(wt.Provider,{value:i},e.children))}var kt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ct);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,(function(){throw et(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ct),this.name+e.hash},e}(),xt=function(e){return e>="A"&&e<="Z"};function At(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;xt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var It=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!It(a)&&(Array.isArray(a)&&a.isCss||Ve(a)?r.push("".concat(At(o),":"),a,";"):Je(a)?r.push.apply(r,i(i(["".concat(o," {")],Dt(a),!1),["}"],!1)):r.push("".concat(At(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ce||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nt(e,t,n,r){return It(e)?[]:Ye(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Nt(e(t),t,n,r):e instanceof kt?n?(e.inject(n,r),[e.getName(r)]):[e]:Je(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(ve,e.map((function(e){return Nt(e,t,n,r)}))):[e.toString()];var o}function Ft(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!Ye(n))return!1}return!0}var $t=Re(pe),jt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ft(e),this.componentId=t,this.baseHash=Pe($t,t),this.baseStyle=n,St.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ze(r,this.staticRulesId);else{var o=qe(Nt(this.rules,e,t,n)),a=Oe(Pe(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}r=Ze(r,a),this.staticRulesId=a}else{for(var i=Pe(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var d=qe(Nt(l,e,t,n));i=Pe(i,d+u),c+=d}}if(c){var p=Oe(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),r=Ze(r,p)}}return r},e}(),Wt=a.createContext(void 0);Wt.Consumer;var Ht={};new Set;function Lt(e,t,n){var r=Ye(e),o=e,i=!Ae(e),c=t.attrs,u=void 0===c?ve:c,l=t.componentId,d=void 0===l?function(e,t){var n="string"!=typeof e?"sc":be(e);Ht[n]=(Ht[n]||0)+1;var r="".concat(n,"-").concat(ke(pe+n+Ht[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):l,p=t.displayName,f=void 0===p?function(e){return Ae(e)?"styled.".concat(e):"Styled(".concat(xe(e),")")}(e):p,h=t.displayName&&t.componentId?"".concat(be(t.displayName),"-").concat(t.componentId):t.componentId||d,m=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(e,t){return g(e,t)&&S(e,t)}}else v=g}var y=new jt(n,h,r?o.componentStyle:void 0);function _(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,d=a.useContext(Wt),p=Pt(),f=e.shouldForwardProp||p.shouldForwardProp,h=Se(t,d,i)||ge,m=function(e,t,n){for(var r,o=s(s({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=Ve(r=e[a])?r(o):r;for(var c in i)o[c]="className"===c?Ze(o[c],i[c]):"style"===c?s(s({},o[c]),i[c]):i[c]}return t.className&&(o.className=Ze(o.className,t.className)),o}(r,t,h),v=m.as||l,g={};for(var S in m)void 0===m[S]||"$"===S[0]||"as"===S||"theme"===S&&m.theme===h||("forwardedAs"===S?g.as=m.forwardedAs:f&&!f(S,v)||(g[S]=m[S]));var y=function(e,t){var n=Pt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),_=Ze(c,u);return y&&(_+=" "+y),m.className&&(_+=" "+m.className),g[Ae(v)&&!ye.has(v)?"class":"className"]=_,g.ref=n,(0,a.createElement)(v,g)}(E,e,t)}_.displayName=f;var E=a.forwardRef(_);return E.attrs=m,E.componentStyle=y,E.displayName=f,E.shouldForwardProp=v,E.foldedComponentIds=r?Ze(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=h,E.target=r?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Qe(e,o[r],!0);return e}({},o.defaultProps,e):e}}),Xe(E,(function(){return".".concat(E.styledComponentId)})),i&&Ge(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Kt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Bt=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Je(e))return Bt(Nt(Kt(ve,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Nt(r):Bt(Nt(Kt(r,t)))}function zt(e,t,n){if(void 0===n&&(n=ge),!t)throw et(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ut.apply(void 0,i([r],o,!1)))};return r.attrs=function(r){return zt(e,t,s(s({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return zt(e,t,s(s({},n),r))},r}var Mt=function(e){return zt(Lt,e)},Gt=Mt;ye.forEach((function(e){Gt[e]=Mt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ft(e),St.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(qe(Nt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&St.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Vt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qe(Ut.apply(void 0,i([e],t,!1))),o=ke(r);return new kt(o,r)}var Yt,Zt,qt,Jt,Qt,Xt,en,tn,nn;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=dt(),r=qe([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(de,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw et(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw et(2);var n=((t={})[ue]="",t[de]=pe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=dt();return r&&(n.nonce=r),[a.createElement("style",s({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new St({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw et(2);return a.createElement(Rt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw et(3)}})(),"__sc-".concat(ue,"__");const rn="#4fa94d",on={"aria-busy":!0,role:"progressbar"},an=Gt.div(Yt||(Yt=(0,r.Z)(["\n  display: ",";\n"])),(e=>e.$visible?"flex":"none")),sn="http://www.w3.org/2000/svg",cn=242.776657104492,un=Vt(Zt||(Zt=(0,r.Z)(["\n12.5% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n43.75% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n100% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n"])),33.98873199462888,cn,26.70543228149412,84.97182998657219,cn,84.97182998657219,2.42776657104492,cn,240.34889053344708),ln=(Gt.path(qt||(qt=(0,r.Z)(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,cn,un,1.6),Vt(Jt||(Jt=(0,r.Z)(["\nto {\n   transform: rotate(360deg);\n }\n"])))),dn=(Gt.svg(Qt||(Qt=(0,r.Z)(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: 0.75s;\n"])),ln),Gt.polyline(Xt||(Xt=(0,r.Z)(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(e=>e.width)),e=>{let{height:t=80,width:n=80,radius:r=9,color:a=rn,ariaLabel:s="three-dots-loading",wrapperStyle:i,wrapperClass:c,visible:u=!0}=e;return(0,o.jsx)(an,{style:i,$visible:u,className:c,"data-testid":"three-dots-loading","aria-label":s,...on,children:(0,o.jsxs)("svg",{width:n,height:t,viewBox:"0 0 120 30",xmlns:sn,fill:a,"data-testid":"three-dots-svg",children:[(0,o.jsxs)("circle",{cx:"15",cy:"15",r:Number(r)+6,children:[(0,o.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,o.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),(0,o.jsxs)("circle",{cx:"60",cy:"15",r:r,attributeName:"fill-opacity",from:"1",to:"0.3",children:[(0,o.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),(0,o.jsx)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),(0,o.jsxs)("circle",{cx:"105",cy:"15",r:Number(r)+6,children:[(0,o.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,o.jsx)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})}),pn=Vt(en||(en=(0,r.Z)(["\nto {\n   stroke-dashoffset: 136;\n }\n"])));Gt.polygon(tn||(tn=(0,r.Z)(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),pn),Gt.svg(nn||(nn=(0,r.Z)(["\n  transform-origin: 50% 65%;\n"])))},9613:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!i(u))return!1;var l=e[u],d=t[u];if(!1===(o=n?n.call(r,l,d,u):void 0)||void 0===o&&l!==d)return!1}return!0}}}]);
//# sourceMappingURL=376.f09efe3b.chunk.js.map