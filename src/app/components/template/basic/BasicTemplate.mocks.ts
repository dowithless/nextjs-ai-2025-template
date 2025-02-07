import { fn } from "@storybook/test";
import { type BasicTemplateProps } from "./interface";

const basic: BasicTemplateProps = {
  label: "Button",
};

const withOnClick: BasicTemplateProps = {
  ...basic,
  onClick: fn(),
};

export const mockBasicTemplateProps = {
  basic,
  withOnClick,
};
