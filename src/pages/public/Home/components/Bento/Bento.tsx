 import {BentoItem }from "../BentoItem/BentoItem"
import SanJuan from "../../../../../assets/images/Sanjuan1.jpg"
 export const Bento = () => {
  return (
    <section className="w-full max-w-[1400px] grid grid-cols-10 auto-rows-[35rem] gap-4 mx-auto  p-20">
      
        <BentoItem 
        className='col-span-10 overflow-hidden md:col-span-4' 
        title='Creators El Cenit de los premios SanJuaninos' 
        subtitle="filo como organizador"
        >
          
            <img 
            className="absolute top-0 bottom-0 left-0 w-full h-full duration-1000 ease-in-out bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-scale opacity-90 bg-blend-luminosity -z-10 "  
            src={SanJuan} 
            alt="" 
            />
        
          <p className="z-40 text-xl text-white">San Juan se presta como la Provincia que da nacimiento a este evento, dandonos todos sus lugares iconicos.</p>
        </BentoItem>
        <BentoItem className='col-span-10 overflow-hidden md:col-span-6' title='La alfombra Roja'>
          
          <img 
              className="absolute top-0 bottom-0 left-0 w-full h-full duration-1000 ease-in-out bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-scale opacity-90 bg-blend-luminosity -z-10 "  
              src={SanJuan} 
              alt="" 
              />
          
            <p className="z-40 text-xl text-white">San Juan se presta como la Provincia que da nacimiento a este evento, dandonos todos sus lugares iconicos.</p>
        </BentoItem>
        <BentoItem className='col-span-10 overflow-hidden md:col-span-6' title='La Gala'>
          <img 
                className="absolute top-0 bottom-0 left-0 w-full h-full duration-1000 ease-in-out bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-scale opacity-90 bg-blend-luminosity -z-10 "  
                src={SanJuan} 
                alt="" 
                />
            
              <p className="z-40 text-xl text-white">San Juan se presta como la Provincia que da nacimiento a este evento, dandonos todos sus lugares iconicos.</p>
        </BentoItem>
        <BentoItem className='col-span-10 overflow-hidden md:col-span-4' title='Disfruta del discord de la Comunidad'>
          <img 
                className="absolute top-0 bottom-0 left-0 w-full h-full duration-1000 ease-in-out bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-scale opacity-90 bg-blend-luminosity -z-10 "  
                src={SanJuan} 
                alt="" 
                />
            
              <p className="z-40 text-xl text-white">San Juan se presta como la Provincia que da nacimiento a este evento, dandonos todos sus lugares iconicos.</p>
        </BentoItem>
    </section>
  )
}
export default Bento;