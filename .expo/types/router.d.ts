/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/Imageflow`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/addColor`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/useImage`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/ImageFlow/Imageflow`; params?: Router.UnknownOutputParams; } | { pathname: `/ImageFlow/addColor`; params?: Router.UnknownOutputParams; } | { pathname: `/ImageFlow/useImage`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/ImageFlow/Imageflow${`?${string}` | `#${string}` | ''}` | `/ImageFlow/addColor${`?${string}` | `#${string}` | ''}` | `/ImageFlow/useImage${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/Imageflow`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/addColor`; params?: Router.UnknownInputParams; } | { pathname: `/ImageFlow/useImage`; params?: Router.UnknownInputParams; } | `/+not-found${`?${string}` | `#${string}` | ''}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
