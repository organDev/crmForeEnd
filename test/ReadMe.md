# umi 内置了 jest 测试。执行 umi test 会匹配所有 .test.js 结尾的文件运行。通常我们约定把测试的代码统一放到 # test 文件夹下，当然你也可以按照你的习惯组织，比如可以和测试对应的模块放到一起。

# 安装测试组件
  cnpm i --save-dev enzyme enzyme-adapter-react-16

# 是否单元测试中，测试组件需要导入以下的依赖？？？
  cnpm install jest-environment-jsdom --save-dev