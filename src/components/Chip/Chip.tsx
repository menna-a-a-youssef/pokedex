import { ChipContainer } from "./Chip.styles";

type ChipVariant = "colored" | "outlined" | "secondary";

type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  color?: string;
};

const Chip = ({ children, variant = "colored", color }: ChipProps) => {
  return (
    <ChipContainer variant={variant} color={color}>
      {children}
    </ChipContainer>
  );
};

export default Chip;
