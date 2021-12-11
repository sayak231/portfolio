// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true,
//     node: true,
//   },
//   rules: {
//     // "import/extensions": [
//     //   "error",
//     //   "always",
//     //   {
//     //     js: "never",
//     //     jsx: "never",
//     //     ts: "never",
//     //     tsx: "never",
//     //   },
//     // ],
//     "no-console": "error",
//     // "react/prop-types": "off",

//     // "prettier/prettier": ["error", {}, { usePrettierrc: true }],
//     // "react/react-in-jsx-scope": "off",
//     // "jsx-a11y/accessible-emoji": "off",
//     // "@typescript-eslint/explicit-function-return-type": "off",
//     // "simple-import-sort/imports": "error",
//     // "simple-import-sort/exports": "error",
//     // "jsx-a11y/anchor-is-valid": [
//     //   "error",
//     //   {
//     //     components: ["Link"],
//     //     specialLink: ["hrefLeft", "hrefRight"],
//     //     aspects: ["invalidHref", "preferButton"],
//     //   },
//     // ],

//     "no-unused-vars": "off",
//     "react/jsx-indent": [0],
//     "react/react-in-jsx-scope": 0,
//     "react/jsx-indent-props": [2, "tab"],
//     "react/jsx-props-no-spreading": "off",
//     "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
//     "no-use-before-define": [0],
//     "react/display-name": 0,
//     "react/prop-types": 0,
// "@typescript-eslint/explicit-function-return-type": 0,
// "@typescript-eslint/explicit-member-accessibility": 0,
// "@typescript-eslint/indent": 0,
// "@typescript-eslint/member-delimiter-style": 0,
// "@typescript-eslint/no-explicit-any": 0,
// "@typescript-eslint/no-var-requires": 0,
// "@typescript-eslint/no-use-before-define": 0,
// "@typescript-eslint/no-unused-vars": [
//   1,
//   {
//     argsIgnorePattern: "^_",
//   },
// ],
// "import/prefer-default-export": 1,
// "no-shadow": 1,
// "prefer-const": 1,
// "prefer-spread": 1,
// "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
// "no-return-assign": "off",
// "no-underscore-dangle": "off",
// "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
// "no-param-reassign": [
//   "error",
//   { props: true, ignorePropertyModificationsFor: ["state"] },
// ],
//   },
// extends: [
//   "eslint:recommended",
//   "plugin:react/recommended",
//   "plugin:@typescript-eslint/recommended",
//   "plugin:react-hooks/recommended",
//   "plugin:prettier/recommended",
// ],
// parser: "@typescript-eslint/parser",
//   root: true,
//   plugins: ["simple-import-sort", "prettier"],
// parserOptions: {
//   ecmaVersion: 2020,
//   sourceType: "module",
//   ecmaFeatures: {
//     modules: true,
//     jsx: true,
//   },
//   project: "./tsconfig.json",
// },
// settings: {
//   "import/resolver": {
//     node: {
//       extensions: [".js", ".jsx", ".ts", ".tsx"],
//       moduleDirectory: ["node_modules", "src/"],
//     },
//   },
//   react: {
//     version: "detect",
//   },
// },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "no-var": 0,
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }], //should add ".ts" if typescript project
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-shadow": 1,
    "prefer-const": 1,
    "prefer-spread": 1,
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
    "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
