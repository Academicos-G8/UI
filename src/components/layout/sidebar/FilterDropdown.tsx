import BulletListIcon from '@/components/icons/bulletList'
import { tv } from 'tailwind-variants'

const filterDropdownStyles = tv({
  slots: {
    trigger: [
      'border-secondary rounded border text-lg',
      'flex h-10 w-10 shrink-0 items-center justify-center',
      'hover:bg-high',
    ],
  },
})

export default function FilterDropdown() {
  const classes = filterDropdownStyles()

  return (
    <div className='relative'>
      <button className={classes.trigger()}>
        <BulletListIcon />
      </button>
    </div>
  )
}
