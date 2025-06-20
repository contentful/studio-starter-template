import {
  CONTENTFUL_COMPONENTS,
  ComponentDefinition,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../../../studio.config";

export * from "./SiteButtonComponent";

export const SiteButtonDefinition: ComponentDefinition = {
  id: "custom-button",
  name: "Custom Button",
  category: "Custom Components",
  builtInStyles: [
    "cfBorder",
    "cfBorderRadius",
    "cfFontSize",
    "cfFontWeight",
    "cfLetterSpacing",
    "cfLineHeight",
    "cfMargin",
    "cfMaxWidth",
    "cfTextAlign",
    "cfTextBold",
    "cfTextColor",
    "cfTextItalic",
    "cfTextTransform",
    "cfTextUnderline",
  ],
  variables: {
    cfPadding: {
      type: "Text",
      displayName: "Padding",
      defaultValue: "10px 8px 10px 8px",
      group: "style",
    },
    cfWidth: {
      displayName: "Width",
      type: "Text",
      group: "style",
      description: "The width of the button.",
      defaultValue: "fit-content",
    },
    cfHeight: {
      displayName: "Height",
      type: "Text",
      group: "style",
      description: "The height of the button.",
      defaultValue: "fit-content",
    },
    cfBackgroundColor: {
      type: "Text",
      displayName: "Background color",
      defaultValue: StudioConfig.colors.primary["400"],
      group: "style",
    },
    icon: {
      type: "Text",
      displayName: "Icon",
      validations: {
        in: [
          {
            value: "",
            displayName: "None",
          },
          {
            value: "arrowRight",
            displayName: "Arrow Right",
          },
          {
            value: "arrowLeft",
            displayName: "Arrow Left",
          },
          {
            value: "chevronRight",
            displayName: "Chevron Right",
          },
          {
            value: "chevronLeft",
            displayName: "Chevron Left",
          },
        ],
      },
      defaultValue: "",
      group: "style",
    },
    target: {
      type: "Text",
      displayName: "Target",
      validations: {
        in: [
          {
            value: "_blank",
            displayName: "New Tab",
          },
          {
            value: "_self",
            displayName: "Same Tab",
          },
        ],
      },
      defaultValue: "_self",
      group: "style",
    },
    label: {
      type: "Text",
      displayName: "Label",
      defaultValue: "Click me",
    },
    url: {
      type: "Text",
      displayName: "URL",
      defaultValue: "https://www.contentful.com/",
    },
  },
};
