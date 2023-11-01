import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CharacterPage} from "./pages/CharacterPage";
import {EpisodePage} from "./pages/EpisodePage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episode'}/>},
            {path:'episode', element: <EpisodePage/>},
            {path: 'character', element: <CharacterPage/>}

        ]
    }
]);

export {
    router
}