// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  shortcuts: [["wh-full", "w-full h-full"]],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [presetUno(), presetAttributify()],
});
