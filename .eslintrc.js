module.exports = {
  root: true,//当配置root为true，那么eslint搜索到这里就会停止搜索配置文件
  env: {//指定环境
    node: true//node环境被启用
  },
  extends: [//扩展配置文件，此处继承了下方配置文件的所有特征，
    'plugin:vue/essential',//使用插件扩展了配置
    '@vue/standard'
  ],
  parserOptions: {//设置解析器来指定想要支持的js语法
    parser: '@babel/eslint-parser'//使用babel和eslint都兼容的解析器
  },
  rules: {//配置规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',//禁止使用控制台，当环境为生产环境时，该规则启用并视作警告，否则关闭规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'//禁止使用debugger，当环境为生产环境时，该规则启用并视作警告，否则关闭规则
  },
  overrides: [//针对指定文件的特定规则
    {
      files: [//具体的文件
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {//jesst环境被启用
        jest: true
      }
    }
  ]
}
