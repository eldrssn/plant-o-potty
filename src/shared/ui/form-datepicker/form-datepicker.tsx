import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { DatePicker } from '@heroui/react'
import { getLocalTimeZone, today } from '@internationalized/date'

import { calendarDateToISOString, isoStringToCalendarDate } from 'shared/lib'
import { FormDatepickerProps } from './types'

export const FormDatepicker: FC<FormDatepickerProps> = ({
  control,
  name,
  label,
  className = 'w-full',
  size = 'lg',
  isRequired = true,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <DatePicker
          ref={ref}
          className={className}
          label={label}
          size={size}
          isRequired={isRequired}
          value={isoStringToCalendarDate(value as string)}
          onChange={(date) => {
            const isoString = calendarDateToISOString(date)
            onChange(isoString)
          }}
          onBlur={onBlur}
          isInvalid={!!error}
          errorMessage={error?.message}
          maxValue={today(getLocalTimeZone())}
        />
      )}
    />
  )
}
