import QuantidadeItens from "./QuantidadeItens";

function CartItem({ product, quantity, setQuantity }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <img
        alt={product.name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
        src={product.image || "https://via.placeholder.com/80"}
      />
      <div className="flex-1">
        <p className="font-medium text-sm">{product.name}</p>
        <p className="text-xs text-gray-1">Cor: {product.color}</p>
        <p className="text-xs text-gray-500">Tamanho: {product.size}</p>
      </div>
      <div className="w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-center items-center gap-4 mt-2 sm:mt-0">
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <QuantidadeItens quantity={quantity} setQuantity={setQuantity} />
            <a href="#" className="text-xs text-blue-500 mt-1 hover:underline">
              Remover
            </a>
          </div>
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <span className="text-xs line-through text-gray-400">
              R$ {product.originalPrice}
            </span>
            <span className="text-sm text-[#C92071] font-medium">
              R$ {product.discountPrice}
            </span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <span className="text-xs line-through text-gray-400">
              R$ {product.originalPrice}
            </span>
            <span className="text-sm font-medium text-[#C92071]">
              R$ {product.discountPrice * quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
