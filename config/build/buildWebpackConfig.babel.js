import {buildResolvers} from "./buildResolvers.babel";
import {buildPlugins} from "./buildPlugins.babel";
import {buildLoaders} from "./buildLoaders.babel";
import {buildDevServer} from "./buildDevServer.babel";

export function buildWebpackConfig(options){
    const {paths, mode, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}