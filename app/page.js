"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import InvisibleButtonPanel from "./ui-components/InvisibleButtonPanel";
import FursonaPanel from "./ui-components/FursonaPanel";

// Настройки темы
// Анимации появления
const fadeInAnimationVariants = {
  grid: "animate-fade-in-up [--delay:200ms]",
  card: "animate-fade-in-up [--delay:400ms]",
  panel: "animate-fade-in-up [--delay:600ms]"
};

const theme = {
  colors: {
    primary: {
      from: "#4a3b82",
      via: "#2d5c8f",
      to: "#2d6e5b"
    },
    panel: {
      from: "rgba(255, 255, 255, 0.03)",
      to: "rgba(255, 255, 255, 0.07)"
    },
    text: {
      primary: "#e2e8f0",
      secondary: "rgba(226, 232, 240, 0.7)",
      muted: "rgba(226, 232, 240, 0.5)"
    }
  },
  animations: {
    hover: "hover:scale-105 transition-transform duration-300",
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up"
  }
};

// Конфигурация фурсоны
const fursonaConfig = {
  name: "Ориджин",
  species: "Кот",
  height: "182см",
  gender: "Мужской (He/him)",
  creationDate: "Лето 2023",
  colors: ["#376e75", "#66a061", "#443a45", "#89807b", "#c9c2bc"],
  traits: ["Дружелюбный", "Малообщительный", "Креативный", "Инженер"],
  mainImage: "/photo_2025-09-16_13-27-36.jpg",
  gallery: [],
  socials: [
    // { platform: "Telegram", url: "https://t.me/jsonnews", icon: "/telegram.svg" },
    // { platform: "Twitch", url: "https://www.twitch.tv/or1ggin", icon: "/window.svg" }
  ]
};

const urlbuttons = [
  { name: "Telegram", description: "Телеграм канал", logo: "/1sg9t0nv.png", url: 'https://t.me/jsonnews' },
  { name: "Twitch", description: "Канал со стримами", logo: "/k2jfmqmt.png", url: 'https://www.twitch.tv/or1ggin' },
  { name: "Поддержать", description: "Нижний текст", logo: "/pjctn7n7.png", url: 'https://ggbio.carrd.co/#donate' },
  { name: "Steam", description: "Тут у меня игры", logo: "/t63qgyoi.png", url: 'https://steamcommunity.com/id/or1gg1n/' },
  { name: "Soundcloud", description: "Не музыкант", logo: "/kbwwa7v4.png", url: 'https://soundcloud.com/or1gg1n' },
  { name: "Spotify", description: "То что слушаю", logo: "/snbfip4j.png", url: 'https://open.spotify.com/user/fmb77xyr35srksw8u12bfohdz?si=540669b56a5e49bd' },
  { name: "Мой Wishlist", description: "Список желаний", logo: "/jibtd2bu.png", url: 'https://mywishlist.online/w/vx2kmb/or1gg1ns-wishlist' },
];

export default function Home() {
  // const [isLinksCollapsed, setIsLinksCollapsed] = useState(false);
  // const [isFursonaCollapsed, setIsFursonaCollapsed] = useState(false);
  const [copiedColor, setCopiedColor] = useState(null);

  // Эффект для сброса уведомления о копировании
  useEffect(() => {
    if (copiedColor) {
      const timer = setTimeout(() => setCopiedColor(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedColor]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Основной контент */}
      <div className="flex-1 flex flex-col max-w-5xl w-full mx-auto px-4 py-8 md:py-16 animate-fade-in">
        <head>
          <title>OR1GG1n Bio • Links</title>
        </head>
        
        <header className="relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-emerald-500/10 opacity-50" />
          <div className="relative flex items-center gap-6">
            <div className="relative group">
              <Image
                src="/avatar.jpg"
                width={500}
                height={500}
                loading="lazy"
                alt="Avatar Or1GG1n"
                className="rounded-2xl h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/30 via-blue-500/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                Or1GG1n
              </h1>
              <p className="text-blue-200/70 mt-1">
                Frontend dev, streamer
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8 md:mt-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-100">Социальные сети</h2>
              <p className="text-blue-200/70 mt-1 text-sm">Найти меня можно здесь</p>
            </div>
            {/* <button
              onClick={() => setIsLinksCollapsed(!isLinksCollapsed)}
              className="p-2 rounded-lg hover:bg-white/5 transition-all text-blue-200/70 hover:text-blue-100"
              aria-label={isLinksCollapsed ? "Развернуть ссылки" : "Свернуть ссылки"}
            >
              <svg 
                className={`w-5 h-5 transition-transform ${isLinksCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button> */}
          </div>
          
          <div className="grid gap-4 md:grid-cols-4 grid-cols-2 transition-all duration-500 overflow-hidden max-h-[1000px] opacity-100">
            {urlbuttons.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a href={item.url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="relative block p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 min-h-[100px] flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.logo}
                        width={24}
                        height={24}
                        loading="lazy"
                        alt={`Логотип ${item.name}`}
                        className="opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center">
                      <h3 className="text-blue-100 font-medium text-base line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-blue-200/70 text-sm mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Панель фурсоны */}
        <section className="mt-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-violet-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                Мой фурсона
              </h2>
              <p className="text-blue-200/70 mt-1 text-sm">Or1GG1n - мой персонаж</p>
            </div>
            {/* <button
              onClick={() => setIsFursonaCollapsed(!isFursonaCollapsed)}
              className="p-2 rounded-lg hover:bg-white/5 transition-all text-blue-200/70 hover:text-blue-100"
              aria-label={isFursonaCollapsed ? "Развернуть информацию о фурсоне" : "Свернуть информацию о фурсоне"}
            >
              <svg 
                className={`w-5 h-5 transition-transform ${isFursonaCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button> */}
          </div>

          <div className="transition-all duration-500 max-h-[1000px] opacity-100">
            <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Изображение */}
                  <div className="flex-shrink-0 w-full md:w-1/2">
                    <div className="relative aspect-video rounded-lg overflow-hidden group/image">
                      <Image
                        src={fursonaConfig.mainImage}
                        fill
                        alt={`${fursonaConfig.name} основной референс`}
                        className="object-cover transition-all duration-500 group-hover/image:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Информация */}
                  <div className="flex-1 space-y-6">
                    {/* Базовая информация */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {[fursonaConfig.species, fursonaConfig.height, fursonaConfig.gender].map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-white/80 border border-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Origin - дружелюбный и всегда готовый к общению кот.
                      </p>
                    </div>

                    {/* Черты и цвета */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {fursonaConfig.traits.map((trait, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-violet-500/10 to-emerald-500/10 text-white/80"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        {fursonaConfig.colors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              navigator.clipboard.writeText(color);
                              setCopiedColor(color);
                            }}
                            className="relative w-8 h-8 rounded-lg transition-transform hover:scale-110 group/color"
                            style={{ background: color }}
                          >
                            <div className="absolute inset-0 rounded-lg border border-white/20" />
                            {copiedColor === color && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg animate-fade-in">
                                <span className="text-[10px] text-white">Скопировано!</span>
                              </div>
                            )}
                          </button>
                        ))}
                        {/* <a 
                        href="/fursona"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500/20 to-emerald-500/20 hover:from-violet-500/30 hover:to-emerald-500/30 text-white/90 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm">Подробнее</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a> */}
                      </div>
                      
                    </div>

                    {/* Социальные сети */}
                    <div className="flex flex-wrap gap-2">
                      {fursonaConfig.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white/90 text-sm transition-all duration-300"
                        >
                          <Image
                            src={social.icon}
                            width={16}
                            height={16}
                            alt={social.platform}
                            className="opacity-70 group-hover:opacity-100"
                          />
                          <span>{social.platform}</span>
                        </a>
                      ))}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Футер */}
      <footer className="relative mt-auto py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-sm text-blue-200/50 text-center">
            © 2025 Or1GG1n • Сделано с любовью 
          </div>
        </div>
      </footer>
    </div>
  );
}

// Компонент Badge для фурсоны
function Badge({ children }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm bg-zinc-700/50 text-zinc-200 border border-zinc-600 transition-all hover:scale-105 montserrat-regular">
      {children}
    </span>
  );
}