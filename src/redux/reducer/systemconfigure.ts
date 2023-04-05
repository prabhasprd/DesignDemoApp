import { SYSTEM_INITIAL_STATE } from './initialState';
import { LANGUAGE, SYSTEM_THEME } from '../action/constant';
import { AppconfigLanguageType } from '../action/types';

export const appconfigLanguageReducer = (state = SYSTEM_INITIAL_STATE.systemconfig, action: AppconfigLanguageType) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case SYSTEM_THEME:
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state;
  }
};
