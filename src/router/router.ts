import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Friends from "../pages/Friends/Friends";

export const privateRoutes = [
    {path: '/home', element: Home},
    {path: '/profile/:id', element: Profile},
    {path: '/friends', element: Friends},

]

export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/register', element: Register},
]