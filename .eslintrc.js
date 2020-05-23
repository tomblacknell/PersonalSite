module.exports = {
    globals: {
        // __PATH_PREFIX__: true,
    },
    extends: `airbnb`,
    overrides: [
        {
            "files": ["*.js", "*.jsx"],
            "rules": {
                "react/prop-types": "off",
                "react/no-danger": "off",
            }
        }
    ]
}