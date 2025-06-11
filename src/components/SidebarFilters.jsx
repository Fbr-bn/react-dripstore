import React from "react";

const SidebarFilters = () => {
  return (
    <aside className="w-[308px] h-fit bg-white p-4 rounded hidden md:block shrink-0">
      <h3 className="text-xl font-bold text-gray-700 pb-5 mb-4 border-b border-gray-300">
        Filtrar por
      </h3>

      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Marca</h4>
        <ul className="space-y-1 text-sm">
          {["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"].map((brand) => (
            <li key={brand}>
              <input
                type="checkbox"
                className="scale-125 mr-1 cursor-pointer accent-[#C92071]"
              />
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Categoria</h4>
        <ul className="space-y-1 text-sm">
          {[
            { name: "Esporte e lazer", checked: false },
            { name: "Casual", checked: false },
            { name: "Utilitário", checked: false },
            { name: "Corrida", checked: false },
          ].map(({ name, checked }) => (
            <li key={name}>
              <input
                type="checkbox"
                defaultChecked={checked}
                className="scale-125 mr-1 cursor-pointer accent-[#C92071]"
              />
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Gênero</h4>
        <ul className="space-y-1 text-sm">
          {["Masculino", "Feminino", "Unissex"].map((g) => (
            <li key={g}>
              <input
                type="checkbox"
                className="scale-125 mr-1 cursor-pointer accent-[#C92071]"
              />
              {g}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Estado</h4>
        <div className="flex flex-col gap-2 text-sm">
          {["novo", "usado"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="estado"
                value={option}
                className="hidden peer"
              />
              <div className="w-3 h-3 rounded-full border-2 border-white-400 peer-checked:bg-pink-600 peer-checked:ring-2 peer-checked:ring-pink-300 transition" />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilters;
