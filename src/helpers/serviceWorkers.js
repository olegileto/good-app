const KEY = '271b95bb56870e7f6904c7f38882ab6462b164d0cbb22355d9261ad4f60348fa';
const basicURL = `https://api.unsplash.com/photos/?client_id=${KEY}`;
const DEFAULT_PAGE = 1;

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