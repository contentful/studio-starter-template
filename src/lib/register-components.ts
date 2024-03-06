import {
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

/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary['400'],
  },
});
