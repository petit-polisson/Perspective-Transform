"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{5656:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"faq","title":"FAQ","description":"1. Why isn\'t edit mode toggling when I press Shift+P?","source":"@site/docs/07-faq.md","sourceDirName":".","slug":"/faq","permalink":"/react-perspective-transform/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/ZilbaM/react-perspective-transform/edit/main/docs/docs/07-faq.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"FAQ","slug":"/faq"},"sidebar":"docs","previous":{"title":"Usage Examples","permalink":"/react-perspective-transform/usage-examples"},"next":{"title":"README","permalink":"/react-perspective-transform/api/"}}');var t=s(4848),i=s(8453);const o={title:"FAQ",slug:"/faq"},c="Frequently Asked Questions",l={},a=[{value:"1. Why isn&#39;t edit mode toggling when I press Shift+P?",id:"1-why-isnt-edit-mode-toggling-when-i-press-shiftp",level:2},{value:"2. My content is cropped or not visible. Why?",id:"2-my-content-is-cropped-or-not-visible-why",level:2},{value:"3. Can I restrict corner movement or add snapping?",id:"3-can-i-restrict-corner-movement-or-add-snapping",level:2},{value:"4. How do I change the color and size of corner handles?",id:"4-how-do-i-change-the-color-and-size-of-corner-handles",level:2},{value:"5. Where can I see a live demo?",id:"5-where-can-i-see-a-live-demo",level:2},{value:"6. Can I transform multiple child elements simultaneously?",id:"6-can-i-transform-multiple-child-elements-simultaneously",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"})}),"\n",(0,t.jsx)(n.h2,{id:"1-why-isnt-edit-mode-toggling-when-i-press-shiftp",children:"1. Why isn't edit mode toggling when I press Shift+P?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure your window has focus, and check that no other event listeners are preventing the keydown event."}),"\n",(0,t.jsxs)(n.li,{children:["If you changed the toggle key with ",(0,t.jsx)(n.code,{children:"toggleKeys"}),", confirm you\u2019re pressing the right keys (e.g., Shift+R)."]}),"\n",(0,t.jsxs)(n.li,{children:["If you\u2019re using a parent\u2019s ",(0,t.jsx)(n.code,{children:"editable"})," prop, ensure ",(0,t.jsx)(n.code,{children:"onEditableChange"})," is implemented."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-my-content-is-cropped-or-not-visible-why",children:"2. My content is cropped or not visible. Why?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure the parent container has a fixed ",(0,t.jsx)(n.strong,{children:"width"})," and ",(0,t.jsx)(n.strong,{children:"height"}),". The perspective transform is calculated based on the container\u2019s bounding rect, so ",(0,t.jsx)(n.code,{children:"width: 100%"})," and ",(0,t.jsx)(n.code,{children:"height: 100%"})," inside a zero-height parent can be problematic."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-can-i-restrict-corner-movement-or-add-snapping",children:"3. Can I restrict corner movement or add snapping?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Not currently built-in. You can add logic in ",(0,t.jsx)(n.code,{children:"onPointsChange"})," to clamp or round corner positions before storing them."]}),"\n",(0,t.jsx)(n.li,{children:"Alternatively, fork the code to enhance the drag logic or add a \u201csnap to grid\u201d approach."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-how-do-i-change-the-color-and-size-of-corner-handles",children:"4. How do I change the color and size of corner handles?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Override the ",(0,t.jsx)(n.code,{children:".control-point"})," CSS class. You can give them backgrounds, borders, etc. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".control-point {\n  width: 16px;\n  height: 16px;\n  background-color: red;\n  border-radius: 50%;\n  cursor: grab;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"5-where-can-i-see-a-live-demo",children:"5. Where can I see a live demo?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a simple CRA or Next.js app with ",(0,t.jsx)(n.code,{children:"PerspectiveTransform"}),", or check any ",(0,t.jsx)(n.a,{href:"https://codesandbox.io/",children:"codesandbox.io"})," links in the README."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"6-can-i-transform-multiple-child-elements-simultaneously",children:"6. Can I transform multiple child elements simultaneously?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Yes, if you wrap multiple elements in the same ",(0,t.jsx)(n.code,{children:"<PerspectiveTransform>"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'<PerspectiveTransform>\n  <img src=\\"left.png\\" />\n  <img src=\\"right.png\\" />\n</PerspectiveTransform>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Both images are in the same transform plane. For separate transforms, use two separate ",(0,t.jsx)(n.code,{children:"<PerspectiveTransform>"})," components."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);