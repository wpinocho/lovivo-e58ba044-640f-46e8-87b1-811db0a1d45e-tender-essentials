export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3">
      <img 
        src="/logo.svg" 
        alt="Baby Essentials Logo"
        className="h-10 w-10 object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-2xl font-semibold text-foreground">Baby Essentials</span>
    </a>
  )
}