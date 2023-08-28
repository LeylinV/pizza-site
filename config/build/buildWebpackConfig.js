import { buildDevServer } from './buildDevServer.js';
import { buildLoaders } from './buildLoaders.js';
import { buildPlugins } from './buildPlugins.js';
import { buildResolvers } from './buildResolvers.js';

export function buildWebpackConfig(options) {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
