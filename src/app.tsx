import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider as ThemeProviderFromStyledComponents } from 'styled-components'

import { dark } from './components/theme/dark'
import { light } from './components/theme/light'
import { ThemeProvider, useTheme } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

function AppContent() {
  const { theme } = useTheme()
  const themeToStyledComponent = theme === 'light' ? light : dark

  return (
    <ThemeProviderFromStyledComponents theme={themeToStyledComponent}>
      <Helmet titleTemplate="%s | Footy analytics" />
      <RouterProvider router={router} />
    </ThemeProviderFromStyledComponents>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="footyanalytics-theme" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
