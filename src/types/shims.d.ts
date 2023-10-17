import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare interface Window {
  // extend the window
}

declare global {
  namespace astroHTML.JSX {
    // UnoCSS attributify: https:// unocss.dev/presets/attributify#astro
    interface HTMLAttributes extends AttributifyAttributes { }
  }
}

declare module '@vue/runtime-dom' {
  // UnoCSS attributify: https:// unocss.dev/presets/attributify#vue-3
  interface HTMLAttributes extends AttributifyAttributes {}
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}
