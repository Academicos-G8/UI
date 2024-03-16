type SVGProps = React.SVGProps<SVGSVGElement>

function HamburguerIcon({ ...props }: SVGProps) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 21 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.7678 0.5H1.23219C0.551671 0.5 0 1.07178 0 1.77711C0 2.48244 0.551671 3.05422 1.23219 3.05422H19.7678C20.4483 3.05422 21 2.48244 21 1.77711C21 1.07178 20.4483 0.5 19.7678 0.5Z'
        fill='currentColor'
      />
      <path
        d='M16.6034 7.7204H1.23219C0.551671 7.7204 0 8.29219 0 8.99752C0 9.70285 0.551671 10.2746 1.23219 10.2746H16.6034C17.2839 10.2746 17.8356 9.70285 17.8356 8.99752C17.8356 8.29219 17.2839 7.7204 16.6034 7.7204Z'
        fill='currentColor'
      />
      <path
        d='M11.6651 14.9458H1.23219C0.551671 14.9458 0 15.5176 0 16.2229C0 16.9282 0.551671 17.5 1.23219 17.5H11.6651C12.3456 17.5 12.8973 16.9282 12.8973 16.2229C12.8973 15.5176 12.3456 14.9458 11.6651 14.9458Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default HamburguerIcon
