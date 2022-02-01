export const getPhotoById = (id, photos) => {
    return photos?.find(photo => photo.id === id)
}