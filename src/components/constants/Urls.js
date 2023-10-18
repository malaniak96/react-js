const baseUrl = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';

const urls = {
    posts:{
        base: posts,
        byId: (userId) => `${posts}/${userId}`
    }
}

export {
    baseUrl,
    urls
}