import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/foundations',
    name: 'Foundations',
    component: () => import('./views/FoundationsView.vue'),
    children: [
      {
        path: 'colour',
        name: 'FoundationsColour',
        component: () => import('./views/foundations/ColourView.vue'),
      },
      {
        path: 'typography',
        name: 'FoundationsTypography',
        component: () => import('./views/foundations/TypographyView.vue'),
      },
      {
        path: 'spacing-layout',
        name: 'FoundationsSpacing',
        component: () => import('./views/foundations/SpacingView.vue'),
      },
      {
        path: 'radius',
        name: 'FoundationsRadius',
        component: () => import('./views/foundations/RadiusView.vue'),
      },
      {
        path: 'elevation-shadow',
        name: 'FoundationsElevation',
        component: () => import('./views/foundations/ElevationView.vue'),
      },
      {
        path: 'border-stroke',
        name: 'FoundationsBorder',
        component: () => import('./views/foundations/BorderView.vue'),
      },
      {
        path: 'motion',
        name: 'FoundationsMotion',
        component: () => import('./views/foundations/MotionView.vue'),
      },
      {
        path: 'opacity',
        name: 'FoundationsOpacity',
        component: () => import('./views/foundations/OpacityView.vue'),
      },
      {
        path: 'breakpoints',
        name: 'FoundationsBreakpoints',
        component: () => import('./views/foundations/BreakpointsView.vue'),
      },
      {
        path: 'accessibility',
        name: 'FoundationsAccessibility',
        component: () => import('./views/foundations/AccessibilityView.vue'),
      },
      {
        path: 'icon-system',
        name: 'FoundationsIcons',
        component: () => import('./views/foundations/IconsView.vue'),
      },
    ],
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('./views/ComponentsView.vue'),
    children: [
      {
        path: 'button',
        name: 'ComponentsButton',
        component: () => import('./views/components/ButtonView.vue'),
      },
      {
        path: 'input',
        name: 'ComponentsInput',
        component: () => import('./views/components/InputView.vue'),
      },
      {
        path: 'textarea',
        name: 'ComponentsTextarea',
        component: () => import('./views/components/TextareaView.vue'),
      },
      {
        path: 'select',
        name: 'ComponentsSelect',
        component: () => import('./views/components/SelectView.vue'),
      },
      {
        path: 'checkbox',
        name: 'ComponentsCheckbox',
        component: () => import('./views/components/CheckboxView.vue'),
      },
      {
        path: 'radio',
        name: 'ComponentsRadio',
        component: () => import('./views/components/RadioView.vue'),
      },
      {
        path: 'toggle-switch',
        name: 'ComponentsToggle',
        component: () => import('./views/components/ToggleView.vue'),
      },
      {
        path: 'badge',
        name: 'ComponentsBadge',
        component: () => import('./views/components/BadgeView.vue'),
      },
      {
        path: 'card',
        name: 'ComponentsCard',
        component: () => import('./views/components/CardView.vue'),
      },
      {
        path: 'modal-dialog',
        name: 'ComponentsModal',
        component: () => import('./views/components/ModalView.vue'),
      },
      {
        path: 'alert',
        name: 'ComponentsAlert',
        component: () => import('./views/components/AlertView.vue'),
      },
      {
        path: 'toast',
        name: 'ComponentsToast',
        component: () => import('./views/components/ToastView.vue'),
      },
      {
        path: 'tabs',
        name: 'ComponentsTabs',
        component: () => import('./views/components/TabsView.vue'),
      },
      {
        path: 'dropdown-menu',
        name: 'ComponentsDropdown',
        component: () => import('./views/components/DropdownView.vue'),
      },
      {
        path: 'divider',
        name: 'ComponentsDivider',
        component: () => import('./views/components/DividerView.vue'),
      },
      {
        path: 'tooltip',
        name: 'ComponentsTooltip',
        component: () => import('./views/components/TooltipView.vue'),
      },
      {
        path: 'avatar',
        name: 'ComponentsAvatar',
        component: () => import('./views/components/AvatarView.vue'),
      },
      {
        path: 'table',
        name: 'ComponentsTable',
        component: () => import('./views/components/TableView.vue'),
      },
    ],
  },
  {
    path: '/agentic',
    name: 'Agentic',
    component: () => import('./views/AgenticView.vue'),
    children: [
      {
        path: 'prompt-input',
        name: 'AgenticPrompt',
        component: () => import('./views/agentic/PromptView.vue'),
      },
      {
        path: 'agent-run',
        name: 'AgenticRun',
        component: () => import('./views/agentic/RunView.vue'),
      },
      {
        path: 'tool-call',
        name: 'AgenticTool',
        component: () => import('./views/agentic/ToolView.vue'),
      },
      {
        path: 'timeline',
        name: 'AgenticTimeline',
        component: () => import('./views/agentic/TimelineView.vue'),
      },
      {
        path: 'status-badges',
        name: 'AgenticStatus',
        component: () => import('./views/agentic/StatusView.vue'),
      },
      {
        path: 'empty-states',
        name: 'AgenticEmpty',
        component: () => import('./views/agentic/EmptyView.vue'),
      },
      {
        path: 'error-states',
        name: 'AgenticError',
        component: () => import('./views/agentic/ErrorView.vue'),
      },
    ],
  },
  {
    path: '/tone-of-voice',
    name: 'ToneOfVoice',
    component: () => import('./views/ToneOfVoiceView.vue'),
  },
]

export default routes