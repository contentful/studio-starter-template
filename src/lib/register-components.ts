import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from '@contentful/experiences-sdk-react';
import StudioConfig from '../../studio.config';
import { SiteButtonDefinition, SiteButtonComponent } from '@studio/SiteButton';
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from '@studio/ExternalVideo';

defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
]);
defineBreakpoints([
  {
    id: 'desktop',
    query: '*',
    displayName: 'All Sizes',
    previewSize: '100%',
  },
  {
    id: 'tablet',
    query: '<992px',
    displayName: 'Tablet',
    previewSize: '820px',
  },
  {
    id: 'mobile',
    query: '<576px',
    displayName: 'Mobile',
    previewSize: '390px',
  },
]);
/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary['400'],
  },
});
