import { ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  style?: ViewStyle;
}
