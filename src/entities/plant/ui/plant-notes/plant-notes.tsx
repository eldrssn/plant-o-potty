import { FC } from 'react'
import { Card, CardBody } from '@heroui/react'
import { PlantNotesProps } from './types'

export const PlantNotes: FC<PlantNotesProps> = ({ notes }) => {
  return (
    <Card shadow="sm" radius="lg">
      <CardBody>
        <p>{notes}</p>
      </CardBody>
    </Card>
  )
}
