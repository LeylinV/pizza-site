export function buildResolvers(options) {
    return {
        extensions: ['.jsx', '.js', '.cjs', '.mjs'],
        preferRelative: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
    };
}
