import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './styles/global.css';

import Home from './pages/index.vue';
import ColorsPage from './pages/foundations/colors.vue';
import TypographyPage from './pages/foundations/typography.vue';
import SpacingPage from './pages/foundations/spacing.vue';
import ButtonPage from './pages/components/button.vue';
import InputPage from './pages/components/input.vue';
import CardPage from './pages/components/card.vue';
import BadgePage from './pages/components/badge.vue';
import AlertPage from './pages/components/alert.vue';
import TypographyComponentPage from './pages/components/typography.vue';

import FormElementsPage from './pages/components/form-elements.vue';
import ModalPage from './pages/components/modal.vue';
import TabsPage from './pages/components/tabs.vue';
import AdvancedFormsPage from './pages/components/advanced-forms.vue';
import DisplayPage from './pages/components/display.vue';
import NavigationLayoutPage from './pages/components/navigation-layout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/foundations/colors', component: ColorsPage },
    { path: '/foundations/typography', component: TypographyPage },
    { path: '/foundations/spacing', component: SpacingPage },
    { path: '/components/button', component: ButtonPage },
    { path: '/components/input', component: InputPage },
    { path: '/components/card', component: CardPage },
    { path: '/components/badge', component: BadgePage },
    { path: '/components/alert', component: AlertPage },
    { path: '/components/typography', component: TypographyComponentPage },
    { path: '/components/form-elements', component: FormElementsPage },
    { path: '/components/advanced-forms', component: AdvancedFormsPage },
    { path: '/components/display', component: DisplayPage },
    { path: '/components/navigation-layout', component: NavigationLayoutPage },
    { path: '/components/modal', component: ModalPage },
    { path: '/components/tabs', component: TabsPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
