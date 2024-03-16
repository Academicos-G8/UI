import HamburguerIcon from '../icons/hamburguer'

export default function Header() {
  return (
    <header className='bg-primary border-secondary flex h-[72px] items-center border-b px-6'>
      <button className='text-text-primary hover:text-text-secondary mr-6 p-1 text-xl'>
        <HamburguerIcon />
      </button>

      <span className='text-text-secondary text-2xl font-light italic'>
        G8 Academics
      </span>
    </header>
  )
}
