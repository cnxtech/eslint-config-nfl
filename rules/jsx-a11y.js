module.exports = {
    plugins: ["jsx-a11y"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    // View link below for react rules documentation
    // https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
    rules: {
        // Prevent use of `accessKey`
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        "jsx-a11y/no-access-key": 1,

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        "jsx-a11y/anchor-has-content": 0,

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        "jsx-a11y/click-events-have-key-events": 0,

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
        "jsx-a11y/label-has-for": 1,
        "jsx-a11y/lang": 1,
        "jsx-a11y/mouse-events-have-key-events": 1,
        "jsx-a11y/no-onchange": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/onclick-has-focus": 0,
        "jsx-a11y/role-has-required-aria-props": 1,
        "jsx-a11y/role-supports-aria-props": 1,
        "jsx-a11y/scope": 1,
        "jsx-a11y/tabindex-no-positive": 1,
        "jsx-a11y/accessible-emoji": 1,
        "jsx-a11y/aria-activedescendant-has-tabindex": 1,
        "jsx-a11y/iframe-has-title": 1,
        "jsx-a11y/no-autofocus": 2,
        "jsx-a11y/no-distracting-elements": 1, // consolidated no-marquee and no-blink
        "jsx-a11y/no-redundant-roles": 1,
        "jsx-a11y/alt-text": 1,
        "jsx-a11y/no-static-element-interactions": [
            "error",
            {
                handlers: [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp"
                ]
            }
        ],
        "jsx-a11y/no-noninteractive-element-interactions": [
            1,
            {
                handlers: [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp"
                ]
            }
        ],
        "jsx-a11y/interactive-supports-focus": [
            1,
            {
                tabbable: [
                    "button",
                    "checkbox",
                    "link",
                    "searchbox",
                    "spinbutton",
                    "switch",
                    "textbox"
                ]
            }
        ],
        "jsx-a11y/media-has-caption": 0, // This is already provided in the HLS file
        "jsx-a11y/no-interactive-element-to-noninteractive-role": [
            1,
            {
                ul: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                ol: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                li: ["menuitem", "option", "row", "tab", "treeitem"],
                table: ["grid"],
                td: ["gridcell"]
            }
        ],
        "jsx-a11y/no-noninteractive-element-to-interactive-role": [
            1,
            {
                ul: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                ol: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid"
                ],
                li: ["menuitem", "option", "row", "tab", "treeitem"],
                table: ["grid"],
                td: ["gridcell"]
            }
        ],
        "jsx-a11y/no-noninteractive-tabindex": 1
    }
};
