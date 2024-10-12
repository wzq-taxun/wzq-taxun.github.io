import{r as t,o as c,c as p,w as r,a as s,b as n}from"./index.ac072b68.js";const i=s("div",{class:"markdown-body"},[s("h2",{id:"%E7%89%88%E6%9C%AC%E5%8F%B7%E5%AF%B9%E6%AF%94%E5%A4%A7%E5%B0%8F-%E5%8F%8A-%E7%9B%B8%E5%85%B3%E8%BE%93%E5%87%BA",tabindex:"-1"},"\u7248\u672C\u53F7\u5BF9\u6BD4\u5927\u5C0F \u53CA \u76F8\u5173\u8F93\u51FA"),s("blockquote",null,[s("p",null,"\u4E0B\u65B9\u662F semver \u7684\u793A\u4F8B\uFF0C\u7531\u4E0A\u81F3\u4E0B\u7248\u672C\u4F9D\u6B21\u964D\u4F4E 1.2.1 1.2.0 1.1.2.1 1.1.2 1.1.2.rc.1 1.1.2.beta.1 1.1.2.alpha.1 1.0.0 \u8BF7\u6BD4\u8F83\u4E24\u4E2A semver \u5B57\u7B26\u4E32\u7684\u5927\u5C0F\uFF0C\u5927\u4E8E\u8F93\u51FA 1\uFF0C\u5C0F\u4E8E\u8F93\u51FA -1\uFF0C\u76F8\u7B49\u8F93\u51FA 0\u3002")]),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"handsort"),n(" = ("),s("span",{class:"hljs-params"},"num1, num2"),n(`) => {
  `),s("span",{class:"hljs-keyword"},"let"),n(" newnum1 = num1."),s("span",{class:"hljs-title function_"},"split"),n("("),s("span",{class:"hljs-string"},"'.'"),n(")."),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-function"},[n("("),s("span",{class:"hljs-params"},"ite"),n(") =>")]),n(),s("span",{class:"hljs-title class_"},"Number"),n(`(ite));

  `),s("span",{class:"hljs-keyword"},"let"),n(" newnum2 = num2."),s("span",{class:"hljs-title function_"},"split"),n("("),s("span",{class:"hljs-string"},"'.'"),n(")."),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-function"},[n("("),s("span",{class:"hljs-params"},"ite"),n(") =>")]),n(),s("span",{class:"hljs-title class_"},"Number"),n(`(ite));

  `),s("span",{class:"hljs-keyword"},"let"),n(" returnVal = "),s("span",{class:"hljs-literal"},"null"),n(`;

  `),s("span",{class:"hljs-keyword"},"for"),n(" ("),s("span",{class:"hljs-keyword"},"let"),n(" i = "),s("span",{class:"hljs-number"},"0"),n("; i < newnum1."),s("span",{class:"hljs-property"},"length"),n(" - "),s("span",{class:"hljs-number"},"1"),n(`; i++) {
    `),s("span",{class:"hljs-keyword"},"if"),n(" (newnum1[i] !== "),s("span",{class:"hljs-literal"},"undefined"),n(" && newnum2[i] !== "),s("span",{class:"hljs-literal"},"undefined"),n(`) {
      `),s("span",{class:"hljs-keyword"},"if"),n(` (newnum1[i] > newnum2[i]) {
        returnVal = `),s("span",{class:"hljs-number"},"1"),n(`;
        `),s("span",{class:"hljs-keyword"},"break"),n(`;
      } `),s("span",{class:"hljs-keyword"},"else"),n(),s("span",{class:"hljs-keyword"},"if"),n(` (newnum1[i] < newnum2[i]) {
        returnVal = -`),s("span",{class:"hljs-number"},"1"),n(`;
        `),s("span",{class:"hljs-keyword"},"break"),n(`;
      } `),s("span",{class:"hljs-keyword"},"else"),n(` {
        returnVal = `),s("span",{class:"hljs-number"},"0"),n(`;
        `),s("span",{class:"hljs-keyword"},"break"),n(`;
      }
    }
  };

  `),s("span",{class:"hljs-keyword"},"return"),n(` returnVal;
}
`)])]),s("h2",{id:"2%E4%B8%AA%E5%A4%A7%E6%95%B0%E5%AD%97-%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%B1%82%E5%92%8C-(%E8%80%83%E8%99%91%E7%B2%BE%E5%BA%A6%E9%97%AE%E9%A2%98-%E5%BE%97%E6%8B%86%E5%88%86%E6%95%B0%E7%BB%84%E9%A1%B9-%E5%9C%A8%E7%9B%B8%E5%8A%A0)",tabindex:"-1"},"2\u4E2A\u5927\u6570\u5B57 \u5B57\u7B26\u4E32 \u6C42\u548C (\u8003\u8651\u7CBE\u5EA6\u95EE\u9898 \u5F97\u62C6\u5206\u6570\u7EC4\u9879 \u5728\u76F8\u52A0)"),s("blockquote"),s("p",null,"// 12324242424242424249 // 0000000039"),s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"const"),n(),s("span",{class:"hljs-title function_"},"handTotal"),n(" = ("),s("span",{class:"hljs-params"},"num1, num2"),n(`) => {

  `),s("span",{class:"hljs-keyword"},"let"),n(" newnum1 = num1."),s("span",{class:"hljs-title function_"},"split"),n("("),s("span",{class:"hljs-string"},"'.'"),n(")."),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-function"},[n("("),s("span",{class:"hljs-params"},"ite"),n(") =>")]),n(),s("span",{class:"hljs-title class_"},"Number"),n(`(ite));
  `),s("span",{class:"hljs-keyword"},"let"),n(" newnum2 = num2."),s("span",{class:"hljs-title function_"},"split"),n("("),s("span",{class:"hljs-string"},"'.'"),n(")."),s("span",{class:"hljs-title function_"},"map"),n("("),s("span",{class:"hljs-function"},[n("("),s("span",{class:"hljs-params"},"ite"),n(") =>")]),n(),s("span",{class:"hljs-title class_"},"Number"),n(`(ite));

  `),s("span",{class:"hljs-keyword"},"let"),n(` newall = [];
  `),s("span",{class:"hljs-keyword"},"let"),n(" numt = "),s("span",{class:"hljs-number"},"0"),n(`;

  `),s("span",{class:"hljs-keyword"},"for"),n(" ("),s("span",{class:"hljs-keyword"},"let"),n(" i = newnum2."),s("span",{class:"hljs-property"},"length"),n(" - "),s("span",{class:"hljs-number"},"1"),n("; i < "),s("span",{class:"hljs-number"},"1"),n(`; i--) {
    `),s("span",{class:"hljs-keyword"},"let"),n(" ite = newnum2[i] === "),s("span",{class:"hljs-literal"},"undefined"),n(" ? "),s("span",{class:"hljs-number"},"0"),n(" : newnum2[i] + newnum1[i] === "),s("span",{class:"hljs-literal"},"undefined"),n(" ? "),s("span",{class:"hljs-number"},"0"),n(` : newnum1[i] + numt;
    `),s("span",{class:"hljs-keyword"},"if"),n(" (ite > "),s("span",{class:"hljs-number"},"10"),n(`) {
      ite = ite.`),s("span",{class:"hljs-title function_"},"split"),n("("),s("span",{class:"hljs-string"},"''"),n(")["),s("span",{class:"hljs-number"},"1"),n(`];
      numt = `),s("span",{class:"hljs-number"},"1"),n(`;
    } `),s("span",{class:"hljs-keyword"},"else"),n(` {
      numt = `),s("span",{class:"hljs-number"},"0"),n(`;
    }
    newall.`),s("span",{class:"hljs-title function_"},"push"),n(`(ite)
  }

  `),s("span",{class:"hljs-keyword"},"return"),n(" newall."),s("span",{class:"hljs-title function_"},"reverse"),n("()."),s("span",{class:"hljs-title function_"},"join"),n(`();
}
`)])])],-1),m="Post",d="\u8682\u8681\u91D1\u670D\u9762\u8BD5\u9898",w="2023/10/12",E={__name:"question",setup(o,{expose:a}){const l={container:"Post",title:"\u8682\u8681\u91D1\u670D\u9762\u8BD5\u9898",date:"2023/10/12"};return a({frontmatter:l}),(u,h)=>{const e=t("Container");return c(),p(e,{frontmatter:l},{default:r(()=>[i]),_:1})}}};export{m as container,w as date,E as default,d as title};
