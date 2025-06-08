import { groupPlantsByStatus, usePlantsStore } from '@entities'
import { TaskList } from 'widgets'

export const Dashboard = () => {
  const { plants } = usePlantsStore()

  const { today, overdue, future } = groupPlantsByStatus(plants)

  return (
    <main className="flex flex-col gap-4 px-4 pb-32">
      {overdue.length > 0 && <TaskList items={overdue} header="Просрочены" />}
      {today.length > 0 && <TaskList items={today} header="Сегодня" />}
      {future.length > 0 && <TaskList items={future} header="Ожидают" />}
    </main>
  )
}
