import { Button as NBButton } from "native-base";
import React from "react";
import { colors, metrics } from "src/theme";
import { ButtonProps } from "src/types/ButtonProps";

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  onPress,
  ...rest
}) => {
  return (
    <NBButton
      onPress={onPress}
      isDisabled={isLoading}
      width="100%"
      height="8%"
      backgroundColor={colors.primary}
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      {...rest}
    >
      {isLoading ? "Loading..." : title}
    </NBButton>
  );
};

export default Button;
