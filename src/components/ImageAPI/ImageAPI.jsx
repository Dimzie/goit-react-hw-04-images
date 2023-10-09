const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38965807-d601a08749052acceafe15189';

export const fetchImages = async (query, page = 1) => {
    const resp = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=15`);
    const result = await resp.json();
    console.log(result);
    return result;
}