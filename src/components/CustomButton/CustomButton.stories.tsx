import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import CustomButton from ".";

export default {
  title: "MyComponents/CustomButton",
  component: CustomButton,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

// Template for stories
const Template: Story<ButtonProps & { label: string }> = (args) => (
  <CustomButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary Button",
  severity: "secondary",
};
export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  severity: "success",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: "Click Me",
  onClick: () => alert("Clicked!"),
};
