import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildPlugins({ paths, isDev }) {
    const isProd = !isDev;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'styles/[name].[contenthash:8].css',
                chunkFilename: 'styles/[name].[contenthash:8].css',
            }),
        );
    }

    return plugins;
}
