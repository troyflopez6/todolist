import Dashboard from '../components/Dashboard/Dashboard'
import Home from '../pages/Home/Home'
import Task from '../pages/Task/Task'

export const routes = [
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'tasks',
        element:<Task/>
      },
    ]
  },
]
