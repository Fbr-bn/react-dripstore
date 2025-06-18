import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiTenis from "./ContainerCardsTenis";

const ListProducts = ({ selectedBrands, selectedCategories }) => {
  const [produtos, setListProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/produtos") // ajuste para o endpoint do seu servidor local
      .then((response) => {
        setListProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  // Filtro por marca e categoria
  const filteredProducts = produtos.filter((produto) => {
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(produto.marca);
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(
        produto.categoria?.nome || produto.categoria
      );
    return matchBrand && matchCategory;
  });

  return (
    <div className="max-w-72xl mx-auto">
      {/* Cabeçalho e ordenação */}

      <ApiTenis produtos={filteredProducts} />
    </div>
  );
};

export default ListProducts;
