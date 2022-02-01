export const KEY = '271b95bb56870e7f6904c7f38882ab6462b164d0cbb22355d9261ad4f60348fa';
export const URL = 'https://api.unsplash.com/photos/'
export const DEFAULT_PAGE = 1;

export const getPhotoById = (id, photos) => {
    return photos?.find(photo => photo.id === id)
}