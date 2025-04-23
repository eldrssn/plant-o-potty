import { HeroUIProvider } from '@heroui/react'
import { router } from '@app'

import { RouterProvider } from 'react-router-dom'
import { usePlantStore } from 'entities'
import { useEffect } from 'react'
import { mockPlants } from 'backend-mock/mock-data'

function App() {
  const { setPlants } = usePlantStore()

  useEffect(() => {
    setPlants(mockPlants)
  }, [setPlants])

  return (
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  )
}

export default App
