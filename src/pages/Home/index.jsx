import React from "react";
// import {iconArrowLeft} from "./components/Button"
// import { GreenLeft, GreenRight } from "./components/Icons";
// import Categories from "./pages/Home/components/CategoryMenu";
import BestSellingProduct from "./components/BestProduct";
import Farmer from "./components/BestFamer";
import { SectionCategory } from "./components/SectionCategory";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <SectionCategory />
      <BestSellingProduct />
      <Farmer />
      <Slider />
    </div>
  );
}
