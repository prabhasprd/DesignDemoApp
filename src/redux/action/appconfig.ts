import { LANGUAGE } from './constant';

export const systemLanguage = (data: object) => {
    return { type: LANGUAGE, payload: data };
};
