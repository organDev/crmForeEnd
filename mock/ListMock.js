let data = [
    {
      id: 1,
      name: 'umi',
      desc: '极快的类 Next.js 的 React 应用框架。',
      url: 'https://umijs.org'
    },
    {
      id: 2,
      name: 'antd',
      desc: '一个服务于企业级产品的设计体系。',
      url: 'https://ant.design/index-cn'
    },
    {
      id: 3,
      name: 'antd-pro',
      desc: '一个服务于企业级产品的设计体系。',
      url: 'https://ant.design/index-cn'
    }
  ];
  
  export default {
    'GET /dev/cards/queryList': function (req, res, next) {
      setTimeout(() => {
        res.json({
          result: data,
        })
      }, 1)
    },
    'POST /dev/cards/add': function (req, res, next) {
        setTimeout(() => {
          res.json({
            result: data,
          })
        }, 1)
      },
}