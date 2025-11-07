import React from 'react'

const HomePage = ({ mainBackgroundURL, subBackgroundURL , foodURL}) => {
  return (
    <div className="relative w-screen h-screen bg-green-100 overflow-hidden">
      {/* Ảnh chính - góc trên trái */}
      <img
        src={mainBackgroundURL}
        alt="Main background"
        className="absolute top-[-50%] left-[-20%] h-[180%] object-contain"
      />

      {/* Ảnh phụ - góc dưới phải */}
      <img
        src={subBackgroundURL}
        alt="Sub background"
        className="absolute bottom-[-80%] right-[-15%] h-[150%] object-contain"
      />

      {/* Ảnh thức ăn - góc dưới phải */}
      <img
        src={foodURL}
        alt="Food"
        className="absolute bottom-[5%] right-[20%] h-[500px] object-contain"
      />

      {/* Nội dung text */}
      <div className="absolute top-[30%] left-[5%] transform w-[60%]">
        <div className="text-[40px] font-extrabold text-black leading-none mb-6">
          MUTTON STEAK
        </div>
        <div className="text-gray-800 text-[12px] w-[400px] leading-relaxed">
          This is our mutton steak animation. This is our mutton steak animation.
          This is our mutton steak animation. This is our mutton steak animation.
          This is our mutton steak animation. This is our mutton steak animation.
          This is our mutton steak animation. This is our mutton steak animation.
        </div>
      </div>
    </div>
  )
}

export default HomePage
