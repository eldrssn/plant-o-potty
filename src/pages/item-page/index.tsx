import {
  getDayAndMonth,
  getDaysDifferenceFromNow,
  getWateringStatus,
  PlantModel,
  pluralizeDays,
  usePlantsStore,
} from '@entities'
import { Button, Card, CardBody, Chip, Image } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// TODO: Нужно добавить потом лоадер и учесть асинхронщину
export const ItemPage = () => {
  const [plant, setPlant] = useState<PlantModel | null>()
  const { itemId } = useParams()

  const { plants } = usePlantsStore()

  useEffect(() => {
    const currentPlant = plants.find(({ id }) => id === itemId)
    setPlant(currentPlant)
  }, [itemId, plants])

  console.log('plant', plant)

  if (!plant) return <></>

  const {
    photoUrl,
    nickname,
    plant_type,
    wateringIntervalDays,
    lastWateredDate,
    nextWateringDate,
    notes,
  } = plant

  const formattedNextWateringDate = getDayAndMonth(nextWateringDate)
  const difference = getDaysDifferenceFromNow(nextWateringDate)
  const wateringStatus = getWateringStatus({
    date: formattedNextWateringDate,
    difference,
  })
  const formattedLastWateringDate = getDayAndMonth(lastWateredDate)
  const isLate = difference && difference < 0

  return (
    <div className="flex flex-col">
      <Image
        width="100%"
        height="360px"
        fallbackSrc="https://heroui.com/images/fruit-4.jpeg"
        src={photoUrl || undefined}
        className="object-cover object-center"
        radius="none"
      />
      <div className="z-10 flex flex-col px-5 -mt-16 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16 mb-3">
          <div className="flex flex-col justify-center">
            {nickname && <p className="text-2xl">{nickname}</p>}
            <h1 className={nickname ? '' : 'text-2xl'}>{plant_type}</h1>
          </div>
          <Button className="z-20 " radius="lg" variant="flat">
            Edit
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip size="lg">
            Раз в {wateringIntervalDays} {pluralizeDays(wateringIntervalDays)}
          </Chip>
          <Chip size="lg" color={isLate ? 'danger' : 'primary'}>
            {wateringStatus}
          </Chip>
          <Chip size="lg">
            Последний раз был полив: {formattedLastWateringDate}
          </Chip>
        </div>
        {notes && (
          <Card shadow="sm" radius="lg">
            <CardBody>
              <p>{notes}</p>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}
