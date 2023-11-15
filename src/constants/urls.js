const baseURL = 'https://rickandmortyapi.com/api';

const urls = {
    episodes: '/episode',
    characters: (ids) => `/character/${ids}`
}

export {
    urls,
    baseURL
}