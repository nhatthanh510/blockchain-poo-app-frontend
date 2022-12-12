import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/components/Error'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Dashboard from '@/pages/Dashboard'
import DashboardDetail from '@/pages/DashboardDetail'
import Layout from './components/Layout'

type IDashboardDetail = {
  name: string
  age: number
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: ':id',
        element: <DashboardDetail />,
        loader: ({ request }) => {
          console.log('dashboard loader', request)
          return { name: 'Thanh', age: 33 } as IDashboardDetail
        },
      },
    ],
  },
])
