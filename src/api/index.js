import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const basicApiCall = async () => {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: 'get',
      url: `${baseUrl}`,
    }).then(response => {
      resolve(response.data);
    });
  });
};
