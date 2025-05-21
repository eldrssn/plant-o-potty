import { PlantModel, usePlantsStore } from '@entities'
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  Chip,
  DatePicker,
  Form,
  Image,
  Input,
  Textarea,
} from '@heroui/react'
import {
  getDayAndMonth,
  getDaysDifferenceFromNow,
  getWateringStatus,
  pluralizeDays,
  wateringFrequencyOptions,
} from 'entities/plant/lib'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditPage = () => {
  const navigate = useNavigate()
  const [plant, setPlant] = useState<PlantModel | null>()
  const { itemId } = useParams()

  const { plants } = usePlantsStore()

  useEffect(() => {
    const currentPlant = plants.find(({ id }) => id === itemId)
    setPlant(currentPlant)
  }, [itemId, plants])

  if (!plant) return <></>

  const {
    id,
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
      <header className="mt-6 mb-4 text-center text-md">
        {plant ? 'Редактирование растения' : 'Добавление растения'}
      </header>
      <Form validationBehavior="aria" className="flex flex-col gap-4 mx-4 my-6">
        <Card className="w-full" radius="lg">
          <CardBody className="flex flex-col gap-4">
            <Input
              // isRequired
              name="nickname"
              label="Ласковое имя"
              variant="flat"
              isClearable
              className="text-xl"
              size="lg"
            />
            <Input
              isRequired
              name="plant_type"
              label="Название"
              variant="flat"
              isClearable
              className="text-xl"
              size="lg"
            />
          </CardBody>
        </Card>
        <Card className="w-full" radius="lg">
          <CardBody className="flex flex-col gap-4">
            <Input
              name="photoUrl"
              label="Фото"
              variant="flat"
              isClearable
              type="file"
              className="text-xl"
              size="lg"
              labelPlacement="outside"
              fullWidth={false}
            />
          </CardBody>
        </Card>
        <Card className="w-full" radius="lg">
          <CardBody className="flex flex-col gap-4">
            <Autocomplete
              className="w-full"
              defaultItems={wateringFrequencyOptions}
              label="Частота полива"
              size="lg"
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>

            <DatePicker className="w-full" label="Последний полив" size="lg" />
          </CardBody>
        </Card>

        <Textarea className="w-full" label="Заметка" size="lg" radius="lg" />

        <Button
          type="submit"
          size="lg"
          variant="shadow"
          color="success"
          className="w-full"
        >
          Сохранить
        </Button>
      </Form>
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
