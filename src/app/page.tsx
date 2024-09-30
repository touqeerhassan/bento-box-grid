export default function Home() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 h-screen min-h-[500px] sm:overflow-y-auto border border-black">
        <div className="bg-red-400 md:row-span-2 md:col-span-2 m-1"></div>
        <div className="bg-cyan-400 md:col-span-2 m-1"></div>
        <div className="bg-pink-400 m-1"></div>
        <div className="bg-yellow-300 md:row-span-2 m-1"></div>
        <div className="bg-teal-300 md:col-span-3 m-1"></div>
      </div>
    </div>
  );
}
