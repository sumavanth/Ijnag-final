interface LogoSliderProps {
  logos: string;
  alt?: string;
}

export function LogoSlider({ logos, alt = "Partner Logos" }: LogoSliderProps) {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-content {
            animation: marquee 30s linear infinite;
          }
          
          .marquee-content:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="flex marquee-content">
        {/* First set of logos */}
        <div className="flex-shrink-0 px-8">
          <img 
            src={logos} 
            alt={alt} 
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex-shrink-0 px-8">
          <img 
            src={logos} 
            alt={alt} 
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}
