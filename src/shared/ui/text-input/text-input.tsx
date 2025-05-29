import { Input, InputProps } from '@heroui/react'
import { FC } from 'react'

export const TextInput: FC<InputProps> = ({
  label,
  isRequired,
  errorMessage,
  ...props
}) => (
  <Input
    isRequired={isRequired}
    label={label}
    variant="flat"
    isClearable
    className="text-xl"
    size="lg"
    errorMessage={errorMessage}
    isInvalid={!!errorMessage}
    {...props}
  />
)
