import { Button as PrimeButton } from "primereact/button";
import "./CustomButton.css";

type CustomButtonProps = {
  label: string;
} & React.ComponentProps<typeof PrimeButton>;

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return <PrimeButton label={label} {...props} className="erp-btn" />;
};

export default CustomButton;
