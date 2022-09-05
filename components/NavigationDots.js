import Link from 'next/link'

const navMenuOptions = ['home', 'about', 'projects', 'experience', 'contact']

function NavigationDots({ active }) {
  return (
    <div className="hidden md:flex flex-col justify-center items-center p-6">
      {navMenuOptions.map((item, idx) => (
        <Link
          href={`/${item == 'home' ? '' : `#${item}`}`}
          key={item + idx}
        >
          <a style={active === item ? { backgroundColor: '#313BAC' } : {}} className="rounded-full bg-[#cbcbcb] hover:ring-1 hover:ring-offset-1 hover:ring-base-accent w-[8px] h-[8px] m-1 transition-colors duration-200 ease-in-out"></a>
        </Link>
      ))}
    </div>
  )
}

export default NavigationDots
