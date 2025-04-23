'use client'
import { useEffect, useState, useRef } from 'react';

export default function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [bgColor, setBgColor] = useState('rgba(18, 18, 18, 0.9)');
  const [vibrantColor, setVibrantColor] = useState('#1DB954');
  const [textColor, setTextColor] = useState('#ffffff');
  const [loading, setLoading] = useState(true);
  const [isChanging, setIsChanging] = useState(false);
  const prevTrackRef = useRef(null);
  const canvasRef = useRef(null);

  // Функция для извлечения доминантного цвета
  const getAverageColor = async (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        
        context.drawImage(img, 0, 0);
        
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let r = 0, g = 0, b = 0;
        
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        
        r = Math.floor(r / (data.length / 4));
        g = Math.floor(g / (data.length / 4));
        b = Math.floor(b / (data.length / 4));
        
        resolve({ r, g, b });
      };
      
      img.onerror = reject;
      img.src = imageUrl;
    });
  };

  const extractColors = async (imageUrl) => {
    try {
      const color = await getAverageColor(imageUrl);
      const mainColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
      setVibrantColor(mainColor);
      
      // Делаем цвет фона более приглушенным
      const darkenFactor = 0.7; // Коэффициент затемнения
      const adjustedColor = {
        r: Math.floor(color.r * darkenFactor),
        g: Math.floor(color.g * darkenFactor),
        b: Math.floor(color.b * darkenFactor)
      };
      
      // Если цвет слишком светлый, делаем его серее
      const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
      if (brightness > 200) {
        const grayFactor = 0.7;
        adjustedColor.r = Math.floor(adjustedColor.r * grayFactor);
        adjustedColor.g = Math.floor(adjustedColor.g * grayFactor);
        adjustedColor.b = Math.floor(adjustedColor.b * grayFactor);
      }
      
      setBgColor(`rgb(${adjustedColor.r}, ${adjustedColor.g}, ${adjustedColor.b})`);
      setTextColor('#ffffff'); // Всегда используем белый текст
    } catch (err) {
      console.error('Error extracting colors:', err);
      setVibrantColor('#1DB954');
      setBgColor('rgb(18, 18, 18)');
      setTextColor('#ffffff');
    }
  };

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&format=json&api_key=565fcd7a415ee4be39a9c3e35f9223e7&user=Or1GG1n');
      const data = await response.json();

      const currentTrack = data.recenttracks.track[0];
      const isPlaying = currentTrack['@attr']?.nowplaying === 'true';
      
      const newTrack = {
        name: currentTrack.name,
        artist: currentTrack.artist['#text'],
        albumArt: currentTrack.image.find(img => img.size === 'medium')['#text'],
        url: currentTrack.url,
        isPlaying
      };

      if (JSON.stringify(newTrack) !== JSON.stringify(prevTrackRef.current)) {
        setIsChanging(true); // Запускаем анимацию
        prevTrackRef.current = newTrack;
        setTrack(newTrack);
        await extractColors(newTrack.albumArt);
        
        // Сбрасываем состояние анимации
        setTimeout(() => {
          setIsChanging(false);
        }, 500); // Время анимации
      }
    } catch (err) {
      console.error('Last.fm API error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="widget loading">Loading...</div>;
  }

  if (!track?.isPlaying) {
    return <div className="widget">Not playing</div>;
  }

  return (
    <div className={`widget border-2 border-white/20 backdrop-blur-sm ${isChanging ? 'changing' : ''}`} 
         style={{ background: bgColor }}>
      <div className={`albumArtContainer ${isChanging ? 'changing' : ''}`}>
        <img 
          className="albumArt"
          src={track.albumArt} 
          alt="Album art"
          crossOrigin="anonymous"
        />
      </div>
      <div className="info">
        <div className="trackName">{track.name}</div>
        <div className="artist">{track.artist}</div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        .widget {
          width: 300px;
          padding: 16px;
          border-radius: 8px;
          display: flex;
          gap: 16px;
          transition: background 0.3s ease;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .albumArtContainer {
          flex-shrink: 0;
          transform: translateX(0);
        }

        .albumArtContainer.changing {
          animation: slideChange 0.5s ease;
        }

        @keyframes slideChange {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(100%);
            opacity: 0;
          }
          51% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .albumArt {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          // text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          min-width: 0; /* Важно для работы text-overflow */
          color: #ffffff;
        }

        .trackName {
          font-weight: 600;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1rem;
          letter-spacing: -0.01em;
          color: #ffffff;
          // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .artist {
          font-size: 0.9rem;
          opacity: 0.9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .loading {
          text-align: center;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}