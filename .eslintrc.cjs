module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    curly: [2, 'multi-line'], // 允许使用不带大括号的单行if、else if、else、for、while或do，同时仍然强制对其他实例使用大括号。
    eqeqeq: [0, 'always'], // 强制使用===和！==在任何情况下
    quotes: [
      2,
      'single', // 要求尽可能使用单引号
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串包含必须转义的引号
        allowTemplateLiterals: true // 允许字符串使用反斜线
      }
    ],
    semi: [2, 'always'], // 不允许以分号作为语句的结尾(除非是为了消除以[、(、/、+或-]开头的语句的歧义)
    yoda: [2, 'never'], // 比较绝对不能是尤达条件。
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 箭头函数的箭头（=>）之前/之后需要空格
    'block-spacing': [2, 'always'], // 代码块内 同一行花括号需要空格间距例如：if (foo) { bar = 0 }
    'brace-style': [
      2,
      '1tbs', // 左括号在行尾
      {
        allowSingleLine: true // 允许一个块打开和关闭括号在同一行上
      }
    ],
    'comma-dangle': [2, 'never'], // 对象、数据内等禁止使用尾随逗号
    'comma-spacing': [
      2,
      {
        before: false, // 逗号前不允许有空格
        after: true // 逗号后允许有一个或多个空格
      }
    ],
    'comma-style': [2, 'last'], // 要求在数组元素、对象属性或变量声明的后面和同一行上有逗号
    'constructor-super': 2, // 派生类的构造函数必须调用super()。非派生类的构造函数不得调用super()
    'dot-location': [2, 'property'], // “属性”选项要求点与属性在同一行上。
    'eol-last': 2, // 该规则强制在非空文件的末尾至少有一个换行符(或没有换行符)。
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 此规则旨在强制生成器函数的*周围的间距。 前后都需要空格
    'jsx-quotes': [2, 'prefer-single'], // 对不包含单引号的所有JSX属性值强制使用单引号。
    'key-spacing': [
      2,
      {
        beforeColon: false, // 不允许在对象文本中的键和冒号之间有空格。
        afterColon: true // 在冒号和对象文本中的值之间至少需要一个空格。
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true, // 关键字前至少需要一个空格
        after: true // 关键字后至少需要一个空格
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true, // 要求用大写字母开头的函数调用所有新运算符。
        capIsNew: false // 允许在没有新运算符的情况下调用大写字母开头的函数。
      }
    ],
    'new-parens': 2, // 在不带参数的新构造函数后强制使用括号(默认)
    'no-array-constructor': 2, // 这条规则不允许数组构造函数。
    'no-caller': 2, // 禁止使用arguments.caller和arguments.callee来阻止使用不推荐使用的次优代码
    'no-console': 'off', // 可以使用console
    'no-class-assign': 2, // 不允许修改类声明的变量。
    'no-cond-assign': 2, // 不允许在条件语句中使用赋值运算符。
    'no-const-assign': 2, // 不允许修改使用const声明的变量。
    'no-control-regex': 0, // 不允许在正则表达式中使用控制字符。关闭
    'no-delete-var': 2, // 不允许删除变量。
    'no-dupe-args': 2, // 不允许函数定义中有重复的参数。 "extends": "eslint:recommended"
    'no-dupe-class-members': 2, // 不允许类成员中有重复的名称。 "extends": "eslint:recommended"
    'no-dupe-keys': 0, // 不允许对象文本中有重复的键。 "extends": "eslint:recommended"
    'no-duplicate-case': 2, // 不允许重复的 case 标签。 switch case中 "extends": "eslint:recommended"
    'no-empty-character-class': 2, // 不允许在正则表达式中使用空字符类。 "extends": "eslint:recommended"
    'no-empty-pattern': 2, // 不允许空的解构模式。 "extends": "eslint:recommended"
    'no-eval': 2, // 禁止使用eval()函数
    'no-ex-assign': 2, // 不允许在catch子句中重新分配异常。"extends": "eslint:recommended"
    'no-extend-native': 2, // 不允许直接修改内置对象的原型。
    'no-extra-bind': 2, // 旨在避免不必要地使用bind()，因此，每当立即调用的函数表达式(IIFE)使用bind()并且没有适当的This值时，都会发出警告
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'], // 仅在函数表达式中不允许不必要的括号
    'no-fallthrough': 2, // 不允许case语句失败 + break 或 return。"extends": "eslint:recommended"
    'no-floating-decimal': 2, // 不允许在数值中使用前导或尾随小数点。 如：.7
    'no-func-assign': 2, // 不允许重新分配函数声明。 "extends": "eslint:recommended"
    'no-implied-eval': 2, // 不允许使用类似eval()的方法。
    'no-inner-declarations': [2, 'functions'], // 不允许在嵌套块中声明函数 "extends": "eslint:recommended"
    'no-invalid-regexp': 2, // 不允许在RegExp构造函数中使用无效的正则表达式字符串。 "extends": "eslint:recommended"
    'no-irregular-whitespace': 2, // 不允许不规则的空白字符 "extends": "eslint:recommended"
    'no-iterator': 2, // 不允许使用__iterator__属性。
    'no-label-var': 2, // 不允许标签是变量名。
    'no-labels': [
      2,
      {
        allowLoop: false, // 如果此选项设置为true，此规则将忽略坚持循环语句的标签。
        allowSwitch: false // 如果此选项设置为true，此规则将忽略坚持switch语句的标签。
      }
    ],
    'no-lone-blocks': 1, // 不允许不必要的嵌套块。
    'no-mixed-spaces-and-tabs': 2, // 不允许混合空格和制表符缩进。 "extends": "eslint:recommended"
    'no-multi-spaces': 2, // 不允许多个连续空格。
    'no-multi-str': 2, // 防止使用多行字符串。
    'no-multiple-empty-lines': [
      2,
      {
        max: 1 // 强制连续空行的最大数量。
      }
    ],
    'no-native-reassign': 2, // 不允许修改只读全局变量。
    'no-negated-in-lhs': 2, // 不允许在in表达式中对左操作数求反。
    'no-new-object': 2, // 不允许对Object对象使用新运算符。
    'no-new-require': 2, // 消除 new require() 表达式的使用。
    'no-new-symbol': 2, // 不允许使用 new Symbol('foo')
    'no-new-wrappers': 2, // 不允许对字符串、数字和布尔对象使用new运算符。
    'no-obj-calls': 2, // 该规则不允许将Math、JSON、Reflect和Atomics对象作为函数调用。 "extends": "eslint:recommended"
    'no-octal': 2, // 不允许八进制文本。"extends": "eslint:recommended"
    'no-octal-escape': 2, // 不允许在字符串中使用八进制转义序列。
    'no-path-concat': 2, // 使用__dirname和__filename时不允许字符串串联。
    'no-proto': 2, // 不允许使用__proto__属性。
    'no-redeclare': 2, // 不允许变量重新声明。 "extends": "eslint:recommended"
    'no-regex-spaces': 2, // 不允许正则表达式文本中有多个空格。"extends": "eslint:recommended"
    'no-return-assign': [2, 'except-parens'], // 不允许在return语句中使用赋值运算符。 除非用括号括起来，否则不允许赋值。
    'no-self-assign': 2, // 不允许两边完全相同的赋值。
    'no-self-compare': 2, // 不允许两边完全相同的比较。
    'no-sequences': 2, // 不允许使用逗号运算符。
    'no-shadow-restricted-names': 2, // 全局对象的值属性(NaN、Infinity、undefined) eval 被视为受限名称,不允许定义为其他含义
    'no-spaced-func': 2, // 不允许函数标识符及其应用程序之间有空格。
    'no-sparse-arrays': 2, // 不允许稀疏数组。
    'no-this-before-super': 2, // 在构造函数中调用super()之前，不允许使用此/super。
    'no-throw-literal': 2, // 该规则旨在通过禁止抛出文字和其他不可能是错误对象的表达式来保持抛出异常时的一致性。
    'no-trailing-spaces': 2, // 此规则不允许在行尾出现尾随空白(空格、制表符和其他Unicode空白字符)。
    'no-undef': 0, // 除非在/*global */注释中提到，否则不允许使用未声明的变量。
    'no-undef-init': 0, // 不允许初始化未定义的变量。
    'no-unexpected-multiline': 2, // 不允许混淆的多行表达式。
    'no-unmodified-loop-condition': 2, // 不允许未修改的循环条件
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false // 不允许将条件表达式作为默认赋值模式
      }
    ],
    'no-unreachable': 1, // 在return、throw、continue和break语句后不允许不可访问的代码。
    'no-unsafe-finally': 2, // 不允许在finally块中使用控制流语句。
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '.*', // 检查所有变量是否被使用，包括全局范围内的变量。这是默认设置。
        args: 'none' // 不检查参数
      }
    ],
    'no-useless-call': 2, // 不允许不必要的 call 和 apply调用
    'no-useless-computed-key': 2, // 不允许在对象和类中使用不必要的计算属性键。
    'no-useless-constructor': 2, // 不允许不必要的构造函数。
    'no-useless-escape': 0, // 不允许不必要的转义字符 "extends": "eslint:recommended"
    'no-whitespace-before-property': 2, // 属性前不允许有空格
    'no-with': 2, // 不允许with语句
    'one-var': [
      1,
      {
        initialized: 'never' // 每个作用域要求多个变量声明用于初始化变量
      }
    ],
    'operator-linebreak': [
      2,
      'after', // 要求在运算符后放置换行符
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'], // 不允许在block语句、函数体、类静态块、类和switch语句的开头和结尾出现空行
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: "要使用类似 import get from 'lodash/get' 的导入方式",
            allowTypeImports: true
          }
        ]
      }
    ],
    'semi-spacing': [
      2,
      {
        before: false, // 分号前强制使用空格
        after: true // 分号后强制使用空格 仅当分号不在行尾时，才会应用after选项。
      }
    ],
    'space-before-blocks': [2, 'always'], // 块必须总是有至少一个前导空格
    'space-before-function-paren': 0, // 函数括号前需要或不允许有空格。关闭此规则
    'space-in-parens': [2, 'never'], // 强制圆括号内的空格为零
    'space-infix-ops': 2, // 要求中缀运算符周围有间距。
    'space-unary-ops': [
      // 一元运算符前后需要或不允许空格。
      2,
      {
        words: true, // 适用于一元字运算符，如:new、delete、typeof、void、yield
        nonwords: false // 不适用于一元运算符，如:-、+、-、++、！, !！
      }
    ],
    'spaced-comment': [
      // 强制注释中//或/*后面的间距一致
      1,
      'always', // //或/*后面必须至少有一个空格。
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [2, 'never'], // 不允许大括号对中有空格。
    'use-isnan': 2, // 检查NaN时需要调用isNaN()。
    'valid-typeof': 2, // 强制将typeof表达式与有效的字符串文字进行比较。
    'wrap-iife': [2, 'any'], // 要求所有立即调用的函数表达式都用括号括起来。
    'yield-star-spacing': [2, 'both'], // 强制yield*表达式中*周围的间距。

    'prefer-const': 1, // 对于声明后从不重新赋值的变量，需要const声明。
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产模式不允许debugger，开发模式允许
    'object-curly-spacing': [
      2,
      'always', // 大括号内需要空格(除{})
      {
        objectsInObjects: true // 要求以object元素开始和/或结束的对象的大括号内有间距(当第一个选项设置为“从不”时适用)
      }
    ],
    'array-bracket-spacing': [2, 'never'], // 不允许数组括号内有空格
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容前后强制换行符 关闭
    'vue/html-self-closing': 'off', // 将自结束符号（自关闭标签）强制作为配置的样式 关闭
    'no-case-declarations': 'off',

    // ---以下为代码复杂度相关配置---
    complexity: ['warn', 15], // 圈复杂度，超过15会警告提示
    'max-len': ['warn', { code: 120 }], // 单行最大长度
    'max-depth': ['warn', 4], // 执行块可以嵌套的最大深度 默认为4
    'max-lines': [
      'warn',
      { max: 1000, skipBlankLines: true, skipComments: true }
    ], // 文件最大行数，除去空格及注释
    'max-lines-per-function': [
      'warn',
      { max: 100, skipBlankLines: true, skipComments: true }
    ], // 单个方法最大行数，除去空格及注释
    'max-nested-callbacks': ['warn', 4], // 回调最大嵌套层数
    'max-params': ['warn', 5] // 方法定义最长参数个数
    // ---以上为代码复杂度相关配置---
  }
};
