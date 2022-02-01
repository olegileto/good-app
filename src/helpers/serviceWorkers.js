import { DEFAULT_PAGE, URL, KEY } from './photos';

const basicURL = `${URL}?client_id=${KEY}`;

const Api = {
    fetchPhotos: async(page) => {
        const defaultPage = !page ? DEFAULT_PAGE : page;
        const response = await fetch(`${basicURL}&page=${defaultPage}`);
        const data = await response.json();

        if (response.status >= 400) {
            throw new Error(data.errors);
        }

        return data;
    }
};

export default Api;