import Image from "next/image";
import InvisibleButtonPanel from "./ui-components/InvisibleButtonPanel";

const urlbuttons = [
  { name: "Telegram", description: "Телеграм канал", logo: "/1sg9t0nv.png", url: 'https://t.me/jsonnews' },
  { name: "Twitch", description: "Твич канал со стримами", logo: "/k2jfmqmt.png", url: 'https://www.twitch.tv/or1ggin' },
  { name: "Донат/Поддержка", description: "Нижний текст", logo: "/pjctn7n7.png", url: 'https://ggbio.carrd.co/#donate' },
  { name: "Steam", description: "Тут у меня игры", logo: "/t63qgyoi.png", url: 'https://steamcommunity.com/id/or1gg1n/' },
  { name: "Soundcloud", description: "Не музыкант, но что то пытаюсь делать", logo: "/kbwwa7v4.png", url: 'https://soundcloud.com/or1gg1n' },
  { name: "Spotify", description: "Музыкальный вкус «Говно» ", logo: "/snbfip4j.png", url: 'https://open.spotify.com/user/fmb77xyr35srksw8u12bfohdz?si=540669b56a5e49bd' },
  { name: "Мой Whislist", description: "Список желаний", logo: "/jibtd2bu.png", url: 'https://mywishlist.online/w/vx2kmb/or1gg1ns-wishlist' },
 


]

export default function Home() {
  return (

 
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto lg:p-0 p-3">
      
         <head>
      <title>OR1GG1n Bio • Links</title>
    </head>
      <header className="border-zinc-900 backdrop-blur-xs border-[2px] p-6 rounded-2xl flex gap-6 lg:mt-24">
        <div className="grid-cols-2">
<div className="flex items-center gap-6 text-white">
<Image
          src="/avatar.jpg"
          width={500}
          height={500}
          loading="lazy"
          alt="Avatar"
          className="rounded-xl h-24 w-24"
        />
        <div>
          <div className="text-2xl font-bold">Or1GG1n</div>
          <div className="">
            Frontend dev, streamer
           
            
          </div>
        </div>
</div>
 <a className="text-1xl font-thin text-zinc-600"></a>
        </div>
      </header>

      <section className="mt-3">
        <popoverd></popoverd>
        <div className="grid gap-6 md:grid-cols-5 grid-cols-2">
          {urlbuttons.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden  bg-zinc-800 border-[2px] border-zinc-800 hover:border-gray-800 hover:bg-gray-900 duration-300 ease-in-out rounded-[16px] h-48 p-4 relative flex flex-col justify-center text-left"
            >
              <a href={item.url} className="w-full h-full">
                <div className="p-3 rounded-xl inline-flex items-center justify-center transition bg-gray-700 duration-300 group-hover:bg-gray-500 group-hover:scale-110">
                  <Image
                    src={item.logo}
                    width={25}
                    height={25}
                    loading="lazy"
                    alt="Avatar"
                    className="text-2xl transition duration-300 group-hover:rotate-6"
                  />
                </div>
               
                <div className="mt-5 z-10">
                  
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

