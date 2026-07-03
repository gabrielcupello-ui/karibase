import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import Installation from '../views/Installation.vue'
import QuickStart from '../views/QuickStart.vue'
import Components from '../views/Components.vue'
import Buttons from '../views/Buttons.vue'
import Cards from '../views/Cards.vue'
import Forms from '../views/Forms.vue'
import Tables from '../views/Tables.vue'
import Layout from '../views/Layout.vue'
import Utilities from '../views/Utilities.vue'
import Theming from '../views/Theming.vue'
import Tools from '../views/Tools.vue'
import Navigation from '../views/Navigation.vue'
import Modals from '../views/Modals.vue'
import Alerts from '../views/Alerts.vue'
import Charts from '../views/Charts.vue'
import Badges from '../views/Badges.vue'
import Avatars from '../views/Avatars.vue'
import Dropdowns from '../views/Dropdowns.vue'
import Tooltips from '../views/Tooltips.vue'
import FloatingBots from '../views/FloatingBots.vue'
import LoginExamples from '../views/LoginExamples.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Download from '../views/Download.vue'
import Contents from '../views/Contents.vue'
import BrowsersDevices from '../views/BrowsersDevices.vue'
import JavaScript from '../views/JavaScript.vue'
import Webpack from '../views/Webpack.vue'
import Parcel from '../views/Parcel.vue'
import Vite from '../views/Vite.vue'
import Accessibility from '../views/Accessibility.vue'
import RFS from '../views/RFS.vue'
import RTL from '../views/RTL.vue'
import Contribute from '../views/Contribute.vue'
import CustomizeOverview from '../views/CustomizeOverview.vue'
import CustomizeSass from '../views/CustomizeSass.vue'
import CustomizeOptions from '../views/CustomizeOptions.vue'
import CustomizeColor from '../views/CustomizeColor.vue'
import CustomizeColorModes from '../views/CustomizeColorModes.vue'
import CustomizeComponents from '../views/CustomizeComponents.vue'
import CustomizeCSSVariables from '../views/CustomizeCSSVariables.vue'
import CustomizeOptimize from '../views/CustomizeOptimize.vue'
import LayoutBreakpoints from '../views/LayoutBreakpoints.vue'
import LayoutContainers from '../views/LayoutContainers.vue'
import LayoutGrid from '../views/LayoutGrid.vue'
import LayoutColumns from '../views/LayoutColumns.vue'
import LayoutGutters from '../views/LayoutGutters.vue'
import LayoutUtilities from '../views/LayoutUtilities.vue'
import LayoutZIndex from '../views/LayoutZIndex.vue'
import LayoutCSSGrid from '../views/LayoutCSSGrid.vue'
import ContentReboot from '../views/ContentReboot.vue'
import ContentTypography from '../views/ContentTypography.vue'
import ContentImages from '../views/ContentImages.vue'
import ContentTables from '../views/ContentTables.vue'
import ContentFigures from '../views/ContentFigures.vue'
import FormsOverview from '../views/FormsOverview.vue'
import FormsFormControl from '../views/FormsFormControl.vue'
import FormsSelect from '../views/FormsSelect.vue'
import FormsChecksRadios from '../views/FormsChecksRadios.vue'
import FormsRange from '../views/FormsRange.vue'
import FormsInputGroup from '../views/FormsInputGroup.vue'
import FormsFloatingLabels from '../views/FormsFloatingLabels.vue'
import FormsLayout from '../views/FormsLayout.vue'
import FormsValidation from '../views/FormsValidation.vue'
import CSSExtractor from '../views/CSSExtractor.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/quick-start',
    name: 'QuickStart',
    component: QuickStart
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  },
  {
    path: '/components/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/components/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/components/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/components/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/utilities',
    name: 'Utilities',
    component: Utilities
  },
  {
    path: '/theming',
    name: 'Theming',
    component: Theming
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/components/navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/components/modals',
    name: 'Modals',
    component: Modals
  },
  {
    path: '/components/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/components/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/components/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/components/avatars',
    name: 'Avatars',
    component: Avatars
  },
  {
    path: '/components/dropdowns',
    name: 'Dropdowns',
    component: Dropdowns
  },
  {
    path: '/components/tooltips',
    name: 'Tooltips',
    component: Tooltips
  },
  {
    path: '/components/floating-bots',
    name: 'FloatingBots',
    component: FloatingBots
  },
  {
    path: '/login-examples',
    name: 'LoginExamples',
    component: LoginExamples
  },
  {
    path: '/getting-started',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents
  },
  {
    path: '/browsers-devices',
    name: 'BrowsersDevices',
    component: BrowsersDevices
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: JavaScript
  },
  {
    path: '/webpack',
    name: 'Webpack',
    component: Webpack
  },
  {
    path: '/parcel',
    name: 'Parcel',
    component: Parcel
  },
  {
    path: '/vite',
    name: 'Vite',
    component: Vite
  },
  {
    path: '/accessibility',
    name: 'Accessibility',
    component: Accessibility
  },
  {
    path: '/rfs',
    name: 'RFS',
    component: RFS
  },
  {
    path: '/rtl',
    name: 'RTL',
    component: RTL
  },
  {
    path: '/contribute',
    name: 'Contribute',
    component: Contribute
  },
  {
    path: '/customize',
    name: 'CustomizeOverview',
    component: CustomizeOverview
  },
  {
    path: '/customize/sass',
    name: 'CustomizeSass',
    component: CustomizeSass
  },
  {
    path: '/customize/options',
    name: 'CustomizeOptions',
    component: CustomizeOptions
  },
  {
    path: '/customize/color',
    name: 'CustomizeColor',
    component: CustomizeColor
  },
  {
    path: '/customize/color-modes',
    name: 'CustomizeColorModes',
    component: CustomizeColorModes
  },
  {
    path: '/customize/components',
    name: 'CustomizeComponents',
    component: CustomizeComponents
  },
  {
    path: '/customize/css-variables',
    name: 'CustomizeCSSVariables',
    component: CustomizeCSSVariables
  },
  {
    path: '/customize/optimize',
    name: 'CustomizeOptimize',
    component: CustomizeOptimize
  },
  {
    path: '/layout/breakpoints',
    name: 'LayoutBreakpoints',
    component: LayoutBreakpoints
  },
  {
    path: '/layout/containers',
    name: 'LayoutContainers',
    component: LayoutContainers
  },
  {
    path: '/layout/grid',
    name: 'LayoutGrid',
    component: LayoutGrid
  },
  {
    path: '/layout/columns',
    name: 'LayoutColumns',
    component: LayoutColumns
  },
  {
    path: '/layout/gutters',
    name: 'LayoutGutters',
    component: LayoutGutters
  },
  {
    path: '/layout/utilities',
    name: 'LayoutUtilities',
    component: LayoutUtilities
  },
  {
    path: '/layout/z-index',
    name: 'LayoutZIndex',
    component: LayoutZIndex
  },
  {
    path: '/layout/css-grid',
    name: 'LayoutCSSGrid',
    component: LayoutCSSGrid
  },
  {
    path: '/content/reboot',
    name: 'ContentReboot',
    component: ContentReboot
  },
  {
    path: '/content/typography',
    name: 'ContentTypography',
    component: ContentTypography
  },
  {
    path: '/content/images',
    name: 'ContentImages',
    component: ContentImages
  },
  {
    path: '/content/tables',
    name: 'ContentTables',
    component: ContentTables
  },
  {
    path: '/content/figures',
    name: 'ContentFigures',
    component: ContentFigures
  },
  {
    path: '/forms',
    name: 'FormsOverview',
    component: FormsOverview
  },
  {
    path: '/forms/form-control',
    name: 'FormsFormControl',
    component: FormsFormControl
  },
  {
    path: '/forms/select',
    name: 'FormsSelect',
    component: FormsSelect
  },
  {
    path: '/forms/checks-radios',
    name: 'FormsChecksRadios',
    component: FormsChecksRadios
  },
  {
    path: '/forms/range',
    name: 'FormsRange',
    component: FormsRange
  },
  {
    path: '/forms/input-group',
    name: 'FormsInputGroup',
    component: FormsInputGroup
  },
  {
    path: '/forms/floating-labels',
    name: 'FormsFloatingLabels',
    component: FormsFloatingLabels
  },
  {
    path: '/forms/layout',
    name: 'FormsLayout',
    component: FormsLayout
  },
  {
    path: '/forms/validation',
    name: 'FormsValidation',
    component: FormsValidation
  },
  {
    path: '/tools/css-extractor',
    name: 'CSSExtractor',
    component: CSSExtractor
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
