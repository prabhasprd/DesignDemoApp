import { ImageSourcePropType } from 'react-native';

export interface ButtonProps {
    name: string;
    image: ImageSourcePropType;
    onPress?: () => void,

}