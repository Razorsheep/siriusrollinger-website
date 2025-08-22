import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  lightboxClassName?: string;
  showLightbox?: boolean;
  lightboxSrc?: string; // Optional: different source for lightbox (e.g., full resolution)
}

export function Image({ 
  src, 
  alt, 
  className = '', 
  lightboxClassName = '',
  showLightbox = true,
  lightboxSrc
}: ImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    console.log('Lightbox state changed:', { isLightboxOpen, lightboxSrc: lightboxSrc || src });
    
    if (!isLightboxOpen) {
      return;
    }
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        return;
      }
    };
    
    window.addEventListener('keydown', onKeyDown);
    
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen, lightboxSrc, src]);

  const handleImageClick = () => {
    if (showLightbox) {
      console.log('Image clicked:', { src, lightboxSrc, alt });
      setIsLightboxOpen(true);
      console.log('Setting lightbox open to true');
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${showLightbox ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
        onClick={handleImageClick}
      />

      {/* Custom Lightbox */}
      {showLightbox && isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[var(--color-black)]/90"
            onClick={() => setIsLightboxOpen(false)}
          />
          
          {/* Lightbox Content */}
          <div className={`relative z-10 max-w-4xl max-h-[90vh] mx-[var(--spacing-md)] ${lightboxClassName}`}>
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-[var(--spacing-md)] right-[var(--spacing-md)] z-20 p-[var(--spacing-sm)] bg-[var(--color-black)]/50 hover:bg-[var(--color-black)]/70 text-[var(--color-white)] rounded-[var(--radius-full)] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Display */}
            <img
              src={lightboxSrc || src}
              alt={alt}
              className="w-full h-full object-contain max-h-[90vh] rounded-[var(--radius-lg)] shadow-2xl"
              onLoad={() => console.log('Lightbox image loaded:', lightboxSrc || src)}
              onError={(e) => console.error('Lightbox image failed to load:', lightboxSrc || src, e)}
            />
          </div>
        </div>
      )}
    </>
  );
}
