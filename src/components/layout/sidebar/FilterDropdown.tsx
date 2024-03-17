import BulletListIcon from '@/components/icons/bulletList'
import { Products } from '@/components/interface/products'
import { tv } from 'tailwind-variants'

const filterDropdownStyles = tv({
  slots: {
    trigger: [
      'border-secondary rounded border text-lg',
      'flex h-10 w-10 shrink-0 items-center justify-center',
      'transition-shadow duration-200 ease-in-out',
      'hover:bg-high focus-visible:ring-text-primary focus-visible:ring-2',
    ],
  },
})

export type FilterDropdownProps = {
  items: Products[]
}

export default function FilterDropdown({ items }: FilterDropdownProps) {
  const classes = filterDropdownStyles()

  const handleFilter = () => {
    console.log('filter')
  }

  return (
    <div className='relative'>
      <button className={classes.trigger()}>
        <BulletListIcon />
      </button>
    </div>
  )
}
