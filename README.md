# grawork
一个前端框架综合应用的demo
## 安装及运行
首先安装依赖：
```
npm install
```
因使用webpack配置代理，故使用webpack-dev-server开启文件服务器。如果没有安装webpack-dev-server，执行以下命令安装:
```
npm install -g webpack-dev-server
```
如果已经安装过webpack-dev-server，直接进入主目录执行开启前端：
```
webpack-dev-server
```
将数据附加到mongo数据库：
```
mongoimport -d 数据库名 -c 集合名 xxx.json
```
同主目录中执行开启后台服务器：
```
node --harmony test.js
```
访问http://localhost:8080/ 即可查看。
## 目录结构
```
|
|____index.html
|____package.json
|____src  资源文件
| |____assets  静态资源
| |____components 组件
| |____data  数据
| |____views  页面组件
| |____main.js  入口文件
| |____router.js  路由配置
|____test.js  服务器启动文件
|____webpack.config.js  webpack配置文件
```
