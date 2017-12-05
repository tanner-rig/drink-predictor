module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "globals": {
      "afterAll": true,
      "afterEach": true,
      "beforeAll": true,
      "beforeEach": true,
      "describe": false,
      "expect": false,
      "it": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2, {"SwitchCase": 1}],
        "no-console": [
            "error",
            { allow: ["warn", "error", "info"] }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "semi": [
            "error",
            "always"
        ]
    }
};