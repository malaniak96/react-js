import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {postService} from "./services/postService";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CommentPage} from "./pages/CommentPage";
import {commentService} from "./services/commentService";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element:<UsersPage/>, loader: () => userService.getAll()}]},
    {path: 'users/:userId', element: <UserDetailsPage/>, loader: ({params: {userId}}) => userService.getDetails(userId), children:[
            {path: '/users/:userId/posts', element: <PostsPage/>, loader: ({params: {userId}}) => postService.getByUserId(userId)}
        ]},
    {path:'/posts/:id', element:<PostDetailsPage/>, loader: ({params: {id}}) => postService.getPostById(id), children: [
            {path: '/posts/:id', element: <CommentPage/>, loader: ({params: {id}}) => commentService.getComments(id)}
        ]}

])


export {
    router
}