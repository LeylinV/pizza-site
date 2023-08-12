export function buildDevServer(options) {
    return {
        static: options.paths.build,
        port: options.port,
        open: true,
        hot: 'only',
        historyApiFallback: true,
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
    }
}