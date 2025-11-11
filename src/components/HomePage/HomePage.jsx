import React from 'react'
// 1. Import Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// Nhận thêm prop 'name' và 'description' để nội dung chữ cũng thay đổi động
const HomePage = ({
  mainBackgroundURL,
  subBackgroundURL,
  foodURL,
  backgroundColor = "#FFFFFF",
  textColor = "#000",
  name = "MUTTON STEAK",
  description = "This is our mutton steak animation. This is our mutton steak animation.",
}) => {

  // Cấu hình chung cho hiệu ứng chuyển cảnh mượt mà
  const transitionSpec = { duration: 0.8, ease: "easeInOut" };

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      animate={{ backgroundColor }} // Animate màu nền mỗi khi prop đổi
      transition={{ duration: 0.3, ease: "easeInOut" }} // 0.3s mượt
    >

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
          transition={transitionSpec }
        />
      </AnimatePresence>

      {/* --- 3. ẢNH THỨC ĂN (Góc dưới phải) --- */}
      <AnimatePresence mode='wait'> {/* Giữ mode='wait' để đảm bảo thứ tự */}
        <motion.img
          key={foodURL}
          src={foodURL}
          alt="Food"
          className="absolute bottom-[5%] right-[25%] h-[500px] object-contain z-20"
          // HIỆU ỨNG MỚI: Di chuyển cong và xoay 90 độ
          // 1. Initial: Bắt đầu từ trên cao, lệch sang một bên, xoay -90 độ và vô hình
          initial={{
            opacity: 0,
            y: -200,    // Bắt đầu từ trên cao
            x: 200,     // Hơi lệch sang phải một chút để tạo đường cong
          }}
          // 2. Animate: Rơi xuống vị trí chuẩn, về giữa, xoay 0 độ và hiện rõ
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          // 3. Exit: Di chuyển xuống dưới, lệch sang bên kia, xoay 90 độ và mờ dần
          exit={{
            opacity: 0,
            y: 200,     // Rơi xuống dưới
            x: -100,    // Lệch sang trái để tạo đường cong thoát
          }}
          // Cấu hình chuyển động:
          // type: 'spring' vẫn là lựa chọn tốt cho cảm giác rơi tự nhiên
          // Các giá trị stiffness, damping có thể điều chỉnh để đạt hiệu ứng mong muốn
          transition={{
            type: "tween",       // đổi từ spring sang tween
            duration: 0.3,       // tốc độ di chuyển
            ease: "easeInOut",   // easing mượt
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
             <div
                className="text-[40px] font-extrabold leading-none mb-6 uppercase"
                style={{ color: textColor }}
              >
                {name}
              </div>
              <div
                className="text-[12px] w-[400px] leading-relaxed"
                style={{ color: textColor }}
              >
            {description}
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default HomePage