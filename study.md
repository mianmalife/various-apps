* chunk指的是根据entry生成的打包后的文件代码片段

* 多个chunk对应多个入口文件

* bundle是文件本身,chunk是bundle里的代码片段

* loader的执行顺序是从右到左的

  ```
  
  css-loader是用来加载js中引入的css的    css in js
  style-loader用来动态生成style标签插入head标签中的
  ```
  * js文件推荐使用 chunkhash 自身内容改变 则改变 不影响css
  * css文件推荐使用 contenthash  自身内容改变 则改变
  ```
  学习 webpack 代理
  ```

  