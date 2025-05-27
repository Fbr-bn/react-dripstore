import React from "react";
import swissK8 from "../assets/swissK8.png"; 

export default function RelatedProducts() {
  const related = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
      hasDiscount: true,
    },
    {
      id: 2,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
      hasDiscount: true,
    },
    {
      id: 3,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
      hasDiscount: false,
    },
    {
      id: 4,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
      hasDiscount: false,
    },
  ];

  return (
    <div className="mt-6 px-6 pb-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#474747]">
          Produtos Relacionados
        </h2>
        <a href="#" className="text-[#C92071] hover:underline">
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map(({ id, name, oldPrice, newPrice, hasDiscount }) => (
          <div
            key={id}
            className="hover:bg-gray-600 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="bg-white p-1 relative">
              {hasDiscount && (
                <span className="absolute top-2 left-2 bg-[#E7FF86] text-xs font-semibold px-4 rounded-full">
                  30% OFF
                </span>
              )}
              <img src={swissK8} alt="Tênis" className="mx-auto" />
            </div>

            <div className="bg-[#F9F8FE] p-2">
              <p className="text-gray-400 text-xs">Tênis</p>
              <div className="text-sm font-semibold max-[375px]:truncate max-[375px]:overflow-hidden max-[375px]:whitespace-nowrap">
                {name}
              </div>
              <div className="text-sm">
                <span className="line-through text-gray-400 mr-2">
                  ${oldPrice}
                </span>
                <span className="text-black font-bold">${newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
