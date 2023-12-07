import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes'

interface AppProps {}

const router = createBrowserRouter(routes)

const App: FC<AppProps> = () => {
  return (
    <div className='App'>
      <div className='Nav'>element</div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
