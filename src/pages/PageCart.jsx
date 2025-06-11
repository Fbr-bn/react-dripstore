import React, { useEffect, useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ResumoPedido from "../components/ResumoPedido";
import CupomFrete from "../components/CupomFrete";
import axios from "axios";
import RelatedProducts from "../components/RelatedProducts";
import QuantidadeItens from "../components/QuantidadeItens";

export default function PageCart() {
  const [cartpage, setCartPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5173/page-cart")
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data.slice(0, 4)
          : [];
        setCartPage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar dados do carrinho:", error);
        setError("Falha ao carregar produtos do carrinho");
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-[160px] sm:pt-8 pb-10">
      <LayoutWrapper>
        <div className="container mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
            {/* Card Meu Carrinho */}
            <div className="bg-white rounded-lg p-4 flex-1 min-h-[300px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Meu Carrinho</h2>
                <div className="hidden sm:flex text-center text-gray-600 text-xs uppercase gap-4">
                  <p className="w-20">QUANTIDADE</p>
                  <p className="w-20">UNITÁRIO</p>
                  <p className="w-20">TOTAL</p>
                </div>
              </div>
              <hr className="border-gray-300 my-2" />
              <div className="space-y-4">
                {/* Produto estático como exemplo */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    alt="Tênis Nike Revolution 6 Next Nature Masculino"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                    src="https://via.placeholder.com/80"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      Tênis Nike Revolution 6
                    </p>
                    <p className="font-medium text-sm">Next Nature Masculino</p>
                    <p className="text-xs text-gray-1">
                      Cor: Vermelho / Branco
                    </p>
                    <p className="text-xs text-gray-500">Tamanho: 42</p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row justify-between sm:justify-center items-center gap-4 mt-2 sm:mt-0">
                      {/* Quantidade */}
                      <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                        <QuantidadeItens
                          quantity={quantity}
                          setQuantity={setQuantity}
                        />
                        <a
                          href="#"
                          className="text-xs text-blue-500 mt-1 hover:underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          Remover
                        </a>
                      </div>
                      {/* Unitário */}
                      <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                        <p className="text-xs uppercase text-gray-600 sm:hidden">
                          UNITÁRIO
                        </p>
                        <span className="text-xs line-through text-gray-400">
                          R$ 299,00
                        </span>
                        <span className="text-sm text-[#C92071] font-medium">
                          R$ 219,00
                        </span>
                      </div>
                      {/* Total */}
                      <div className="flex flex-col items-center w-full sm:w-20 gap-1">
                        <p className="text-xs uppercase text-gray-600 sm:hidden">
                          TOTAL
                        </p>
                        <span className="text-xs line-through text-gray-400">
                          R$ 299,00
                        </span>
                        <span className="text-sm font-medium text-[#C92071]">
                          R$ {219 * quantity},00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300 my-2" />
                <QuantidadeItens
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <CupomFrete
                  coupon={coupon}
                  setCoupon={setCoupon}
                  zipCode={zipCode}
                  setZipCode={setZipCode}
                />
              </div>
            </div>
            {/* Card Resumo */}
            <ResumoPedido />
          </div>
          {/* Produtos Relacionados */}
          <div className="mt-6 max-w-7xl mx-auto">
            <RelatedProducts />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
