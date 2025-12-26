declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, any>, Record<string, any>, any>;
  export default component;
}

declare module '@vue-ds/components' {
  export * from '../../components/src';
  import * as C from '../../components/src';
  const components: typeof C;
  export default components;
}
