// app/ui-components/InvisibleButtonPanel.js
"use client";

import { useState } from 'react';

export default function InvisibleButtonPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [imageClickCount, setImageClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setIsOpen(true);
      setClickCount(0);
    }
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
    setImageClickCount(0);
  };

  const handleImageClick = () => {
    const newCount = imageClickCount + 1;
    setImageClickCount(newCount);

    if (newCount >= 3) {
      setFullscreenImage(null);
    }
  };

  const links = [
    { 
      name: 'Polish Cow', 
      url: '#',
      image: 'https://media.tenor.com/_gfqfXAP08IAAAAM/polish-cow-cow.gif',
      isImage: true 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com' 
    },
    { 
      name: 'Next.js', 
      url: 'https://nextjs.org' 
    },
    { 
      name: 'Tailwind CSS', 
      url: 'https://tailwindcss.com' 
    },
  ];

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 w-10 h-10 opacity-0 z-50 cursor-pointer"
        aria-label="Секретная панель"
      />

      {clickCount > 0 && !isOpen && (
        <div className="fixed bottom-20 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Нажатий: {clickCount}/5
        </div>
      )}

      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? 'visible' : 'invisible opacity-0'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closePanel}
        />
        
        <div 
          className={`absolute right-0 top-0 h-full w-full border-l-3 border-zinc-700 md:w-1/2 bg-zinc-800 shadow-xl p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            onClick={closePanel}
            className="absolute top-4 right-4 text-white hover:text-white text-2xl transition-transform hover:scale-110 active:scale-95"
          >
            ✕
          </button>
          
          <h2 className="text-xl font-bold text-white mb-6 transition-all duration-200 delay-100 opacity-0 transform translate-y-2" style={isOpen ? { opacity: 1, transform: 'translateY(0)' } : undefined}>
            Секретная панель
          </h2>
          
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li 
                key={index}
                className="transition-all duration-200 opacity-0 transform translate-x-4"
                style={isOpen ? { 
                  opacity: 1, 
                  transform: 'translateX(0)',
                  transitionDelay: `${0.05 * index}s`
                } : undefined}
              >
                {link.isImage ? (
                  <button
                    onClick={() => openFullscreenImage(link.image)}
                    className="block w-full text-left p-3 hover:bg-zinc-700 text-white rounded transition-all hover:translate-x-1 active:scale-95"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 hover:bg-zinc-700 text-white rounded transition-all hover:translate-x-1 active:scale-95"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
          <div className="text-white mb-4">
            Нажмите на изображение {3 - imageClickCount} раз(а) чтобы закрыть
          </div>
          
          <div className="flex-1 w-full flex items-center justify-center">
            <img 
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}
    </>
  );
}