import { STATUS_OK } from './statuses';

const Api = {
    get: async(url = '') => {
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
            redirect: 'follow'
        }).then(
            response => {
                if (response.status === STATUS_OK) {
                    return response.json().then(data => data);
                }

                return {
                    status: response.status
                }
            }
        )
        .catch(error => console.log(error))

        return data;
    }
};

export default Api;