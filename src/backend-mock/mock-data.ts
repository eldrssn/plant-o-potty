import { PlantModel } from '@models'
import { calculateNextWatering, getDateRelativeToToday, pseudoUUID } from './utils'

export const mockPlants: PlantModel[] = [
  {
    id: pseudoUUID(),
    name: 'Монстера Делициоза',
    wateringIntervalDays: 7,
    lastWateredDate: getDateRelativeToToday(-2),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-2), 7),
    location: 'Гостиная',
    notes: 'Пересадить весной. Любит яркий рассеянный свет.',
    photoUrl:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max', // Пример URL
    addedDate: getDateRelativeToToday(-30),
  },
  {
    id: pseudoUUID(),
    name: "Фикус Эластика 'Робуста'",
    wateringIntervalDays: 10,
    lastWateredDate: getDateRelativeToToday(-10),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-10), 10), // Полив сегодня
    location: 'Холл',
    photoUrl: null, // Нет фото
    addedDate: getDateRelativeToToday(-60),
  },
  {
    id: pseudoUUID(),
    name: 'Замиокулькас',
    wateringIntervalDays: 21,
    lastWateredDate: getDateRelativeToToday(-5),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-5), 21),
    location: 'Спальня',
    notes: 'Очень неприхотлив. Полив редкий, но обильный.',
    addedDate: getDateRelativeToToday(-90),
    photoUrl:
      'https://images.unsplash.com/photo-1617104608154-7cce538d6946?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
  },
  {
    id: pseudoUUID(),
    name: "Сансевиерия 'Зейланика'",
    wateringIntervalDays: 14,
    lastWateredDate: getDateRelativeToToday(-15),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-15), 14), // Просрочен на 1 день
    location: 'Офис',
    addedDate: getDateRelativeToToday(-45),
  },
  {
    id: pseudoUUID(),
    name: "Эпипремнум 'Золотистый'",
    wateringIntervalDays: 7,
    lastWateredDate: getDateRelativeToToday(-1),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-1), 7),
    location: 'Кухня',
    notes: 'Можно подвесить в кашпо.',
    photoUrl:
      'https://images.unsplash.com/photo-1600510179881-aca5d50a61c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    addedDate: getDateRelativeToToday(-20),
  },
  {
    id: pseudoUUID(),
    name: "Хлорофитум 'Бонни'",
    wateringIntervalDays: 5,
    lastWateredDate: getDateRelativeToToday(0), // Поливали сегодня
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(0), 5),
    location: 'Детская',
    addedDate: getDateRelativeToToday(-10),
  },
  {
    id: pseudoUUID(),
    name: 'Орхидея Фаленопсис',
    wateringIntervalDays: 10,
    lastWateredDate: getDateRelativeToToday(-8),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-8), 10),
    location: 'Гостиная',
    notes: 'Поливать погружением.',
    photoUrl:
      'https://images.unsplash.com/photo-1591989102827-746d65b5a358?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    addedDate: getDateRelativeToToday(-100),
  },
  {
    id: pseudoUUID(),
    name: 'Суккулент Микс (Эхеверия)',
    wateringIntervalDays: 18,
    lastWateredDate: getDateRelativeToToday(-20),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-20), 18),
    location: 'Балкон (солнечная сторона)',
    addedDate: getDateRelativeToToday(-50),
  },
  {
    id: pseudoUUID(),
    name: 'Кактус (Маммиллярия)',
    wateringIntervalDays: 30,
    lastWateredDate: getDateRelativeToToday(-15),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-15), 30),
    location: 'Подоконник юг',
    photoUrl:
      'https://images.unsplash.com/photo-1519336056116-bc0f1761dec5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    addedDate: getDateRelativeToToday(-150),
  },
  {
    id: pseudoUUID(),
    name: "Спатифиллум 'Уоллиса'",
    wateringIntervalDays: 4,
    lastWateredDate: getDateRelativeToToday(-4),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-4), 4),
    location: 'Ванная (если есть окно)',
    notes: 'Любит влажность. Опускает листья, когда хочет пить.',
    addedDate: getDateRelativeToToday(-40),
  },
  {
    id: pseudoUUID(),
    name: 'Драцена Маргината',
    wateringIntervalDays: 12,
    lastWateredDate: null,
    nextWateringDate: null,
    location: 'Прихожая',
    photoUrl: null,
    addedDate: getDateRelativeToToday(-5),
  },
  {
    id: pseudoUUID(),
    name: "Калатея 'Медальон'",
    wateringIntervalDays: 3,
    lastWateredDate: getDateRelativeToToday(-1),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-1), 3),
    location: 'Спальня',
    notes: 'Требовательна к влажности воздуха. Опрыскивать.',
    photoUrl:
      'https://images.unsplash.com/photo-1604768879967-eed3a1eb5d9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    addedDate: getDateRelativeToToday(-25),
  },
  {
    id: pseudoUUID(),
    name: 'Папоротник Нефролепис',
    wateringIntervalDays: 4,
    lastWateredDate: getDateRelativeToToday(-5),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-5), 4),
    location: 'Северный подоконник',
    addedDate: getDateRelativeToToday(-70),
  },
  {
    id: pseudoUUID(),
    name: "Бегония 'Королевская'",
    wateringIntervalDays: 6,
    lastWateredDate: getDateRelativeToToday(-6),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-6), 6),
    location: 'Гостиная',
    photoUrl:
      'https://images.unsplash.com/photo-1600270398361-d0b70e1a6f6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    addedDate: getDateRelativeToToday(-80),
  },
  {
    id: pseudoUUID(),
    name: "Аглаонема 'Сильвер Квин'",
    wateringIntervalDays: 9,
    lastWateredDate: getDateRelativeToToday(-3),
    nextWateringDate: calculateNextWatering(getDateRelativeToToday(-3), 9),
    location: 'Офис',
    notes: 'Хорошо переносит тень.',
    addedDate: getDateRelativeToToday(-120),
  },
]
