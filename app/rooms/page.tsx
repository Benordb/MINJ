import Image from "next/image";

export default function Rooms() {
  return (
    <div>
      <div className="relative h-[35vh] min-h-72 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/lobby.png"
            alt="Hotel Lobby"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-radial from-transparent to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex flex-col items-center justify-center">
          <h1 className="flex items-center gap-4 text-5xl lg:text-7xl font-serif font-light leading-tight">
            <span className="text-white">Rooms</span>

            <span className="text-3xl lg:text-4xl text-white/40">&</span>

            <span className="bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Suites
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed text-center">
            Choose from our selection of beautifully appointed rooms and suites,
            each designed to provide the ultimate in comfort and luxury.
          </p>
        </div>
      </div>

      <div>sfhw</div>
    </div>
  );
}
