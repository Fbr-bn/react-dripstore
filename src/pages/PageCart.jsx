import React, { useEffect, useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import axios from "axios";
import ApiTenis from "../components/ContainerCardsTenis";
import RelatedProducts from "../components/RelatedProducts";
import QuantidadeItens from "../components/QuantidadeItens";
export default function PageCart() {
  const [cartpage, setCartPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [zipCode, setZipCode] = useState("");

  function PageCart() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  }

  function PageCart() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };

    return (
      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="w-8 h-8 flex items-center justify-center text-sm">
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    );
  }

  function ContainerCardsTenis({ cartpage = [] }) {
    if (!cartpage) {
      return <p className="text-sm text-gray-500">Carrinho não disponível</p>;
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(cartpage) && cartpage.length > 0 ? (
          cartpage.map((product) => (
            <div key={product.id}>
              <div className="bg-white p-4 relative rounded-lg shadow-sm">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-lime-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={`Tênis ${product.name}`}
                  className="mx-auto h-32 object-contain"
                />
              </div>
              <div className="bg-[#F9F8FE] p-3">
                <p className="text-gray-400 text-xs">{product.category}</p>
                <p className="text-sm font-semibold truncate">{product.name}</p>
                <div className="text-sm">
                  <span className="line-through text-gray-400">
                    {product.originalPrice}
                  </span>
                  <span className="text-black font-bold">
                    {product.discountPrice}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Sem produtos relacionados</p>
        )}
      </div>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
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

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="pt-6 sm:pt-8 pb-10">
      <LayoutWrapper>
        <div className="container mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
            {/* Card Meu Carrinho */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 min-h-[300px]">
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    alt="Tênis Nike Revolution 6 Next Nature Masculino"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                    src="https://via.placeholder.com/80" // Adicionado placeholder para imagem
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold mb-1">
                      Cupom de Desconto
                    </h3>
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        placeholder="Insira seu código"
                        className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm focus:outline-none"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                      />
                      <button className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200">
                        OK
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold mb-1">
                      Calcular Frete
                    </h3>
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        placeholder="Insira seu CEP"
                        className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm focus:outline-none"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                      <button className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200">
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Resumo */}
            <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-80 min-h-[250px]">
              <h3 className="text-lg font-bold mb-3">Resumo</h3>
              <div className="flex justify-between mb-2 text-sm">
                <span>Subtotal</span>
                <span>R$ {219 * quantity},00</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Frete</span>
                <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Desconto</span>
                <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t pt-2 mb-3">
                <span>Total</span>
                <span className="text-[#C92071]">R$ {219 * quantity},00</span>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-right">
                ou 10x de R$ {((219 * quantity) / 10).toFixed(2)} sem juros
              </p>
              <button className="bg-[#F6AA1C] text-white px-4 py-2 mt-3 rounded-md hover:bg-[#d89617] w-full text-sm">
                Continuar
              </button>
            </div>
          </div>
          {/* Produtos Relacionados */}
          <div className="mt-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">Produtos Relacionados</p>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Ver todos →
              </a>
            </div>
            <ContainerCardsTenis ApiTenis={ApiTenis} />
          </div>
          <RelatedProducts />
        </div>
      </LayoutWrapper>
    </div>
  );
}
