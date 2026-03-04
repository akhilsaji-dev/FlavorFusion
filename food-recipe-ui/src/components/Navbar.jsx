import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
          <FaUtensils />
          FlavorFusion
        </div>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Recipes</li>
          <li className="hover:text-orange-500 cursor-pointer">Trending</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          Explore Recipes
        </button>

      </div>
    </motion.nav>
  );
}