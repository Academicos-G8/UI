import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const styles = tv({
  base: [
    'border-secondary w-full rounded border bg-transparent',
    'appearance-none outline-none transition-shadow duration-200 ease-in-out',
    'focus-visible:ring-text-primary focus-visible:ring-2',
    'placeholder:italic placeholder-text-secondary/50',
  ],
  variants: {
    size: {
      sm: ['h-9 min-w-9 px-2.5 text-sm'],
      md: ['text-md h-10 min-w-10 px-3'],
      lg: ['text-md h-11 min-w-11 px-3.5'],
      xl: ['h-12 min-w-12 px-4 text-lg'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type InputProps = VariantProps<typeof styles> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size, className, ...props },
  ref
) {
  return <input ref={ref} className={styles({ size, className })} {...props} />
})

export default Input
