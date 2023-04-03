import { SYSTEM_INITIAL_STATE } from './initialState';
import { LANGUAGE } from '../action/constant';
import { AppconfigLanguageType } from '../action/types';

export const appconfigLanguageReducer = (state = SYSTEM_INITIAL_STATE.systemconfig, action: AppconfigLanguageType) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
};
