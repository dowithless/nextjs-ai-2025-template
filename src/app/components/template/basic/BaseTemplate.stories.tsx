import type { Meta, StoryObj } from "@storybook/react";

import { BasicTemplate } from "./BaseTemplate";
import { mockBasicTemplateProps } from "./BaseTemplate.mocks";

const meta = {
  title: "BasicTemplate",
  component: BasicTemplate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BasicTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: mockBasicTemplateProps.basic,
};

export const WithOnClick: Story = {
  args: mockBasicTemplateProps.withOnClick,
};
