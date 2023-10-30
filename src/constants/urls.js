const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';

const urls = {
    users:{
      users,
      getDetailsByUserId: (userId) => `${users}/${userId}`
    },
    posts: {
        byUserId: (userId) => `${users}/${userId}/posts`
    }
}

export {
    baseURL,
    urls
}