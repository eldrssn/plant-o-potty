import { HeroUIProvider } from '@heroui/react'
import { RouterProvider } from 'react-router-dom'
import { router, ToastProvider, useInitPlants, useSyncPlants } from '@app'

function App() {
  useInitPlants()
  useSyncPlants()

  return (
    <HeroUIProvider locale="ru-RU">
      <ToastProvider />
      <RouterProvider router={router} />
    </HeroUIProvider>
  )
}

export default App
