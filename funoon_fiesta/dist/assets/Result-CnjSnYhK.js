import{r as l,u as h,a as x,j as e,m as t,f as d}from"./index-DM-f00sk.js";const p=()=>{const[r,c]=l.useState(""),m=h(),{results:n}=x(),o=l.useMemo(()=>{const a=[...new Set(n.map(s=>s.programName))];return r?a.filter(s=>s.toUpperCase().includes(r.toUpperCase())).map((s,i)=>({_id:String(i+1),programName:s})):a.map((s,i)=>({_id:String(i+1),programName:s}))},[r,n]);return e.jsx("div",{className:"relative overflow-x-hidden",children:e.jsx("div",{className:"container mx-auto px-4 py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx(t.h1,{variants:d("left",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"font-bold text-center text-4xl mb-10 text-secondery",children:"Explore Programs Results"}),e.jsx(t.div,{variants:d("down",.3),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"mb-8",children:e.jsx("input",{type:"text",placeholder:"Search Programs...",className:"w-full bg-white text-black border-2 max-w-xl mx-auto block h-12 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 ease-in-out",value:r,onChange:a=>c(a.target.value)})}),o.length>0&&e.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:o.map((a,s)=>e.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:s*.1,ease:"easeOut"},whileHover:{scale:1.05},whileTap:{scale:.95},className:"cursor-pointer p-4 rounded-2xl border border-white dark:border-[#272727] shadow-md hover:shadow-lg transition-shadow",onClick:()=>m(`/poster/${a.programName}`),children:e.jsx(t.h3,{className:"text-lg font-semibold",layoutId:`program-${a._id}`,children:a.programName})},a._id))}),o.length===0&&e.jsx("div",{className:"text-center text-rose-500 font-semibold mt-10",children:"No programs match your search"})]})})})},g=()=>e.jsx("section",{children:e.jsx(p,{})});export{g as default};