import React from 'react'
// 1. Import Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// Nhận thêm prop 'name' và 'description' để nội dung chữ cũng thay đổi động
const HomePage = ({
  mainBackgroundURL,
  subBackgroundURL,
  foodURL,
  name = "MUTTON STEAK",
  description = "This is our mutton steak animation. This is our mutton steak animation."
}) => {

  // Cấu hình chung cho hiệu ứng chuyển cảnh mượt mà
  const transitionSpec = { duration: 0.5, ease: "easeInOut" };

  return (
    <div className="relative w-screen h-screen bg-green-100 overflow-hidden">

      {/* --- 1. ẢNH NỀN CHÍNH (Góc trên trái) --- */}
      <AnimatePresence>
        <motion.img
          key={mainBackgroundURL} // Key thay đổi -> kích hoạt hiệu ứng
          src={mainBackgroundURL}
          alt="Main background"
          className="absolute top-[-50%] left-[-20%] h-[180%] object-contain z-0"
          // Hiệu ứng fade
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionSpec}
        />
      </AnimatePresence>

      {/* --- 2. ẢNH NỀN PHỤ (Góc dưới phải) --- */}
      <AnimatePresence>
        <motion.img
          key={subBackgroundURL}
          src={subBackgroundURL}
          alt="Sub background"
          className="absolute bottom-[-80%] right-[-15%] h-[150%] object-contain z-10"
          // Hiệu ứng fade, có thể thêm delay nhẹ nếu muốn nó xuất hiện sau nền chính một chút
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transitionSpec, delay: 0.1 }}
        />
      </AnimatePresence>

      {/* --- 3. ẢNH THỨC ĂN (Góc dưới phải) --- */}
      <AnimatePresence mode='wait'> {/* Giữ mode='wait' để đảm bảo thứ tự */}
        <motion.img
          key={foodURL}
          src={foodURL}
          alt="Food"
          className="absolute bottom-[5%] right-[20%] h-[500px] object-contain z-20"
          // HIỆU ỨNG MỚI: Di chuyển cong và xoay 90 độ
          // 1. Initial: Bắt đầu từ trên cao, lệch sang một bên, xoay -90 độ và vô hình
          initial={{
            opacity: 0,
            y: -200,    // Bắt đầu từ trên cao
            x: 100,     // Hơi lệch sang phải một chút để tạo đường cong
            rotate: -90 // Xoay ngược chiều kim đồng hồ 90 độ
          }}
          // 2. Animate: Rơi xuống vị trí chuẩn, về giữa, xoay 0 độ và hiện rõ
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0
          }}
          // 3. Exit: Di chuyển xuống dưới, lệch sang bên kia, xoay 90 độ và mờ dần
          exit={{
            opacity: 0,
            y: 200,     // Rơi xuống dưới
            x: -100,    // Lệch sang trái để tạo đường cong thoát
            rotate: 90  // Xoay thuận chiều kim đồng hồ 90 độ
          }}
          // Cấu hình chuyển động:
          // type: 'spring' vẫn là lựa chọn tốt cho cảm giác rơi tự nhiên
          // Các giá trị stiffness, damping có thể điều chỉnh để đạt hiệu ứng mong muốn
          transition={{
            type: "spring",
            stiffness: 200, // Độ cứng lò xo
            damping: 20,    // Giảm xóc
            mass: 1,        // Khối lượng
            delay: 0.1      // Có thể thêm delay nhẹ để ảnh nền chuyển trước
          }}
        />
      </AnimatePresence>

      {/* --- 4. NỘI DUNG TEXT --- */}
      <div className="absolute top-[30%] left-[5%] transform w-[60%] z-30">
        {/* Dùng mode='wait' cho chữ để chữ cũ biến mất hẳn rồi chữ mới mới hiện, trông gọn gàng hơn */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={name} // Dựa vào tên món ăn để đổi hiệu ứng
            initial={{ opacity: 0, y: 20 }} // Trượt từ dưới lên
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}   // Trượt lên trên khi biến mất
            transition={{ duration: 0.3 }}
          >
            <div className="text-[40px] font-extrabold text-black leading-none mb-6 uppercase">
              {name}
            </div>
            <div className="text-gray-800 text-[12px] w-[400px] leading-relaxed">
              {description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HomePage