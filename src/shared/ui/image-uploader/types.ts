import { Control, FieldValues, Path } from 'react-hook-form'

export interface ImageUploaderProps<T extends FieldValues> {
  label?: string
  name: Path<T>
  control: Control<T>
  className?: string
}

export interface ImageUploaderUIProps {
  label?: string
  name: string
  previewUrl?: string | null
  onChange: (file: File | null) => void
  className?: string
}
