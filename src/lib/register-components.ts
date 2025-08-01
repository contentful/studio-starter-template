import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../studio.config";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";
import {
  ContactFormComponent,
  ContactFormDefinition,
} from "@/app/_studio/ContactForm";

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
  {
    component: ContactFormComponent,
    definition: ContactFormDefinition,
  },
  /*
   * After a new folder is created in '/_components' you need to register it below in a JSON format
   */
]);
defineBreakpoints([
  {
    id: "desktop",
    query: "*",
    displayName: "All Sizes",
    previewSize: "100%",
  },
  {
    id: "tablet",
    query: "<992px",
    displayName: "Tablet",
    previewSize: "820px",
  },
  {
    id: "mobile",
    query: "<576px",
    displayName: "Mobile",
    previewSize: "390px",
  },
]);
/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary["400"],
    Secondary: StudioConfig.colors.secondary["400"],
    Tertiary: StudioConfig.colors.tertiary["400"],
    Warning: StudioConfig.colors.warning["400"],
    Info: StudioConfig.colors.info["400"],
    Success: StudioConfig.colors.success["400"],
  },
});
