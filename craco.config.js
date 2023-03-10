const path = require('path');
const resolve = pathName => path.resolve(__dirname, pathName);
const CracoLessPlugin = require('craco-less');

module.exports = {

    //plugins
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],

    //目录名称别名
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils"),
            // '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
}