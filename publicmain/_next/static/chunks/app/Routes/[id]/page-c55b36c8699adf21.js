(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337,679],{3686:()=>{},2383:()=>{},1705:(e,t,n)=>{Promise.resolve().then(n.bind(n,2910))},2910:(e,t,n)=>{"use strict";n.d(t,{default:()=>w});var s=n(5155),r=n(2115),a=n(7306),l=n(6605),c=n(3800),o=n(588),i=n(9253),d=n(633),h=n(2027),u=n(7660);let p=e=>{let{data:t,name:n}=e;return(0,s.jsxs)(h.T,{color:"success",onClick:()=>{let e=u.Wp.book_new(),s=u.Wp.json_to_sheet(t);u.Wp.book_append_sheet(e,s,n),setTimeout(()=>{u._h(e,"alumnos-".concat(n,".xlsx"))},1e3)},children:["Descargar Excel de ",n]})},x=e=>{let[t,n]=r.useState([]),[s,a]=r.useState(""),l=new AbortController,c=l.signal;return r.useEffect(()=>{(async()=>{(await fetch("https://user-api-steel.vercel.app/hilos",{signal:c}).then(e=>e.json())).map(e=>e.Value)>=20?(l.abort(),l.abort(c.reason),a(c.aborted)):n(await fetch("https://user-api-steel.vercel.app/".concat(e),{signal:c}).then(e=>e.json()).catch(e=>e.json()))})()},[]),{data:t,count:s}},j=()=>{r.useEffect(()=>{let e=e=>{e.preventDefault(),e.returnValue=""};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[])},w=e=>{let{id:t}=e;try{let{data:e,count:n}=x(t);j();let r=new Date,h="".concat(r.getFullYear(),"-").concat(r.getMonth()+1>9?r.getMonth()+1:"0".concat(r.getMonth()+1),"-").concat(r.getDate()>9?r.getDate():"0".concat(r.getDate()));if(n)return(0,s.jsx)("h1",{style:{textAlign:"center"},children:"has excendido el limite de consultas"});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{style:{textAlign:"center"},children:["Alumnos de ",t," sin acceder a la fecha de ",h]}),(0,s.jsxs)(a.j,{isStriped:!0,color:"success",selectionMode:"single","aria-label":"Example static collection table",children:[(0,s.jsxs)(l.X,{children:[(0,s.jsx)(c.e,{children:"MATRICULA"}),(0,s.jsx)(c.e,{children:"ALUMNO"}),(0,s.jsx)(c.e,{children:"CURSOS"}),(0,s.jsx)(c.e,{children:"\xdaLTIMO ACCESO"})]}),(0,s.jsx)(o.E,{emptyContent:"No hay alumnos sin acceder por mas de 9 d\xedas",children:e.map(e=>e).length>0?e.map(e=>(0,s.jsxs)(i.s,{style:{cursor:"pointer"},children:[(0,s.jsx)(d.w,{children:e.MATRICULA}),(0,s.jsx)(d.w,{children:e.ALUMNO}),(0,s.jsx)(d.w,{children:e.CURSOS}),(0,s.jsx)(d.w,{children:e.ACCESO})]},e.MATRICULA)):[]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(p,{data:e,name:t})})]})}catch(e){return(0,s.jsxs)("p",{children:[" pagina no encontrada. Error ",e," "]})}}}},e=>{var t=t=>e(e.s=t);e.O(0,[524,335,638,441,517,358],()=>t(1705)),_N_E=e.O()}]);