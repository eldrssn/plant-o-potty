import { HeroUIProvider } from '@heroui/react'

import { RouterProvider } from 'react-router-dom'
import { router } from '@router'

function App() {
  return (
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  )
}

export default App
