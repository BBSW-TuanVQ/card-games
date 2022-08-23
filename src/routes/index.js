import Games from "../pages/Games";
import Home from "../pages/Home";




//Public routes


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/games', component: Games}
]

export {publicRoutes}