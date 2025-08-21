// Local ambient declarations to avoid requiring 'vite/client' types
declare interface ImportMetaEnv {
  readonly [key: string]: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
