"use strict";(self.webpackChunktool_web_react=self.webpackChunktool_web_react||[]).push([[205],{6205:(n,o,e)=>{function t(n){console.log("dynamic loaded and executed");const o=[],e=[];for(let t=0;t<n.length;t++){const s=n[t];if("../"===s){if(e.length>0){const n=e.pop();o.push({action:"POP",params:[],j:t,description:`pop '${n}'`})}}else"./"===s?o.push({action:"c",params:[s],j:t,description:`ignore '${s}'`}):(e.push(s),o.push({action:"PUSH",params:[s],j:t,description:`push '${s}'`}))}return o}e.r(o),e.d(o,{code:()=>s,default:()=>t,getAlgorithms:()=>r});const s='function minOperations(logs) {\r\n//["d1/","d2/","./","d3/","../","d31/"]\r\n//["d1/","d2/","../","d21/","./"]\r\n    const result = [];\r\n    const stack = [];\r\n    for (const log of logs) {\r\n        if (log === "../") {\r\n            if (stack.length > 0) {\r\n                const p = stack.pop();\r\n            }\r\n        } else if (log === "./") {\r\n            //\r\n        } else if (log !== "./") {\r\n            stack.push(log);\r\n        }\r\n    }\r\n    return result;\r\n}';function r(){return[{id:"b1",name:"Case 1",data:["d1/","d2/","../","d21/","./"],fn:t,code:s},{id:"b2",name:"Case 2",data:["d1/","d2/","./","d3/","../","d31/"],fn:t,code:s}]}}}]);
//# sourceMappingURL=205.9306892b.chunk.js.map