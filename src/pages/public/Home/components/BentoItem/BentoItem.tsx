

interface BentoItemProps {
    className?: string,
    title?: string,
    subtitle?: string,
    image?: string, 
    children?: React.ReactNode,

}
export const BentoItem = ({title, subtitle, className,children}:BentoItemProps) => {
  return (
        <article  className={`relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 group ${className}`}>
            
            <div className='relative z-20 flex flex-col justify-end h-full gap-1 p-6 text-lg select-none '>
                <h2 className='z-40 mb-4 text-3xl font-semibold text-white text-balance'>{title}</h2>
                {subtitle && <h3 className='z-40 -mt-4 text-2xl font-semibold text-sky-200/80'>{subtitle}</h3>}
                <div className='absolute inset-0 bg-gradient-to-b from-40% from-transparent via-black/80 to-black/80'></div>
                {children}
            </div>
            
        </article>
    
    
  )
}
export default BentoItem;