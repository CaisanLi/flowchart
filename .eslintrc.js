module.exports = {
 root: true,

 env: {
   node: true
 },

 extends: [
  'eslint:recommended',
  'plugin:vue/base',
  'plugin:vue/essential',
  'plugin:vue/strongly-recommended',
  'prettier',
  '@vue/typescript'
 ],

 rules: {
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      'allowSingleExtends': true
    }
  ],
   'prefer-arrow-callback': 'off',
   /**
    * 运算符前后空格
    */
   'space-infix-ops': 'error',
   /**
    * 大括号前强制有空格
    */
   'space-before-blocks': 'error',
   /**
    * 对象key后的冒号需要和value有空格
    */
   'key-spacing': ['error', { 'beforeColon': false }],
   /**
    * 大括号内空格{ //... }
    */
   'block-spacing': 'error',
   /**
    * 箭头函数 箭头前后空格
    */
   'arrow-spacing': 'error',
   /**
    * 关键字前后空格
    */
   'keyword-spacing': ['error'],
   /**
    * 强制在花括号中使用一致的空格
    */
   'object-curly-spacing': ['error', 'always'],
   /**
    * 使用单引号
    */
   'quotes': ['error', 'single'],
 },

 parserOptions: {
   parser: '@typescript-eslint/parser'
 },

 overrides: [
   {
     files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
     env: {
       jest: true
     }
   }
 ],
}
