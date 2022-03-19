import {STORE_DETAILS} from './constant';

export const updateUserDatails = data => {
  return {type: STORE_DETAILS, payload: data};
};
