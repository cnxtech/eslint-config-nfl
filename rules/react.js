module.exports = {
    plugins: ["react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    // View link below for react rules documentation
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    rules: {
        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/display-name": [
            2,
            {
                ignoreTranspilerName: false
            }
        ],
        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/forbid-prop-types": [
            0,
            {
                forbid: ["any", "array", "object"]
            }
        ],
        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger": 0,
        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-deprecated": 1,
        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-mount-set-state": 2,
        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-did-update-set-state": 2,
        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        "react/no-direct-mutation-state": 2,
        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        "react/no-is-mounted": 2,
        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-multi-comp": [
            2,
            {
                ignoreStateless: true
            }
        ],
        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        "react/no-set-state": 0,
        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-string-refs": 0,
        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/no-unknown-property": 2,
        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        "react/prefer-es6-class": [2, "always"],
        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "react/prefer-stateless-function": 0,
        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/prop-types": [
            2,
            {
                ignore: [],
                customValidators: []
            }
        ],
        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/react-in-jsx-scope": 2,
        // Restrict file extensions that may be required
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
        "react/require-extension": [
            0,
            {
                extensions: [".jsx"]
            }
        ],
        // Require render() methods to return something
        // https://github.com/yannickcr/eslint-plugin-react/pull/502
        "react/require-render-return": 2,
        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/self-closing-comp": 2,
        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/sort-comp": [
            2,
            {
                order: [
                    "lifecycle",
                    "/^on.+$/",
                    "/^get.+$/",
                    "everything-else",
                    "/^render.+$/",
                    "render"
                ],
                groups: {
                    lifecycle: [
                        "constructor",
                        "displayName",
                        "state",
                        "contextTypes",
                        "childContextTypes",
                        "props",
                        "propTypes",
                        "defaultProps",
                        "static-methods",
                        "componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "componentDidUpdate",
                        "componentWillUnmount"
                    ]
                }
            }
        ],
        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        "react/sort-prop-types": [
            0,
            {
                ignoreCase: false,
                callbacksLast: false
            }
        ],
        // Prevent missing parentheses around multilines JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        "react/jsx-wrap-multilines": [
            2,
            {
                declaration: true,
                assignment: true,
                return: true
            }
        ],

        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-boolean-value": 0,
        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-bracket-location": [
            2,
            {
                nonEmpty: "line-aligned",
                selfClosing: "line-aligned"
            }
        ],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-curly-spacing": [2, "never"],
        // Enforce or disallow spaces around equal signs in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        "react/jsx-equals-spacing": [2, "never"],
        // Ensure correct position of the first property.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-first-prop-new-line": 0,
        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "react/jsx-handler-names": [
            0,
            {
                eventHandlerPrefix: "handle",
                eventHandlerPropPrefix: "on"
            }
        ],
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent-props": 0,
        // Validate JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent": [2, 4],
        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-key": 2,
        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-max-props-per-line": [
            2,
            {
                maximum: 3
            }
        ],
        // Prevent usage of .bind() and arrow functions in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-bind": [
            2,
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false
            }
        ],
        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-duplicate-props": [
            0,
            {
                ignoreCase: false
            }
        ],
        // Prevent usage of unwrapped JSX strings
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        "react/jsx-no-literals": 0,
        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        "react/jsx-no-undef": 2,
        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-pascal-case": 2,
        // Enforce props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-sort-props": [
            1,
            {
                ignoreCase: false,
                callbacksLast: true,
                shorthandFirst: true
            }
        ],
        // Enforce spaces before the closing bracket of self-closing JSX elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        "react/jsx-space-before-closing": [2, "always"],
        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-react": 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": 1
    },
    settings: {
        react: {
            pragma: "React" // Pragma to use, default to "React"
        }
    }
};
