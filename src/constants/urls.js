const baseURL = 'https://rickandmortyapi.com/api';

const character = '/character';
const episode = '/episode';

const urls = {
    character:{
      base: character,
      byId: (id) => `${episode}/${id}`
    },
    episode: {
        base: episode,
    }

}

export {
    baseURL,
    urls
}