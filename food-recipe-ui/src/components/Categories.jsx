import { motion } from "framer-motion";
import { FaCoffee, FaHamburger, FaIceCream, FaPizzaSlice } from "react-icons/fa";

const categories = [
  { name: "Breakfast", icon: <FaCoffee /> },
  { name: "Lunch", icon: <FaHamburger /> },
  { name: "Dinner", icon: <FaPizzaSlice /> },
  { name: "Desserts", icon: <FaIceCream /> },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Recipe Categories</h2>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-orange-50 p-8 rounded-xl shadow-lg text-center cursor-pointer"
          >
            <div className="text-4xl text-orange-500 mb-4">{cat.icon}</div>
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}