
export default {
    singular: true,//src目录下为单数的page而不是默认的pages
    plugins:[//插件管理
        ['umi-plugin-react',{
         // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
         antd:true,
         dva:true, 
        //  locale: {//不知道搞什么用的？？
        //     enable: false,
        //   },
        }]
    ],
    routes: [//路由管理
        {
            path:'/',
            component:'../layout/BasicLayout',
            routes:[
                {
                    path:'/',
                    component: 'card/CardDemo'
                },
                {
                    path: '/hello',
                    component: 'HelloWorld',
                },{
                    path: '/shopping/content',
                    component: 'shopping/Content',
                },{
                    path: '/picture/demo',
                    component: 'picture/PictureDemo',
                },{
                    path: '/square/demo',
                    component: 'square/SquareDemo',
                },{
                    path: '/card/demo',
                    component: 'card/CardDemo',
                },{//导航路由配置
                    path: '/dashboard',
                    routes:[
                        {path: '/dashboard/analysis', component: 'dashboard/Analysis'},
                        {path: '/dashboard/monitor', component: 'dashboard/Monitor'},
                        {path: '/dashboard/workplace', component: 'dashboard/Workplace'}
                    ]
                },{//基于dva的model构建卡片
                    path: '/card/puzzle', component: 'card/PuzzleCardPage'
                },
                {path: '/list', component: 'list/ListPage'},
                {//自定义样式
                    path: '/style', component: 'MyStyle'}
            ]
        }
   ],
   proxy: {//去往本地服务器 localhost:8000 的 ajax 调用中，如果是以 /dev 开头的，
           //那么就转发到远端的 https://08ad1pao69.execute-api.us-east-1.amazonaws.com 服务器当中，/dev 也会保留在转发地址中。
           //比如：/dev/random_joke 就会被转发到 https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
       '/dev': {
          target: 'http://localhost:8088',
          changeOrigin: true,
          "pathRewrite": { "^/dev" : "" }//去除/dev前缀
        },
        '/prod':{
            target: 'http://localhost:3000',
            changeOrigin: true,
        },
            //比如：/dev/random_joke 就会被转发到 https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
        '/api': {
            target: 'http://localhost:8088',
            changeOrigin: true,
            pathRewrite: { "^/api" : "" }
         },
      },
}