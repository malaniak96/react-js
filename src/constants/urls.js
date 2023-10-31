const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const comments = '/comments';

const urls = {
    users:{
      users,
      getDetailsByUserId: (userId) => `${users}/${userId}`
    },
    posts: {
        byUserId: (userId) => `${users}/${userId}/posts`
    },
        comments:{
        byId: (id) => `/posts/${id}/comments`
        }
}

export {
    baseURL,
    urls
}