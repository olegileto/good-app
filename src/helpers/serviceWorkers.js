const KEY = '271b95bb56870e7f6904c7f38882ab6462b164d0cbb22355d9261ad4f60348fa';
const basicURL = `https://api.unsplash.com/photos/?client_id=${KEY}`;

const Api = {
    fetchPhotos: async() => {
        const response = await fetch(`${basicURL}&per_page=50`);
        const data = await response.json();

        if (response.status >= 400) {
            throw new Error(data.errors);
        }

        return data;
    }
};

export default Api;