const KEY = '271b95bb56870e7f6904c7f38882ab6462b164d0cbb22355d9261ad4f60348fa';
const UNSPLASH_URL = 'https://api.unsplash.com/';
const CLIENT_ID = `?client_id=${KEY}`;

//Photos URLs
export const PHOTOS_URL = `${UNSPLASH_URL}photos/`;
export const BASIC_PHOTOS_URL = `${PHOTOS_URL}${CLIENT_ID}`;

//Users URLs
export const USERS_URL = `${UNSPLASH_URL}users/`;
export const BASIC_USERS_URL = (usermane) => `${USERS_URL}${usermane}/collections/${CLIENT_ID}`;
