import { Autocomplete, AutocompleteItem } from '@heroui/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { FrequencySelectProps } from './types'

export const FrequencySelect: FC<FrequencySelectProps> = ({
  control,
  options,
}) => (
  <Controller
    control={control}
    name="wateringIntervalDays"
    render={({ field: { onChange, onBlur, value, ref } }) => (
      <Autocomplete
        ref={ref}
        className="w-full"
        defaultItems={options}
        label="Частота полива"
        size="lg"
        selectedKey={value?.toString()}
        onSelectionChange={(key) => {
          onChange(key ? Number(key) : null)
        }}
        onBlur={onBlur}
      >
        {(item) => (
          <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    )}
  />
)
