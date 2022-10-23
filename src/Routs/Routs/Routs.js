import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../Login/Login/Login";
import Registration from "../../Login/Registration/Registration";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import TermsAndCondition from "../../Pages/other/TermsAndCondition/TermsAndCondition";
import PriveteRoute from "../PriveteRoute/PriveteRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-site.vercel.app/news')
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-site.vercel.app/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PriveteRoute><News></News></PriveteRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-site.vercel.app/news/${params.id}`)
            },
            {
                path: "/logIn",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <Registration></Registration>
            },
            {
                path: "/terms",
                element: <TermsAndCondition></TermsAndCondition>
            }

        ]

    }
])