import { FC, PropsWithChildren } from 'react'
import { Card, CardBody } from '@heroui/react'

export const FormCard: FC<PropsWithChildren> = ({ children }) => (
  <Card className="w-full" radius="lg">
    <CardBody className="flex flex-col gap-4">{children}</CardBody>
  </Card>
)
