const baseURL = 'https://rickandmortyapi.com/api';

const character = '/character';
const episode = '/episode';

const urls = {
    character:{
      byIds: (ids) => `${character}/${ids}`
    },
    episode
}

export {
    baseURL,
    urls,
}