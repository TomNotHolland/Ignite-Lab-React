export function Awaiting () {
  return (
    <div className="flex items-center justify-center bg-gray-700 h-[90vh]">
      <div className="rotate-45 translate-x-[50%] absolute p-4 mb-40">
        <div className="rotate-180 translate-x-[50%]">
          <div className="absolute p-4 border-[2px] border-solid border-[#00875F] animate-spin-slow"></div>
          <div className="absolute p-4 border-[2px] border-solid border-[#00B37E] ml-[2.125rem] animate-spin"></div>
          <div className="absolute p-4 border-[2px] border-solid border-[#81D8F7] mt-[2.125rem] animate-pulse"></div>
        </div>
      </div>
        <p className="text-lg text-white font-light mt-[-7rem] ml-11">Aguarde ...</p>
    </div>
  )
}