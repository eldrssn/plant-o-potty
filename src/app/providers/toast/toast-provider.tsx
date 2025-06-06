import { ToastProvider as HeroUIToastProvider } from '@heroui/react'

export const ToastProvider = () => (
  <HeroUIToastProvider
    toastProps={{
      variant: 'flat',
      radius: 'lg',
      classNames: {
        closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
      },
      timeout: 1000,
      closeIcon: (
        <svg
          fill="none"
          height="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="32"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ),
    }}
  />
)
