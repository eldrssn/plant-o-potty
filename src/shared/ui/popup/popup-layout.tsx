import { FC, useEffect, useRef, useState } from 'react'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import { CSSTransition } from 'react-transition-group'
import { PopupProps } from './types'
import { POPUP_DELAY } from 'shared'

export const PopupLayout: FC<PopupProps> = ({
  onClose,
  opened,
  children,
  mounted,
  ...rest
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)

  const [animationIn, setAnimationIn] = useState(false)

  useEffect(() => {
    setAnimationIn(opened)

    if (!targetRef.current) return
    if (opened) {
      disableBodyScroll(targetRef.current)
    } else {
      enableBodyScroll(targetRef.current)
    }

    return () => clearAllBodyScrollLocks()
  }, [opened])

  if (!mounted) return null

  return (
    <div
      ref={targetRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
      onClick={(e) => e.stopPropagation()}
    >
      <CSSTransition
        in={animationIn}
        timeout={POPUP_DELAY}
        nodeRef={overlayRef}
        classNames="popup-overlay"
        unmountOnExit
      >
        <div
          ref={overlayRef}
          onClick={onClose}
          className="fixed inset-0 transition-opacity bg-black/40 backdrop-blur-sm"
        />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        timeout={POPUP_DELAY}
        nodeRef={contentRef}
        classNames="popup-content"
        unmountOnExit
      >
        <div
          {...rest}
          ref={contentRef}
          className="relative z-10 w-full max-w-md p-6 transition-all bg-white shadow-lg rounded-xl"
        >
          {children}
          <button
            onClick={onClose}
            className="absolute w-6 h-6 text-gray-500 top-4 right-4 hover:text-black"
          >
            ✕
          </button>
        </div>
      </CSSTransition>
    </div>
  )
}
