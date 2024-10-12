---
container: question
title: 蚂蚁金服面试题
date: 2023/10/12
---

## 版本号对比大小 及 相关输出

> 下方是 semver 的示例，由上至下版本依次降低
1.2.1
1.2.0
1.1.2.1
1.1.2
1.1.2.rc.1
1.1.2.beta.1
1.1.2.alpha.1
1.0.0
请比较两个 semver 字符串的大小，大于输出 1，小于输出 -1，相等输出 0。

```js
const handsort = (num1, num2) => {
  let newnum1 = num1.split('.').map((ite) => Number(ite));

  let newnum2 = num2.split('.').map((ite) => Number(ite));

  let returnVal = null;

  for (let i = 0; i < newnum1.length - 1; i++) {
    if (newnum1[i] !== undefined && newnum2[i] !== undefined) {
      if (newnum1[i] > newnum2[i]) {
        returnVal = 1;
        break;
      } else if (newnum1[i] < newnum2[i]) {
        returnVal = -1;
        break;
      } else {
        returnVal = 0;
        break;
      }
    }
  };

  return returnVal;
}
```

## 2个大数字 字符串 求和 (考虑精度问题 得拆分数组项 在相加)

> 
// 12324242424242424249
// 0000000039

```js
const handTotal = (num1, num2) => {

  let newnum1 = num1.split('.').map((ite) => Number(ite));
  let newnum2 = num2.split('.').map((ite) => Number(ite));

  let newall = [];
  let numt = 0;

  for (let i = newnum2.length - 1; i < 1; i--) {
    let ite = newnum2[i] === undefined ? 0 : newnum2[i] + newnum1[i] === undefined ? 0 : newnum1[i] + numt;
    if (ite > 10) {
      ite = ite.split('')[1];
      numt = 1;
    } else {
      numt = 0;
    }
    newall.push(ite)
  }

  return newall.reverse().join();
}
```