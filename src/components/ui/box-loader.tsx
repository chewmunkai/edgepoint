import type React from "react"

const BoxLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute w-1/2 h-1/2 animate-[box1_1s_ease-in-out_infinite]">
          <div className="w-full h-full rounded-[15%] bg-neon" />
        </div>
        <div className="absolute w-1/2 h-1/2 animate-[box2_1s_ease-in-out_infinite]">
          <div className="w-full h-full rounded-[15%] bg-neon opacity-75" />
        </div>
        <div className="absolute w-1/2 h-1/2 animate-[box3_1s_ease-in-out_infinite]">
          <div className="w-full h-full rounded-[15%] bg-neon opacity-50" />
        </div>
        <div className="absolute w-1/2 h-1/2 animate-[box4_1s_ease-in-out_infinite]">
          <div className="w-full h-full rounded-[15%] bg-neon opacity-25" />
        </div>
      </div>
    </div>
  )
}

export default BoxLoader
