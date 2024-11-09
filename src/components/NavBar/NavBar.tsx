import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="text-white bg-black shadow-md">
    <div className="container flex items-center justify-between h-16 px-4 mx-auto">
      <img className='w-auto h-20 p-2' src="/logoCreator.png" alt="" />
      
      <div className="md:hidden">
        <button className='absolute z-50 text-white top-4 right-4' onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX  size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 
                      ${isOpen ? 'absolute inset-0 top-0 bg-black w-full z-10 h-full flex flex-col  p-6' : 'hidden'} 
                      md:block`}>
        <div className='flex flex-col items-center justify-center align-middle md:flex-row my-36 md:space-y-0 md:gap-4'>
        <Link to="/info" className="font-bold hover:text-gray-300">Info</Link>
        <Link to="/archivo" className="font-bold hover:text-gray-300">Archivo</Link>
        <Link to="/finalistas" className="font-bold hover:text-gray-300">Finalistas</Link>
        <Link to="/votacion" className="font-bold hover:text-gray-300">Votación</Link>
          </div>                
        <div className='flex flex-row justify-center p-4 m-4 align-bottom md:hidden'>
        <IoLogoInstagram width={100} height={100}/>
        <FaSquareXTwitter />
        </div>
      </div>
      
    </div>
  </nav>
  )
}
export default NavBar