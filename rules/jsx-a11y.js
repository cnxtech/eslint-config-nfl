module.exports = {
    "plugins": [
        "jsx-a11y"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    // View link below for react rules documentation
    // https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
    "rules": {
        // Prevent use of `accessKey`
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        "jsx-a11y/no-access-key": 1,

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        "jsx-a11y/anchor-has-content": 0,
        
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        "jsx-a11y/click-events-have-key-events": 1,

        // Require <img> to have a non-empty `alt` prop, or role="presentation"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-uses-alt.md
        "jsx-a11y/img-has-alt": [1, ["Image", "Thumbnail"]],

        // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/redundant-alt.md
        "jsx-a11y/img-redundant-alt": 1,

        // Require ARIA roles to be valid and non-abstract
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/valid-aria-role.md
        "jsx-a11y/aria-props": 1,
        "jsx-a11y/aria-proptypes": 1,
        "jsx-a11y/aria-role": 2,
        "jsx-a11y/aria-unsupported-elements": 1,
        "jsx-a11y/heading-has-content": 1,
        "jsx-a11y/href-no-hash": 1,
        "jsx-a11y/html-has-lang": 1,
        "jsx-a11y/label-has-for": [1, "label"],
        "jsx-a11y/lang": 1,
        "jsx-a11y/mouse-events-have-key-events": 1,
        "jsx-a11y/no-onchange": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/onclick-has-focus": 0,
        "jsx-a11y/onclick-has-role": 1,
        "jsx-a11y/role-has-required-aria-props": 1,
        "jsx-a11y/role-supports-aria-props": 1,
        "jsx-a11y/scope": 1,
        "jsx-a11y/tabindex-no-positive": 1
    }
};
