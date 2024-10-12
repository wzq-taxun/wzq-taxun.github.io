import{r as c,o as t,c as o,w as r,a as s,b as l}from"./index.ac072b68.js";const p=s("div",{class:"markdown-body"},[s("blockquote",null,[s("p",null,[l("\u89C4\u8303\uFF1A"),s("a",{href:"https://promisesaplus.com/",target:"_blank",rel:"noopener"},"Promises/A+"),l("\uFF0C\u6D4B\u8BD5\u5DE5\u5177\uFF1A"),s("a",{href:"https://github.com/promises-aplus/promises-tests",target:"_blank",rel:"noopener"},"promises-tests"),l("\uFF0C\u6B64\u7BC7\u6587\u7AE0\u4E2D\u7684\u4EE3\u7801 GitHub \u4ED3\u5E93\u5730\u5740\uFF1A"),s("a",{href:"https://github.com/haiya6/notes/tree/main/promise",target:"_blank",rel:"noopener"},"MyPromise")])]),s("p",null,[l("\u6B64\u7BC7\u6587\u7AE0\u5C06\u5728 Node \u73AF\u5883\u901A\u8FC7 "),s("code",null,"Class"),l(" \u8BED\u6CD5\u6765\u5B9E\u73B0\u4E00\u4E2A\u7B26\u5408 Promises/A+ \u89C4\u8303\u7684 "),s("code",null,"MyPromise"),l("\uFF0C\u901A\u8FC7\u5B98\u65B9 872 \u4E2A\u6D4B\u8BD5\u7528\u4F8B")]),s("blockquote",null,[s("p",null,[l("\u6587\u7AE0\u4E2D x.x.x \u6807\u8BB0\u5982 2.1.1 \u8868\u793A\u89C4\u8303\u4E2D\u5BF9\u5E94\u7684\u89C4\u8303\u5E8F\u53F7\uFF1B"),s("code",null,"myPromise"),l(" \u8868\u793A "),s("code",null,"MyPromise"),l(" \u7684\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61")])]),s("p",null,"\u30102.1\u3011MyPromise \u5C06\u6709 3 \u4E2A\u72B6\u6001\uFF1A"),s("ul",null,[s("li",null,[l("\u30102.1.1\u3011pending\uFF1A"),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u8FD8\u6CA1\u53D1\u751F\u6539\u53D8\uFF0C\u63A5\u4E0B\u6765\u53EF\u53D8\u4E3A\u5B8C\u6210\u6001\uFF08fulfilled\uFF09\u6216\u62D2\u7EDD\u6001\uFF08rejected\uFF09")]),s("li",null,[l("\u30102.1.2\u3011fulfilled\uFF1A"),s("code",null,"myPromise"),l(" \u5904\u4E8E\u6210\u529F\u6001\uFF0C\u8BE5\u72B6\u6001\u5C06\u4E0D\u80FD\u7EE7\u7EED\u53D1\u751F\u6539\u53D8\uFF0C\u4E14\u5C06\u62E5\u6709\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7684\u503C\uFF08value\uFF09")]),s("li",null,[l("\u30102.1.3\u3011rejected\uFF1A"),s("code",null,"myPromise"),l(" \u5904\u4E8E\u62D2\u7EDD\u6001\uFF0C\u8BE5\u72B6\u6001\u5C06\u4E0D\u80FD\u7EE7\u7EED\u53D1\u751F\u6539\u53D8\uFF0C\u4E14\u5C06\u62E5\u6709\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7684\u62D2\u56E0\uFF08reason\uFF09")])]),s("p",null,"\u521D\u59CB\u72B6\u6001\u4E3A pending"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"PENDING"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'PENDING'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'FULFILLED'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"REJECTED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'REJECTED'"),l(`)

`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l(` {
  state = `),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`

  `),s("span",{class:"hljs-comment"},"// value or reason"),l(`
  result
}
`)])]),s("p",null,[l("MyPromise \u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u53C2\u6570 "),s("code",null,"func"),l("\uFF1A")]),s("ul",null,[s("li",null,[s("code",null,"func"),l(" \u4F1A\u5728 MyPromise \u88AB\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u540C\u6B65\u6267\u884C")]),s("li",null,[s("code",null,"func"),l(" \u4F1A\u63A5\u53D7\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF1A"),s("code",null,"resolve"),l("\u3001"),s("code",null,"reject"),l(" \u5206\u522B\u7528\u6765\u5C06 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u6539\u53D8\u4E3A "),s("code",null,"fulfilled"),l(" \u548C "),s("code",null,"rejected")]),s("li",null,[s("code",null,"func"),l(" \u5728\u82E5\u5728\u6267\u884C\u65F6\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38 "),s("code",null,"e"),l("\uFF0C\u5C06\u4F1A\u4EE5 "),s("code",null,"e"),l(" \u6765 reject "),s("code",null,"myPromise")])]),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"PENDING"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'PENDING'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'FULFILLED'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"REJECTED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'REJECTED'"),l(`)

`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l(` {
  state = `),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`

  `),s("span",{class:"hljs-comment"},"// value or reason"),l(`
  result

  `),s("span",{class:"hljs-title function_"},"constructor"),l("("),s("span",{class:"hljs-params"},"func"),l(`) {
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l(" = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l("."),s("span",{class:"hljs-title function_"},"bind"),l("("),s("span",{class:"hljs-variable language_"},"this"),l(`)
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l(" = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l("."),s("span",{class:"hljs-title function_"},"bind"),l("("),s("span",{class:"hljs-variable language_"},"this"),l(`)

    `),s("span",{class:"hljs-keyword"},"try"),l(` {
      `),s("span",{class:"hljs-title function_"},"func"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l(", "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l(`)
    } `),s("span",{class:"hljs-keyword"},"catch"),l(`(e) {
      `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"reject"),l(`(e)
    }
  }

  `),s("span",{class:"hljs-title function_"},"resolve"),l("("),s("span",{class:"hljs-params"}),l(`) {
    `),s("span",{class:"hljs-comment"},"// TODO \u5C06 myPromise \u7684\u72B6\u6001\u53D8\u4E3A fulfilled"),l(`
  }

  `),s("span",{class:"hljs-title function_"},"reject"),l("("),s("span",{class:"hljs-params"}),l(`) {
    `),s("span",{class:"hljs-comment"},"// TODO \u5C06 myPromise \u7684\u72B6\u6001\u53D8\u4E3A rejected"),l(`
  }
}
`)])]),s("p",null,[l("\u30102.2\u3011MyPromise \u5C06\u63D0\u4F9B\u4E00\u4E2A "),s("code",null,"then"),l(" \u65B9\u6CD5\uFF0C\u6765\u8BBF\u95EE MyPromise \u7684\u5F53\u524D\u6216\u6700\u7EC8\u503C\uFF08value\uFF09\u6216\u62D2\u56E0\uFF08reason\uFF09\uFF0C"),s("code",null,"then"),l(" \u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A")]),s("pre",null,[s("code",{class:"language-js"},[l("myPromise."),s("span",{class:"hljs-title function_"},"then"),l(`(onFulfilled, onRejected)
`)])]),s("p",null,[l("\u30102.2.1\u3011"),s("code",null,"onFulfilled"),l(" \u4E0E "),s("code",null,"onRejected"),l(" \u90FD\u662F\u53EF\u9009\u9879")]),s("ul",null,[s("li",null,[l("\u30102.2.1.1\u3011"),s("code",null,"onFulfilled"),l(" \u82E5\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u88AB\u5FFD\u7565")]),s("li",null,[l("\u30102.2.1.2\u3011"),s("code",null,"onRejected"),l(" \u82E5\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u88AB\u5FFD\u7565")])]),s("p",null,[l("\u30102.2.2\u3011\u82E5 "),s("code",null,"onFulfilled"),l(" \u662F\u4E00\u4E2A\u51FD\u6570")]),s("ul",null,[s("li",null,[l("\u30102.2.2.1\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u5904\u4E8E fulfilled \u65F6\u5C06\u88AB\u8C03\u7528\uFF0C\u4E14\u5C06 "),s("code",null,"myPromise"),l(" \u7684 value \u4F5C\u4E3A "),s("code",null,"onFulfilled"),l(" \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570")]),s("li",null,[l("\u30102.2.2.2\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u6CA1\u6709\u5904\u4E8E fulfilled \u65F6\u5C06\u4E0D\u80FD\u88AB\u8C03\u7528")]),s("li",null,[l("\u30102.2.2.3\u3011"),s("code",null,"onFulfilled"),l(" \u53EA\u80FD\u88AB\u8C03\u7528\u4E00\u6B21")])]),s("p",null,[l("\u30102.2.3\u3011\u82E5 "),s("code",null,"onRejected"),l(" \u662F\u4E00\u4E2A\u51FD\u6570")]),s("ul",null,[s("li",null,[l("\u30102.2.3.1\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u5904\u4E8E rejected \u65F6\u5C06\u88AB\u8C03\u7528\uFF0C\u4E14\u5C06 "),s("code",null,"myPromise"),l(" \u7684 reason \u4F5C\u4E3A "),s("code",null,"onRejected"),l(" \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570")]),s("li",null,[l("\u30102.2.3.2\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u6CA1\u6709\u5904\u4E8E rejected \u65F6\u5C06\u4E0D\u80FD\u88AB\u8C03\u7528")]),s("li",null,[l("\u30102.2.3.3\u3011"),s("code",null,"onRejected"),l(" \u53EA\u80FD\u88AB\u8C03\u7528\u4E00\u6B21")])]),s("p",null,[l("\u30102.2.4\u3011"),s("code",null,"onFulfilled"),l(" \u6216 "),s("code",null,"onRejected"),l(" \u5C06\u5F02\u6B65\u8C03\u7528\uFF0C\u5E94\u5728 "),s("code",null,"then"),l(" \u65B9\u6CD5\u8C03\u7528\u7684\u90A3\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E4B\u540E\u7684\u65B0\u6267\u884C\u6808\u4E2D\u6267\u884C\uFF0C\u53EF\u4EE5\u91C7\u7528\u5B8F\u4EFB\u52A1\uFF08macro-task\uFF09\u673A\u5236\u4E5F\u53EF\u91C7\u7528\u5FAE\u4EFB\u52A1\uFF08micro-task\uFF09\u673A\u5236\uFF0C\u56E0\u672C\u7BC7\u6587\u7AE0\u662F\u5728 Node \u73AF\u5883\u4E2D\uFF0C\u56E0\u6B64\u91C7\u7528 "),s("code",null,"process.nextTick"),l(" API \u5C06\u4EFB\u52A1\u653E\u7F6E\u5728\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u6267\u884C")]),s("p",null,[l("\u30102.2.5\u3011"),s("code",null,"onFulfilled"),l(" \u6216 "),s("code",null,"onRejected"),l(" \u5C06\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u8C03\u7528\uFF0C\u5373\u6CA1\u6709 "),s("code",null,"this"),l(" \u6307\u5411")]),s("p",null,[l("\u30102.2.6\u3011"),s("code",null,"then"),l(" \u53EF\u4EE5\u5728\u540C\u4E00\u4E2A "),s("code",null,"myPromise"),l(" \u4E0A\u88AB\u8C03\u7528\u591A\u6B21")]),s("ul",null,[s("li",null,[l("\u30102.2.6.1\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u53D8\u4E3A fulfilled\uFF0C\u6240\u6709\u7684 "),s("code",null,"onFulfilled"),l(" \u56DE\u8C03\u5C06\u6309\u7167\u4ED6\u4EEC\u5BF9 "),s("code",null,"then"),l(" \u7684\u539F\u59CB\u8C03\u7528\u7684\u987A\u5E8F\u6267\u884C")]),s("li",null,[l("\u30102.2.6.2\u3011\u5F53 "),s("code",null,"myPromise"),l(" \u7684\u72B6\u6001\u53D8\u4E3A rejected\uFF0C\u6240\u6709\u7684 "),s("code",null,"onRejected"),l(" \u56DE\u8C03\u5C06\u6309\u7167\u4ED6\u4EEC\u5BF9 "),s("code",null,"then"),l(" \u7684\u539F\u59CB\u8C03\u7528\u7684\u987A\u5E8F\u6267\u884C")])]),s("p",null,[l("\u30102.2.7\u3011"),s("code",null,"then"),l(" \u5C06\u8FD4\u56DE\u4E00\u4E2A MyPromise\uFF1A")]),s("pre",null,[s("code",{class:"language-js"},[l("myPromise2 = myPromise1."),s("span",{class:"hljs-title function_"},"then"),l(`(onFulfilled, onRejected)
`)])]),s("ul",null,[s("li",null,[l("\u30102.2.7.1\u3011\u5982 "),s("code",null,"onFulfilled"),l(" \u6216 "),s("code",null,"onRejected"),l(" \u8FD4\u56DE\u4E00\u4E2A\u503C "),s("code",null,"x"),l("\uFF0C\u5219\u8FD0\u884C "),s("code",null,"[[Resolve]](myPromise2, x)"),l(" \u7684\u89E3\u51B3\u8FC7\u7A0B\uFF08\u5728\u4EE3\u7801\u4E2D\u8BE6\u89E3\uFF0C\u5373 "),s("code",null,"resolvePromise"),l(" \u51FD\u6570\uFF09")]),s("li",null,[l("\u30102.2.7.2\u3011\u5982 "),s("code",null,"onFulfilled"),l(" \u6216 "),s("code",null,"onRejected"),l(" \u629B\u51FA\u4E00\u4E2A\u5F02\u5E38 "),s("code",null,"e"),l("\uFF0C"),s("code",null,"myPromise2"),l(" \u5C06\u4EE5 "),s("code",null,"e"),l(" \u4E3A\u62D2\u56E0\u72B6\u6001\u53D8\u4E3A rejected")]),s("li",null,[l("\u30102.2.7.3\u3011\u5982 "),s("code",null,"onFulfilled"),l(" \u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E14 "),s("code",null,"myPromise1"),l(" \u5904\u4E8E fulfilled \u72B6\u6001\uFF0C\u5219 "),s("code",null,"myPromise2"),l(" \u5C06\u4EE5\u4E0E "),s("code",null,"myPromise1"),l(" \u76F8\u540C\u7684 value \u6765 fulfilled")]),s("li",null,[l("\u30102.2.7.4\u3011\u5982 "),s("code",null,"onRejected"),l(" \u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E14 "),s("code",null,"myPromise1"),l(" \u5904\u4E8E rejected \u72B6\u6001\uFF0C\u5219 "),s("code",null,"myPromise2"),l(" \u5C06\u4EE5\u4E0E "),s("code",null,"myPromise1"),l(" \u76F8\u540C\u7684 reason \u6765 rejected")])]),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"PENDING"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'PENDING'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'FULFILLED'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-variable constant_"},"REJECTED"),l(" = "),s("span",{class:"hljs-title class_"},"Symbol"),l("("),s("span",{class:"hljs-string"},"'REJECTED'"),l(`)

`),s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title function_"},"resolvePromise"),l("("),s("span",{class:"hljs-params"},"myPromise2, x, resolve, reject"),l(`) {
  `),s("span",{class:"hljs-comment"},"// 2.3.1 \u5982\u679C myPromise2 \u548C x \u6307\u5411\u540C\u4E00\u5BF9\u8C61\uFF0C\u5219\u4EE5\u4E00\u4E2A TypeError \u4E3A reason \u6765 reject myPromise1"),l(`
  `),s("span",{class:"hljs-keyword"},"if"),l(` (x === myPromise2) {
    `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"reject"),l("("),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"TypeError"),l("("),s("span",{class:"hljs-string"},"'\u5DF4\u62C9\u5DF4\u62C9'"),l(`))
  }
  `),s("span",{class:"hljs-comment"},"// 2.3.2 \u5982\u679C x \u662F MyPromise \u5B9E\u4F8B\uFF0C\u5219\u4F7F myPromise2 \u91C7\u7528 x \u7684\u72B6\u6001\uFF0C\u5177\u4F53\u5982\u4E0B"),l(`
  `),s("span",{class:"hljs-keyword"},"if"),l(" (x "),s("span",{class:"hljs-keyword"},"instanceof"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l(`) {
    `),s("span",{class:"hljs-comment"},"// 2.3.2.1 \u5982\u679C x \u5904\u4E8E pending\uFF0C myPromise2 \u9700\u4FDD\u6301\u6302\u8D77\uFF0C\u76F4\u5230 x \u88AB fulfilled \u6216 rejected"),l(`
    `),s("span",{class:"hljs-keyword"},"if"),l(" (x."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`) {
      x.`),s("span",{class:"hljs-title function_"},"then"),l(`(
        `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"y"),l(" =>")]),l(` {
          `),s("span",{class:"hljs-comment"},"// \u5C06 value: y \u518D\u8C03\u7528 resolvePromise"),l(`
          `),s("span",{class:"hljs-title function_"},"resolvePromise"),l(`(myPromise2, y, resolve, reject)
        },
        reject
      )
    } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" (x."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(`) {
      `),s("span",{class:"hljs-comment"},"// 2.3.2.2 \u5F53 x \u72B6\u6001\u4E3A fulfilled \u65F6\uFF0C\u4EE5 x.result \u4E3A value \u6765 resolve myPromise1"),l(`
      `),s("span",{class:"hljs-title function_"},"resolve"),l("(x."),s("span",{class:"hljs-property"},"result"),l(`)
    } `),s("span",{class:"hljs-keyword"},"else"),l(` {
      `),s("span",{class:"hljs-comment"},"// rejected"),l(`
      `),s("span",{class:"hljs-comment"},"// 2.3.2.3 \u5F53 x \u72B6\u6001\u4E3A rejected, \uFF0C\u4EE5 x.result \u4E3A reason \u6765 reject myPromise1"),l(`
      `),s("span",{class:"hljs-title function_"},"reject"),l("(x."),s("span",{class:"hljs-property"},"result"),l(`)
    }
  } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"typeof"),l(" x === "),s("span",{class:"hljs-string"},"'function'"),l(" || (x !== "),s("span",{class:"hljs-literal"},"null"),l(" && "),s("span",{class:"hljs-keyword"},"typeof"),l(" x === "),s("span",{class:"hljs-string"},"'object'"),l(`)) {
    `),s("span",{class:"hljs-comment"},"// 2.3.3 \u5982\u679C\u662F object or function"),l(`

    `),s("span",{class:"hljs-comment"},"// 2.3.3.1 \u5B9A\u4E49\u53D8\u91CF `then`\uFF0C\u5C1D\u8BD5\u8D4B\u503C\u4E3A `x.then`"),l(`
    `),s("span",{class:"hljs-comment"},"// 2.3.3.2 \u5982\u679C\u53D6 `x.then` \u7684\u503C\u65F6\u629B\u51FA\u5F02\u5E38 `e` \uFF0C\u5219\u4EE5 `e` \u4E3A\u636E\u56E0 reject myPromise1"),l(`
    `),s("span",{class:"hljs-keyword"},"let"),l(` then
    `),s("span",{class:"hljs-keyword"},"try"),l(` {
      then = x.`),s("span",{class:"hljs-property"},"then"),l(`
    } `),s("span",{class:"hljs-keyword"},"catch"),l(` (e) {
      `),s("span",{class:"hljs-keyword"},"return"),l(),s("span",{class:"hljs-title function_"},"reject"),l(`(e)
    }
    `),s("span",{class:"hljs-comment"},"// 2.3.3.3 \u5982\u679C `then` \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528 `then` \u5E76\u4FEE\u6539 this \u4E3A `x`"),l(`
    `),s("span",{class:"hljs-comment"},"// \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A _resolvePromise\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A _rejectPromise"),l(`
    `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-keyword"},"typeof"),l(" then === "),s("span",{class:"hljs-string"},"'function'"),l(`) {
      `),s("span",{class:"hljs-keyword"},"let"),l(" called = "),s("span",{class:"hljs-literal"},"false"),l(`

      `),s("span",{class:"hljs-keyword"},"try"),l(` {
        then.`),s("span",{class:"hljs-title function_"},"call"),l(`(
          x,
          `),s("span",{class:"hljs-comment"},"// 2.3.3.3.1 \u5982\u679C _resolvePromise \u4EE5\u503C y \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u8FD0\u884C [[Resolve]](myPromise2, y)"),l(`
          `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"y"),l(" =>")]),l(` {
            `),s("span",{class:"hljs-comment"},"// 2.3.3.3.3 \u5982\u679C _resolvePromise \u548C _rejectPromise \u5747\u88AB\u8C03\u7528\uFF0C"),l(`
            `),s("span",{class:"hljs-comment"},"// \u6216\u8005\u88AB\u540C\u4E00\u53C2\u6570\u8C03\u7528\u4E86\u591A\u6B21\uFF0C\u5219\u4F18\u5148\u91C7\u7528\u9996\u6B21\u8C03\u7528\u5E76\u5FFD\u7565\u5269\u4E0B\u7684\u8C03\u7528"),l(`
            `),s("span",{class:"hljs-keyword"},"if"),l(` (!called) {
              called = `),s("span",{class:"hljs-literal"},"true"),l(`
              `),s("span",{class:"hljs-title function_"},"resolvePromise"),l(`(myPromise2, y, resolve, reject)
            }
          },
          `),s("span",{class:"hljs-comment"},"// 2.3.3.3.2 \u5982\u679C _rejectPromise \u4EE5\u503C r \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u4EE5 r \u4E3A\u62D2\u56E0 reject myPromise1"),l(`
          `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"r"),l(" =>")]),l(` {
            `),s("span",{class:"hljs-comment"},"// 2.3.3.3.3 \u5982\u679C _resolvePromise \u548C _rejectPromise \u5747\u88AB\u8C03\u7528\uFF0C"),l(`
            `),s("span",{class:"hljs-comment"},"// \u6216\u8005\u88AB\u540C\u4E00\u53C2\u6570\u8C03\u7528\u4E86\u591A\u6B21\uFF0C\u5219\u4F18\u5148\u91C7\u7528\u9996\u6B21\u8C03\u7528\u5E76\u5FFD\u7565\u5269\u4E0B\u7684\u8C03\u7528"),l(`
            `),s("span",{class:"hljs-keyword"},"if"),l(` (!called) {
              called = `),s("span",{class:"hljs-literal"},"true"),l(`
              `),s("span",{class:"hljs-title function_"},"reject"),l(`(r)
            }
          }
        )
      } `),s("span",{class:"hljs-keyword"},"catch"),l(` (e) {
        `),s("span",{class:"hljs-comment"},"// 2.3.3.3.4 \u5982\u679C\u8C03\u7528 then \u65B9\u6CD5\u629B\u51FA\u4E86\u5F02\u5E38 e"),l(`
        `),s("span",{class:"hljs-comment"},"// 2.3.3.3.4.1 \u5982\u679C _resolvePromise \u6216 _rejectPromise \u5DF2\u7ECF\u88AB\u8C03\u7528\uFF0C\u5219\u5FFD\u7565\u4E4B"),l(`
        `),s("span",{class:"hljs-keyword"},"if"),l(" (called) "),s("span",{class:"hljs-keyword"},"return"),l(`
        `),s("span",{class:"hljs-comment"},"// 2.3.3.3.4.2 \u5426\u5219\u4EE5 `e` \u4E3A\u636E\u56E0 reject myPromise1"),l(`
        `),s("span",{class:"hljs-title function_"},"reject"),l(`(e)
      }
    } `),s("span",{class:"hljs-keyword"},"else"),l(` {
      `),s("span",{class:"hljs-comment"},"// 2.3.3.4 \u5982\u679C `then` \u4E0D\u662F\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570 resolve myPromise1"),l(`
      `),s("span",{class:"hljs-title function_"},"resolve"),l(`(x)
    }
  } `),s("span",{class:"hljs-keyword"},"else"),l(` {
    `),s("span",{class:"hljs-comment"},"// 2.3.4 \u5982\u679C x \u4E0D\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570 resolve myPromise1"),l(`
    `),s("span",{class:"hljs-title function_"},"resolve"),l(`(x)
  }
}

`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l(` {
  state = `),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`

  `),s("span",{class:"hljs-comment"},"// value or reason"),l(`
  result

  onFulfilledCallbacks = []
  onRejectedCallbacks = []

  `),s("span",{class:"hljs-title function_"},"constructor"),l("("),s("span",{class:"hljs-params"},"func"),l(`) {
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l(" = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l("."),s("span",{class:"hljs-title function_"},"bind"),l("("),s("span",{class:"hljs-variable language_"},"this"),l(`)
    `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l(" = "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l("."),s("span",{class:"hljs-title function_"},"bind"),l("("),s("span",{class:"hljs-variable language_"},"this"),l(`)

    `),s("span",{class:"hljs-keyword"},"try"),l(` {
      `),s("span",{class:"hljs-title function_"},"func"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"resolve"),l(", "),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"reject"),l(`)
    } `),s("span",{class:"hljs-keyword"},"catch"),l(` (err) {
      `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-title function_"},"reject"),l(`(err)
    }
  }

\xA0 `),s("span",{class:"hljs-title function_"},"resolve"),l("("),s("span",{class:"hljs-params"}),l(`) {
\xA0 \xA0 `),s("span",{class:"hljs-comment"},"// TODO \u5C06 MyPromise \u7684\u72B6\u6001\u53D8\u4E3A fulfilled"),l(`
\xA0 }

\xA0 `),s("span",{class:"hljs-title function_"},"reject"),l("("),s("span",{class:"hljs-params"}),l(`) {
\xA0 \xA0 `),s("span",{class:"hljs-comment"},"// TODO \u5C06 MyPromise \u7684\u72B6\u6001\u53D8\u4E3A rejected"),l(`
\xA0 }

  `),s("span",{class:"hljs-title function_"},"then"),l("("),s("span",{class:"hljs-params"},"onFulfilled, onRejected"),l(`) {
    `),s("span",{class:"hljs-comment"},"// 2.2.7.3"),l(`
    onFulfilled = `),s("span",{class:"hljs-keyword"},"typeof"),l(" onFulfilled === "),s("span",{class:"hljs-string"},"'function'"),l(" ? onFulfilled : "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"v"),l(" =>")]),l(` v
    `),s("span",{class:"hljs-comment"},"// 2.2.7.4"),l(`
    onRejected = `),s("span",{class:"hljs-keyword"},"typeof"),l(" onRejected === "),s("span",{class:"hljs-string"},"'function'"),l(" ? onRejected : "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"e"),l(" =>")]),l(" { "),s("span",{class:"hljs-keyword"},"throw"),l(` e }

    `),s("span",{class:"hljs-keyword"},"const"),l(" myPromise2 = "),s("span",{class:"hljs-keyword"},"new"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l("("),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"resolve, reject"),l(") =>")]),l(` {
      `),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-title function_"},"handleFulfilled"),l(` = value => {
        `),s("span",{class:"hljs-keyword"},"try"),l(` {
          `),s("span",{class:"hljs-keyword"},"const"),l(" x = "),s("span",{class:"hljs-title function_"},"onFulfilled"),l(`(value)
          `),s("span",{class:"hljs-comment"},"// 2.2.7.1"),l(`
          `),s("span",{class:"hljs-title function_"},"resolvePromise"),l(`(myPromise2, x, resolve, reject)
        } `),s("span",{class:"hljs-keyword"},"catch"),l(` (e) {
          `),s("span",{class:"hljs-comment"},"// 2.2.7.2"),l(`
          `),s("span",{class:"hljs-title function_"},"reject"),l(`(e)
        }
      }

      `),s("span",{class:"hljs-keyword"},"const"),l(),s("span",{class:"hljs-title function_"},"handleRejected"),l(` = reason => {
        `),s("span",{class:"hljs-keyword"},"try"),l(` {
          `),s("span",{class:"hljs-keyword"},"const"),l(" x = "),s("span",{class:"hljs-title function_"},"onRejected"),l(`(reason)
          `),s("span",{class:"hljs-comment"},"// 2.2.7.1"),l(`
          `),s("span",{class:"hljs-title function_"},"resolvePromise"),l(`(myPromise2, x, resolve, reject)
        } `),s("span",{class:"hljs-keyword"},"catch"),l(` (err) {
          `),s("span",{class:"hljs-comment"},"// 2.2.7.2"),l(`
          `),s("span",{class:"hljs-title function_"},"reject"),l(`(err)
        }
      }

      `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`) {
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"onFulfilledCallbacks"),l("."),s("span",{class:"hljs-title function_"},"push"),l(`(handleFulfilled)
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"onRejectedCallbacks"),l("."),s("span",{class:"hljs-title function_"},"push"),l(`(handleRejected)
      } `),s("span",{class:"hljs-keyword"},"else"),l(),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(`) {
        `),s("span",{class:"hljs-comment"},"// 2.2.4"),l(`
        process.`),s("span",{class:"hljs-title function_"},"nextTick"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
          `),s("span",{class:"hljs-title function_"},"handleFulfilled"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"result"),l(`)
        })
      } `),s("span",{class:"hljs-keyword"},"else"),l(` {
        `),s("span",{class:"hljs-comment"},"// rejected"),l(`

        `),s("span",{class:"hljs-comment"},"// 2.2.4"),l(`
        process.`),s("span",{class:"hljs-title function_"},"nextTick"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
          `),s("span",{class:"hljs-title function_"},"handleRejected"),l("("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"result"),l(`)
        })
      }
    })

    `),s("span",{class:"hljs-comment"},"// 2.2.7"),l(`
    `),s("span",{class:"hljs-keyword"},"return"),l(` myPromise2
  }
}
`)])]),s("p",null,[l("\u6700\u7EC8\u5B9E\u73B0 "),s("code",null,"resolve"),l(" \u53CA "),s("code",null,"reject"),l(" \u65B9\u6CD5")]),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyPromise"),l(` {
  `),s("span",{class:"hljs-comment"},"// ..."),l(`
  `),s("span",{class:"hljs-title function_"},"resolve"),l("("),s("span",{class:"hljs-params"},"value"),l(`) {
    `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`) {
      `),s("span",{class:"hljs-comment"},"// 2.2.4"),l(`
      process.`),s("span",{class:"hljs-title function_"},"nextTick"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"result"),l(` = value
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" = "),s("span",{class:"hljs-variable constant_"},"FULFILLED"),l(`
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"onFulfilledCallbacks"),l("."),s("span",{class:"hljs-title function_"},"splice"),l("("),s("span",{class:"hljs-number"},"0"),l(")."),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"cb"),l(" =>")]),l(),s("span",{class:"hljs-title function_"},"cb"),l(`(value))
      })
    }
  }

  `),s("span",{class:"hljs-title function_"},"reject"),l("("),s("span",{class:"hljs-params"},"reason"),l(`) {
    `),s("span",{class:"hljs-keyword"},"if"),l(" ("),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" === "),s("span",{class:"hljs-variable constant_"},"PENDING"),l(`) {
      `),s("span",{class:"hljs-comment"},"// 2.2.4"),l(`
      process.`),s("span",{class:"hljs-title function_"},"nextTick"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"result"),l(` = reason
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"state"),l(" = "),s("span",{class:"hljs-variable constant_"},"REJECTED"),l(`
        `),s("span",{class:"hljs-variable language_"},"this"),l("."),s("span",{class:"hljs-property"},"onRejectedCallbacks"),l("."),s("span",{class:"hljs-title function_"},"splice"),l("("),s("span",{class:"hljs-number"},"0"),l(")."),s("span",{class:"hljs-title function_"},"forEach"),l("("),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"cb"),l(" =>")]),l(),s("span",{class:"hljs-title function_"},"cb"),l(`(reason))
      })
    }
  }
  `),s("span",{class:"hljs-comment"},"// ..."),l(`
}
`)])])],-1),m="Post",d="\u6839\u636E Promises/A+ \u5B9E\u73B0 Promise",y="2022/7/27",f={__name:"promiseaplus",setup(i,{expose:a}){const n={container:"Post",title:"\u6839\u636E Promises/A+ \u5B9E\u73B0 Promise",date:"2022/7/27"};return a({frontmatter:n}),(h,j)=>{const e=c("Container");return t(),o(e,{frontmatter:n},{default:r(()=>[p]),_:1})}}};export{m as container,y as date,f as default,d as title};
