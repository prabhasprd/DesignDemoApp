import axios from 'axios';
import {BASE_URL} from '@env';

export const basicApiCall = async () => {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: 'get',
      url: `${BASE_URL}`,
    }).then(response => {
      resolve(response.data);
    });
  });
};
