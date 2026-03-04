import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";
import { motion } from "framer-motion";

export default function RecipeGrid() {
  return (
    <section className="py-16 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Recipes
      </h2>

      <div className="container mx-auto grid md:grid-cols-4 gap-8">

        {recipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RecipeCard recipe={recipe} />
          </motion.div>
        ))}

      </div>

    </section>
  );
}