import { STORE_DETAILS } from './constant';
import { UserData } from './types'

export const updateUserDatails = (data: UserData) => {
  return { type: STORE_DETAILS, payload: data };
};
