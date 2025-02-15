module.exports = {
    env: {
        es6: true
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            globalReturn: false,
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    plugins: ["import"],
    rules: {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        "arrow-body-style": 0,
        // require parens in arrow function arguments
        "arrow-parens": 0,
        // require space before/after arrow function"s arrow
        // http://eslint.org/docs/rules/arrow-spacing
        "arrow-spacing": [
            2,
            {
                before: true,
                after: true
            }
        ],
        // require trailing commas in multiline object literals
        "comma-dangle": [2, "never"],
        // verify super() callings in constructors
        "constructor-super": 0,
        // enforce the spacing around the * in generator functions
        "generator-star-spacing": 0,
        // disallow modifying variables of class declarations
        "no-class-assign": 0,
        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        "no-confusing-arrow": [
            2,
            {
                allowParens: true
            }
        ],
        // disallow modifying variables that are declared using const
        "no-const-assign": 2,
        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-class-members": 2,
        // disallow importing from the same path more than once
        // http://eslint.org/docs/rules/no-duplicate-imports
        "no-duplicate-imports": 2,
        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        "no-new-symbol": 1,
        // disallow specific globals
        "no-restricted-globals": 0,
        // disallow specific imports
        // http://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-imports": 0,
        // disallow to use this/super before super() calling in constructors.
        "no-this-before-super": 0,
        // require let or const instead of var
        "no-var": 1,
        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        "no-useless-constructor": 1,
        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        "object-shorthand": [2, "always"],
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": 2,
        // suggest using of const declaration for variables that are never modified after declared
        "prefer-const": 2,
        // suggest using the spread operator instead of .apply()
        "prefer-spread": 2,
        // suggest using Reflect methods where applicable
        "prefer-reflect": 0,
        // use rest parameters instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        "prefer-rest-params": 2,
        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        "prefer-template": 2,
        // disallow generator functions that do not have yield
        "require-yield": 0,
        // import sorting
        // http://eslint.org/docs/rules/sort-imports
        "sort-imports": 0,
        // enforce usage of spacing in template strings
        // http://eslint.org/docs/rules/template-curly-spacing
        "template-curly-spacing": [2, "never"],
        // enforce spacing around the * in yield* expressions
        // http://eslint.org/docs/rules/yield-star-spacing
        "yield-star-spacing": [2, {before: false, after: true}],
        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        "import/export": 2,
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-unresolved": [
            2,
            {
                commonjs: true
            }
        ],

        "import/named": 2,
        "import/default": 2,
        "import/namespace": 2,
        "import/no-require": 0,
        "import/no-namespace": 0,
        "import/no-named-as-default": 2,
        "import/no-named-as-default-member": 0,
        "import/no-errors": [0, "include-messages"]
    },
    settings: {
        "import/ignore": ["node_modules", ".(scss|less|css)$", ".[^js(x)?]+$"],
        "import/parser": "babel-eslint",
        "import/resolve": {
            extensions: [".js", ".json"],

            moduleDirectory: [
                "node_modules",
                "node_modules/@nfl/gridiron/node_modules",
                "."
            ]
        },
        "import/resolver": {
            node: true
        }
    }
};
