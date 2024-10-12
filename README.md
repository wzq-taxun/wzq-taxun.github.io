# weizhiqiang's website

https://wzq-taxun.github.io

## 部署 githup 流程

```bash
删除本地已有的 gh-pages 分支

基于 main 新开 分支: git checkout -b gh-pages

 .gitignore 忽略掉 dist 

git add dist

git commit -m 'xx'

(保证远程有gh-pages分支) git push origin :gh-pages && git subtree push --prefix dist origin gh-pages 
```

