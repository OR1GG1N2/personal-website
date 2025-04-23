import Image from "next/image";
import InvisibleButtonPanel from "./ui-components/InvisibleButtonPanel";

const urlbuttons = [
  { name: "Telegram", description: "Телеграм канал", logo: "/1sg9t0nv.png", url: 'https://t.me/jsonnews' },
  { name: "Twitch", description: "Твич канал со стримами", logo: "/k2jfmqmt.png", url: 'https://www.twitch.tv/or1ggin' },
  { name: "Донат/Поддержка", description: "Нижний текст", logo: "/pjctn7n7.png", url: 'https://ggbio.carrd.co/#donate' },
  { name: "Steam", description: "Тут у меня игры", logo: "/t63qgyoi.png", url: 'https://steamcommunity.com/id/or1gg1n/' },
  { name: "Soundcloud", description: "Не музыкант, но что то пытаюсь делать", logo: "/kbwwa7v4.png", url: 'https://soundcloud.com/or1gg1n' },
  { name: "Spotify", description: "Музыкальный вкус «Говно» ", logo: "/snbfip4j.png", url: 'https://open.spotify.com/user/fmb77xyr35srksw8u12bfohdz?si=540669b56a5e49bd' },
  // { name: "Spotify", description: "Нижний текст", logo: "🤳", url: '' },
  // { name: "Мои проекты", description: "Нижний текст", logo: "🤳", url: '' },
  // { name: "Мои проекты", description: "Нижний текст", logo: "🤳", url: '' },
  // { name: "Мои проекты", description: "Нижний текст", logo: "🤳", url: '' },


]

export default function Home() {
  return (

 
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto lg:p-0 p-3">
      
         <head>
      <title>OR1GG1n Bio • Links</title>
    </head>
    
      <header className="border-zinc-800 backdrop-blur-xs border-2 p-6 rounded-2xl flex gap-6 mt-6 lg:mt-24">
        <Image
          src="/avatar.jpg"
          width={500}
          height={500}
          loading="lazy"
          alt="Avatar"
          className="rounded-4xl h-24 w-24"
        />
        <div>
          <div className="text-2xl font-bold">Or1GG1n</div>
          <div className="text-1xl font-thin text-zinc-600">
            Frontend dev, streamer
            <a className="text-amber-500 opacity-50"></a>
            
          </div>
        </div>
      </header>

      <section className="mt-3">
        <popoverd></popoverd>
        <div className="grid gap-6 md:grid-cols-5 grid-cols-2">
          {urlbuttons.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-800 border-3 border-zinc-700 hover:border-yellow-700 hover:bg-yellow-500 duration-300 ease-in-out rounded-xl h-48 p-4 relative flex flex-col justify-center text-left"
            >
              <a href={item.url} className="w-full h-full">
                <div className="p-3 rounded-xl inline-flex items-center justify-center transition bg-zinc-700 duration-300 group-hover:bg-yellow-200 group-hover:scale-110">
                  <Image
                    src={item.logo}
                    width={25}
                    height={25}
                    loading="lazy"
                    alt="Avatar"
                    className="text-2xl transition duration-300 group-hover:rotate-6"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-white text-lg font-semibold">{item.name}</h2>
                  <div className="text-white text-sm mt-2">{item.description}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-auto text-center py-4 text-zinc-500">
        <div>© 2025 Or1GG1n</div>
        {/* <InvisibleButtonPanel /> */}

      </footer>
    </div>
  );
}

