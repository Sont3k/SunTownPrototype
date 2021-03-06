module.exports = function(api) {
    api.cache(true);

    const presets = ["@babel/preset-env", "@babel/preset-react"];
    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "react-loadable/babel",
        [
            "@babel/plugin-transform-runtime",
            {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-transform-object-assign",
	"@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-logical-assignment-operators",
        "@babel/plugin-proposal-optional-chaining",
        [
            "@babel/plugin-proposal-pipeline-operator",
            {
                proposal: "minimal"
            }
        ],
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-do-expressions"
    ];

    return {
        presets,
        plugins
    };
};
