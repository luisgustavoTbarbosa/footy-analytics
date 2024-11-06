import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { LandingPage } from './pages/app/landing-page'
import { Statistics } from './pages/app/statistic'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/estatisticas', element: <Statistics /> },
    ],
  },
])
