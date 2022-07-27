import Link from 'next/link'

const navMenuOptions = ['home', 'about', 'work', 'skills', 'testimonials', 'contacts',]

function NavigationDots({ active }) {
  return (
    <div className="hidden md:flex flex-col justify-center items-center p-2">
      {navMenuOptions.map((item, idx) => (
        <Link
          href={`#${item}`}
          key={item + idx}
        >
          <a style={active === item ? { backgroundColor: '#313BAC' } : {}} className="rounded-full bg-[#cbcbcb] hover:bg-base-accent w-[8px] h-[8px] m-1 transition-colors duration-200 ease-in-out"></a>
        </Link>
      ))}
    </div>
  )
}

export default NavigationDots
