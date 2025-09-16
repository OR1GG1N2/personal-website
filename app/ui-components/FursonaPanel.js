'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FursonaPanel({
  name = "Fox Taffy",
  species = "Лис",
  height = "20 см",
  gender = "Мужской (He/him)",
  creationDate = "Лето 2020",
  description = "Fox Taffy - яркий, дружелюбный и энергичный лис с уникальной окраской. Его основные цвета - белый, оранжевый и зеленый, что отражается в его стиле и характере.",
  history = "Персонаж Fox Taffy был создан в 2020 году как отражение моей личности в фурри-мире. С тех пор он постоянно эволюционирует, меняется и обретает новые черты.",
  mainImage = "/origgin.jpg",
  colors = ["#FFFFFF", "#00E5A1", "#00FF00", "#00D6D6", "#008080", "#FF8000"],
  traits = ["Дружелюбный", "Энергичный", "Креативный", "Общительный"],
  additionalImages = ["/origgin.jpg", "/avatar.jpg"],
  socials = [
    { platform: "Telegram", url: "https://t.me/username", icon: "/telegram.svg" },
    { platform: "Twitter", url: "https://twitter.com/username", icon: "/window.svg" }
  ]
}) {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Эффект пульсации для активного цвета
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovering(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Обработчик клавиш для галереи
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showGallery) {
        if (e.key === 'Escape') {
          setShowGallery(false);
        } else if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => 
            prev === 0 ? additionalImages.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => 
            prev === additionalImages.length - 1 ? 0 : prev + 1
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showGallery, additionalImages.length]);

  // Блокировка прокрутки при открытой галерее
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  const handleGalleryClick = (e) => {
    e.stopPropagation();
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === additionalImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? additionalImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full min-h-screen py-12 px-4">
      <div 
        className="fursona-panel max-w-5xl mx-auto"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), radial-gradient(circle at top right, ${activeColor}33, transparent 70%)`,
          boxShadow: isHovering ? `0 0 30px ${activeColor}55` : 'none'
        }}
      >
        {/* Верхняя секция */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          <Image
            src={mainImage}
            width={1200}
            height={400}
            alt={`Главное изображение ${name}`}
            className="w-full h-[300px] object-cover"
            priority
          />
          
          {/* Оверлей с основной информацией */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, white, ${activeColor})` }}>
                {name}
              </h1>
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <a key={idx} 
                     href={social.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
                     aria-label={`Ссылка на ${social.platform}`}>
                    <Image src={social.icon} 
                           width={20} 
                           height={20} 
                           alt={`Иконка ${social.platform}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge style={{ background: activeColor }}>{species}</Badge>
              <Badge style={{ background: activeColor }}>{height}</Badge>
              <Badge style={{ background: activeColor }}>{gender}</Badge>
            </div>
            
            <div>
              <h3 className="text-white/60 text-sm mb-2 font-semibold">Черты характера</h3>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-white/80 border border-white/10">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white/60 text-sm mb-3 font-semibold">Цветовая схема</h3>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveColor(color)}
                    className={`w-8 h-8 rounded-lg relative transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                      activeColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
                    }`}
                    style={{ background: color }}
                    aria-label={`Выбрать цвет ${color}`}
                  >
                    {activeColor === color && (
                      <span className="absolute inset-0 animate-ping rounded-lg opacity-75"
                            style={{ background: color }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white/60 text-sm mb-2 font-semibold">Дата создания</h3>
              <p className="text-white/80 text-sm">{creationDate}</p>
            </div>
          </div>

          {/* Центральная колонка */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h3 className="text-white/60 text-sm mb-3 font-semibold">Описание</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">{description}</p>
              </div>
            </div>

            <div>
              <h3 className="text-white/60 text-sm mb-3 font-semibold">История</h3>
              <p className="text-white/70 text-sm leading-relaxed">{history}</p>
            </div>

            {/* Галерея */}
            <div>
              <h3 className="text-white/60 text-sm mb-3 font-semibold">Галерея</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {additionalImages.map((img, idx) => (
                  <div key={idx} 
                       onClick={() => {
                         setCurrentImageIndex(idx);
                         setShowGallery(true);
                       }}
                       className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:ring-2 hover:ring-white/30 transition-all focus-within:ring-2 focus-within:ring-white/50"
                       tabIndex={0}
                       onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                           e.preventDefault();
                           setCurrentImageIndex(idx);
                           setShowGallery(true);
                         }
                       }}
                       aria-label={`Открыть изображение ${idx + 1} в галерее`}>
                    <Image
                      src={img}
                      fill
                      alt={`Изображение галереи ${idx + 1}`}
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Модальное окно галереи */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
               onClick={() => setShowGallery(false)}>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                 onClick={handleGalleryClick}>
              <Image
                src={additionalImages[currentImageIndex]}
                width={800}
                height={800}
                alt={`Полноразмерное изображение ${currentImageIndex + 1}`}
                className="object-contain max-w-full max-h-full"
              />
              
              {/* Кнопки навигации */}
              {additionalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Предыдущее изображение">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
                    aria-label="Следующее изображение">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Кнопка закрытия */}
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Закрыть галерею">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Индикатор текущего изображения */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {currentImageIndex + 1} / {additionalImages.length}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .fursona-panel {
          opacity: 0;
          transform: scale(0.98);
          animation: panelFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          border-radius: 24px;
          backdrop-filter: blur(12px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes panelFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fursona-panel:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 768px) {
          .fursona-panel:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

function Badge({ children, style }) {
  return (
    <span 
      className="px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm
                 bg-white/10 text-white shadow-lg transition-all hover:scale-105 border border-white/20"
      style={style}
    >
      {children}
    </span>
  );
}