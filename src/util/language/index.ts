import en_ES from './en-ES.json';
import en_US from './en-US.json';

interface LanguageData {
    [key: string]: object;
}

export const languageData: LanguageData = {
    en_ES,
    en_US,
};

export default languageData;
