import Hero from './Hero'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='bg-[#004DB3] text-white'>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Header