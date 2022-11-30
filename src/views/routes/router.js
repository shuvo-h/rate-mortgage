import { createBrowserRouter, RouterProvider,  Route, Link,} from "react-router-dom";
import Home from "../pages/Home/Home";

export const allRouters = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>
    },
])