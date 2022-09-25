
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from '../pages/SignUp'

const routes = [
    {
        path:'/',
        element: <Login/>
      },
      {
        path:'/dashboard',
        element: <Dashboard />
      },
      {
        path:'/signup',
        element: <SignUp/>
      }
]

export default routes;