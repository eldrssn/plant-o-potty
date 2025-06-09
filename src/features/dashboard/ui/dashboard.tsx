import {
  groupPlantsByStatus,
  usePlantsStore,
  WateringStatusTypes,
} from '@entities'
import { Tab, Tabs } from '@heroui/react'
import { CreatePlantButton } from 'features/plant'
import { Key, useMemo, useState } from 'react'
import { TaskList } from 'widgets'

export const Dashboard = () => {
  const { plants } = usePlantsStore()
  const [tab, setTab] = useState<Key>(WateringStatusTypes.CURRENT)

  const { current, future } = useMemo(
    () => groupPlantsByStatus(plants),
    [plants]
  )

  return (
    <main className="flex flex-col gap-4 px-4 pb-32">
      {/* TODO: вынести в отдельный компонент */}
      <Tabs
        aria-label="Tabs variants"
        variant="underlined"
        className="m-auto"
        defaultSelectedKey={WateringStatusTypes.CURRENT}
        onSelectionChange={setTab}
        color="primary"
      >
        <Tab key={WateringStatusTypes.CURRENT} title="Текущие задачи" />
        <Tab key={WateringStatusTypes.FUTURE} title="Будущие задачи" />
      </Tabs>

      {/* TODO: разобрать этот код */}
      {tab === WateringStatusTypes.CURRENT && (
        <>
          {current.length > 0 ? (
            <TaskList items={current} header="Сегодня" />
          ) : (
            <>
              {!plants.length ? (
                <>
                  <p className="p-10 pb-20 text-2xl text-center">
                    Скорее добавь растение, чтобы заботится о нем! 🪴
                  </p>
                  <CreatePlantButton />
                </>
              ) : (
                <p className="p-10 pb-20 text-2xl text-center">
                  Все полито! Ты молодец! 🤩
                </p>
              )}
            </>
          )}
        </>
      )}

      {tab === WateringStatusTypes.FUTURE && (
        <>
          {future.length > 0 ? (
            <TaskList items={future} header="Ожидают" />
          ) : (
            <p className="p-10 pb-20 text-2xl text-center">
              Скорее добавь растение, чтобы заботится о нем! 🪴
            </p>
          )}
        </>
      )}
    </main>
  )
}
