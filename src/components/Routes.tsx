import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { WatchList } from './WatchList/WatchList'
import App from '../App'
import { NotFound } from './NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: 'watch-list', element: <WatchList/> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

export function Routes () {
  return (
    <RouterProvider router={router} />
  )
}