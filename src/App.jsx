import { useState } from 'react'
import HomePage from './components/HomePage/HomePage.jsx'

function App() {
  // Mảng dữ liệu cho từng món
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

  // State: món ăn đang chọn
  const [selectedFood, setSelectedFood] = useState(foods[0])

  return (
    <div className='relative'>
      {/* Trang chính hiển thị ảnh lớn */}
      <HomePage
        mainBackgroundURL={selectedFood.mainBackgroundURL}
        subBackgroundURL={selectedFood.subBackgroundURL}
        foodURL={selectedFood.foodURL}
      />

      {/* Thanh chọn ảnh nhỏ */}
      <div className="flex justify-center gap-4 mt-6 absolute bottom-[200px] left-[100px]">
        {foods.map((food, index) => (
          <img
            key={index}
            src={food.foodURL}
            alt={food.name}
            onClick={() => setSelectedFood(food)}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-110`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
