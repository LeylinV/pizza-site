import path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig.babel";

export default (env) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
};