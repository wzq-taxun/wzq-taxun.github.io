import{r as t,o as p,c as e,w as o,a as s,b as a}from"./index.ac072b68.js";const i=s("div",{class:"markdown-body"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#synchook"},"SyncHook")]),s("li",null,[s("a",{href:"#syncbailhook"},"SyncBailHook")]),s("li",null,[s("a",{href:"#syncwaterfallhook"},"SyncWaterfallHook")]),s("li",null,[s("a",{href:"#syncloophook"},"SyncLoopHook")]),s("li",null,[s("a",{href:"#asyncparallelhook"},"AsyncParallelHook")]),s("li",null,[s("a",{href:"#asyncparallelbailhook"},"AsyncParallelBailHook")]),s("li",null,[s("a",{href:"#asyncserieshook"},"AsyncSeriesHook")]),s("li",null,[s("a",{href:"#asyncseriesbailhook"},"AsyncSeriesBailHook")]),s("li",null,[s("a",{href:"#asyncseriesloophook"},"AsyncSeriesLoopHook")]),s("li",null,[s("a",{href:"#asyncserieswaterfallhook"},"AsyncSeriesWaterfallHook")])])])]),s("h2",{id:"synchook",tabindex:"-1"},"SyncHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u57FA\u7840\u7684\u94A9\u5B50\uFF0C\u7C7B\u4F3C\u6700\u57FA\u7840\u7684\u4E8B\u4EF6\u53D1\u5E03\u8BA2\u9605\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u4F7F\u7528\u7684\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"SyncHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-comment"},"// \u9700\u8981\u6307\u5B9A\u5F62\u53C2"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"SyncHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'age'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"call"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-number"},"15"),a(`)
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan 15
tap2 zhangsan 15
`)]),s("h2",{id:"syncbailhook",tabindex:"-1"},"SyncBailHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u4FDD\u9669\u94A9\u5B50\uFF0C\u5728\u6267\u884C\u6309\u987A\u5E8F\u6CE8\u518C\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\uFF0C\u5982\u9047\u5230\u6709\u8FD4\u56DE\u503C\uFF08\u8FD4\u56DE\u503C\u4E3A\u975E undefined\uFF09\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5219\u4F1A\u7EC8\u6B62\u540E\u7EED\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"SyncBailHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-comment"},"// \u9700\u8981\u6307\u5B9A\u5F62\u53C2"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"SyncBailHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'age'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name, age)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-literal"},"null"),a(`
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"call"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-number"},"15"),a(`)
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan 15
tap2 zhangsan 15
`)]),s("h2",{id:"syncwaterfallhook",tabindex:"-1"},"SyncWaterfallHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u94A9\u5B50\uFF0C\u82E5\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u82E5\u51FA\u73B0\u4E86\u8FD4\u56DE\u503C\uFF0C\u5219\u4F1A\u5C06\u8FD4\u56DE\u503C\u4F5C\u4E3A\u65B0\u7684\u53C2\u6570\u503C\u4F20\u9012\u7ED9\u540E\u7EED\u7684\u5904\u7406\u51FD\u6570\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u4F7F\u7528\u7684\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"SyncWaterfallHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-comment"},"// \u9700\u8981\u6307\u5B9A\u5F62\u53C2"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"SyncWaterfallHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'age'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(name, age)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},"'lishi'"),a(`
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"call"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-number"},"15"),a(`)
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`zhangsan 15
lishi 15
lishi 15
`)]),s("h2",{id:"syncloophook",tabindex:"-1"},"SyncLoopHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u5FAA\u73AF\u94A9\u5B50\uFF0C\u5728\u987A\u5E8F\u6267\u884C\u6CE8\u518C\u7684\u4E8B\u4EF6\u51FD\u6570\u4E2D\uFF0C\u5982\u9047\u5230\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\uFF08\u975Eundefined\uFF09\uFF0C\u5219\u4F1A\u91CD\u5934\u91CD\u65B0\u6267\u884C\u6240\u6709\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u76F4\u81F3\u6240\u6709\u7684\u5904\u7406\u51FD\u6570\u90FD\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u4F7F\u7528\u7684\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"SyncLoopHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"SyncLoopHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(", "),s("span",{class:"hljs-string"},"'age'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name, age)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("() < "),s("span",{class:"hljs-number"},"0.3"),a(" ? "),s("span",{class:"hljs-literal"},"undefined"),a(" : "),s("span",{class:"hljs-string"},"'hello world'"),a(`
})

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, age"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name, age)
})

hook.`),s("span",{class:"hljs-title function_"},"call"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-number"},"15"),a(`)
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan 15
tap2 zhangsan 15
tap1 zhangsan 15
tap2 zhangsan 15
tap1 zhangsan 15
tap2 zhangsan 15
tap3 zhangsan 15
`)]),s("p",null,"\u56E0 tap2 \u4E2D\u6709\u51E0\u6B21\u90FD\u5B58\u5728\u8FD4\u56DE\u503C\uFF0C\u56E0\u6B64 tap1\u3001tap2 \u6267\u884C\u4E86\u591A\u6B21\uFF0C\u76F4\u81F3 tap2 \u8FD4\u56DE undefined\uFF0C\u5373\u6240\u6709\u7684\u51FD\u6570\u90FD\u8FD4\u56DE\u4E86 undefined\uFF0C\u6267\u884C\u7ED3\u675F"),s("h2",{id:"asyncparallelhook",tabindex:"-1"},"AsyncParallelHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u5E76\u884C\u7684\u94A9\u5B50\uFF0C\u5B83\u4E0D\u5173\u5FC3\u8FD4\u56DE\u503C\uFF08\u4E22\u5F03\u8FD4\u56DE\u503C\uFF09\uFF0C\u5E76\u82E5\u6709\u9519\u8BEF\uFF0C\u4F1A\u5728\u7B2C\u4E00\u6B21\u53D1\u751F\u9519\u8BEF\u7684\u65F6\u5019\u8FDB\u5165\u9519\u8BEF\u6D41\u7A0B"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncParallelHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncParallelHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F1"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},"'tap1 result'"),a(`
})

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F2"),a(`
`),s("span",{class:"hljs-comment"},"// 1\u3001\u5728\u4F7F\u7528 callAsync \u89E6\u53D1\u65F6\uFF0C\u8FD9\u91CC\u7684 callback \u6307\u7684\u5C31\u662F callAsync \u7B2C\u4E8C\u4E2A\u53C2\u6570"),a(`
`),s("span",{class:"hljs-comment"},"// 2\u3001\u5728\u4F7F\u7528 promise \u89E6\u53D1\u65F6\uFF0Ccallback \u9075\u5B88 Node \u4E2D\u9519\u8BEF\u4F20\u9012\u673A\u5236\uFF0C\u82E5\u7B2C\u4E00\u4E2A\u53C2\u6570\u6709\u503C\uFF0C\u5219\u4F1A\u8D70 Promise.prototype.catch"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`);
})

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F3"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-string"},"'tap3 result'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callback err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callback args'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 lishi
tap2 lishi
tap3 lishi
callback err undefined
callback args []
then [ undefined ]
`)]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncParallelHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncParallelHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F1"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},"'tap1 result'"),a(`
})

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F2"),a(`
`),s("span",{class:"hljs-comment"},"// 1\u3001\u5728\u4F7F\u7528 callAsync \u89E6\u53D1\u65F6\uFF0C\u8FD9\u91CC\u7684 callback \u6307\u7684\u5C31\u662F callAsync \u7B2C\u4E8C\u4E2A\u53C2\u6570"),a(`
`),s("span",{class:"hljs-comment"},"// 2\u3001\u5728\u4F7F\u7528 promise \u89E6\u53D1\u65F6\uFF0Ccallback \u9075\u5B88 Node \u4E2D\u9519\u8BEF\u4F20\u9012\u673A\u5236\uFF0C\u82E5\u7B2C\u4E00\u4E2A\u53C2\u6570\u6709\u503C\uFF0C\u5219\u4F1A\u8D70 Promise.prototype.catch"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-string"},"'tap2 error'"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`);
})

`),s("span",{class:"hljs-comment"},"// \u6CE8\u518C\u65B9\u5F0F3"),a(`
hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"reject"),a("("),s("span",{class:"hljs-string"},"'tap3 error'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callback err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callback args'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 lishi
tap2 lishi
tap3 lishi
callback err tap3 error
callback args []
catch tap3 error
`)]),s("p",null,[a("\u4EE5 "),s("code",null,"tap3 error"),a(" \u8FDB\u5165\u9519\u8BEF\u6D41\u7A0B\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684\u5FAE\u4EFB\u52A1\u5728\u5B8F\u4EFB\u52A1\u4E4B\u524D\u6267\u884C")]),s("h2",{id:"asyncparallelbailhook",tabindex:"-1"},"AsyncParallelBailHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u5E76\u884C\u4FDD\u9669\u7684\u94A9\u5B50\uFF0C\u5B83\u4F1A\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u987A\u5E8F\uFF0C\u4EE5\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u975E undefined \u7684\u503C\u6216\u9519\u8BEF\u4F5C\u4E3A\u7ED3\u679C\u8FDB\u5165\u540E\u9762\u6D41\u7A0B"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncParallelBailHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncParallelBailHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-string"},"'tap2 reuslt'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-string"},"'tap3 reuslt'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync args'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 lishi
tap2 lishi
tap3 lishi
callAsync err null
callAsync args [ 'tap2 reuslt' ]
then [ 'tap2 reuslt' ]
`)]),s("p",null,"\u5373\u4F7F tap3 \u4E5F\u8FD4\u56DE\u4E86\u503C\u5E76\u5728 tap2 \u5148\u8FD4\u56DE\uFF0C\u4F46\u8FD8\u662F\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u987A\u5E8F\u6765\u8FDB\u5165\u540E\u9762\u6D41\u7A0B"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncParallelBailHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncParallelBailHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-string"},"'tap2 error'"),a(", "),s("span",{class:"hljs-string"},"'tap2 reuslt'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"reject"),a("("),s("span",{class:"hljs-string"},"'tap3 error'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync args'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 lishi
tap2 lishi
tap3 lishi
callAsync err tap2 error
callAsync args []
catch tap2 error
`)]),s("p",null,"\u540C\u7406\u5373\u4F7F tap3 \u4E5F\u8FD4\u56DE\u4E86\u9519\u8BEF\u4E14\u6BD4 tap2 \u5148\u8FD4\u56DE\uFF0C\u4F46\u8FD8\u662F\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u987A\u5E8F\u6765\u8FDB\u5165\u540E\u9762\u6D41\u7A0B"),s("h2",{id:"asyncserieshook",tabindex:"-1"},"AsyncSeriesHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u4E32\u884C\u7684\u94A9\u5B50\uFF0C\u4F1A\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF08\u7B49\u5F85\u4E0A\u4E00\u4E2A\u4E8B\u4EF6\u51FD\u6570\u5904\u7406\u5B8C\u6210\u518D\u8FDB\u884C\u4E0B\u4E00\u4E2A\uFF09\uFF0C\u5B83\u4E0D\u5173\u5FC3\u8FD4\u56DE\u503C\uFF08\u4E22\u5F03\u8FD4\u56DE\u503C\uFF09 \u82E5\u5176\u4E2D\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u5219\u4E2D\u6B62\u5E76\u4F20\u9012\u9519\u8BEF"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-string"},"'tap3 result'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap1 lishi
tap2 lishi
tap3 zhangsan
callAsync error undefined
callAsync result []
tap3 lishi
then [ undefined ]
`)]),s("p",null,"\u8F93\u51FA\u7ED3\u679C\u6709\u70B9\u4E71\uFF0C\u662F\u56E0\u4E3A\u662F\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7ED3\u679C\uFF0C\u4F46\u4F9D\u7136\u6EE1\u8DB3\u5728\u4E0A\u4E00\u4E2A\u4E8B\u4EF6\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\u518D\u6267\u884C\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u7279\u70B9"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-string"},"'tap error'"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-string"},"'tap3 result'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap1 lishi
tap2 lishi
callAsync error tap error
callAsync result []
catch tap error
`)]),s("p",null,"\u5728 tap2 \u4E2D\uFF0C\u8FD4\u56DE\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u5219\u5728\u6B64\u5904\u4F1A\u7EC8\u6B62\u6267\u884C\u5E76\u8FDB\u5165\u540E\u7EED\u6D41\u7A0B\uFF08tap3 \u4E0D\u4F1A\u6267\u884C\uFF09"),s("h2",{id:"asyncseriesbailhook",tabindex:"-1"},"AsyncSeriesBailHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u4E32\u884C\u4FDD\u9669\u94A9\u5B50\uFF0C\u6309\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6CE8\u518C\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF0C\u5E76\u5728\u6709\u7ED3\u679C\u8FD4\u56DE\u6216\u9519\u8BEF\u65F6\u4E2D\u6B62"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesBailHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesBailHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a(`()
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap1 lishi
tap2 lishi
callAsync err null
callAsync result [ 'tap2 result' ]
then [ 'tap2 result' ]
`)]),s("p",null,"tap2 \u4E2D\u8FD4\u56DE\u4E86\u503C\uFF08\u975Eundefined\uFF09\uFF0C\u56E0\u6B64 tap3 \u6CA1\u6709\u6267\u884C"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesBailHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesBailHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-string"},"'tap2 error'"),a(", "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a(`()
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync err'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

hook.`),s("span",{class:"hljs-title function_"},"promise"),a("("),s("span",{class:"hljs-string"},"'lishi'"),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"...args"),a(") =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'then'"),a(", args))."),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"err"),a(" =>")]),a(),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'catch'"),a(`, err))
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap1 lishi
tap2 lishi
callAsync err tap2 error
callAsync result []
catch tap2 error
`)]),s("p",null,"tap2 \u51FA\u73B0\u4E86\u9519\u8BEF\uFF0C\u4E2D\u6B62\u6267\u884C"),s("h2",{id:"asyncseriesloophook",tabindex:"-1"},"AsyncSeriesLoopHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u4E32\u884C\u5FAA\u73AF\u94A9\u5B50\uFF0C\u4F1A\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF0C\u82E5\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u82E5\u51FA\u73B0\u4E86\u8FD4\u56DE\u503C\uFF0C\u5219\u4F1A\u91CD\u5934\u91CD\u65B0\u6267\u884C\u6240\u6709\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u76F4\u81F3\u6240\u6709\u7684\u5904\u7406\u51FD\u6570\u90FD\u6CA1\u6709\u8FD4\u56DE\u503C"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesLoopHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesLoopHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("() < "),s("span",{class:"hljs-number"},"0.3"),a(" ? "),s("span",{class:"hljs-literal"},"undefined"),a(" : "),s("span",{class:"hljs-string"},"'tap2 result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`);
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("() < "),s("span",{class:"hljs-number"},"0.3"),a(" ? "),s("span",{class:"hljs-literal"},"undefined"),a(" : "),s("span",{class:"hljs-string"},"'tap3 reuslt'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

`),s("span",{class:"hljs-comment"},"// hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))"),a(`
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 zhangsan
tap2 zhangsan
tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
tap1 zhangsan
tap2 zhangsan
tap3 zhangsan
callAsync error undefined
callAsync result []
`)]),s("p",null,"\u53EA\u8981\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6709\u975E undefined \u8FD4\u56DE\u503C\uFF0C\u5219\u4F1A\u4E00\u76F4\u91CD\u590D\u4ECE\u5934\u5F00\u59CB\u6267\u884C"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesLoopHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesLoopHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("() < "),s("span",{class:"hljs-number"},"0.7"),a(" ? "),s("span",{class:"hljs-literal"},"null"),a(" : "),s("span",{class:"hljs-string"},"'tap2 error'"),a(", "),s("span",{class:"hljs-string"},"'tap result'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`);
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a("("),s("span",{class:"hljs-title class_"},"Math"),a("."),s("span",{class:"hljs-title function_"},"random"),a("() < "),s("span",{class:"hljs-number"},"0.3"),a(" ? "),s("span",{class:"hljs-literal"},"undefined"),a(" : "),s("span",{class:"hljs-string"},"'tap3 reuslt'"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

`),s("span",{class:"hljs-comment"},"// hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))"),a(`
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap1 zhangsan
tap2 zhangsan
tap1 zhangsan
tap2 zhangsan
tap1 zhangsan
tap2 zhangsan
callAsync error tap2 error
callAsync result []
`)]),s("p",null,"\u540C\u7406\u5728\u6709\u8FD4\u56DE\u503C\u7684\u65F6\u5019\u4F1A\u91CD\u590D\u91CD\u5934\u5F00\u59CB\u6267\u884C\uFF0C\u4F46\u5728\u51FA\u73B0\u9519\u8BEF\u540E\u4E2D\u6B62\u6267\u884C"),s("h2",{id:"asyncserieswaterfallhook",tabindex:"-1"},"AsyncSeriesWaterfallHook"),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u4E32\u884C\u7684\u94A9\u5B50\uFF0C\u4F1A\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF0C\u82E5\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u82E5\u51FA\u73B0\u4E86\u8FD4\u56DE\u503C\uFF0C\u5219\u4F1A\u5C06\u8FD4\u56DE\u503C\u4F5C\u4E3A\u65B0\u7684\u53C2\u6570\u503C\u4F20\u9012\u7ED9\u540E\u7EED\u7684\u5904\u7406\u51FD\u6570"),s("p",null,"\u6709\u4E09\u79CD\u4E8B\u4EF6\u6CE8\u518C\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"tap"),s("li",null,"tapAsync"),s("li",null,"tapPromise")]),s("p",null,"\u6709\u4E24\u79CD\u4E8B\u4EF6\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A"),s("ul",null,[s("li",null,"callAsync"),s("li",null,"promise")]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesWaterfallHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesWaterfallHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-literal"},"null"),a(", "),s("span",{class:"hljs-string"},"'lishi'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a(`()
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

`),s("span",{class:"hljs-comment"},"// hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))"),a(`
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
tap3 lishi
callAsync error null
callAsync result [ 'lishi' ]
`)]),s("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6709\u9519\u8BEF\u53D1\u751F\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"AsyncSeriesWaterfallHook"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'tapable'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" hook = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"AsyncSeriesWaterfallHook"),a("(["),s("span",{class:"hljs-string"},"'name'"),a(`])

hook.`),s("span",{class:"hljs-title function_"},"tap"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap1'"),a(`, name)
})

hook.`),s("span",{class:"hljs-title function_"},"tapAsync"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"name, callback"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap2'"),a(`, name)
  `),s("span",{class:"hljs-built_in"},"setTimeout"),a("("),s("span",{class:"hljs-function"},"() =>"),a(),s("span",{class:"hljs-title function_"},"callback"),a("("),s("span",{class:"hljs-string"},"'tap2 error'"),a(", "),s("span",{class:"hljs-string"},"'lishi'"),a("), "),s("span",{class:"hljs-number"},"0"),a(`)
})

hook.`),s("span",{class:"hljs-title function_"},"tapPromise"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(", "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),a(" =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'tap3'"),a(`, name)
  `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-title class_"},"Promise"),a("."),s("span",{class:"hljs-title function_"},"resolve"),a(`()
})

hook.`),s("span",{class:"hljs-title function_"},"callAsync"),a("("),s("span",{class:"hljs-string"},"'zhangsan'"),a(", "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"err, ...args"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync error'"),a(`, err)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},"'callAsync result'"),a(`, args)
})

`),s("span",{class:"hljs-comment"},"// hook.promise('lishi').then((...args) => console.log('then', args)).catch(err => console.log('catch', err))"),a(`
`)])]),s("p",null,"Output:"),s("pre",null,[s("code",null,`tap1 zhangsan
tap2 zhangsan
callAsync error tap2 error
callAsync result []
`)])],-1),g="Post",_="tapable",f="2021/12/14",m={__name:"tapable",setup(h,{expose:n}){const l={container:"Post",title:"tapable",date:"2021/12/14"};return n({frontmatter:l}),(r,j)=>{const c=t("Container");return p(),e(c,{frontmatter:l},{default:o(()=>[i]),_:1})}}};export{g as container,f as date,m as default,_ as title};
