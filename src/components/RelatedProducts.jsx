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
      <RelatedProducts />
      <ApiTenis produtos={produtos} />
    </div>
  );
};

export default RelatedProducts;
