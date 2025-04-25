import {
  CONTENTFUL_COMPONENTS,
  ComponentDefinition,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../../../studio.config";

export * from "./SiteButtonComponent";

export const SiteButtonDefinition: ComponentDefinition = {
  id: CONTENTFUL_COMPONENTS.button.id,
  name: CONTENTFUL_COMPONENTS.button.name,
  category: "Custom Components",
  builtInStyles: [
    "cfMargin",
    "cfBorderRadius",
    "cfBorder",
    "cfLineHeight",
    "cfLetterSpacing",
    "cfTextAlign",
    "cfTextBold",
    "cfHorizontalAlignment",
  ],
  variables: {
    cfPadding: {
      type: "Text",
      displayName: "Padding",
      defaultValue: "10px 8px 10px 8px",
      group: "style",
    },
    cfFontSize: {
      type: "Text",
      displayName: "Font size",
      defaultValue: "18px",

      group: "style",
    },
    cfTextColor: {
      type: "Text",
      displayName: "Text color",
      defaultValue: "#fff",
      group: "style",
    },
    cfWidth: {
      type: "Text",
      displayName: "Width",
      defaultValue: "all",
      group: "style",
    },
    cfBackgroundColor: {
      type: "Text",
      displayName: "Background color",
      defaultValue: StudioConfig.colors.primary["400"],
      group: "style",
    },
    cfFlexDirection: {
      type: "Text",
      displayName: "Flex direction",
      defaultValue: "row",
      group: "style",
    },
    cfGap: {
      type: "Text",
      displayName: "Gap",
      defaultValue: "8px 8px",
      group: "style",
    },
    borderRadius: {
      type: "Number",
      displayName: "Border radius",
      defaultValue: 5,
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
      defaultValue: undefined,
    },
    target: {
      type: "Text",
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
    },
  },
};
