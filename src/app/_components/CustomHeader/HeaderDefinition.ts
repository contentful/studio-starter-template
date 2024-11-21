import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export const HeaderDefinition: ComponentDefinition = {
  id: 'header',
  name: 'Header',
  category: 'Custom Components',
  variables: {
    logo: {
      type: 'Media',
      displayName: 'Logo',
      description: 'Upload a logo image',
      defaultValue: undefined,
    },
    menuItems: {
      type: 'Array',
      displayName: 'Menu Items',
      items: {
        type: 'Object',
        properties: {
          name: {
            type: 'Object',
            properties: {
              Default: { type: 'Text' },
              "fr-CA": { type: 'Text' },
            },
          },
          link: { type: 'Text' },
          hasDropdown: { type: 'Boolean' },
          dropdownList: {
            type: 'Array',
            items: {
              type: 'Object',
              properties: {
                name: {
                  type: 'Object',
                  properties: {
                    Default: { type: 'Text' },
                    "fr-CA": { type: 'Text' },
                  },
                },
                link: { type: 'Text' },
              },
            },
          },
          dropdownImages: {
            type: 'Array',
            items: {
              type: 'Object',
              properties: {
                src: { type: 'Media' },
                alt: { type: 'Text' },
                link: { type: 'Text' },
                name: {
                  type: 'Object',
                  properties: {
                    Default: { type: 'Text' },
                    "fr-CA": { type: 'Text' },
                  },
                },
              },
            },
          },
        },
      },
    },
    cta: {
      type: 'Text',
      displayName: 'Call to Action',
      defaultValue: 'Book a Free Consultation',
    },
  },
};