import { buildCssLoader } from './loaders/buildCssLoader.js';

export function buildLoaders(options) {
    const { isDev } = options;

    const javascriptLoader = {
        test: /\.(jsx?)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const resourceLoader = {
        test: /\.(ico|gif|png|jpg|jpeg)$/,
        type: 'asset/resource',
    };

    const inlineLoader = {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
    };

    return [inlineLoader, resourceLoader, javascriptLoader, cssLoader];
}
