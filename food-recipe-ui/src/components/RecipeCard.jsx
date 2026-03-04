import { motion } from "framer-motion";

export default function RecipeCard({ recipe }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{recipe.name}</h3>
        <p className="text-gray-500 text-sm mt-2">{recipe.time}</p>
      </div>
    </motion.div>
  );
}