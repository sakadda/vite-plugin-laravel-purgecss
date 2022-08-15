import PurgeCSS, { UserDefinedSafelist } from "purgecss";

export default (safeList?: UserDefinedSafelist) => {
    return {
        name: 'vite-plugin-laravel-purgecss',
        enforce: 'post',
        async generateBundle(_options, bundle) {
            const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'));
            if (!cssFiles) return;
            for (const file of cssFiles) {
                const purged = await new PurgeCSS().purge({
                    content: ['resources/views/**/*.blade.php'],
                    css: [{raw: bundle[file].source}],
                    safelist: safeList || []
                });
                bundle[file].source = purged[0].css;
            }
        }
    }
}