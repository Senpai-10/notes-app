(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),o=n.n(s),r=(n(15),n(9)),i=n(3),l=(n(7),n(16),n(0));function d(e){var t=e.handleAddNote,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],o=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"note add-new-note",children:[Object(l.jsx)("textarea",{cols:10,rows:8,value:s,placeholder:"type to add a note",onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)}}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsxs)("small",{children:[200-s.length," Remaining"]}),Object(l.jsx)("button",{className:"save-button",onClick:function(e){s.trim().length>0&&(t(s),o(""))},children:"Save"})]})]})})}var j=n(5);function u(e){var t=e.id,n=e.text,c=e.date,a=e.handleDeleteNote;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("span",{children:n}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsx)("small",{children:c}),Object(l.jsx)(j.a,{onClick:function(){return a(t)},className:"delete-icon",size:"1.3em"})]})]})})}n(18);function h(e){var t=e.notes,n=e.handleAddNote,c=e.handleDeleteNote;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(l.jsx)(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:c},e.id)})),Object(l.jsx)(d,{handleAddNote:n})]})})}n(19);function b(e){var t=e.handleSearchNote;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(j.b,{className:"search-icon",size:"1.3em"}),Object(l.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search for a note"})]})})}n(20);function O(e){e.notes,e.handleAddNote,e.handleDeleteNote;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"Notes"})})})}n(21);var f=n(10);function x(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("notes-data"),t=JSON.parse(e);t&&a(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("notes-data",JSON.stringify(n))}),[n]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(O,{}),Object(l.jsx)(b,{handleSearchNote:j}),Object(l.jsx)(h,{notes:n.filter((function(e){return e.text.toLowerCase().includes(d)})),handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)},handleAddNote:function(e){var t=new Date,c={id:Object(f.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(r.a)(n),[c]);a(s)}})]})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),m()}],[[22,1,2]]]);
//# sourceMappingURL=main.f1a628cd.chunk.js.map