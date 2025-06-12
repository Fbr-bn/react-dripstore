function ResumoPedido({ quantity, price = 219 }) {
  const total = price * quantity;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-80 min-h-[250px]">
      <h3 className="text-lg font-bold mb-3">Resumo</h3>
      <div className="flex justify-between mb-2 text-sm">
        <span>Subtotal</span>
        <span>R$ {total},00</span>
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
        <span className="text-[#C92071]">R$ {total},00</span>
      </div>
      <p className="mt-2 text-xs text-gray-500 text-right">
        ou 10x de R$ {(total / 10).toFixed(2)} sem juros
      </p>
      <button className="bg-[#F6AA1C] text-white px-4 py-2 mt-3 rounded-md hover:bg-[#d89617] w-full text-sm">
        Continuar
      </button>
    </div>
  );
}
export default ResumoPedido;
