import{r as t,o as p,c,w as o,a as s,b as l}from"./index.ac072b68.js";const r=s("div",{class:"markdown-body"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#%E6%8E%A5%E5%8F%97%E8%87%AA%E8%BA%AB%E6%A8%A1%E5%9D%97%E7%9A%84%E6%9B%B4%E6%96%B0"},"\u63A5\u53D7\u81EA\u8EAB\u6A21\u5757\u7684\u66F4\u65B0")]),s("li",null,[s("a",{href:"#%E6%8E%A5%E5%8F%97%E7%9B%B4%E6%8E%A5%E4%BE%9D%E8%B5%96%E9%A1%B9%E7%9A%84%E6%9B%B4%E6%96%B0"},"\u63A5\u53D7\u76F4\u63A5\u4F9D\u8D56\u9879\u7684\u66F4\u65B0")]),s("li",null,[s("a",{href:"#%E6%B3%A8%E5%86%8C%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%9B%9E%E8%B0%83"},"\u6CE8\u518C\u6E05\u9664\u526F\u4F5C\u7528\u56DE\u8C03")]),s("li",null,[s("a",{href:"#%E6%A8%A1%E5%9D%97%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92"},"\u6A21\u5757\u6570\u636E\u4F20\u9012")])])])]),s("blockquote",null,[s("p",null,"HMR: Hot Module Replacement")]),s("blockquote",null,[s("p",null,"Vite Version: ^4.0.1")]),s("p",null,[l("Vite \u901A\u8FC7 "),s("code",null,"false"),l(" \u5BF9\u8C61\u6765\u66B4\u9732 HMR \u76F8\u5173\u7684 API\uFF0C\u4E14\u4F7F\u7528\u8BE5\u5BF9\u8C61\u65F6\uFF0C\u9700\u8981\u901A\u8FC7\u4E00\u4E2A\u6761\u4EF6\u5224\u65AD\u6765\u786E\u4FDD HMR API \u7684\u6B63\u786E\u4F7F\u7528\uFF0C\u8FD9\u6837\u4E5F\u53EF\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u88AB tree-shaking \u4F18\u5316")]),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l(`()
}
`)])]),s("h2",{id:"%E6%8E%A5%E5%8F%97%E8%87%AA%E8%BA%AB%E6%A8%A1%E5%9D%97%E7%9A%84%E6%9B%B4%E6%96%B0",tabindex:"-1"},"\u63A5\u53D7\u81EA\u8EAB\u6A21\u5757\u7684\u66F4\u65B0"),s("p",null,[l("\u901A\u8FC7 "),s("code",null,"false.accept"),l(" API\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u7ED9\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u6837\u5728\u5F53\u524D\u6A21\u5757\u53D1\u751F\u66F4\u65B0\u65F6\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u89E6\u53D1\uFF0C\u56DE\u8C03\u51FD\u6570\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u65B0\u7684\u6A21\u5757\uFF1A")]),s("p",null,[s("strong",null,"helper.ts")]),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"add"),l("("),s("span",{class:"hljs-params"},[l("a: "),s("span",{class:"hljs-built_in"},"number"),l(", b: "),s("span",{class:"hljs-built_in"},"number")]),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` a + b
}

`),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"newModule"),l(" =>")]),l(` {
    `),s("span",{class:"hljs-comment"},"// \u5728 helper.ts \u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u8FD0\u884C\u6B64\u56DE\u8C03\uFF0CnewModule \u5373\u4E3A\u5F53\u524D\u7684\u6700\u65B0\u6A21\u5757\u5BF9\u8C61"),l(`
    `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("(newModule."),s("span",{class:"hljs-title function_"},"add"),l("("),s("span",{class:"hljs-number"},"2"),l(", "),s("span",{class:"hljs-number"},"3"),l(`))
  })
}
`)])]),s("p",null,[l("\u5728 Vite \u4E2D\uFF0C\u63A5\u53D7 HMR \u7684\u6A21\u5757\u88AB\u79F0\u4E3A HMR \u8FB9\u754C\uFF0C\u4ECE\u8FB9\u754C\u6A21\u5757\u5411\u4E0A\u7684\u5BFC\u5165\u8005\u5C06\u4E0D\u4F1A\u6536\u5230\u66F4\u65B0\u3002\u4F8B\u5728\u4E0A\u9762\u7684 "),s("code",null,"helper.ts"),l(" \u4E2D\uFF0C\u5728\u6A21\u5757\u5185\u90E8\u5DF2\u5904\u7406\u4E86\u5F53\u524D\u6A21\u5757\u7684 HMR\uFF0C\u6B64\u6A21\u5757\u5C31\u662F HMR \u8FB9\u754C\uFF0C\u5982\u6709\u4F9D\u8D56 "),s("code",null,"helper.ts"),l(" \u7684\u6A21\u5757 "),s("code",null,"main.ts"),l(" \u4E5F\u5904\u7406\u4E86\u5BF9 "),s("code",null,"helper.ts"),l(" \u7684\u66F4\u65B0\uFF08\u901A\u8FC7\u4E0B\u65B9\u4F1A\u4ECB\u7ECD\u7684\u65B9\u6CD5\uFF09\uFF0C\u5219\u5F53 "),s("code",null,"helper.ts"),l(" \u6A21\u5757\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u53EA\u4F1A\u89E6\u53D1 "),s("code",null,"helper.ts"),l(" \u4E2D\u7684\u6302\u8F7D\u7684\u56DE\u8C03\uFF0C\u800C\u5728 "),s("code",null,"main.ts"),l(" \u4E2D\u6302\u8F7D\u7684\u56DE\u8C03\u5219"),s("strong",null,"\u4E0D\u4F1A"),l("\u89E6\u53D1\u3002")]),s("p",null,[s("code",null,"false.accept"),l(" \u4E5F\u53EF\u4E0D\u6307\u5B9A\u53C2\u6570\uFF0C\u5728\u6A21\u5757\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u6A21\u5757\u5185\u5BB9\uFF0C\u4E14\u6307\u5B9A\u4E86\u5F53\u524D\u6A21\u5757\u662F HMR \u8FB9\u754C\u6A21\u5757\u3002")]),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-string"},"'hello'"),l(`)

`),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l(`()
}
`)])]),s("h2",{id:"%E6%8E%A5%E5%8F%97%E7%9B%B4%E6%8E%A5%E4%BE%9D%E8%B5%96%E9%A1%B9%E7%9A%84%E6%9B%B4%E6%96%B0",tabindex:"-1"},"\u63A5\u53D7\u76F4\u63A5\u4F9D\u8D56\u9879\u7684\u66F4\u65B0"),s("p",null,[l("\u901A\u8FC7 "),s("code",null,"false.accept"),l(" API\uFF0C\u8FD8\u53EF\u4EE5\u63A5\u53D7\u76F4\u63A5\u4F9D\u8D56\u9879\u7684\u66F4\u65B0")]),s("p",null,[s("strong",null,"module.ts")]),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"import"),l(" { add } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'./helper'"),l(`

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"main"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-variable language_"},"console"),l("."),s("span",{class:"hljs-title function_"},"log"),l("("),s("span",{class:"hljs-title function_"},"add"),l("("),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(`))
}

`),s("span",{class:"hljs-title function_"},"main"),l(`()

`),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l("("),s("span",{class:"hljs-string"},"'./helper'"),l(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"newHelper"),l(" =>")]),l(` {
    `),s("span",{class:"hljs-comment"},"// \u82E5 helper.ts \u6A21\u5757\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u6B64\u56DE\u8C03\u4F1A\u8FD0\u884C\uFF0C\u4E14\u6709\u4E00\u4E2A\u524D\u63D0\u662F\uFF1A"),l(`
    `),s("span",{class:"hljs-comment"},"// \u5728 helper.ts \u6A21\u5757\u5185\u90E8\u6CA1\u6709\u5904\u7406\u5BF9\u81EA\u8EAB\u7684 HMR\uFF0C\u5373 helper.ts \u4E0D\u662F\u8FB9\u754C\u6A21\u5757"),l(`
    `),s("span",{class:"hljs-keyword"},"debugger"),l(`
  })
}
`)])]),s("p",null,[s("code",null,"false.accept"),l(" \u7B2C\u4E00\u4E2A\u53C2\u6570\u4F9D\u8D56\u9879\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5373\u63A5\u53D7\u591A\u4E2A\u6A21\u5757\u7684\u66F4\u65B0\uFF1A")]),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"import"),l(" { add } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'./helper'"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { request } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'./request'"),l(`

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"main"),l("("),s("span",{class:"hljs-params"}),l(`) {
  `),s("span",{class:"hljs-title function_"},"request"),l(`()
  `),s("span",{class:"hljs-title function_"},"add"),l("("),s("span",{class:"hljs-number"},"1"),l(", "),s("span",{class:"hljs-number"},"2"),l(`)
}

`),s("span",{class:"hljs-title function_"},"main"),l(`()

`),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l("(["),s("span",{class:"hljs-string"},"'./helper'"),l(", "),s("span",{class:"hljs-string"},"'./request'"),l("], "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"[newHelper, newRequest]"),l(") =>")]),l(` {
    `),s("span",{class:"hljs-comment"},"// \u5F53 helper.ts \u6A21\u5757\u53D1\u751F\u53D8\u5316\u65F6\uFF0CnewHelper \u5373\u4E3A\u65B0\u7684\u6A21\u5757\u5185\u5BB9\uFF0CnewRequest \u4E3A undefined"),l(`
    `),s("span",{class:"hljs-comment"},"// \u5F53 request.ts \u6A21\u5757\u53D1\u751F\u53D8\u5316\u65F6\uFF0CnewHelper \u4E3A undefined\uFF0CnewRequest \u5373\u4E3A\u65B0\u7684\u6A21\u5757\u5185\u5BB9"),l(`
    `),s("span",{class:"hljs-keyword"},"debugger"),l(`
  })
}
`)])]),s("h2",{id:"%E6%B3%A8%E5%86%8C%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8%E5%9B%9E%E8%B0%83",tabindex:"-1"},"\u6CE8\u518C\u6E05\u9664\u526F\u4F5C\u7528\u56DE\u8C03"),s("p",null,"\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A\u56DE\u8C03\uFF0C\u5728\u81EA\u8EAB\u6A21\u5757\u88AB\u66F4\u65B0\u524D\u8C03\u7528\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u505A\u4E00\u4E9B\u6E05\u9664\u64CD\u4F5C"),s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"add"),l("("),s("span",{class:"hljs-params"},[l("a: "),s("span",{class:"hljs-built_in"},"number"),l(", b: "),s("span",{class:"hljs-built_in"},"number")]),l(`) {
  `),s("span",{class:"hljs-keyword"},"return"),l(` a + b
}

`),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l(`) {
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"accept"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"mod"),l(" =>")]),l(` {
    `),s("span",{class:"hljs-comment"},"// 2"),l(`
    `),s("span",{class:"hljs-keyword"},"debugger"),l(`
  })
  `),s("span",{class:"hljs-keyword"},"import"),l("."),s("span",{class:"hljs-property"},"meta"),l("."),s("span",{class:"hljs-property"},"hot"),l("."),s("span",{class:"hljs-title function_"},"dispose"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"data"),l(" =>")]),l(` {
    `),s("span",{class:"hljs-comment"},"// 1"),l(`
    `),s("span",{class:"hljs-comment"},"// data \u5373 `false.data`"),l(`
    `),s("span",{class:"hljs-keyword"},"debugger"),l(`
  })
}
`)])]),s("h2",{id:"%E6%A8%A1%E5%9D%97%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92",tabindex:"-1"},"\u6A21\u5757\u6570\u636E\u4F20\u9012"),s("p",null,[s("code",null,"false.data"),l(" \u5BF9\u8C61\u5728\u540C\u4E00\u4E2A\u66F4\u65B0\u6A21\u5757\u7684\u4E0D\u540C\u5B9E\u4F8B\u4E4B\u95F4\u6301\u4E45\u5316\u3002\u5B83\u53EF\u4EE5\u7528\u4E8E\u5C06\u4FE1\u606F\u4ECE\u6A21\u5757\u7684\u524D\u4E00\u4E2A\u7248\u672C\u4F20\u9012\u5230\u4E0B\u4E00\u4E2A\u7248\u672C\u3002")])],-1),d="Post",m="Vite HMR",E="2022/9/1",y={__name:"vite-hmr",setup(h,{expose:n}){const a={container:"Post",title:"Vite HMR",date:"2022/9/1"};return n({frontmatter:a}),(i,j)=>{const e=t("Container");return p(),c(e,{frontmatter:a},{default:o(()=>[r]),_:1})}}};export{d as container,E as date,y as default,m as title};
