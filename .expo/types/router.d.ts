/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(tabs)'}/ranking/index` | `/ranking/index`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cadastro` | `/cadastro`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/codigo` | `/codigo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/perfil` | `/perfil`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/senha` | `/senha`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `${'/(tabs)'}/ranking/index` | `/ranking/index`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/cadastro` | `/cadastro`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/codigo` | `/codigo`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/perfil` | `/perfil`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/senha` | `/senha`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `${'/(tabs)'}/ranking/index${`?${string}` | `#${string}` | ''}` | `/ranking/index${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/cadastro${`?${string}` | `#${string}` | ''}` | `/cadastro${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/codigo${`?${string}` | `#${string}` | ''}` | `/codigo${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/perfil${`?${string}` | `#${string}` | ''}` | `/perfil${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/senha${`?${string}` | `#${string}` | ''}` | `/senha${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(tabs)'}/ranking/index` | `/ranking/index`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cadastro` | `/cadastro`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/codigo` | `/codigo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/perfil` | `/perfil`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/senha` | `/senha`; params?: Router.UnknownInputParams; };
    }
  }
}
