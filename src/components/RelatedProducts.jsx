import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiTenis from "../components/ContainerCardsTenis";

const RelatedProducts = () => {
  const [produtos, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setRelatedProducts(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

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

      <ApiTenis produtos={produtos} />
    </div>
  );
};

export default RelatedProducts;
