import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../pages/LandingPage"


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    }
])