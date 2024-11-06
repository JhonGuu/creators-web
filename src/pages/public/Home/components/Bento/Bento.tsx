 import {BentoItem }from "../BentoItem/BentoItem"
import style from "./bento.module.css"
 export const Bento = () => {
  return (
    <section className={style.bento}>
        <BentoItem 
        className={style.section1} 
        title='Creators El Cenit de los premios SanJuaninos' 
        subtitle="filo como organizador"><p>San Juan se presta como la Provincia que da nacimiento a este evento, dandonos todos sus lugares iconicos.</p></BentoItem>
        <BentoItem className={style.section2} title='La alfombra Roja'/> 
        <BentoItem className={style.section3} title='La Gala'/>
        <BentoItem className={style.section4} title='Disfruta del discord de la Comunidad'/>
    </section>
  )
}
export default Bento;