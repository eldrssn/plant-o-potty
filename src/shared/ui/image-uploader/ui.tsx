import { FC, useRef, useState } from 'react'
import { Button, Card, CardBody, cn } from '@heroui/react'
import { ImageUploaderUIProps } from './types'
import { getImagePreview } from './model'

export const ImageUploaderUI: FC<ImageUploaderUIProps> = ({
  label,
  previewUrl,
  onChange,
  className,
  name,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState(previewUrl)

  const handleClick = () => inputRef.current?.click()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = getImagePreview(file)
      setPreview(url)
      onChange(file)
    }
  }

  const handleClear = () => {
    setPreview(null)
    if (inputRef.current) inputRef.current.value = ''
    onChange(null)
  }

  return (
    <div className={cn('flex flex-col items-start gap-2', className)}>
      {label && <p className="text-sm font-medium text-gray-700">{label}</p>}

      <div className="flex items-center gap-4">
        <label id={name}>
          <Card
            isHoverable
            className={cn(
              'w-32 h-32 overflow-hidden border border-gray-300 border-dashed cursor-pointer',
              preview && 'border-none'
            )}
          >
            <CardBody className="flex items-center justify-center p-0">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="object-cover w-full h-full rounded-xl"
                />
              ) : (
                <span className="text-xs text-center text-gray-400">
                  Кликните, чтобы загрузить фото
                </span>
              )}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </CardBody>
          </Card>
        </label>

        {preview && (
          <div className="flex gap-2 mt-1">
            <Button size="sm" variant="flat" onPress={handleClick}>
              Заменить
            </Button>
            <Button
              size="sm"
              variant="light"
              color="danger"
              onPress={handleClear}
            >
              Удалить
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
