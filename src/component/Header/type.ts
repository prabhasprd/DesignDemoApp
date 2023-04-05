
import { StyleProp, ViewStyle } from 'react-native'
import { ButtonProps } from "../../screen/ProfileScreen/type";

export interface Props {
    leftButton: ButtonProps;
    rightButton: ButtonProps;
    middleText?: string;
    style?: StyleProp<ViewStyle>
}