/// <reference types="astro/client" />
declare module 'astrowind:config' {
  export const UI: UIConfig;
}

interface SiteConfig {
  name?: string;
  base: string;
  url: string;
  staticBase: string;
}

interface DBConfig {
  name?: string;
}

interface BuildConfig {
  filename: string;
}

interface Config {
  site: SiteConfig;
  DB: DBConfig;
  build: BuildConfig;
}

declare module '*.yml' {
  const value: Config;
  export default value;
}
