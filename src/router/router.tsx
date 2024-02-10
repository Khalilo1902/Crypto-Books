import {createBrowserRouter} from "react-router-dom";
import Crypto from "../pages/Crypto.tsx";
import Saved from "../pages/Saved.tsx";
import Trending from "../pages/Trending.tsx";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <div>Error</div>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/crypto",
                element:<Crypto/>,
            },

            {
                path:"/saved",
                element:<Saved/>,
            },
            {
                path:"/trending",
                element:<Trending/>,
            },
        ]

    }
])

export default router