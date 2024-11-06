import style from './bentoItem.module.css'

interface BentoItemProps {
    className?: string,
    title?: string,
    subtitle?: string,
    image?: string, 
    children?: React.ReactNode,

}
export const BentoItem = ({title, subtitle, image, className,children}:BentoItemProps) => {
  return (
        <article  className={`${style.bentoItem} ${className}`}>
            <div className={style.content}>
                <h2 className={style.title}>{title}</h2>
                {subtitle && <h3 className={style.subtitle}>{subtitle}</h3>}
                {children}
            </div>
            
        </article>
    
    
  )
}
export default BentoItem;