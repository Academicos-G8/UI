import React, { ComponentProps, forwardRef } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: [
    'inline-flex h-fit items-center justify-center',
    'font-azeret whitespace-nowrap font-semibold leading-normal',
    'disabled:cursor-default disabled:opacity-50 disabled:grayscale',
  ],
  variants: {
    variant: {
      solid:
        'bg-primary rounded-2xl px-8 py-4 text-base font-bold transition-all hover:brightness-90',
      outline:
        'border-elevation-1 bg-base text-low hover:bg-elevation-1 rounded-2xl border px-8 py-4',
      text: 'text-high focus-within:text-primary hover:text-primary focus:text-primary h-10 px-4',
    },
    icon: {
      true: 'gap-2',
    },
    width: {
      fit: 'w-fit',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'solid',
    width: 'fit',
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, variant, width, leftIcon, rightIcon, ...props },
  forwardRef
) {
  return (
    <button
      ref={forwardRef}
      className={buttonStyles({
        className,
        variant,
        icon: leftIcon !== undefined || rightIcon !== undefined,
        width,
      })}
      {...props}
    >
      {leftIcon !== undefined ? leftIcon : null}
      {children}
      {rightIcon !== undefined ? rightIcon : null}
    </button>
  )
})

export { Button }
