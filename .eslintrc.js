module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", 2, { offsetTernaryExpressions: true }],
    // allow tsx syntax in ts files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], //should add ".ts" if typescript project
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/tsx-uses-react": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/react-in-tsx-scope": "off",
    "react/prop-types": "off",
  },
};
