import {
  TouchableOpacityProps,
  ButtonProps,
  ImageSourcePropType,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface IOnboardingTab {
  onNext?: () => void;
}

interface IButtonProps
  extends Omit<ButtonProps, "title">,
    TouchableOpacityProps {
  title?: string;
  leftIconSource?: ImageSourcePropType;
  rightIconSource?: ImageSourcePropType;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  rightFontAwesomeIconName?: React.ComponentProps<typeof FontAwesome>["name"];
  leftFontAwesomeIconName?: React.ComponentProps<typeof FontAwesome>["name"];
}

export { IOnboardingTab, IButtonProps };
