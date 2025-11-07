import { useState } from 'react'
import HomePage from './components/HomePage/HomePage.jsx'
// Không cần import { motion, AnimatePresence } từ đây nữa

function App() {
  const foods = [
    {
      mainBackgroundURL: '/blue-main.svg',
      subBackgroundURL: '/blue-se.svg',
      foodURL: '/food/hutieu.png',
      name: 'Hủ tiếu'
    },
    {
      mainBackgroundURL: '/red-main.svg',
      subBackgroundURL: '/red-se.svg',
      foodURL: '/food/banhcanh.png',
      name: 'Mutton steak'
    },
    {
      mainBackgroundURL: '/green-main.svg',
      subBackgroundURL: '/green-se.svg',
      foodURL: '/food/pho.png',
      name: 'Phở bò'
    },
    {
      mainBackgroundURL: '/yellow-main.svg',
      subBackgroundURL: '/yellow-se.svg',
      foodURL: '/food/bunrieu.png',
      name: 'Bánh mì'
    }
  ]

  const [selectedFood, setSelectedFood] = useState(foods[0])

  return (
    <div className='relative min-h-screen'>
      {/* HomePage giờ tự xử lý animation bên trong */}
      <HomePage
        mainBackgroundURL={selectedFood.mainBackgroundURL}
        subBackgroundURL={selectedFood.subBackgroundURL}
        foodURL={selectedFood.foodURL}
      />

      {/* Thanh chọn ảnh nhỏ */}
      <div className="flex justify-center gap-4 mt-6 absolute bottom-[50px] left-1/2 -translate-x-1/2 z-30"> {/* Tăng z-index nếu cần */}
        {foods.map((food, index) => (
          <img
            key={index}
            src={food.foodURL}
            alt={food.name}
            onClick={() => setSelectedFood(food)}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all duration-300 hover:scale-110
              ${selectedFood.name === food.name ? 'ring-2 ring-white scale-110' : 'opacity-70'}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default App