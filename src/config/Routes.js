
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from '../pages/SignUp'

const routes = [
    {
        path:'/',
        element: <Login/>,
        isPrivate:false,
      },
      {
        path:'/dashboard',
        element: <Dashboard />,
        isPrivate:true,

      },
      {
        path:'/signup',
        element: <SignUp/>,
        isPrivate:true
      }
]

export default routes;