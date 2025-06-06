import { Controller, FieldValues } from 'react-hook-form'
import { ImageUploaderProps } from './types'
import { ImageUploaderUI } from './ui'

export const ImageUploader = <T extends FieldValues>({
  control,
  name,
  label,
  className,
}: ImageUploaderProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange }, fieldState: { error } }) => (
      <>
        <ImageUploaderUI
          label={label}
          className={className}
          onChange={onChange}
          name={name}
        />
        {error && <span className="text-xs text-red-500">{error.message}</span>}
      </>
    )}
  />
)
