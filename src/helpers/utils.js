export const getPhotoById = (id, photos) => {
    return photos?.find(photo => photo.id === id);
};

export const chunkDataIntoColumns = (data, chunkSize) => 
[...Array(chunkSize).keys()].map(chunk => data?.filter((_, i) => i % chunkSize === chunk));