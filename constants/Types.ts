import {
  TouchableOpacityProps,
  ButtonProps,
  ImageSourcePropType,
} from "react-native";

interface IOnboardingTab {
  onNext?: () => void;
}

interface IButtonProps
  extends Omit<ButtonProps, "title">,
    TouchableOpacityProps {
  title?: string;
  leftIconSource?: ImageSourcePropType;
  rightIconSource?: ImageSourcePropType;
}

export { IOnboardingTab, IButtonProps };
