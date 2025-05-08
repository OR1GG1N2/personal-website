'use client'


export default function Fursona() {
  return (
<div className="flex flex-col min-h-screen max-w-7xl mx-auto lg:p-0 p-3 ">
    <section className="grid grid-cols-2 gap-6 p-6 min-h-screen w-full">
        
    
         <div className="relative bg-[url('/origgin.jpg')] bg-cover rounded-[26px] group  border-zinc-700 border-[2px] bg-gray-800 overflow-hidden">
        <div className="bg-gray-700/70 h-full hover:bg-gray-800/90 ease-in-out transition"/>
        {/* <div className="bg-emerald-600/50 blur-2xl h-28 w-full"/> */}
        <div class="absolute mx-auto bottom-[-50px] w-full h-[120px] group-hover:bg-[#2D5E30]/50 blur-[50px] rounded-[100%]"></div>
        <div class="absolute top-[-30px] right-[-50px] w-full h-[120px]  group-hover:bg-green-600/50 blur-[50px] rounded-[100%]"></div>
        

        </div>
        <div className="relative bg-[url('/origgin.jpg')] bg-cover rounded-[26px] group  border-zinc-700 border-[2px] bg-gray-800 overflow-hidden">
        <div className="bg-gray-700/70 h-full hover:bg-gray-800/90 ease-in-out transition"/>
        {/* <div className="bg-emerald-600/50 blur-2xl h-28 w-full"/> */}
        <div class="absolute mx-auto bottom-[-50px] w-full h-[120px] group-hover:bg-[#2D5E30]/50 blur-[50px] rounded-[100%]"></div>
        <div class="absolute top-[-30px] right-[-50px] w-full h-[120px]  group-hover:bg-green-600/50 blur-[50px] rounded-[100%]"></div>
        

        </div>

       
    </section>
</div>
  )
}