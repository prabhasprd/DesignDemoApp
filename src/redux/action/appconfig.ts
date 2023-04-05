import { LANGUAGE, SYSTEM_THEME } from './constant';
import { lightThemeColor } from '../../util/colors';

export const systemLanguage = (data: object) => {
    return { type: LANGUAGE, payload: data };
};

export const systemTheme = (data: typeof lightThemeColor) => {
    return { type: SYSTEM_THEME, payload: data };
};
