export default function StoneCard({ 
  title, 
  subtitle, 
  src, 
  alt, 
  number, 
  aspectRatio = "aspect-square", 
  className = "",
  lazyLoad = true
}) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className={`overflow-hidden bg-surface-container-low ${aspectRatio} mb-6`}>
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={alt}
          src={src}
          loading={lazyLoad ? "lazy" : "eager"}
          decoding="async"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-1">{title}</h3>
          <p className="text-[#8A8A8F] text-sm">{subtitle}</p>
        </div>
        {number && <span className="text-[#EF2029] font-bold text-lg">{number}</span>}
      </div>
    </div>
  )
}