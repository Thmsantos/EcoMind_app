/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/apresentaCalculadora` | `/apresentaCalculadora`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/calculadora` | `/calculadora`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/estatisticas` | `/estatisticas`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/resultados` | `/resultados`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/apresentaCalculadora` | `/apresentaCalculadora`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/calculadora` | `/calculadora`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/estatisticas` | `/estatisticas`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/resultados` | `/resultados`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/apresentaCalculadora${`?${string}` | `#${string}` | ''}` | `/apresentaCalculadora${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/calculadora${`?${string}` | `#${string}` | ''}` | `/calculadora${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/estatisticas${`?${string}` | `#${string}` | ''}` | `/estatisticas${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/resultados${`?${string}` | `#${string}` | ''}` | `/resultados${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/apresentaCalculadora` | `/apresentaCalculadora`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/calculadora` | `/calculadora`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/estatisticas` | `/estatisticas`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/resultados` | `/resultados`; params?: Router.UnknownInputParams; };
    }
  }
}
