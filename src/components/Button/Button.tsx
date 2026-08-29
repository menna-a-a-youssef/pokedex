import { forwardRef } from "react";

import { type ButtonSize, StyledButton } from "./Button.styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  active?: boolean;
  as?: React.ElementType;
  to?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "md", active = false, children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} $size={size} $active={active} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

export default Button;
