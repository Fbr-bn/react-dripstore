function CupomFrete({ coupon, setCoupon, zipCode, setZipCode }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <h3 className="text-xs font-semibold mb-1">Cupom de Desconto</h3>
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Insira seu código"
            className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button className="w-12 h-12 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071]">
            OK
          </button>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xs font-semibold mb-1">Calcular Frete</h3>
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Insira seu CEP"
            className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button className="w-12 h-12 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071]">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default CupomFrete;
