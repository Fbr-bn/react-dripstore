import React from "react";

const brands = ["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"];
const categories = ["esporte", "casual", "corrida", "infantil", "chinela"];

const SidebarFilters = ({
  isOpen,
  onClose,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const filterContent = (
    <>
      <h3 className="text-xl font-bold text-gray-700 pb-5 mb-4 border-b border-gray-300">
        Filtrar por
      </h3>

      {/* Marca */}
      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Marca</h4>
        <ul className="space-y-1 text-sm">
          {brands.map((brand) => (
            <li key={brand}>
              <input
                type="checkbox"
                className="scale-125 mr-1 cursor-pointer accent-[#C92071]"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Categoria */}
      <div className="mb-4">
        <h4 className="text-sm font-bold mb-2">Categoria</h4>
        <ul className="space-y-1 text-sm">
          {categories.map((cat) => (
            <li key={cat}>
              <input
                type="checkbox"
                className="scale-125 mr-1 cursor-pointer accent-[#C92071]"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Gênero */}
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

      {/* Estado */}
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
              <div className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-pink-600 peer-checked:ring-2 peer-checked:ring-pink-300 transition" />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Overlay SÓ NO RESTANTE DA TELA */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          style={{ left: "300px" }} // aplica a sombra só depois do sidebar de 300px
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-23 left-0 h-full w-[300px] bg-white p-4 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-700 text-xl"
        >
          &#10005;
        </button>
        {filterContent}
      </div>

      {/* Desktop Sidebar */}
      <aside className="w-[308px] h-fit bg-white p-4 rounded hidden md:block shrink-0">
        {filterContent}
      </aside>
    </>
  );
};

export default SidebarFilters;
