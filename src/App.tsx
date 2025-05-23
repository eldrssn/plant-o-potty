import { HeroUIProvider } from '@heroui/react'
import { RouterProvider } from 'react-router-dom'
import { router, useInitPlants, useSyncPlants } from '@app'

function App() {
  useInitPlants()
  useSyncPlants()

  return (
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  )
}

export default App
