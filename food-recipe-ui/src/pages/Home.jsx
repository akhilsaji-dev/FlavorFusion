import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "./components/Categories";
import RecipeGrid from "../components/RecipeGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <RecipeGrid />
    </>
  );
}