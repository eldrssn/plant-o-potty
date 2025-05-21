import { Image } from '@heroui/react'
import { FC } from 'react'
import { PlantImageProps } from './types'

export const PlantImage: FC<PlantImageProps> = ({ src }) => {
  return (
    <Image
      width="100%"
      height="360px"
      fallbackSrc="https://heroui.com/images/fruit-4.jpeg"
      src={src || undefined}
      className="object-cover object-center"
      radius="none"
    />
  )
}
