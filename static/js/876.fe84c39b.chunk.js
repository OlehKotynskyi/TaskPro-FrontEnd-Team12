"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[876],{7609:(e,a,s)=>{s.d(a,{Z:()=>r});s(2791);const r=s.p+"static/media/sprite.105837db23416f4c4d293ec65c87553d.svg"},876:(e,a,s)=>{s.r(a),s.d(a,{default:()=>X});var r=s(1087),i=s(7689),t=s(2791),l=s(1134),o=s(4695),n=s(8007);const c="LoginForm_form__gPEx5",m="LoginForm_formWrap__rwknX",d="LoginForm_formWrapImput__9GZUV",_="LoginForm_formImput__rOtvQ",u="LoginForm_error__012y+",h="LoginForm_formBtn__HRL1P",p="LoginForm_errors__26OED",g="LoginForm_icon__TSGuZ";var x=s(7609),j=s(8938),w=s(4420),v=s(2376),N=s(270),y=s(184);const f=()=>(0,y.jsx)("div",{className:N.Z.containerBtn,children:(0,y.jsx)(v.g4,{visible:!0,height:"20",width:"20",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),F=n.Ry().shape({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(8,"Password must be at least 8 characters").required("Password is required")}),b=()=>{const[e,a]=(0,t.useState)(!1),s=(0,i.s0)(),r=(0,w.I0)(),[n,v]=(0,t.useState)(!1),{register:N,handleSubmit:b,setError:R,clearErrors:I,formState:{errors:L}}=(0,l.cI)({resolver:(0,o.X)(F)});return(0,y.jsxs)("form",{className:c,onSubmit:b((async e=>{try{v(!0),await r((0,j.Ib)(e)).unwrap(),s("/home")}catch(a){console.error("Failed to log in:",a),R("server",{type:"manual",message:"Failed to log in. Please try again."})}finally{v(!1)}})),noValidate:!0,children:[(0,y.jsxs)("div",{className:m,children:[(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("input",{className:"".concat(_," ").concat(L.email?u:""),type:"email",name:"email",placeholder:"Enter your email",...N("email",{onBlur:e=>{const a=e.target.value;if(!a)return void I("email");F.fields.email.isValidSync(a)?I("email"):R("email",{type:"manual",message:"Invalid email"})}})}),L.email&&(0,y.jsx)("p",{className:p,children:L.email.message})]}),(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("input",{className:"".concat(_," ").concat(L.password?u:""),type:e?"text":"password",...N("password"),placeholder:"Create a password"}),(0,y.jsx)("svg",{className:g,width:"20",height:"20",onClick:()=>{a((e=>!e))},children:(0,y.jsx)("use",{xlinkHref:"".concat(x.Z,"#").concat(e?"icon-eye":"icon-eye-off")})}),L.password&&(0,y.jsx)("p",{className:p,children:L.password.message})]})]}),(0,y.jsx)("button",{className:h,type:"submit",disabled:n,children:n?(0,y.jsx)(f,{}):"Log In Now"})]})},R="RegisterForm_form__Tv43W",I="RegisterForm_formWrap__-xhtQ",L="RegisterForm_formWrapImput__nRAoZ",Z="RegisterForm_formImput__VXz-r",S="RegisterForm_error__yDHjz",k="RegisterForm_formBtn__uyMmA",P="RegisterForm_errors__HjC8F",A="RegisterForm_icon__Xn6st",E=n.Ry().shape({name:n.Z_().min(2,"Name must be at least 2 characters").required("Name is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(8,"Password must be at least 8 characters").required("Password is required")}),q=()=>{const[e,a]=(0,t.useState)(!1),s=(0,i.s0)(),r=(0,w.I0)(),[n,c]=(0,t.useState)(!1),{register:m,handleSubmit:d,setError:_,clearErrors:u,formState:{errors:h}}=(0,l.cI)({resolver:(0,o.X)(E)});return(0,y.jsxs)("form",{className:R,onSubmit:d((async e=>{try{c(!0),await r((0,j.z2)(e)).unwrap(),s("/home")}catch(a){console.error("Failed to register:",a)}finally{c(!1)}})),noValidate:!0,children:[(0,y.jsxs)("div",{className:I,children:[(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("input",{className:"".concat(Z," ").concat(h.name?S:""),placeholder:"Enter your name",type:"text",name:"name",...m("name")}),h.name&&(0,y.jsx)("p",{className:P,children:h.name.message})]}),(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("input",{className:"".concat(Z," ").concat(h.email?S:""),type:"email",name:"email",placeholder:"Enter your email",...m("email",{onBlur:e=>{const a=e.target.value;if(!a)return void u("email");E.fields.email.isValidSync(a)?u("email"):_("email",{type:"manual",message:"Invalid email"})}})}),h.email&&(0,y.jsx)("p",{className:P,children:h.email.message})]}),(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("input",{className:"".concat(Z," ").concat(h.password?S:""),type:e?"text":"password",...m("password"),placeholder:"Create a password"}),(0,y.jsx)("svg",{className:A,width:"20",height:"20",onClick:()=>{a((e=>!e))},children:(0,y.jsx)("use",{xlinkHref:"".concat(x.Z,"#").concat(e?"icon-eye":"icon-eye-off")})}),h.password&&(0,y.jsx)("p",{className:P,children:h.password.message})]})]}),(0,y.jsx)("button",{className:k,type:"submit",disabled:n,children:n?(0,y.jsx)(f,{}):"Register Now"})]})};var C=s(3733);const W="AuthPage_section__RGWYc",H="AuthPage_wrapper__j9zCo",V="AuthPage_nav__RtCht",z="AuthPage_link__HQ0pz",B="AuthPage_activeLink__9sdnw",X=()=>(0,y.jsx)("section",{className:W,children:(0,y.jsxs)("div",{className:H,children:[(0,y.jsxs)("nav",{className:V,children:[(0,y.jsx)(r.OL,{className:e=>{let{isActive:a}=e;return(0,C.Z)(z,{[B]:a})},to:"/auth/register",children:"Register"}),(0,y.jsx)(r.OL,{className:e=>{let{isActive:a}=e;return(0,C.Z)(z,{[B]:a})},to:"/auth/login",children:"Log In"})]}),(0,y.jsxs)(i.Z5,{children:[(0,y.jsx)(i.AW,{path:"login",element:(0,y.jsx)(b,{})}),(0,y.jsx)(i.AW,{path:"register",element:(0,y.jsx)(q,{})})]})]})})}}]);
//# sourceMappingURL=876.fe84c39b.chunk.js.map