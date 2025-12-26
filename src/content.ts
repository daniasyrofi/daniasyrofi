import { ref } from 'vue'

export interface NavGroup {
  title: string
  icon: string
  items: NavItem[]
}

export interface NavItem {
  title: string
  path: string
  description: string
}

export interface PageSection {
  title: string
  content: string
  component?: string
}

export interface ComponentProps {
  name: string
  type: string
  required: boolean
  default: string
  description: string
}

export interface Token {
  name: string
  value: string
  description: string
}

export interface Example {
  title: string
  description: string
  code: string
  isGood: boolean
}

export interface PageContent {
  title: string
  description: string
  overview: string
  anatomy?: string
  specs?: Token[]
  variants?: string[]
  states?: string[]
  contentRules?: string[]
  accessibility?: string[]
  motion?: string[]
  doDont?: string[]
  examples?: Example[]
  props?: ComponentProps[]
  tokens?: Token[]
}

export const navGroups = ref<NavGroup[]>([
  {
    title: 'Foundations',
    icon: 'ri-palette-line',
    items: [
      { title: 'Colour', path: '/foundations/colour', description: 'Brand and semantic color system' },
      { title: 'Typography', path: '/foundations/typography', description: 'Font hierarchy and usage' },
      { title: 'Spacing & Layout', path: '/foundations/spacing-layout', description: 'Spacing scale and layout principles' },
      { title: 'Radius', path: '/foundations/radius', description: 'Border radius system' },
      { title: 'Elevation & Shadow', path: '/foundations/elevation-shadow', description: 'Elevation levels and shadows' },
      { title: 'Border & Stroke', path: '/foundations/border-stroke', description: 'Border thickness and styles' },
      { title: 'Motion', path: '/foundations/motion', description: 'Animation and transition guidelines' },
      { title: 'Opacity', path: '/foundations/opacity', description: 'Opacity and transparency usage' },
      { title: 'Breakpoints', path: '/foundations/breakpoints', description: 'Responsive breakpoints' },
      { title: 'Accessibility', path: '/foundations/accessibility', description: 'Accessibility guidelines' },
      { title: 'Icon System', path: '/foundations/icon-system', description: 'Icon usage and guidelines' },
    ],
  },
  {
    title: 'Components',
    icon: 'ri-layout-grid-line',
    items: [
      { title: 'Button', path: '/components/button', description: 'Primary action buttons' },
      { title: 'Input', path: '/components/input', description: 'Text input fields' },
      { title: 'Textarea', path: '/components/textarea', description: 'Multi-line text input' },
      { title: 'Select', path: '/components/select', description: 'Dropdown selection' },
      { title: 'Checkbox', path: '/components/checkbox', description: 'Checkbox input' },
      { title: 'Radio', path: '/components/radio', description: 'Radio button input' },
      { title: 'Toggle Switch', path: '/components/toggle-switch', description: 'On/off toggle' },
      { title: 'Badge', path: '/components/badge', description: 'Status indicators' },
      { title: 'Card', path: '/components/card', description: 'Content containers' },
      { title: 'Modal Dialog', path: '/components/modal-dialog', description: 'Modal overlays' },
      { title: 'Alert', path: '/components/alert', description: 'Notification alerts' },
      { title: 'Toast', path: '/components/toast', description: 'Temporary notifications' },
      { title: 'Tabs', path: '/components/tabs', description: 'Tab navigation' },
      { title: 'Dropdown Menu', path: '/components/dropdown-menu', description: 'Context menus' },
      { title: 'Divider', path: '/components/divider', description: 'Content dividers' },
      { title: 'Tooltip', path: '/components/tooltip', description: 'Hover tooltips' },
      { title: 'Avatar', path: '/components/avatar', description: 'User avatars' },
      { title: 'Table', path: '/components/table', description: 'Data tables' },
    ],
  },
  {
    title: 'Agentic Patterns',
    icon: 'ri-robot-2-line',
    items: [
      { title: 'Prompt Input', path: '/agentic/prompt-input', description: 'Agent prompt interface' },
      { title: 'Agent Run', path: '/agentic/agent-run', description: 'Agent execution card' },
      { title: 'Tool Call', path: '/agentic/tool-call', description: 'Tool execution interface' },
      { title: 'Timeline', path: '/agentic/timeline', description: 'Execution timeline' },
      { title: 'Status Badges', path: '/agentic/status-badges', description: 'Status indicators' },
      { title: 'Empty States', path: '/agentic/empty-states', description: 'Empty content states' },
      { title: 'Error States', path: '/agentic/error-states', description: 'Error handling states' },
    ],
  },
  {
    title: 'Tone of Voice',
    icon: 'ri-chat-3-line',
    items: [
      { title: 'Tone of Voice', path: '/tone-of-voice', description: 'Communication guidelines' },
    ],
  },
])

export const getPageContent = (path: string): PageContent => {
  const contentMap: Record<string, PageContent> = {
    '/foundations/colour': {
      title: 'Colour',
      description: 'Brand and semantic color system',
      overview: 'The Agentic Design System uses a comprehensive color system with brand colors, neutral palette, and semantic colors for consistent visual communication.',
      specs: [
        { name: 'Brand Primary', value: '#D72539', description: 'Primary brand color' },
        { name: 'Brand 50', value: '#FCEEEF', description: 'Lightest brand tint' },
        { name: 'Brand 900', value: '#67121B', description: 'Darkest brand shade' },
        { name: 'Neutral 0', value: '#FAF9F8', description: 'Lightest neutral' },
        { name: 'Neutral 900', value: '#222222', description: 'Darkest neutral' },
        { name: 'Success', value: '#16A34A', description: 'Success state color' },
        { name: 'Warning', value: '#F59E0B', description: 'Warning state color' },
        { name: 'Info', value: '#2563EB', description: 'Information state color' },
        { name: 'Danger', value: '#D72539', description: 'Danger/error state color' },
      ],
      variants: ['Light mode', 'Dark mode', 'High contrast'],
      states: ['Default', 'Hover', 'Active', 'Focus', 'Disabled'],
      contentRules: [
        'Use brand color for primary actions only',
        'Maintain sufficient contrast for accessibility',
        'Limit color usage to maintain visual hierarchy',
      ],
      accessibility: [
        'Ensure minimum 4.5:1 contrast ratio for text',
        'Use semantic colors for status indicators',
        'Provide alternative text for color-coded information',
      ],
      motion: ['Smooth transitions between color states'],
      doDont: [
        'Do: Use brand color consistently for primary actions',
        'Don\'t: Overuse bright colors that compete with primary actions',
        'Do: Test color combinations for accessibility',
        'Don\'t: Use color as the only visual indicator',
      ],
      examples: [
        {
          title: 'Good Color Usage',
          description: 'Proper use of brand color for primary button',
          code: '<button class="bg-brand-500 text-white px-4 py-2 rounded-xl">Primary Action</button>',
          isGood: true,
        },
        {
          title: 'Bad Color Usage',
          description: 'Overuse of bright colors',
          code: '<button class="bg-brand-500 text-brand-500 px-4 py-2 rounded-xl">Bad Contrast</button>',
          isGood: false,
        },
      ],
    },
    '/foundations/typography': {
      title: 'Typography',
      description: 'Font hierarchy and usage',
      overview: 'The typography system uses Inclusive Sans for headings and Outfit for body text, with a comprehensive scale for all content needs.',
      specs: [
        { name: 'Heading Font', value: 'Inclusive Sans', description: 'Used for h1-h6 elements' },
        { name: 'Body Font', value: 'Outfit', description: 'Used for body text and UI elements' },
        { name: 'Base Font Size', value: '16px', description: 'Default body font size' },
        { name: 'Line Height', value: '1.5', description: 'Default line height' },
      ],
      variants: ['Heading 1', 'Heading 2', 'Heading 3', 'Body', 'Small', 'Caption'],
      states: ['Default', 'Hover (links)', 'Active', 'Disabled'],
      contentRules: [
        'Use sentence case for headings',
        'Limit heading 1 to one per page',
        'Maintain consistent font weights',
      ],
      accessibility: [
        'Ensure sufficient font size for readability',
        'Maintain proper contrast ratios',
        'Use relative units for responsive typography',
      ],
      motion: ['Smooth font size transitions'],
      doDont: [
        'Do: Use proper heading hierarchy',
        'Don\'t: Skip heading levels',
        'Do: Maintain consistent typography',
        'Don\'t: Overuse bold or italic text',
      ],
    },
    // Add more page content as needed
  }

  return contentMap[path] || {
    title: 'Page Not Found',
    description: 'This page content is not available',
    overview: 'Content not available',
  }
}

export const getComponentProps = (component: string): ComponentProps[] => {
  const propsMap: Record<string, ComponentProps[]> = {
    'button': [
      { name: 'variant', type: 'string', required: false, default: 'primary', description: 'Button variant' },
      { name: 'size', type: 'string', required: false, default: 'medium', description: 'Button size' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
      { name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Loading state' },
    ],
    'input': [
      { name: 'modelValue', type: 'string', required: true, default: '', description: 'Input value' },
      { name: 'placeholder', type: 'string', required: false, default: '', description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
      { name: 'error', type: 'string', required: false, default: '', description: 'Error message' },
    ],
  }

  return propsMap[component] || []
}