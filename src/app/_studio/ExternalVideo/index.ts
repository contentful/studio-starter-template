import { ComponentDefinition } from '@contentful/experiences-sdk-react';
export * from './ExternalVideoComponent';

export const ExternalVideoDefinition: ComponentDefinition = {
  id: 'external-video',
  name: 'External Video',
  category: 'Custom Components',
  thumbnailUrl:
    'https://images.ctfassets.net/baw0wklqktjb/2ot7Yd2e2ZdCXsJEpgbhYs/ffb6ac3d46d31d1abf82bc100e9a0604/youtube-logo.png?h=250',
  builtInStyles: ['cfMargin', 'cfPadding', 'cfHeight'],
  variables: {
    url: {
      type: 'Text',
      displayName: 'URL',
      group: 'content',
      defaultValue: 'https://www.youtube.com/embed/bGMo1XCNQMo',
    },
    cfWidth: {
      type: 'Text',
      displayName: 'Width',
      group: 'style',
      defaultValue: '100%',
    },
    startAt: {
      type: 'Text',
      displayName: 'Start At',
      description: '00:00',
      defaultValue: '00:00',
      group: 'style',
    },
    showPlayerControls: {
      type: 'Boolean',
      displayName: 'Show player controls',
      group: 'style',
    },
    enablePrivacyEnhanceMode: {
      type: 'Boolean',
      displayName: 'Enable privacy-enhance mode',
      group: 'style',
    },
  },
};
