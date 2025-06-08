import { FC } from 'react'
import { Card } from '@heroui/react'

import { PlantTaskItem } from '@entities'
import { TaskListProps } from './types'

export const TaskList: FC<TaskListProps> = ({ header, items }) => {
  return (
    <Card className="flex flex-col gap-2 pb-4" radius="lg">
      <h2 className="pt-4 pl-4 text-xl">{header}</h2>
      {items.map((item) => (
        <PlantTaskItem item={item} key={item.id} />
      ))}
    </Card>
  )
}
