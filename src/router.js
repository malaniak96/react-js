import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";

import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";

import {userDetailsService} from "./services/userDetailsService";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element:<UsersPage/>, loader: () => userService.getAll()}]},
    {path: ':userId', element: <UserDetailsPage/>, loader: ({params: {userId}}) => userDetailsService.getDetails(userId)}

])


export {
    router
}