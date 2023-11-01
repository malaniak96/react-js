import {createBrowserRouter, Navigate} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {CarsPage} from "./pages/CarsPage";
import {AuthLayout, MainLayout, PublicLayout} from "./layouts";

const router = createBrowserRouter ([
    {path:'', element: <MainLayout/>, children: [
            {index: true, element:<Navigate to={'cars'}/>},
    {element: <PublicLayout/>, children: [
            {path:'login', element: <LoginPage/>},
            {path:'register', element: <RegisterPage/>},
]},
            {element: <AuthLayout/>, children: [
                    {path: 'cars', element: <CarsPage/>}
                ]
            }
        ]
    }
]);

export {
    router
}