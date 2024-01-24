import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto
// tauriの場合は: @sveltejs/adapter-static に変更しました
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // preprocessorsに関する詳細は https://kit.svelte.dev/docs/integrations#preprocessors を参照してください
  // preprocessorsについての詳しい情報は上記のリンクから得られます
  preprocess: [vitePreprocess({})],

  kit: {
    // adapter-autoは一部の環境のみをサポートしています。サポートされている環境のリストは https://kit.svelte.dev/docs/adapter-auto を参照してください。
    // もしサポートされていない環境を使用しているか、特定の環境に決めている場合は、アダプターを切り替えてください。
    // アダプターに関する詳細は https://kit.svelte.dev/docs/adapters を参照してください。

    alias: {
      "@/*": "./src/lib/*",
    },
    adapter: adapter(),
  },
};

export default config;
