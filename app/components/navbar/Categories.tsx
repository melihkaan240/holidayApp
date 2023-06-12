"use client";

import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    name: "TatilKoyu",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Kamp",
    icon: LuHotel,
  },
  {
    name: "Otel",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Villa",
    icon: LuHotel,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const urlItem= params?.get("category")
  console.log(urlItem,"Urlitem");
  
  return <div className="flex items-center gap-16">
    {categories.map((cat,i)=>(
      <CategoriesItem
      key={i}
      name={cat.name}
      icon={cat.icon}
      selected={urlItem==cat.name}
      />
    ))}
  </div>;
};

export default Categories;
