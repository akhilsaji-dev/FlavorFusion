import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-r from-orange-50 to-yellow-50 flex items-center">
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Discover Delicious <span className="text-orange-500">Recipes</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Explore thousands of recipes from around the world. 
            Cook like a chef with easy step-by-step instructions.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Browse Recipes
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
              Watch Video
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="food"
            className="rounded-2xl shadow-xl w-[450px]"
          />
        </motion.div>

      </div>

    </section>
  );
}