const baseURL = 'https://rickandmortyapi.com/api';

const character = '/character';
const episode = '/episode';

const urls = {
    character,
    episode: {
        base: episode,
        byId: (id) => `${character}/${id}`
    }

}

export {
    baseURL,
    urls
}