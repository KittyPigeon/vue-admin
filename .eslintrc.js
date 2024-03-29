module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'semi':[
      2,
      "always",
      {
        omitLastInOneLineBlock:true
      }
    ],
    "quotes": [2, "double"], //警告，必须双引号
    "comma-dangle": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
