"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[955],{2643:(e,a,s)=>{s.d(a,{Q:()=>c});var r=s(2376),t=s(270),o=s(184);const c=()=>(0,o.jsx)("div",{className:t.Z.containerBtn,children:(0,o.jsx)(r.g4,{visible:!0,height:"20",width:"20",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},4538:(e,a,s)=>{s.r(a),s.d(a,{default:()=>$e});var r=s(2791),t=s(4420);const o="Header_headerBox__RPcIW",c="Header_imgBtn__FQJWu",n="Header_avatarWrap__W3T7-",i="Header_avatar__fR3aq",l="Header_arrowIcon__iUFq8",d="Header_arrow__UOjtE",m="Header_open__coLd6",u="Header_text__4jGdp",h="Header_dropdown__ZNsCx",p="Header_dropbtn__iVUxw",x="Header_dropdownContent__Rx4Dt",v="Header_show__mvTx2",j="Header_rightBlock__UU+Ag",b="Header_themeBtn__BpnEE",g="Header_active__rHuVo",_="Header_burgerMenu__NNFS9",f="Header_menu__bKlxq";var w=s(7609);var k=s(1134),N=s(4695),C=s(8007);const S={container:"UserEditModal_container__fmnEZ",backdrop:"UserEditModal_backdrop__VFVNS",cont:"UserEditModal_cont__61oRW",wrap:"UserEditModal_wrap__YQOVi",closeBtn:"UserEditModal_closeBtn__FwgRu",txt:"UserEditModal_txt__5B5ud",avatarContainer:"UserEditModal_avatarContainer__XQO3d",plusBtn:"UserEditModal_plusBtn__Ggtv0",formInput:"UserEditModal_formInput__u5gWz",formGroup:"UserEditModal_formGroup__BZND2",error:"UserEditModal_error__uWT19",forma:"UserEditModal_forma__DbTXq",btn:"UserEditModal_btn__B3qmh",eye:"UserEditModal_eye__vSeKA",avatar:"UserEditModal_avatar__4GdiQ"};var A=s(4289),y=s(5822),E=s(2643),M=s(184);const B=C.Ry().shape({name:C.Z_().min(3,"Too Short!").max(50,"Too Long!").required("Required"),email:C.Z_().email("Must be a valid email!").required("Required"),password:C.Z_().min(7,"Too short").max(256,"Too long")});function T(e){let{onClose:a}=e;const s=(0,r.useRef)(null),o=(0,t.I0)(),c=(0,t.v9)(A.dy),n=(0,t.v9)(A.Qb),i=(0,t.v9)(A.wU),l=(0,t.v9)(A.Gu),[d,m]=(0,r.useState)(!1),u=(0,k.cI)({resolver:(0,N.X)(B),defaultValues:{name:(null===c||void 0===c?void 0:c.name)||"",email:(null===c||void 0===c?void 0:c.email)||"",password:""}}),{handleSubmit:h,reset:p,setValue:x}=u,[v,j]=(0,r.useState)(null);(0,r.useEffect)((()=>{n&&!i&&o((0,y.v7)())}),[o,n,i]),(0,r.useEffect)((()=>{c&&(x("name",c.name),x("email",c.email),x("password",c.password))}),[c,x]);return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("div",{className:S.backdrop,onClick:()=>a(),children:(0,M.jsxs)("div",{className:"".concat(S.container," ").concat(S.cont),onClick:e=>{e.stopPropagation()},children:[(0,M.jsx)("div",{className:S.wrap,children:(0,M.jsx)("button",{className:S.closeBtn,onClick:()=>a(),children:(0,M.jsx)("svg",{width:"18",height:"18",stroke:"currentColor",children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-x-close")})})})}),(0,M.jsx)("p",{className:S.txt,children:"Edit Profile"}),(0,M.jsxs)("div",{className:S.avatarContainer,children:[v?(0,M.jsx)("img",{src:URL.createObjectURL(v),alt:"avatar",className:S.avatar}):null!==c&&void 0!==c&&c.avatarURL?(0,M.jsx)("img",{src:c.avatarURL,alt:"avatar",className:S.avatar}):(0,M.jsx)("svg",{className:S.avatar,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-user")})}),(0,M.jsxs)("button",{type:"button",className:S.plusBtn,onClick:()=>{s.current.click()},children:[(0,M.jsx)("svg",{width:"10",height:"10",stroke:"currentColor",children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-plus")})}),(0,M.jsx)("input",{type:"file",ref:s,style:{display:"none"},onChange:e=>{const a=e.target.files[0];j(a)}})]})]}),(0,M.jsx)(k.RV,{...u,children:(0,M.jsxs)("form",{className:S.forma,onSubmit:h((async e=>{m(!0);const s=new FormData;for(const a in e)e.hasOwnProperty(a)&&s.append(a,e[a]);s.append("theme",c.theme),v&&s.append("avatar",v);try{await o((0,y.Nq)({formData:s,token:l})).unwrap(),p(),a()}catch(r){console.error(r)}finally{m(!1)}})),autoComplete:"off",children:[(0,M.jsxs)("div",{className:S.formGroup,children:[(0,M.jsx)("label",{htmlFor:"name",className:S.formLabel}),(0,M.jsx)("input",{type:"text",name:"name",className:S.formInput,placeholder:"Name",...u.register("name")}),u.formState.errors.name&&(0,M.jsx)("span",{className:S.error,children:u.formState.errors.name.message})]}),(0,M.jsxs)("div",{className:S.formGroup,children:[(0,M.jsx)("label",{htmlFor:"email",className:S.formLabel}),(0,M.jsx)("input",{type:"text",name:"email",className:S.formInput,placeholder:"Email",...u.register("email")}),u.formState.errors.email&&(0,M.jsx)("span",{className:S.error,children:u.formState.errors.email.message})]}),(0,M.jsxs)("div",{className:S.formGroup,children:[(0,M.jsx)("label",{htmlFor:"password",className:S.formLabel}),(0,M.jsx)("input",{type:"password",name:"password",className:S.formInput,placeholder:"Password",...u.register("password")}),u.formState.errors.password&&(0,M.jsx)("span",{className:S.error,children:u.formState.errors.password.message})]}),(0,M.jsx)("button",{type:"submit",className:S.btn,disabled:d,children:d?(0,M.jsx)(E.Q,{}):"Send"})]})})]})})})}var U=s(8897),I=s(2306);const L=e=>{let{onVisible:a}=e;const[s,k]=(0,r.useState)(!1),[N,C]=(0,r.useState)(!1),S=(0,r.useRef)(null),E=(0,t.I0)(),B=(0,t.v9)(A.dy),L=(0,t.v9)(A.Qb),F=(0,t.v9)(A.wU),W=(0,t.v9)(I.JP),{changeTheme:Z}=(0,U.F)();((e,a)=>{(0,r.useEffect)((()=>{const s=s=>{e.current&&s.target instanceof Element&&!e.current.contains(s.target)&&a()};return document.body.addEventListener("click",s),()=>document.body.removeEventListener("click",s)}),[e,a])})(S,(()=>C(!1))),(0,r.useEffect)((()=>{L&&!F&&E((0,y.v7)())}),[E,L,F]),(0,r.useEffect)((()=>{Z(W)}),[W,Z]);const D=e=>{E((0,I.Dc)(e));const a=new FormData;a.append("theme",e),E((0,y.Nq)({formData:a})),C(!1)};return(0,M.jsxs)("div",{className:o,children:[(0,M.jsx)("button",{className:_,onClick:()=>{a(!0)},children:(0,M.jsx)("svg",{className:f,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-menu")})})}),(0,M.jsxs)("div",{className:j,children:[(0,M.jsxs)("div",{className:h,ref:S,children:[(0,M.jsxs)("button",{className:p,onClick:()=>C(!N),children:["Theme",(0,M.jsx)("div",{className:"".concat(l," ").concat(N?m:""),children:(0,M.jsx)("svg",{className:d,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-chevron-down")})})})]}),(0,M.jsxs)("div",{className:"".concat(x," ").concat(N?v:""),children:[(0,M.jsx)("button",{className:"".concat(b," ").concat("light"===W?g:""),onClick:()=>D("light"),children:"Light"}),(0,M.jsx)("button",{className:"".concat(b," ").concat("dark"===W?g:""),onClick:()=>D("dark"),children:"Dark"}),(0,M.jsx)("button",{className:"".concat(b," ").concat("violet"===W?g:""),onClick:()=>D("violet"),children:"Violet"})]})]}),(0,M.jsxs)("div",{className:c,children:[(0,M.jsx)("p",{className:u,children:B?B.name:"Loading..."}),(0,M.jsx)("div",{className:n,onClick:()=>{k(!0)},children:null!==B&&void 0!==B&&B.avatarURL?(0,M.jsx)("img",{src:B.avatarURL,alt:"avatar",className:i}):(0,M.jsx)("svg",{className:i,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-user")})})})]})]}),s&&(0,M.jsx)(T,{onClose:()=>{k(!1)}})]})},F="Sidebar_sidebarWrap__OM0pe",W="Sidebar_visible__pTmtS",Z="Sidebar_sidebar__zfhso",D="Sidebar_logoBox__klDMT",H="Sidebar_logoTitle__y3Xo0",q="Sidebar_logoSvg__oxddu",O="Sidebar_createTitle__vgsMb",Q="Sidebar_createBox__TVC3O",V="Sidebar_createText__ZOou-",R="Sidebar_createBtn__teKQ2",P="Sidebar_createSvg__1T9ou",Y="Sidebar_projects__jFnNb",J="Sidebar_helpBlock__8EJaK",X="Sidebar_img__XLI+Z",G="Sidebar_helpText__1vwtr",K="Sidebar_helpLink__-GoPD",z="Sidebar_helpSvg__ApcJ+",$="Sidebar_helpBtn__4Jcxs",ee="Sidebar_logOutBtn__ejD4x",ae="Sidebar_logOutSvg__cquQX",se="Sidebar_block__Wekjj";var re=s(3733);const te=s.p+"static/media/flower_@2x.7e113c606f1493767af7.png",oe={card:"BoardCard_card__jFWO1",cardActive:"BoardCard_cardActive__RPfXx",cardSvg:"BoardCard_cardSvg__6ieyy",btnBlock:"BoardCard_btnBlock__co+J2",btnSvg:"BoardCard_btnSvg__BAZWg",title:"BoardCard_title__ywkDH"};var ce=s(4136),ne=s(7689);const ie={input:"BoardModal_input__sZ9wO",listIcons:"BoardModal_listIcons__K-CF9",icon:"BoardModal_icon__pcHWC",inputIcon:"BoardModal_inputIcon__vuXyY",labeIcon:"BoardModal_labeIcon__tKSSA",text:"BoardModal_text__ktZ6W",listBackground:"BoardModal_listBackground__TioSZ",backgroundBox:"BoardModal_backgroundBox__mAkdl",emptyPicture:"BoardModal_emptyPicture__wzYJZ",iconImg:"BoardModal_iconImg__LIIzs",selected:"BoardModal_selected__QHwgq",errors:"BoardModal_errors__4C3Nt",error:"BoardModal_error__bJQBJ"};var le=s(6),de=s(420),me=s(4736),ue=s(5425),he=s.n(ue),pe=/[A-Z]/g,xe=/^ms-/,ve={};function je(e){return"-"+e.toLowerCase()}const be=function(e){if(ve.hasOwnProperty(e))return ve[e];var a=e.replace(pe,je);return ve[e]=xe.test(a)?"-"+a:a};function ge(e,a){if(e===a)return!0;if(!e||!a)return!1;const s=Object.keys(e),r=Object.keys(a),t=s.length;if(r.length!==t)return!1;for(let o=0;o<t;o++){const r=s[o];if(e[r]!==a[r]||!Object.prototype.hasOwnProperty.call(a,r))return!1}return!0}var _e=s(2007),fe=s.n(_e);const we=fe().oneOfType([fe().string,fe().number]),ke={all:fe().bool,grid:fe().bool,aural:fe().bool,braille:fe().bool,handheld:fe().bool,print:fe().bool,projection:fe().bool,screen:fe().bool,tty:fe().bool,tv:fe().bool,embossed:fe().bool},Ne={orientation:fe().oneOf(["portrait","landscape"]),scan:fe().oneOf(["progressive","interlace"]),aspectRatio:fe().string,deviceAspectRatio:fe().string,height:we,deviceHeight:we,width:we,deviceWidth:we,color:fe().bool,colorIndex:fe().bool,monochrome:fe().bool,resolution:we,type:Object.keys(ke)},{type:Ce,...Se}=Ne,Ae={minAspectRatio:fe().string,maxAspectRatio:fe().string,minDeviceAspectRatio:fe().string,maxDeviceAspectRatio:fe().string,minHeight:we,maxHeight:we,minDeviceHeight:we,maxDeviceHeight:we,minWidth:we,maxWidth:we,minDeviceWidth:we,maxDeviceWidth:we,minColor:fe().number,maxColor:fe().number,minColorIndex:fe().number,maxColorIndex:fe().number,minMonochrome:fe().number,maxMonochrome:fe().number,minResolution:we,maxResolution:we,...Se};var ye={all:{...ke,...Ae},types:ke,matchers:Ne,features:Ae};const Ee=e=>{const a=[];return Object.keys(ye.all).forEach((s=>{const r=e[s];null!=r&&a.push(((e,a)=>{const s=be(e);return"number"===typeof a&&(a="".concat(a,"px")),!0===a?s:!1===a?"not ".concat(s):"(".concat(s,": ").concat(a,")")})(s,r))})),a.join(" and ")},Me=(0,r.createContext)(void 0),Be=e=>{if(!e)return;return Object.keys(e).reduce(((a,s)=>(a[be(s)]=e[s],a)),{})},Te=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{e.current=!0}),[]),e.current},Ue=e=>{const a=()=>(e=>e.query||Ee(e))(e),[s,t]=(0,r.useState)(a);return(0,r.useEffect)((()=>{const e=a();s!==e&&t(e)}),[e]),s},Ie=(e,a,s)=>{const t=(e=>{const a=(0,r.useContext)(Me),s=()=>Be(e)||Be(a),[t,o]=(0,r.useState)(s);return(0,r.useEffect)((()=>{const e=s();ge(t,e)||o(e)}),[e,a]),t})(a),o=Ue(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const c=((e,a)=>{const s=()=>he()(e,a||{},!!a),[t,o]=(0,r.useState)(s),c=Te();return(0,r.useEffect)((()=>{if(c){const e=s();return o(e),()=>{e&&e.dispose()}}}),[e,a]),t})(o,t),n=(e=>{const[a,s]=(0,r.useState)(e.matches);return(0,r.useEffect)((()=>{const a=e=>{s(e.matches)};return e.addListener(a),s(e.matches),()=>{e.removeListener(a)}}),[e]),a})(c),i=Te();return(0,r.useEffect)((()=>{i&&s&&s(n)}),[n]),(0,r.useEffect)((()=>()=>{c&&c.dispose()}),[]),n},Le=["icon-project","icon-star-04","icon-loading-03","icon-puzzle-piece-02","icon-container","icon-lightning-02","icon-colors","icon-hexagon-01"],Fe=e=>{let{onClose:a,type:s,board:o}=e;const c=(0,ne.s0)(),n=(0,t.I0)(),[i,l]=(0,r.useState)({}),[d,m]=(0,r.useState)(null),[u,h]=(0,r.useState)(null),p="create"===s,{register:x,handleSubmit:v,setValue:j,formState:{errors:b}}=(0,k.cI)({defaultValues:{title:p?"":o.title,icon:p?"icon-project":o.icon,background:p?"":o.background}}),g=e=>{c(e)},_=Ie({query:"(max-width: 767px)"}),f=Ie({query:"(min-width: 768px) and (max-width: 1024px)"}),N=Ie({query:"(min-width: 1025px)"}),C=window.devicePixelRatio>1;(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,y.OV)();l(e)}catch(u){console.error("Error fetching backgrounds:",u),h("Failed to load backgrounds")}})()}),[]);return(0,M.jsx)(le.z,{onClose:a,modalTitle:p?"New Board":"Edit Board",children:(0,M.jsxs)("form",{onSubmit:v((e=>{const s={title:e.title,icon:e.icon,background:d,callBack:g};p?n((0,ce.JU)(s)):(s.id=o._id,n((0,ce.Vq)(s))),a()})),children:[(0,M.jsx)(de.S,{placeholder:"Title",name:"title",errors:b,autoFocus:!0,register:x,id:"title"}),(0,M.jsx)("p",{className:ie.text,children:"Icons"}),(0,M.jsx)("ul",{className:ie.listIcons,children:Le.map((e=>(0,M.jsxs)("li",{children:[(0,M.jsx)("input",{className:ie.inputIcon,...x("icon",{required:!0}),type:"radio",value:e,id:e}),(0,M.jsx)("label",{htmlFor:e,className:ie.labeIcon,children:(0,M.jsx)("svg",{className:ie.icon,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#").concat(e)})})})]},e)))}),(0,M.jsx)("p",{className:ie.text,children:"Background"}),u&&(0,M.jsx)("p",{className:ie.errorText,children:u}),(0,M.jsxs)("ul",{className:ie.listBackground,children:[(0,M.jsxs)("li",{children:[(0,M.jsx)("input",{className:ie.inputIcon,...x("background"),type:"radio",value:"",id:"empty"}),(0,M.jsx)("label",{htmlFor:"empty",className:ie.labeIcon,children:(0,M.jsx)("div",{className:ie.backgroundBox,children:(0,M.jsx)("svg",{className:ie.emptyPicture,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-block-background")})})})})]}),(()=>{const e=(()=>{var e,a,s,r,t,o;return _?C?null===(e=i.mobile)||void 0===e?void 0:e.retina:null===(a=i.mobile)||void 0===a?void 0:a.regular:f?C?null===(s=i.tablet)||void 0===s?void 0:s.retina:null===(r=i.tablet)||void 0===r?void 0:r.regular:N?C?null===(t=i.desktop)||void 0===t?void 0:t.retina:null===(o=i.desktop)||void 0===o?void 0:o.regular:[]})();return Array.isArray(e)?e.map(((e,a)=>(0,M.jsxs)("li",{children:[(0,M.jsx)("input",{className:ie.inputIcon,...x("background"),type:"radio",value:e,id:"background-".concat(a),onClick:()=>{return m(a=e),void j("background",a);var a}}),(0,M.jsx)("label",{htmlFor:"background-".concat(a),className:ie.labeIcon,children:(0,M.jsx)("img",{src:e,srcSet:"".concat(e," 1x, ").concat(e.replace(/(\.\w+)$/,"__2x$1")," 2x"),alt:"#",className:"".concat(ie.iconImg," ").concat(d===e?ie.selected:""),style:{width:"28px",height:"28px"}})})]},a))):null})()]}),(0,M.jsx)(me.z,{icon:"plus",children:p?"Create":"Edit"})]})})},We=e=>{let{board:a,closeSidebar:s}=e;const o=(0,ne.s0)(),{boardId:c}=(0,ne.UO)(),[n,i]=(0,r.useState)(!1),l=(0,t.I0)(),d=()=>{c===a._id&&o("/home",{replace:!0})};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("li",{children:(0,M.jsxs)("div",{onClick:()=>o(a._id),className:(0,re.Z)(oe.card,{[oe.cardActive]:c===a._id}),to:a._id,children:[(0,M.jsx)("svg",{className:oe.cardSvg,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#").concat(a.icon)})}),(0,M.jsx)("p",{className:oe.title,children:a.title}),(0,M.jsxs)("div",{className:oe.btnBlock,children:[(0,M.jsx)("button",{className:oe.btn,onClick:e=>{e.stopPropagation(),i(!0),s()},children:(0,M.jsx)("svg",{className:oe.btnSvg,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-pencil")})})}),(0,M.jsx)("button",{className:oe.btn,onClick:e=>{e.stopPropagation();const s={id:a._id,callback:d};l((0,ce.L1)(s))},children:(0,M.jsx)("svg",{className:oe.btnSvg,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-trash")})})})]})]})}),n&&(0,M.jsx)(Fe,{onClose:()=>i(!1),type:"edit",board:a})]})};var Ze=s(2903);const De="ModalTextarea_inputContainer__rlJeX",He="ModalTextarea_input__5KXKk",qe="ModalTextarea_error__z3nSI",Oe="ModalTextarea_errorMessage__9QB0W",Qe=e=>{let{className:a,errorClassName:s,register:r,errors:t,name:o,errorMessage:c,...n}=e;const i=t&&t[o],l=r?r(o,{required:"".concat(o.charAt(0).toUpperCase()+o.slice(1)," is required"),minLength:{value:10,message:"".concat(o.charAt(0).toUpperCase()+o.slice(1)," must be at least 10 characters long")},maxLength:{value:1e3,message:"".concat(o.charAt(0).toUpperCase()+o.slice(1)," must be less than 1000 characters")}}):{};return(0,M.jsxs)("div",{className:De,children:[(0,M.jsx)("textarea",{className:"".concat(He," ").concat(a," ").concat(i?qe:""," "),...l,...n}),i&&(0,M.jsx)("div",{className:Oe,children:c||i.message})]})},Ve=e=>{let{onClose:a}=e;const{register:s,handleSubmit:r,formState:{errors:t}}=(0,k.cI)();return(0,M.jsx)(le.z,{onClose:a,modalTitle:"Need help",children:(0,M.jsxs)("form",{onSubmit:r((async e=>{try{const s={email:e.email,comment:e.comment},r=await Ze.Z.post("/api/users/help",s,{headers:{"Content-Type":"application/json"}});console.log("Response:",r.data),a()}catch(s){console.error("Error submitting form:",s.response?s.response.data:s.message),a()}})),noValidate:!0,children:[(0,M.jsx)(de.S,{name:"email",placeholder:"Email address",type:"email",errors:t,register:s,id:"email"}),(0,M.jsx)(Qe,{name:"comment",placeholder:"Comment",errors:t,register:s,id:"comment"}),(0,M.jsx)(me.z,{children:"Send"})]})})};var Re=s(7290);const Pe=e=>{let{visible:a,onVisible:s}=e;const o=(0,t.I0)(),c=(0,ne.s0)(),n=(0,t.v9)(Re.E$),[i,l]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1);return(0,M.jsxs)("div",{className:(0,re.Z)(F,{[W]:a}),onClick:e=>{e.target===e.currentTarget&&s(!1)},children:[(0,M.jsxs)("aside",{className:Z,children:[(0,M.jsxs)("div",{className:D,children:[(0,M.jsx)("svg",{className:q,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-logo")})}),(0,M.jsx)("h1",{className:H,children:"Task Pro"})]}),(0,M.jsxs)("div",{className:se,children:[(0,M.jsx)("p",{className:O,children:"My boards"}),(0,M.jsxs)("div",{className:Q,children:[(0,M.jsx)("p",{className:V,children:"Create a new board"}),(0,M.jsx)("button",{className:R,onClick:()=>{l(!0),s(!1)},children:(0,M.jsx)("svg",{className:P,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-plus")})})})]})]}),(0,M.jsx)("ul",{className:Y,children:n.map((e=>(0,M.jsx)(We,{board:e,closeSidebar:()=>s(!1)},e._id)))}),(0,M.jsxs)("div",{className:se,children:[(0,M.jsxs)("div",{className:J,children:[(0,M.jsx)("img",{className:X,srcSet:te,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABOCAYAAABrNOVxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZISURBVHgB7VppkFxXdT737e9192ya0Wg0WizLko2lYCNsY7wQcCBxHIcUVOGkcMVZSMWBkARShCqKpEqkQlEhxAElQMUkrmJxKJuCip3YJBjjsLmMZcB2jBfJliWNpmemp/fut2/5zn09I9kpa2Y05t9c1VUv8/r1/e455zvfObeJNsbG2BgbY2NsjI2xMTbGxvg5jTzPxUP5Qe3+7x2aWHrvscf+UH/g+5/e8fJr7/7sm8t3f/NvLzzzvS996bdL9zz02Qv4+aFDv2ree+9Bh16FodA6xsMPf9C+77sfu8P9XvLDdrTw9H8fvu09/P6DT1Y/dLxZff4Hh7/wtjOvf9ZPPjPbqj777Uc+/dql956rHfv0TO3FR+9/8JO7fTv9Vi33f/j9J+8cpXWO9QATsx3/412/+bunFo5c4YbBuOu2pg/981W7673+Rxaac3rX7Xwiz+9W+eJ7vvCGyVaQ/Fa316VTC41PHTx4UPn831wy3eiG7+553qgfhR+r1lt75pqzlwbd+c/TOoe2movuf/gTrxsv7+hc8dqbj/HrL37jQ2+cHBq+YqZ37H16tECdSFBZDynVVLEYObf1fK+SUZ2eff7Zfc1G+AGA+IfZxj03dSLbsaKAWv3em7bvS9/qzp13ZTB3ygk6Deo4ozepwvG6bos6fv/Gxx+/84pLL7350UOHrtudjLzml8Ynz/v3veebAdEFdOWeG7orrVld6YLbv3LjH7VT7d4kT27+4Aff+eD0dveiE53GA5o9ceMmu6Qttk6RJywSeY5dSq4+Vp2/2A8jMt2QfvrMSc1w7F8+sH9L/sizT1wbqsZeTTEJU+u7i+9aWGy9TfE8eu5kjVLVVHdNTltz3Vkaq0wa46WxsbHp6vzxbvBQkCnvmh6pXD9fr35SSaPf/+uPvvfLhw7d5dJ6LBb0gw8ESkdoamk8zfy/arbVvBH1TcN4nvLpHWTY2yn2G+T7Xar2Y73T9yjLUmq3dep2XDo5O0ObR0b+PNErRhpn5Loe/L9FYyMVq9s6SqcWA4oQEL1ul6zpbRT6EXlBQI1O7fpTHf9aPxUjpUpKlNm/0PBnSdGbU5P+pluwtE+dM7Bv/9vbJ/+34e11gz6V7Ih6uX9jHIoo9BWaOXmChsojNFwyyBQ2dd15clse+ViUmarU7KQURjHVFheoWt82NDG2hZozJygJ++S5ATZjmBbqAdwuJhv3CEKfklQhPTeo0+vRows/KvWCrKTpOumaSYrQyNYdCqKQkizZSyuMswJTKBwXcS46nS6VTZdSJdXgYVoeE3UaIc3MnqR861ZK8Ea73aVmI6AuLFahMnU8LCBOqY/X1VqVLto1TXH4At6HRVNE4NwiLBqS0HISQlAcx+RiUywyaW5hjk7NnoDlsUBNI8sskS5UMlSLYniDkmklWg8wJCnLEERuL6SO3aSKYVKKRaVJjoUImj01S5XyEGkmAHhsnRb5XkS6PURh4FOa5RQFMTUai9TePE6OadB8tYnPY3EI7xQeZhqaBJamCQVxRAEseKpdpRjfo6kK/m5TCVMTCj6DTcA/RdFjWmGcle6xSaGjppT4RI02dtjt4wsTubsZbt1rhlStVrH4lAMeFvCo04Y7enDDOKAcW54ARLfTo1qtRaql0ZBdlssLowhfAICqkMAS3Jfv3w9CXjoWL0jVFCqXyuQYFgEjpXlCuqKTpZoNWg8w27YWyybRpKPT1uELcdMyRWlEcRJjwQlFfk7Hn5+lY0dnKY8duurKy8F4GtWbbYCPpHWTKCWv79OxYy9Qs96jTVNjdM0vXk6qjsVrDIDtkEuLNbuLlGgx7Txvmq6+/EqybJPK2AhLU0kVOU2Mbaato5vJENkRWg+wny303hDnGdwsp5n543T0SJX8yMXuxhJcHGXUbQYUtAUde/EFMrRhes3+XdSGhdiqaQJgcSLds15rU9DNqb7YIBvXjU+OkQozwFgDyybUajVg2TZ1uyAra4x2T59PFdMkU8kQFRE1vDaNVirIl+GKMXZWYF2X9j1V9SjwdOlOKWU0c7wGN/MADBaBPxo6GIvwdzBio96kyc1TVB7SATqRsRTDYn4/IttwZLxFERNNi3bu2EYC7gZYIImMIli4VqtJwlEAOMTnL9x+ETlgAQFQi+4chciPWaZQP3avo/UAg5dvPjHvEQKLEo+DN6OhYdA0CCCMfGk5wzCwGCwsSGhuvoqwsen810whHvBemFKA96MwI8soYUNCacVWBxswsQXWAigk9hjWcsGevZ5Luq6Rrhry3pZeAmnEANKm5+pHWXDDJTVshbKF1gNMwXdqigrqjEkkKnV7Hdq2c4vctWatJ3dQAcOw2yVRTn2QR7PRoKktW2hoxIZ1EvJ6ETmIFeQeWDiB2+G6fh/ko1O5YksX5Pu0W33SDBVxZUiKz3Bthq31kEqeWTxB/RCgWbUIHXGs07qAjZpZLVcMYgoUHAdIzOyG23dNghHh83MuaD2WyZVTQADKn5+fx01t2jw9QrwpYT8h2ymRj8TMO85uFyBf1ZvzNLppRH4+AsXz3yyQFANTVbUABvKZ7bRpsdNCLrOkOzM5gUebdK7ADn32xlvms603B3CpOnY0RAxA0AFgQPtft5suv+4CkAHcqtmF2vCLnfdBAPUOzc5UaWioQr9205vpkqt2UZRAaaShXDwzZRhENL8AInJ9gBB04I0X0q/ccDWVQMGmySpDABQ2LHZpoVanyckRumjnPhqH0uG/uWF74vGnv/gOWiuw+++4duL5he6/HlvsX9pswTJwHT8JEeAxjYLR6rUm7du/j970G3uktfo95LcwljHVa4c0e3IBTEm0MFeja97yehoa1zlgAazIa+x6jXobf29SCe7oez5tndxJbzhwCWKM6T+TaaXlNwmhCUmlw401ciyD3KgFK1YvrfuNb7z44j3XrwlYt5/tjjxVcyFsBRl08gVmQh/BjuCPNeSjDnJTQFunp2nLjmEZ9AHEawyiCLyEhkoj0IMhrNmEJlRo775tMhFniC8mD7Zst+Vi4p65CqJIqdPv0tT4LkkeTBwe0kqtU0WuY+vxrpAUB52wDtAZeWFI/ch965qA6UqOjcrJ9fo0PDIMl8kghepwwwhWwxeAKKvzs2SqFdp23rjMRwyE5RCMIhnQhyb0AbbeqNPmiSkIXV3GDKeBADqy0/SkuhC8Yvzvel0wpEbjw5ukavGCHs3XZ/GZvFAiYEN8nDwwq1Q/KX9XVl4TMCNTOuMGZFPEUiekHTunqDbTg/B1ZfDniYKF9ZBIe1R2hmliugICgIuBPEplW1qF81IM16xDJyqZTZvGK7hXJt/z+7HMaYYBF1V54YTrA+r7fdoEZcGpxO33EF9NWBSCFgTGTMjW1VW7YFeu/1TNXxOw1kj3+c1OQg6Udq/focpICdTsULuG+0Bdo38DECktLM7JLxqbLEuX8cGA5dKQtBa7FxNKDyVIv+fT1LYJ6arMgF6XhbKG5G5Ia7PFWIK5XgdaEm6MmJtH/OWs5CF+Dc2SGpGfM0DeXJXVvmbNrgnYLbc86ZYsOjplwWrIXx52sgxwmgmngBDleiKDuu92UFsBhGMB+JApywzbskDtviw22fVCAGk2a6jdRqWFIp+tlklqRzYYACu0YoC4UrHwXtun2lyXdFODu/IG2AAmaR5WE3LZFsCqaXR4TcB4IJ3ctXM4ohLcwPddfAF2CWJUFwCWsjsShW4KfYccY5RpeMIiw9RkPMRg0FwSBTI8grLVQtpJTRrZ5MhKQEEtZKCAxKbLOINX4ZapdEFm3k4tJN0ScDW1qMd0LltU6bIZvphLHls326S5P1ozME3Nvj5epuCCkRTKw4CKQC6Dezk611KJTNhpkEExdKQbOY4NlzWlhmQXZGAc+Cy3XKh7F8w5tZ3dMSXTxoJBBmwxUahgeAaXQyAgJHJWOUNjtgRmaKjQQfca6xAIhTDu47VJJVX/7q5dvxesGdgN7zv8hG0qD1w4kdGWsirdwEWMGCLipg0+iFiD5QII3Ha7TaaFhRgKclkIQKmkdlbt3OdgdVFvLtKmiTEJxLQYUSattSSC5Wfkpvg0Nm0jUWuII7gc4tBSSAoDnv0ICt9yMseI76SzjFcEhu/Ph0zjL8aHtODKHQpNVnT5RQvQdLaWSWDcmeJ46bZ7WOSg/MCuc7Dx34jBccUNEc3NGrZSZdSQbqUoLGhFcV3OZUkqyYIybIySyIrZRE6rICk7CnsIqou0DVf1abOl/vjii/N76VyA8bjufT98zjTEx8sgjZ1jGmohk44vemwr9B6KBQm4W+yxCA7AkIokFw0czX09EKUs55lJY8ioyPeoBHfF7WAJgetRP/A1eXG9gs+x/ApBPjbuNeJYNGyx6IWHwFO6sNaUY4Wmkb9fiD8Nz7b2s/Y85h96z/5us731ueNHwmHDMvdPashdiCdVA0vqskjkhbEMMss6TZ1vgC0T9CmEVBqcAgRMqWHnnYpFIyCf1+2YRjcooRHEkFU2JOHoOmIJvQ+umFWQx4EtO9Ges2liYhjA0BqAorcFNGSm0q7RPSe2jx3YSnTwbEuXRPOKo/pfv/NYc6H9+sVFVNFxCVYCiSBm4F/YwRSgOJ/AQkiyUkVIPThouLD1EPwqNkEFs+nct8BUVFNOAUJQNH7NtK/J2oxDjtmf3Vo+580Bw/DnNXxWtyukO+OklTadMONTB8T265trtljjkT8Zchebu0Mwn+uraGqWKEWMkFbEQ8YTqoSVSYSaaWkxTA4MknsZXH6kaoJ8g0cQg4qaisFybmIwygCcCgnGU2PFS5oUWXLmLExw04yrCritZFomrXibn+oX4ZKH1wxMjcG5krFy2UZLuOSAhbjskEHOwc6lDBYsAIx3XFUKUKpcPHeZYFE0QZn1UpkHMRUu/XkyYGwIPp8hrjIk5wz9Q81COw95kS2ag0ByZjFu+MAVi4n3s1jRs95Z2/OvCGx4i+b1usLFGkeYEDLkEMCRUilLOU9xCw5CFJOBFa7DroSYYtaET8nCEq+5/FfVTJYtGd5X8VqRTJgXxDFgRuJv4EfpzhUS6GPCpHADuCraBcSVM79OPD9LvbMWm69M93v+McSuv6jprM/whVATGTpTKatrMGDo+2CvQDZnIhBGJBMs2I8bONwjiYvHFBvBTR0WxsXz4jEbzFzmvGKz+P4ZSocs6lMKC+a8geyTLKcYHAthdtKk0zAqyXE6F4vxUBX1u2C8a0wTtO6jASqVRFz0DGNOxJG0HDd52FrSZeRKlnZH9kSXn0uTM7WkQr4U+CPHJKuYXHAeS2Q85VxtJ/x9Ft4zi2sVZXAtXD/1nhFbbjn30xZVVx/lBothsjpDPCGA88HOsmjlHZeug/ji4FZk10lI1+OJsIIrsrsVbPmSSQU5FI/Faxo8L9yxiGO2kCh2QQLMUw/veD+lFcZZgZ04qn1ztBT9RPXdAyZKf2hhyoJMulmUpAOXyuRCpJLg+FGETNTcd9fQ6dU1VT6ymC3e0wav0bDBzPGaJ7EoxiPPTEd1oHUp9RoQzAb0M1IEJFvqoDwytRkqJZ+j9QC77Nbb45n73j1ioZWtoPJV0CUyYzyHO5rshim7TiTlFbegJTAJShSP3JqWuez089O5bfA3ACleQ7JxfaZbYEV0o5CYdbOMUskhw8JEq1tDeaTlna22Wu3QeoDxgCW+oxvifEODXksDeRgR44xKtrAZGJcRkuo5xSHWMj7jYuYDZiqOTPlLMrjSkszKxcDbRF54nDjtfdwdTlPkuLToKzIjAq08IUEMwOvdp8TeW1cEtuLhOnb2MEselkkqurIMhPOYnAPKljQu42oplkgG0PIj5csBlQ/mcoDJUTx5qQxaurBI+hxnhcIPn6RVjBUthor2McNQc9MSQle4cUpy52TvgxM1ZRIQB3mGP2ZCkUmdSWMJrLJMGMuoll/nL98AechUxK3gCkLabSC4MwS5En6fVjFW/jmEKY7qpj5rcvvZ4HIllmp9CVyasjLJ5JSA8tPzNAsu41l+Lm3xMostUyWDywfgxAAgrKXkbqiI5Ee0irEisIlr7uhpuviWYXJfXchkzV8k3ZDB5AWgEw00YzgjZPmgyBw85sXzPH+pleiM5z4K2Kdn3DNckcEVNZ/ClM+SLUfPj6KnjL76DK1irOoHLLmifd1EV8lG5Wvpuay3RF5IJNaOXZx/PXjEpYde4D5+umy5/wcqPxNUYRxOGV/91lN0x3dm0PlVacmshQtKESeLT5F5CIvkO+KyW1c8pl01sEY7+LZh6V0LvQqHrca9QFEskiUSN0HHFRy+9xdl7zAduCg/P4nj3CAuyIU34cisK4vUPBsAACuMllSaUJropyQSGN+7SMyF6yt5COYNc1PPvkirHKv6Zc7+m74Wzf7nb37JsrX3O+joWm2c8BMVZT3lMvFefeEmKtm6zGGFOwIwct4jT8zQfOTQxegYz6EBOoS2257pMi0zIfzv16+9CPUaN20KZhQDcIqMr1haD88fF3v+7Ge0yrEqYDx0U7nLdPQ/dhxNODY6wUxQcbEInc+SBwFymjy4gyvoza+dovkmjpvQr7h43wjt3jYqq246DW2QrJUBqKWaLi8mH8AzSIW+TmsYqwY2UUp+HHrG/9iO9pYSulbo6pGnDHIPAxEk6zYxaLtlfG4MBOWSQXvRFjA4F5p60UekM3LZMjUOcpUoClYuXKUrcqWuUttyyv9Eaxir/vWbuOprvmqqd3MHtwx3lLE2WIjMSxkVlJ8WhWm6FEdEgwK0UOdUXP7Sey/fp7AWqxj+jDqwmqrl94ndK6uNcwLGQy97d5qO2eY4q6B5g86Y1Ig0OKl8eU5Llyl/gOZlNL8MjJbKmIHFeCNklxjxq+Ux2Pc2WuNYE7CJa+7tWZZ2Gx8JVdBnLHFHVykWJYHw7zqSwUwLoMtJO3tp4iZ6aaZeiq+lSryoFnLudD1QuuTDP6E1jjX/EFMx1NvtijVTGTJoeEjlHr8MbnlaCTBczsgqmtMAHguAA1UiH5fmaQklR0EQhaXkYQWspVMo9OwgncNYM7DJt351wbHMv6wMmzQ6auL0EmpeFO1sBhLy7zqQ1/h3GhHXbYMWwTLIJJMApWoZ1HJSOnFhSvz7KZJ5UpMAxb+U9n/kMJ3DWDUrnjk233DXl8N733nVeJzcygflvs9HQAmkEYDwD8NwMHjaHQcWO0N1kGQ+Id0uA3PmTPXcQebDB1Y2mCjNDpfz9MN0juOcgHH59EySf3R4rBRBzL9HN4XjHM/p+KxPi90Ex6wkf+MRRDoFJg4QY33Q5NEpMVMqwVoK127EKQGLwKkDYpdsO8ckbkX8R5yL94rLDnp0jkPQOkf1vndc7/vB33kdb399oUenZjGrPrX6fPLPhWPRwnZMThGaVCcVnmhvDw3bNDzqyB+72CWcsDjWEd00Pzd67aHP0DrHuoHxWPzB2yt+I30XzpX/wOsHl/Zart1qBtTpwWohi+WiNWCZBpUko9pUQtIuDwFQ2cotx3lWM/WvbCpXbheX/X2dXoXxqgBbGo899np9enH7tNv2tqJtMBwnuZPGsZHy76AzXeiGkgm0g01bj9DeDnTD7NiOUxs3qCpQHtHG2BgbY2NsjI2xMeT4P8SMQfS9Uco3AAAAAElFTkSuQmCC",alt:"Flower"}),(0,M.jsxs)("p",{className:G,children:["If you need help with ",(0,M.jsx)("br",{}),(0,M.jsx)("a",{href:"http/#",className:K,children:"TaskPro\xa0"}),", check out our support resources or reach out to our customer support team."]}),(0,M.jsxs)("button",{className:$,onClick:()=>{m(!0),s(!1)},children:[(0,M.jsx)("svg",{className:z,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-help-circle")})}),"Need help?"]})]}),(0,M.jsxs)("button",{className:ee,onClick:()=>{o((0,y.ni)()),c("/welcome")},children:[(0,M.jsx)("svg",{className:ae,children:(0,M.jsx)("use",{href:"".concat(w.Z,"#icon-login")})}),"Log out"]})]})]}),i&&(0,M.jsx)(Fe,{onClose:()=>{l(!1)},type:"create"}),d&&(0,M.jsx)(Ve,{onClose:()=>m(!1)})]})},Ye="HomePage_homePage__GDK2b",Je="HomePage_homePageContent__K9Z+9",Xe="Info_noProjectContainer__6o3cD",Ge="Info_noProjectNotify__KsRdi",Ke="Info_button__CPBxV",ze=()=>{const[e,a]=(0,r.useState)(!1);return(0,M.jsxs)("div",{className:Xe,children:[(0,M.jsxs)("p",{className:Ge,children:["Before starting your project, it is essential"," ",(0,M.jsx)("button",{className:Ke,onClick:()=>{a(!0)},children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),e&&(0,M.jsx)(Fe,{onClose:()=>a(!1),type:"create"})]})},$e=()=>{const{boardId:e}=(0,ne.UO)(),a=(0,t.I0)(),[s,o]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{a((0,ce.Po)())}),[a]),(0,M.jsxs)("div",{className:Ye,children:[(0,M.jsx)(Pe,{visible:s,onVisible:o}),(0,M.jsxs)("div",{className:Je,children:[(0,M.jsx)(L,{onVisible:o}),e?(0,M.jsx)(ne.j3,{}):(0,M.jsx)(ze,{})]})]})}},3240:(e,a)=>{a.E=function(e,a){return n(e).some((function(e){var s=e.inverse,r="all"===e.type||a.type===e.type;if(r&&s||!r&&!s)return!1;var t=e.expressions.every((function(e){var s=e.feature,r=e.modifier,t=e.value,o=a[s];if(!o)return!1;switch(s){case"orientation":case"scan":return o.toLowerCase()===t.toLowerCase();case"width":case"height":case"device-width":case"device-height":t=d(t),o=d(o);break;case"resolution":t=l(t),o=l(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":t=i(t),o=i(o);break;case"grid":case"color":case"color-index":case"monochrome":t=parseInt(t,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=t;case"max":return o<=t;default:return o===t}}));return t&&!s||!t&&s}))};var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,t=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,c=/(dpi|dpcm|dppx)?$/;function n(e){return e.split(",").map((function(e){var a=(e=e.trim()).match(s),o=a[1],c=a[2],n=a[3]||"",i={};return i.inverse=!!o&&"not"===o.toLowerCase(),i.type=c?c.toLowerCase():"all",n=n.match(/\([^\)]+\)/g)||[],i.expressions=n.map((function(e){var a=e.match(r),s=a[1].toLowerCase().match(t);return{modifier:s[1],feature:s[2],value:a[2]}})),i}))}function i(e){var a,s=Number(e);return s||(s=(a=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/a[2]),s}function l(e){var a=parseFloat(e);switch(String(e).match(c)[1]){case"dpcm":return a/2.54;case"dppx":return 96*a;default:return a}}function d(e){var a=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*a;case"cm":return 96*a/2.54;case"mm":return 96*a/2.54/10;case"in":return 96*a;case"pt":return 72*a;case"pc":return 72*a/12;default:return a}}},5425:(e,a,s)=>{var r=s(3240).E,t="undefined"!==typeof window?window.matchMedia:null;function o(e,a,s){var o,c=this;function n(e){c.matches=e.matches,c.media=e.media}t&&!s&&(o=t.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(n)):(this.matches=r(e,a),this.media=e),this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(n)}}e.exports=function(e,a,s){return new o(e,a,s)}}}]);
//# sourceMappingURL=955.89ba3662.chunk.js.map